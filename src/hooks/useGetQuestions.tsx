import ServerCommands from "../_apiLocal/serverComands.class";
import { IQuestionsJson } from "@/interfaces/IQuestions.interface";
import { useQuery } from "@tanstack/react-query";

export const useGetQuestions = () => {
  return useQuery<IQuestionsJson>({
    queryKey: ["getQuestions"],
    queryFn: async () => await ServerCommands.getQuestionsServer(),
  });
};
