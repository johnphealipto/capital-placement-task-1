import { Select } from "antd";

interface ISelectInput {
  label: string;
  options: { value: string; label: string }[];
}

const SelectInput: React.FC<ISelectInput> = ({ label, options }) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <p className="pb-1">{label}</p>
      <Select
        className="w-full h-11"
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};

export default SelectInput;
