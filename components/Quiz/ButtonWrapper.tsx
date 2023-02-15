import styled from "styled-components";

type ButtonWrapperProps = {
  correct: boolean | undefined;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  /* :hover {
    opacity: 0.9;
  } */

  button {
    cursor: pointer;
    width: 273px;
    height: 273px;
    user-select: none;
    background: ${({ correct, userClicked }) =>
      correct
        ? "radial-gradient(50% 50% at 50% 50%, rgba(54, 253, 74, 0.2) 63.54%, rgba(56, 195, 205, 0.86) 100%)"
        : !correct && userClicked
        ? "radial-gradient(50% 50% at 50% 50%, rgba(255, 73, 73, 0.59) 65.1%, rgba(56, 195, 205, 0.86) 100%)"
        : "radial-gradient(50% 50% at 50% 50%, rgba(54, 239, 253, 0.2) 63.54%, rgba(56, 195, 205, 0.86) 100%)"};
    border: 1px solid #aaa;
    border: 2px solid #60eaf3;
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 60%;
    margin: 3rem;
    font-size: 1rem;
  }
`;
