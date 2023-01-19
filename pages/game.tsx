import Link from "next/link";

const Game = () => {
    return (
      <>
        <h1>Game</h1>
        <Link href={"quest/1"}><button>Quest 1 - Quiz</button></Link>
        <Link href={"quest/2"}><button>Quest 2 - Dykketur</button></Link>
        <Link href={"quest/3"}><button>Quest 3 - hmm?</button></Link>
      </>
    );
  };
  
  export default Game;