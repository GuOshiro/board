import React from "react";
import { GroupConsumer } from "../../context/groups";
import { GROUP_ENUM } from "../../interfaces/group/group";
import { Content, Item } from "./styles";

export const Sidebar = () => {
  return (
    <GroupConsumer>
      {({ updateGroup }) => (
        <Content>
          <Item onClick={() => updateGroup(GROUP_ENUM.DEVELOPMENT)}>Development</Item>
          <Item onClick={() => updateGroup(GROUP_ENUM.DESIGN)}>Design</Item>
          <Item onClick={() => updateGroup(GROUP_ENUM.MARKETING)}>Marketing</Item>
        </Content>
      )}
    </GroupConsumer>
  );
};
