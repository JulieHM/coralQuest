import Link from "next/link";

const Game = () => {
    return (
      <div className="flex py-2 container mx-auto">
        <h1>Game</h1>
        <Link href={"quest/1"}><button>Quest 1 - Quiz</button></Link>
         <Link href={"quest/2"}><button>Quest 2 - Google Earth</button></Link>
        <Link href={"quest/3"}><button>Quest 3 - hmm?</button></Link>
      </div>
    );
  };
  
  export default Game;