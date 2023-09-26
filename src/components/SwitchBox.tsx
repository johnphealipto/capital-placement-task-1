import { Switch } from "antd";

interface ISwitchBox {
  label: string;
  for: string;
}

const SwitchBox: React.FC<ISwitchBox> = ({ label, for: htmlFor }) => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <label htmlFor={htmlFor} className="flex items-center gap-2 cursor-pointer">
      <Switch id={htmlFor} defaultChecked size="small" onChange={onChange} />
      <span className="text-sm">{label}</span>
    </label>
  );
};

export default SwitchBox;
