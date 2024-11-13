import { AppError } from "@config/AppError";
import { IBasicQuestionRepository } from "@repositories/QuestionRepository/IQuestionRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteQuestionService {
  constructor(
    @inject("BasicQuestionRepository")
    private basicQuestionRepository: IBasicQuestionRepository
  ) {}

  async execute(id: string) {
    await this.basicQuestionRepository.delete(id);
  }
}

export { DeleteQuestionService };
