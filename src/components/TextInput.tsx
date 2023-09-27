import { Input } from "antd";

interface ITextInput {
  label: string;
  placeholder: string;
  value: any;
  onChange: (value: any) => void;
}

const TextInput: React.FC<ITextInput> = ({
  label,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div>
      <p className="pb-1">{label}</p>
      <Input
        className="w-full h-11"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
