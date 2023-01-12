import { TASK } from "./task";

export enum STAGE {
  TO_DO = "TO DO",
  DOING = "DOING",
  DONE = "DONE",
}

export interface COLUMNS {
  [key: string]: {
    title: string;
    items: Array<TASK>;
  };
}
