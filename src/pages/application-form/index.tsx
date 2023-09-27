import FormWrapper from "@/components/wrappers/FormWrapper";
import CoverImage from "./components/CoverImage";
import PersonalInformation from "./components/PersonalInformation";
import Profile from "./components/Profile";
import AdditionalQuestions from "./components/AdditionalQuestions";
import useApplicationForm from "./hooks/useApplicationForm";
import cloneDeep from "lodash.clonedeep";

const ApplicationForm = () => {
  const {
    inputs,
    setInputs,
    handleChange,
    handleChangeCoverImage,
    handleSaveNewQuestion,
    handleDeleteQuestion,
  } = useApplicationForm();
  const inputsToUse = inputs.data.attributes;

  return (
    <div className="flex flex-col gap-8">
      <FormWrapper
        title="Upload cover image"
        component={
          <CoverImage
            data={inputsToUse.coverImage}
            handleChangeCoverImage={handleChangeCoverImage}
          />
        }
      />
      <FormWrapper
        title="Personal Information"
        component={
          <PersonalInformation
            data={inputsToUse.personalInformation}
            handleChangeInput={(key, input, value) =>
              handleChange("personalInformation", key, input, value)
            }
            handleSaveNewQuestion={(input, value) =>
              handleSaveNewQuestion("personalInformation", input, value)
            }
            handleDeleteQuestion={(input, id) =>
              handleDeleteQuestion("personalInformation", input, id)
            }
          />
        }
      />
      <FormWrapper
        title="Profile"
        component={
          <Profile
            data={inputsToUse.profile}
            handleChangeInput={(key, input, value) =>
              handleChange("profile", key, input, value)
            }
            handleSaveNewQuestion={(input, value) =>
              handleSaveNewQuestion("profile", input, value)
            }
            handleDeleteQuestion={(input, id) =>
              handleDeleteQuestion("profile", input, id)
            }
          />
        }
      />
      <FormWrapper
        title="Additional questions"
        component={
          <AdditionalQuestions
            questions={inputsToUse.customisedQuestions}
            handleSaveNewQuestion={(value) =>
              setInputs((prevState) => {
                const _inputs = cloneDeep(prevState);
                _inputs.data.attributes.customisedQuestions = [
                  ..._inputs.data.attributes.customisedQuestions,
                  value,
                ];
                return _inputs;
              })
            }
            handleDeleteQuestion={(id) =>
              setInputs((prevState) => {
                const _inputs = cloneDeep(prevState);
                const question = _inputs.data.attributes.customisedQuestions;
                _inputs.data.attributes.customisedQuestions = question.filter(
                  (item) => item.id !== id
                );
                return _inputs;
              })
            }
          />
        }
      />
    </div>
  );
};

export default ApplicationForm;
