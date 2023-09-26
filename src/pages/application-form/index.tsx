import FormWrapper from "@/components/FormWrapper";
import CoverImage from "./components/CoverImage";

const ApplicationForm = () => {
  return (
    <div>
      <FormWrapper title="Upload cover image" component={<CoverImage />} />
    </div>
  );
};

export default ApplicationForm;
