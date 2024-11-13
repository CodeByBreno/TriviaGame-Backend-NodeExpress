import { inject, injectable } from "tsyringe";
import { ICreateBasicQuestionServiceDTO } from "./ICreateBasicQuestionServiceDTO";
import { IQuestionRepository } from "@repositories/QuestionRepository/IQuestionRepository";
import { IOptionQuestionRepository } from "@repositories/OptionRepository/IOptionRepository";

@injectable()
class CreateBasicQuestionService {
  constructor(
    @inject("QuestionRepository")
    private questionRepository: IQuestionRepository,

    @inject("OptionQuestionRepository")
    private optionQuestionRepository: IOptionQuestionRepository
  ) {}

  async execute(data: ICreateBasicQuestionServiceDTO) {
    const amountElements = await this.questionRepository.count();

    const question = await this.questionRepository.create({
      text: data.text,
      image_url: data.image_url,
      QUESTION: amountElements + 1,
      time: data.time,
      type: "basic",
    });

    const createdQuestion = await this.questionRepository.save(question);

    const createdOptions = await Promise.all(
      data.options.map(async (option) => {
        const optionToCreate = this.optionQuestionRepository.create({
          text: option.text,
          correct: option.correct,
          type: "basic",
          question_id: createdQuestion.id_basic_question,
        });

        return this.optionQuestionRepository.save(optionToCreate);
      })
    );

    createdQuestion.options = createdOptions;

    return createdQuestion;
  }
}

export { CreateBasicQuestionService };
