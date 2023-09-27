import CheckBox from "@/components/CheckBox";
import { PROFILE } from "../constant";
import SwitchBox from "@/components/SwitchBox";
import RowWrapper from "@/components/wrappers/RowWrapper";
import QuestionsWrapper from "@/components/wrappers/QuestionsWrapper";

export interface IProfile {
  data: any;
  handleChangeInput: (key: string, input: string, value: boolean) => void;
}

const Profile: React.FC<IProfile> = ({ data, handleChangeInput }) => {
  return (
    <div>
      {PROFILE.map((item, idx) => (
        <RowWrapper key={idx} isLastRow={idx === PROFILE.length - 1}>
          <span className="font-bold">{item.name}</span>
          <div className="flex items-center gap-11">
            <CheckBox
              label="Mandatory"
              checked={data?.[item.key]?.mandatory}
              onChange={(checked) =>
                handleChangeInput(item.key, "mandatory", checked)
              }
            />
            <SwitchBox
              label="Hide"
              id={item.key}
              checked={data?.[item.key]?.show}
              onChange={(checked) =>
                handleChangeInput(item.key, "show", checked)
              }
            />
          </div>
        </RowWrapper>
      ))}
      <QuestionsWrapper />
    </div>
  );
};

export default Profile;
