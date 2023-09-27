export const PERSONAL_INFO = [
  {
    name: "First Name",
    key: "firstName",
  },
  {
    name: "Last Name",
    key: "lastName",
  },
  {
    name: "Email",
    key: "emailId",
  },
  {
    name: "Phone",
    info: "without dial code",
    key: "phoneNumber",
  },
  {
    name: "Nationality",
    key: "nationality",
  },
  {
    name: "Current Residence",
    key: "currentResidence",
  },
  {
    name: "ID Number",
    key: "idNumber",
  },
  {
    name: "Date of Birth",
    key: "dateOfBirth",
  },
  {
    name: "Gender",
    key: "gender",
  },
];

export const PROFILE = [
  {
    name: "Education",
    key: "education",
  },
  {
    name: "Experience",
    key: "experience",
  },
  {
    name: "Resume",
    key: "resume",
  },
];

export const ADDITIONAL_QUESTIONS = [
  {
    id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    type: "Paragraph",
    question: "string",
    choices: ["string"],
    maxChoice: 0,
    disqualify: false,
    other: false,
  },
];

export const QUESTION_TYPES = [
  { value: "Paragraph", label: "Paragraph" },
  { value: "Short answer", label: "Short answer" },
  { value: "Yes/No", label: "Yes/No" },
  { value: "Dropdown", label: "Dropdown" },
  { value: "Multiple choice", label: "Multiple choice" },
  { value: "Date", label: "Date" },
  { value: "Number", label: "Number" },
  { value: "File upload", label: "File upload" },
  { value: "Video question", label: "Video question" },
];
