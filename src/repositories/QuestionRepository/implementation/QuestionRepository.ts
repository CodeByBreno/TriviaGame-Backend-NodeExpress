import { Repository } from "typeorm";
import { datasource } from "data-source";
import { IQuestionRepository } from "../IQuestionRepository";
import { IQuestion } from "@entities/Question/IQuestion";
import { Question } from "@entities/Question/Question";

class QuestionRepository implements IQuestionRepository {
  private ormRepository: Repository<Question>;

  constructor() {
    this.ormRepository = datasource.getRepository(Question);
  }

  async create(data: IQuestion): Promise<Question> {
    const object = this.ormRepository.create({
      text: data.text,
      image_url: data.image_url,
      QUESTION: data.QUESTION,
      type: data.type,
      time: data.time,
    });

    return object;
  }

  async count(): Promise<number> {
    const amount = await this.ormRepository.count();
    return amount;
  }

  async save(data: Question): Promise<Question> {
    const savedObject = await this.ormRepository.save(data);

    return savedObject;
  }

  async findById(id: string): Promise<Question | null> {
    const searchedObject = await this.ormRepository.findOne({
      where: { id_basic_question: id },
      relations: ["options"],
    });

    return searchedObject;
  }

  async findRandomQuestion(type: string): Promise<Question | null> {
    const searchedObject = await this.ormRepository
      .createQueryBuilder("question")
      .where("question.type = :type", { type })
      .leftJoinAndSelect("question.options", "option_question")
      .orderBy("RANDOM()")
      .getOne();
    return searchedObject;
  }

  async findSomeRandomQuestions(
    type: string,
    take: number
  ): Promise<Question[] | null> {
    const searchedObjects = await this.ormRepository
      .createQueryBuilder("question")
      .where("question.type = :type", { type })
      .leftJoinAndSelect("question.options", "option_question")
      .orderBy("RANDOM()")
      .take(take)
      .getMany();

    if (searchedObjects.length === 0) {
      return null;
    }

    return searchedObjects;
  }

  async findMany(take: number): Promise<Question[] | null> {
    const objects = await this.ormRepository.find({
      take: take,
      relations: ["options"],
    });

    return objects;
  }

  async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export { QuestionRepository };
