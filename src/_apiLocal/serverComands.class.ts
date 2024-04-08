import axios from "axios";
import { IQuestionsJson } from "@/interfaces/IQuestions.interface";

//https://mocki.io/fake-json-api

class ServerCommands {
  private URL = "https://mocki.io/v1/b1b04566-a598-4549-ac46-c811ca15e166";

  async getQuestionsServer() {
    return await axios.get<IQuestionsJson>(this.URL).then((res) => {
      const data = res.data;

      return {
        html: data.html,
        css: data.css,
        js: data.js,
        react: data.react,
        restApiHttp: data.restApiHttp,
        cors: data.cors,
      };
    });
  }
}

export default new ServerCommands();
