import axios from "axios";

interface IQ {
  html?: arrayJson;
  css?: arrayJson;
  js?: arrayJson;
  react?: arrayJson;
}

type arrayJson = [
  {
    title: string;
    text: string;
  }
];

//https://mocki.io/fake-json-api
const getElementsInJson = async () => {
  let a: IQ = {};

  const link = "https://mocki.io/v1/c1dc1de6-ea3d-47bf-be7f-217293e2f3d9";

  await axios
    .get(link)
    .then((res) => {
      a = res.data;
    })
    .catch((err) => console.warn(err));
  return a;
};

export default getElementsInJson;
