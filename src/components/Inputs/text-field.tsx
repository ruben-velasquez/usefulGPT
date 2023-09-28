export default function TextField({
  name,
  label,
  placeholder,
}: TextFieldProps) {
  return (
    <div className="flex flex-col overflow-visible flex-1">
      <span className="text-lg mb-1 text-white">
        {label}
      </span>
      <input
        name={name}
        placeholder={placeholder}
        type="text"
        className="text-white border-none flex w-full rounded-md bg-chatgpt-input px-5 py-4 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  );
}

type TextFieldProps = {
  name: string;
  label: string;
  placeholder: string;
};
