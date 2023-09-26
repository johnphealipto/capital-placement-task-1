import FormWrapper from "@/components/wrappers/FormWrapper";
import CoverImage from "./components/CoverImage";
import PersonalInformation from "./components/PersonalInformation";
import Profile from "./components/Profile";
import AdditionalQuestions from "./components/AdditionalQuestions";

const ApplicationForm = () => {
  return (
    <div>
      <FormWrapper title="Upload cover image" component={<CoverImage />} />
      <FormWrapper
        title="Personal Information"
        component={<PersonalInformation />}
      />
      <FormWrapper title="Profile" component={<Profile />} />
      <FormWrapper
        title="Additional questions"
        component={<AdditionalQuestions />}
      />
    </div>
  );
};

export default ApplicationForm;
