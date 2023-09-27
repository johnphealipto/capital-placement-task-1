import { BASE_URL } from "@/config";
import axios from "axios";
import { useEffect, useState } from "react";
import cloneDeep from "lodash.clonedeep";

export default () => {
  const [inputs, setInputs] = useState<any>({});

  useEffect(() => {
    getFormData();
  }, []);

  const getFormData = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/api/488.0969540386077/programs/odio/application-form`
      );
      setInputs(data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("inputs", inputs);

  const handleChange = (label, key, input, value) => {
    setInputs((prevState) => {
      const _inputs = cloneDeep(prevState);
      _inputs.data.attributes[label][key][input] = value;

      return _inputs;
    });
  };

  const handleAddQuestion = () => {};

  return { inputs, handleChange, handleAddQuestion };
};
