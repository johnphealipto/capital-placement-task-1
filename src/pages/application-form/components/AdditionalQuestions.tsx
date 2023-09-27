import { EditIcon } from "@/assets/icons";
import classNames from "classnames";
import { useState } from "react";
import QuestionsWrapper from "@/components/wrappers/QuestionsWrapper";

const AdditionalQuestions = ({ data }) => {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  return (
    <div>
      {data.map((item, idx) => (
        <div
          key={idx}
          className={classNames("py-4 border-b border-[#dfdfdf]", {
            "!border-b-0": idx === data.length - 1,
          })}
        >
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <span className="text-sm text-[#979797]">{item.type}</span>
              <span className="font-bold text-lg">{item.question}</span>
            </div>
            <EditIcon
              className="cursor-pointer"
              onClick={() => setActiveRow(activeRow === idx ? null : idx)}
            />
          </div>
          <QuestionsWrapper active={activeRow === idx} isAdd={false} />
        </div>
      ))}
      <QuestionsWrapper />
    </div>
  );
};

export default AdditionalQuestions;
