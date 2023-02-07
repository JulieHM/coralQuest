import * as React from "react";

type Props = {
  isCorrect: boolean | undefined;
  info: string;
};

const PedagogicalAgent: React.FC<Props> = ({ isCorrect, info }) => {
  return (
    <div>
      <p>
        {isCorrect ? "Riktig" : "Feil"} {info}
      </p>
    </div>
  );
};

export default PedagogicalAgent;
