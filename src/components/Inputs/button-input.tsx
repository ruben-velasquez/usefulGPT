export default function ButtonInput({
  onChange,
  value,
  placeholder,
  children,
}: ButtonInputProps) {
  return (
    <div className="rounded-xl w-full h-14 text-white bg-chatgpt-gray p-4 gap-2 flex justify-center items-center">
      {children || ""}
      <input
        placeholder={placeholder}
        type="password"
        defaultValue={value}
        onChange={onChange}
        className="w-full h-full bg-transparent outline-none text-xs border-b border-transparent transition-all focus:border-b-white"
      />
    </div>
  );
}

type ButtonInputProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  placeholder?: string;
  children?: React.ReactNode;
};
