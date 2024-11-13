export interface ICreateBasicQuestionServiceDTO {
  text: string;
  image_url?: string;
  options: IOptionBasicQuestionDTO[];
  time?: number;
}

interface IOptionBasicQuestionDTO {
  text: string;
  correct: boolean;
  equivalent_option_id?: string;
  question_id: string;
}
