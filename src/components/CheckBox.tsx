import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

interface ICheckBox {
  label: string;
}

const CheckBox: React.FC<ICheckBox> = ({ label }) => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return <Checkbox onChange={onChange}>{label}</Checkbox>;
};

export default CheckBox;
