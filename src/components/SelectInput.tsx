import { Select } from "antd";

interface ISelectInput {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

const SelectInput: React.FC<ISelectInput> = ({
  value,
  label,
  options,
  onChange,
}) => {
  return (
    <div>
      <p className="pb-1">{label}</p>
      <Select
        value={value}
        className="w-full h-11"
        onChange={onChange}
        options={options}
      />
    </div>
  );
};

export default SelectInput;
