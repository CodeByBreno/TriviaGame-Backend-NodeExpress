import { QuestionRepository } from "@repositories/QuestionRepository/implementation/QuestionRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteQuestionService {
  constructor(
    @inject("QuestionRepository")
    private questionRepository: QuestionRepository
  ) {}

  async execute(id: string) {
    await this.questionRepository.delete(id);
  }
}

export { DeleteQuestionService };
