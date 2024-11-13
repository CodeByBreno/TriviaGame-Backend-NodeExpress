import { IQuestion } from "@entities/Question/IQuestion";
import { Question } from "@entities/Question/Question";

export interface IQuestionRepository {
  create(data: IQuestion): Promise<Question>;
  save(data: Question): Promise<Question>;
  count(): Promise<number>;
  findById(id: string): Promise<Question | null>;
  findMany(take: number): Promise<Question[] | null>;
  findRandomQuestion(type: string): Promise<Question | null>;
  findSomeRandomQuestions(
    type: string,
    take: number
  ): Promise<Question[] | null>;
  delete(id: string): Promise<void>;
}
