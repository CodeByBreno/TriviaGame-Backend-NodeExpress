export interface IOptionQuestion {
  text: string;
  correct: boolean;
  type: string;
  equivalent_option_id?: string;
  question_id?: string;
}
