export interface IQuestion {
  n: number;
  type_materia: string;
  category: string;
  issue: string;
  question: string;
  options: {
    code: string;
    description: string;
  }[];
  answer: string; // The 'code' of the correct option
  image?: string;
}

export enum GameState {
  Start,
  Quiz,
  Results,
  Review,
}

export type UserAnswerMap = {
  [questionIndex: number]: string; // Maps question index to selected option code
};