import { GET_URL } from "@/config";
import axios from "axios";
import { useEffect, useState } from "react";
import cloneDeep from "lodash.clonedeep";
import { initialState } from "../constant";

export default () => {
  const [inputs, setInputs] = useState<any>(initialState);

  useEffect(() => {
    getFormData();
  }, []);

  const getFormData = async () => {
    try {
      const { data } = await axios.get(GET_URL);
      setInputs(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (label, key, input, value) => {
    setInputs((prevState) => {
      const _inputs = cloneDeep(prevState);
      _inputs.data.attributes[label][key][input] = value;

      return _inputs;
    });
  };

  const handleChangeCoverImage = (input, value) => {
    setInputs((prevState) => {
      const _inputs = cloneDeep(prevState);
      _inputs.data.attributes[input] = value;

      return _inputs;
    });
  };

  const handleAddQuestion = () => {};

  return { inputs, handleChangeCoverImage, handleChange, handleAddQuestion };
};
