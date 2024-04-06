import axios from "axios";
import { IQuestionsJson } from "@/interfaces/IQuestions";

//https://mocki.io/fake-json-api
const getElementsInJson = async () => {
  let data: IQuestionsJson = {};

  const link = "https://mocki.io/v1/c370832d-26a1-4181-8cdd-c61226bf1a80";

  await axios
    .get(link)
    .then((res) => {
      data = res.data;
    })
    .catch((err) => console.warn(err));
  return data;
};

export default getElementsInJson;
