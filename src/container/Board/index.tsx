import React from "react";
import { GroupConsumer } from "../../context/groups";
import { Board as BoardComponent } from "../../components/Board";

export const Board = () => {
  return (
    <GroupConsumer>
      {({ group }) => (
        <>
          <h1>Welcome to {group} group!</h1>
          <BoardComponent />
        </>
      )}
    </GroupConsumer>
  );
};
