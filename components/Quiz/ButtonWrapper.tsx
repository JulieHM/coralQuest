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
        ? "radial-gradient(50% 50% at 50% 50%, rgba(56, 195, 205, 0.774) 0%, rgba(129, 236, 102, 0.396) 0.01%, rgba(98, 227, 96, 0.9) 100%)"
        : !correct && userClicked
        ? "radial-gradient(50% 50% at 50% 50%, rgba(56, 195, 205, 0.774) 0%, rgba(255, 75, 75, 0.396) 0.01%, rgba(228, 65, 65, 0.9) 100%)"
        : "radial-gradient(50% 50% at 50% 50%, rgba(54, 239, 253, 0.2) 63.54%, rgba(56, 195, 205, 0.86) 100%)"};
    border: ${({ correct, userClicked }) =>
      correct
        ? "2px solid #7CD28F"
        : !correct && userClicked
        ? "2px solid #F36060"
        : "2px solid #60eaf3"};
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 60%;
    margin: 3rem;
    font-size: 1rem;
  }
`;
