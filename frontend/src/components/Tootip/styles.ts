import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  span {
    background: red;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    position: absolute;
    bottom: calc(100% + 12px);
    width: 160px;
    left: 50%;
    transform: translateX(-50%);
    color: red;
    visibility: hidden;
    &::before {
      border-style: solid;
      border-color: red transparent;
      border-width: 6px 6px 0 6px;
      bottom: 20px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    &:hover span {
      opacity: 1;
    }
  }
`;
