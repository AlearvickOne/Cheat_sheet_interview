import axios from "axios";
import { IQuestionsJson } from "@/interfaces/IQuestions";

//https://mocki.io/fake-json-api
const getElementsInJson = async () => {
  let data: IQuestionsJson = {};

  const link = "https://mocki.io/v1/c1dc1de6-ea3d-47bf-be7f-217293e2f3d9";

  await axios
    .get(link)
    .then((res) => {
      data = res.data;
    })
    .catch((err) => console.warn(err));
  return data;
};

export default getElementsInJson;
