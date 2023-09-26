import { PlusOutlined } from "@ant-design/icons";
import SelectInput from "../SelectInput";
import classNames from "classnames";

interface IQuestionsWrapper {
  active?: boolean;
  isAdd?: boolean;
}

const QuestionsWrapper: React.FC<IQuestionsWrapper> = ({
  active,
  isAdd = true,
}) => {
  return (
    <div>
      <div
        className={classNames("h-0 overflow-hidden transition-all", {
          "h-fit pt-4": active,
        })}
      >
        <SelectInput />
      </div>
      {isAdd ? (
        <div>
          <PlusOutlined />
          <span>Add a question</span>
        </div>
      ) : null}
    </div>
  );
};

export default QuestionsWrapper;
