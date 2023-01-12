import styled from "styled-components";

export const Content = styled.div`
  left: 0;
  top: 0;
  bottom: 0;
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const Item = styled.button`
  margin: 10px 0;
  border: none;
  background: none;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2;
  &:hover {
    transform: scale(1.1);
  }
`;
