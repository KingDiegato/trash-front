import { NextResponse } from 'next/server';
import Employee from '@/models/employee';
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
    telefono,
    juego
  } = await request.json();
  if (
    !email &&
    !usuario &&
    !telefono &&
    !dni &&
    !nCompleto &&
    !edad &&
    !juego
  ) {
    return NextResponse.json({ message: 'email is required' }, { status: 400 });
  }
  console.log(email);

  try {
    await connecctDB();
    const userFound = await Employee.findOne({ email });

    if (userFound)
      return NextResponse.json(
        { message: 'email already exists' },
        { status: 400 }
      );

    const hashedPassword = await bcrypt.hash(contraseña, 10);

    const employee = new Employee({
      usuario,
      contraseña: hashedPassword,
      nCompleto,
      email,
      dni,
      edad,
      telefono,
      juego
    });

    const savedUser = await employee.save();
    console.log(savedUser);
    return NextResponse.json(savedUser);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
