import axios from "axios";
import { IQuestionsJson } from "@/interfaces/IQuestions.interface";

//https://mocki.io/fake-json-api

class ServerCommands {
  private URL = "https://mocki.io/v1/36beaade-0460-412f-a1c4-995f78fa24ea";

  async getQuestionsServer() {
    return await axios.get<IQuestionsJson>(this.URL).then((res) => {
      const data = res.data;

      return {
        html: data.html,
        css: data.css,
        js: data.js,
        ts: data.ts,
        react: data.react,
        restApiHttp: data.restApiHttp,
        cors: data.cors,
      };
    });
  }
}

export default new ServerCommands();
