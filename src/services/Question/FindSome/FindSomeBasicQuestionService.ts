import { AppError } from "@config/AppError";
import { IQuestionRepository } from "@repositories/QuestionRepository/IQuestionRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class FindManyBasicQuestionService {
  constructor(
    @inject("QuestionRepository")
    private questionRepository: IQuestionRepository
  ) {}

  async execute(take: number = 20) {
    const questions = await this.questionRepository.findMany(take);

    if (!questions) {
      throw new AppError("Erro ao encontrar perguntas", 404);
    }

    return questions;
  }
}

export { FindManyBasicQuestionService };
