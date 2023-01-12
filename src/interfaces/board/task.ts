import { STAGE } from "./stage";

export interface TASK {
  id: string;
  time: string;
  deadLine: string;
  team: string;
  title: string;
  stage: STAGE;
}
