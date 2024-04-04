import axios from "axios";

interface IQ {
  html?: arrayJson;
}

type arrayJson = [
  {
    title: string;
    text: string;
  }
];

const getElementsInJson = async () => {
  let a: IQ = {};
  await axios
    .get("https://mocki.io/v1/f8d0169d-8f1e-4a6b-887e-80802458a218")
    .then((res) => {
      a = res.data;
    })
    .catch((err) => console.warn(err));
  return a;
};

export default getElementsInJson;
