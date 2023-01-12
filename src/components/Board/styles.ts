import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const TaskList = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  background: #f3f3f3;
  min-width: 341px;
  border-radius: 5px;
  padding: 15px 15px;
  margin-right: 45px;
`;

export const Column = styled.div`
  margin: 8px;
  display: flex;
  width: 100%;
  min-height: 80vh;
`;
