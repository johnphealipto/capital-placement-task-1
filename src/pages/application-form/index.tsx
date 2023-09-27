import FormWrapper from "@/components/wrappers/FormWrapper";
import CoverImage from "./components/CoverImage";
import PersonalInformation from "./components/PersonalInformation";
import Profile from "./components/Profile";
import AdditionalQuestions from "./components/AdditionalQuestions";
import useApplicationForm from "./hooks/useApplicationForm";

const ApplicationForm = () => {
  const { inputs, handleChange, handleChangeCoverImage } = useApplicationForm();
  const inputsToUse = inputs.data.attributes;

  return (
    <div>
      <FormWrapper
        title="Upload cover image"
        component={
          <CoverImage
            data={inputsToUse.coverImage}
            handleChangeCoverImage={(value) =>
              handleChangeCoverImage("coverImage", value)
            }
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
          />
        }
      />
      <FormWrapper
        title="Additional questions"
        component={
          <AdditionalQuestions data={inputsToUse.customisedQuestions} />
        }
      />
    </div>
  );
};

export default ApplicationForm;
