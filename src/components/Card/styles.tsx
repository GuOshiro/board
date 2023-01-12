import styled from "styled-components";
import { GROUP_ENUM } from "../../interfaces/group/group";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 15px;
  min-height: 106px;
  border-radius: 5px;
  max-width: 311px;
  background: white;
  margin-top: 15px;
`;

export const Informations = styled.div<{ group: GROUP_ENUM }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 5px;
  background: white;
  margin: 15px 0;
  font-size: 10px;
  .team {
    margin-top: 5px;
    background-color: ${(props) =>
      props.group && props.group === GROUP_ENUM.DESIGN
        ? `#ffe9e9`
        : props.group === GROUP_ENUM.DEVELOPMENT
        ? `#e9e9fb`
        : `#ffffd0`};
    padding: 2px 8px;
    border-radius: 10px;
  }
`;
