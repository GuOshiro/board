import { STAGE } from "../interfaces/board/stage";
import { GROUP_ENUM } from "../interfaces/group/group";
import { tasksList } from "./board";

export const stages: Array<STAGE> = [STAGE.TO_DO, STAGE.DOING, STAGE.DONE];

export const columns = ({ group }: { group: GROUP_ENUM }) => {
  return {
    [STAGE.TO_DO]: {
      title: "To-do",
      items: tasksList.filter(
        (item) => item.team === group && item.stage === STAGE.TO_DO
      ),
    },
    [STAGE.DOING]: {
      title: "In Progress",
      items: tasksList.filter(
        (item) => item.team === group && item.stage === STAGE.DOING
      ),
    },
    [STAGE.DONE]: {
      title: "Done",
      items: tasksList.filter(
        (item) => item.team === group && item.stage === STAGE.DONE
      ),
    },
  };
};
