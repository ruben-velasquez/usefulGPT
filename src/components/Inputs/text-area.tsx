export default function TextArea({ name, label, placeholder }: TextFieldProps) {
  return (
    <div>
      <span className="text-lg mb-1 text-white">
        {label}
      </span>
      <textarea
        rows={4}
        name={name}
        className="resize-none block px-5 py-4 w-full text-base text-white bg-chatgpt-input rounded-lg focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

type TextFieldProps = {
  name: string;
  label: string;
  placeholder: string;
};
