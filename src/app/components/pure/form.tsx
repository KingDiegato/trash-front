interface FormProps {
  type: string;
  placeholder: string;
  name: string;
  helper?: string;
  error: boolean;
}
export const SingleForm: React.FC<FormProps> = ({
  type,
  placeholder,
  name,
  helper = '',
  error = false
}) => {
  return (
    <>
      <input
        className={`h-10 w-full p-2 border-b-2 active:border-0 ${
          error ? 'placeholder:text-red-500' : 'placeholder:text-slate-400'
        } ${error ? 'border-red-500' : 'border-slate-400'}
        focus:outline-none`}
        type={type}
        placeholder={placeholder}
        name={name}
      />
      <span className={error ? 'text-red-500' : 'text-slate-400'}>
        {helper}
      </span>
    </>
  );
};
