import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import {useState} from 'react'
import Log from "./components/Log";


function App() {

  const [gameTurns,setGameTurns] = useState([]);
  const [activePlayer,setActivePlayer] = useState('X');

  const handleSelectSquare = (rowIdx,colIdx)=>{
    setActivePlayer((curActivePlayer)=>(curActivePlayer==='X'?'O':'X'));
    setGameTurns((preTurn)=>{
      let currentPlayer = 'X';
      if(preTurn.length && preTurn[0].player==='X') currentPlayer = 'O';
      const updatedTurns = [ { square :{row:rowIdx,col:colIdx},player:currentPlayer } ,...preTurn];
      return updatedTurns;
    })
  }

  return (
    <>    
      <main>
        <div id="game-container">
          <ol id="players" className='highlight-player' >
            <Player isActive={activePlayer==='X'} initialName="Player 1" symbol="X" />
            <Player isActive={activePlayer==='O'} initialName="Player 2" symbol="O" />
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}  />
        </div>
        <Log />
      </main>
    </>
  );
}

export default App;
