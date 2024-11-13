import { AppError } from "@config/AppError";
import { IBasicQuestionRepository } from "@repositories/QuestionRepository/IQuestionRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class FindManyBasicQuestionService {
  constructor(
    @inject("BasicQuestionRepository")
    private basicQuestionRepository: IBasicQuestionRepository
  ) {}

  async execute(take: number = 20) {
    const questions = await this.basicQuestionRepository.findMany(take);

    if (!questions || questions.length === 0) {
      throw new AppError("Erro ao encontrar perguntas", 404);
    }

    return questions;
  }
}

export { FindManyBasicQuestionService };
