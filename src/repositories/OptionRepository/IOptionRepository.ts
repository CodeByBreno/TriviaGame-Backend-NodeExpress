import { IOptionQuestion } from "@entities/OptionQuestion/IOptionQuestion";
import { OptionQuestion } from "@entities/OptionQuestion/OptionQuestion";

export interface IOptionQuestionRepository {
  create(data: IOptionQuestion): OptionQuestion;
  save(data: OptionQuestion): Promise<OptionQuestion>;
  count(): Promise<number>;
  findById(id: string): Promise<OptionQuestion | null>;
  findMany(take: number): Promise<OptionQuestion[] | null>;
  delete(id: string): Promise<void>;
}
