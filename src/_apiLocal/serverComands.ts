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
    .get("https://mocki.io/v1/04bcc6ad-4563-4549-a4eb-c738f7e1f3ed")
    .then((res) => {
      a = res.data;
    })
    .catch((err) => console.warn(err));
  return a;
};

export default getElementsInJson;
