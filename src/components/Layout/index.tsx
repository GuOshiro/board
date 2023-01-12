import React, { ReactElement } from "react";
import { Content, Container } from "./styles";
import { Sidebar } from "../Sidebard";

export const Layout = ({
  children,
}: {
  children: ReactElement[] | ReactElement;
}) => {
  return (
    <Content>
      <Sidebar />
      <Container>{children}</Container>
    </Content>
  );
};
