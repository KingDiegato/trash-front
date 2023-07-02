import { NextResponse } from 'next/server';
import Admin from '@/models/admin';
import { connecctDB } from '@/libs/mongodb';
import bcrypt from 'bcryptjs';
import RandomStringGenerator from '@/utils/passGenerator';

const VALID_CHARS = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export async function POST(request: Request) {
  const passwordGenerated = RandomStringGenerator(VALID_CHARS, 6);
  const {
    usuario,
    contraseña = passwordGenerated,
    nCompleto,
    email,
    dni,
    edad,
    telefono
  } = await request.json();
  if (!email && !usuario && !contraseña && !dni && !edad) {
    return NextResponse.json({ message: 'email is required' }, { status: 400 });
  }
  console.log(email);

  try {
    await connecctDB();
    const userFound = await Admin.findOne({ email });

    if (userFound)
      return NextResponse.json(
        { message: 'email already exists' },
        { status: 400 }
      );

    const hashedPassword = await bcrypt.hash(contraseña, 10);

    const employee = new Admin({
      usuario,
      contraseña: hashedPassword,
      nCompleto,
      email,
      dni,
      edad,
      telefono
    });

    const savedUser = await employee.save();
    console.log(savedUser);
    return NextResponse.json(savedUser);
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message
        },
        {
          status: 400
        }
      );
    }
  }
}

export async function GET() {
  await connecctDB();

  const admin = await Admin.find();

  const allPasswords = admin.map((admin) => admin.contraseña);
  console.log(allPasswords);

  return NextResponse.json(admin);
}
