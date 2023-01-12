import React, { createContext, ReactElement, useState } from "react";
import { GROUP_ENUM } from "../interfaces/group/group";

export const GroupContext = createContext({
  group: GROUP_ENUM.DEVELOPMENT,
  updateGroup: (group: GROUP_ENUM) => {},
});

export const GroupProvider = ({ children }: { children: ReactElement }) => {
  const [group, setGroup] = useState<GROUP_ENUM>(GROUP_ENUM.DEVELOPMENT);

  const updateGroup = (group: GROUP_ENUM) => {
    setGroup(group);
  };

  return (
    <GroupContext.Provider value={{ group, updateGroup }}>
      {children}
    </GroupContext.Provider>
  );
};

export const GroupConsumer = GroupContext.Consumer;
