import { AppError } from "@config/AppError";
import { IQuestionRepository } from "@repositories/QuestionRepository/IQuestionRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class FindRandomQuestionService {
  constructor(
    @inject("QuestionRepository")
    private questionRepository: IQuestionRepository
  ) {}

  async execute(type: string) {
    let question;

    question = await this.questionRepository.findRandomQuestion(type);

    if (!question) {
      throw new AppError("Pergunta não encontrada", 404);
    }

    return question;
  }
}

export { FindRandomQuestionService };
