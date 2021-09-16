import styled from "styled-components";
export const Container = styled.div`
  border-radius: 10px;
  border: 1px solid #e2e2e8;
  padding: 16px;
  width: 100%;
  color: #6f6c99;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  input {
    flex: 1;
    border: 0;
    &::placeholder {
      color: #666360;
    }
  }
  > svg {
    margin-right: 16px;
  }
`;
