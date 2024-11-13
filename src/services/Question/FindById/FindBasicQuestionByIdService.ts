import { AppError } from "@config/AppError";
import { IBasicQuestionRepository } from "@repositories/QuestionRepository/IQuestionRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class FindQuestionByIdService {
  constructor(
    @inject("BasicQuestionRepository")
    private basicQuestionRepository: IBasicQuestionRepository
  ) {}

  async execute(id: string) {
    const question = await this.basicQuestionRepository.findById(id);

    if (!question) {
      throw new AppError("Pergunta não encontrada", 404);
    }

    return question;
  }
}

export { FindQuestionByIdService };
