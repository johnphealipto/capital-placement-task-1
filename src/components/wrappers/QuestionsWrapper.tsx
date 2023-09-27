import { PlusOutlined } from "@ant-design/icons";
import SelectInput from "../SelectInput";
import classNames from "classnames";
import { QUESTION_TYPES } from "@/pages/application-form/constant";
import TextInput from "../TextInput";

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
        <div className="flex flex-col gap-3">
          <SelectInput label="Type" options={QUESTION_TYPES} />
          <TextInput label="Question" placeholder="Type here" />
        </div>
      </div>
      {isAdd ? (
        <div className="flex items-center gap-3 text-sm font-bold mt-4 cursor-pointer">
          <PlusOutlined className="text-xl" />
          <span>Add a question</span>
        </div>
      ) : null}
    </div>
  );
};

export default QuestionsWrapper;
