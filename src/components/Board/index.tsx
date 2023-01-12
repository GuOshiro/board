import React, { useContext, useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { GroupContext } from "../../context/groups";
import { columns as data } from "../../service/stage";
import { onDragEnd } from "../../utils/onDragEnd";
import { Badge } from "../Badge";
import { Card } from "../Card";
import { Container, Column, TaskList } from "./styles";

export const Board = () => {
  const { group } = useContext(GroupContext);

  const [columns, setColumns] = useState(data({ group }));

  useEffect(() => {
    setColumns(data({ group }));
  }, [group]);

  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      <Container>
        <Column>
          {Object.entries(columns).map(([columnId, column]) => (
            <Droppable key={columnId} droppableId={columnId}>
              {(provided) => (
                <TaskList ref={provided.innerRef} {...provided.droppableProps}>
                  <Badge text={column.title} />
                  {column.items.map((item, index) => (
                    <Card
                      group={group}
                      key={item.id}
                      item={item}
                      index={index}
                    />
                  ))}
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          ))}
        </Column>
      </Container>
    </DragDropContext>
  );
};
