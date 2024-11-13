import { AppError } from "@config/AppError";
import { IBasicQuestionRepository } from "@repositories/QuestionRepository/IQuestionRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class FindRandomQuestionService {
  constructor(
    @inject("BasicQuestionRepository")
    private basicQuestionRepository: IBasicQuestionRepository
  ) {}

  async execute(type: string) {
    let question;

    switch (type) {
      case "basic":
        question = await this.basicQuestionRepository.findRandomBasicQuestion();
        break;
      case "image":
        question = await this.basicQuestionRepository.findRandomImageQuestion();
        break;
      default:
        throw new AppError("Opção de pergunta inválida", 400);
    }

    if (!question) {
      throw new AppError("Pergunta não encontrada", 404);
    }

    return question;
  }
}

export { FindRandomQuestionService };
