import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { TASK } from "../../interfaces/board/task";
import { GROUP_ENUM } from "../../interfaces/group/group";
import { Content, Informations } from "./styles";

export const Card = ({
  item,
  index,
  group,
}: {
  item: TASK;
  index: number;
  group: GROUP_ENUM;
}) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Content>
            <p>{item.title}</p>
            <Informations group={group}>
              <span>
                {new Date(item.deadLine).toLocaleDateString("en-us", {
                  month: "short",
                  day: "2-digit",
                })}
              </span>
              <span className="team">{item.team}</span>
            </Informations>
          </Content>
        </div>
      )}
    </Draggable>
  );
};
