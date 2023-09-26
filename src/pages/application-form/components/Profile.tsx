import CheckBox from "@/components/CheckBox";
import { PROFILE } from "../constant";
import SwitchBox from "@/components/SwitchBox";
import RowWrapper from "@/components/wrappers/RowWrapper";

const Profile = () => {
  return (
    <div>
      {PROFILE.map((item, idx) => (
        <RowWrapper
          key={idx}
          isLastRow={idx === PROFILE.length - 1}
        >
          <span className="font-bold">{item.name}</span>
          <div className="flex items-center gap-11">
            <CheckBox label="Mandatory" />
            <SwitchBox label="Hide" for={item.key} />
          </div>
        </RowWrapper>
      ))}
    </div>
  );
};

export default Profile;
