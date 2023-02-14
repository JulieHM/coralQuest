import styled from "styled-components";

type ButtonWrapperProps = {
  correct: boolean | undefined;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    background: ${({ correct, userClicked }) =>
      correct ? "green" : !correct && userClicked ? "red" : null};
    padding: 5px 10px;
    font-size: 0.8rem;
    border: 1px solid #aaa;
    width: 273px;
    height: 273px;
    border: 2px solid #60eaf3;
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 60%;
    margin: 3rem;
  }
`;
