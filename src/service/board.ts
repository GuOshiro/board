import { STAGE } from "../interfaces/board/stage";
import { TASK } from "../interfaces/board/task";
import { GROUP_ENUM } from "../interfaces/group/group";

export const tasksList: Array<TASK> = [
  {
    id: '1',
    time: "",
    deadLine: "25-May-2020",
    team: GROUP_ENUM.DEVELOPMENT,
    title: "First Task",
    stage: STAGE.TO_DO,
  },
  {
    id: '2',
    time: "",
    deadLine: "25-May-2020",
    team: GROUP_ENUM.DEVELOPMENT,
    title: "Second Task",
    stage: STAGE.TO_DO,
  },
  {
    id: '3',
    time: "",
    deadLine: "25-May-2020",
    team: GROUP_ENUM.DESIGN,
    title: "Third Task",
    stage: STAGE.TO_DO,
  },
  {
    id: '4',
    time: "",
    deadLine: "25-May-2020",
    team: GROUP_ENUM.DESIGN,
    title: "Fourth Task",
    stage: STAGE.TO_DO,
  },
  {
    id: '5',
    time: "",
    deadLine: "25-May-2020",
    team: GROUP_ENUM.DESIGN,
    title: "Fifth Task",
    stage: STAGE.TO_DO,
  },
  {
    id: '6',
    time: "",
    deadLine: "25-May-2020",
    team: GROUP_ENUM.MARKETING,
    title: "Sixth Task",
    stage: STAGE.DOING,
  },
  {
    id: '7',
    time: "",
    deadLine: "25-May-2020",
    team: GROUP_ENUM.MARKETING,
    title: "Seventh Task",
    stage: STAGE.DONE,
  },
  {
    id: '8',
    time: "",
    deadLine: "25-May-2020",
    team: GROUP_ENUM.MARKETING,
    title: "Eighth Task",
    stage: STAGE.DONE,
  },
  {
    id: '9',
    time: "",
    deadLine: "25-May-2020",
    team: GROUP_ENUM.MARKETING,
    title: "Ninth Task",
    stage: STAGE.DONE,
  },
  {
    id: '10',
    time: "",
    deadLine: "25-May-2020",
    team: GROUP_ENUM.DESIGN,
    title: "Tenth Task",
    stage: STAGE.DONE,
  },
];