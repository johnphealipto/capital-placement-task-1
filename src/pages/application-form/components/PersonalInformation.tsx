import CheckBox from "@/components/CheckBox";
import { PERSONAL_INFO } from "../constant";
import SwitchBox from "@/components/SwitchBox";
import RowWrapper from "@/components/wrappers/RowWrapper";

const PersonalInformation = () => {
  const excludings = ["firstName", "lastName", "emailId"];

  return (
    <div>
      {PERSONAL_INFO.map((item, idx) => (
        <RowWrapper
          key={idx}
          isLastRow={idx === PERSONAL_INFO.length - 1}
        >
          <span className="font-bold">
            {item.name}{" "}
            {item.info ? (
              <span className="text-sm font-normal">({item.info})</span>
            ) : null}
          </span>
          {!excludings.includes(item.key) ? (
            <div className="flex items-center gap-11">
              <CheckBox label="Internal" />
              <SwitchBox label="Hide" for={item.key} />
            </div>
          ) : null}
        </RowWrapper>
      ))}
    </div>
  );
};

export default PersonalInformation;
