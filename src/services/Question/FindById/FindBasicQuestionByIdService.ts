import { AppError } from "@config/AppError";
import { QuestionRepository } from "@repositories/QuestionRepository/implementation/QuestionRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class FindQuestionByIdService {
  constructor(
    @inject("QuestionRepository")
    private questionRepository: QuestionRepository
  ) {}

  async execute(id: string) {
    const question = await this.questionRepository.findById(id);

    if (!question) {
      throw new AppError("Pergunta não encontrada", 404);
    }

    return question;
  }
}

export { FindQuestionByIdService };
