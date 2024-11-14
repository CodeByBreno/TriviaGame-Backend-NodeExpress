import { Repository } from "typeorm";
import { datasource } from "src/data-source";
import { OptionQuestion } from "@entities/OptionQuestion/OptionQuestion";
import { IOptionQuestionRepository } from "../IOptionRepository";
import { IOptionQuestion } from "@entities/OptionQuestion/IOptionQuestion";

class OptionQuestionRepository implements IOptionQuestionRepository {
  private ormRepository: Repository<OptionQuestion>;

  constructor() {
    this.ormRepository = datasource.getRepository(OptionQuestion);
  }

  create(data: IOptionQuestion): OptionQuestion {
    const object = this.ormRepository.create({
      text: data.text,
      correct: data.correct,
      type: data.type,
      equivalent_option_id: data.equivalent_option_id,
      question_id: data.question_id,
    });

    return object;
  }

  async save(data: OptionQuestion): Promise<OptionQuestion> {
    const object = await this.ormRepository.save(data);

    return object;
  }

  async count(): Promise<number> {
    const amount = await this.ormRepository.count();
    return amount;
  }

  async findById(id: string): Promise<OptionQuestion | null> {
    const searchedObject = await this.ormRepository.findOneBy({
      id_answer_question: id,
    });
    return searchedObject;
  }

  async findMany(take: number): Promise<OptionQuestion[] | null> {
    const objects = await this.ormRepository.find({
      take: take,
    });

    return objects;
  }

  async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export { OptionQuestionRepository };
