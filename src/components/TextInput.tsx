import { Input } from "antd";

interface ITextInput {
  label: string;
  placeholder: string;
}

const TextInput: React.FC<ITextInput> = ({ label, placeholder }) => {
  return (
    <div>
      <p className="pb-1">{label}</p>
      <Input className="w-full h-11" placeholder={placeholder} />
    </div>
  );
};

export default TextInput;
