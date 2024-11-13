import { OptionQuestionRepository } from "@repositories/OptionRepository/implementation/OptionRepository";
import { IOptionQuestionRepository } from "@repositories/OptionRepository/IOptionRepository";
import { QuestionRepository } from "@repositories/QuestionRepository/implementation/QuestionRepository";
import { IQuestionRepository } from "@repositories/QuestionRepository/IQuestionRepository";
import { container } from "tsyringe";

container.registerSingleton<IQuestionRepository>(
  "BasicQuestionRepository",
  QuestionRepository
);

container.registerSingleton<IOptionQuestionRepository>(
  "OptionQuestionRepository",
  OptionQuestionRepository
);
