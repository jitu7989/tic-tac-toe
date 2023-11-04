import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import {useState} from 'react'
import Log from "./components/Log";
import {WINNING_COMBINATIONS} from './components/WINNING_COMBINATIONS';
import GameOver from "./components/GameOver";


const INITIAL_BOARD = [
  [null,null,null], 
  [null,null,null], 
  [null,null,null],
]
const PLAYERS = {
  'X':'Player 1',
  'O':'Player 2'
}
function deriveWinner(gameBoard,playerName) {

  let winner = null;
  WINNING_COMBINATIONS.forEach( (combination)=>{
    const [a,b,c] = combination;
    const s1 = gameBoard[a.row][a.column];
    const s2 = gameBoard[b.row][b.column];
    const s3 = gameBoard[c.row][c.column];
    console.log(s1 && s1===s2 && s2===s3);
    if( s1 && 
       s1===s2 && 
       s2===s3
      )
    {
      winner = playerName[s1];
    }
  });
  return winner;

}
function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if(gameTurns.length && gameTurns[0].player==='X') currentPlayer = 'O';
  return currentPlayer;
}
function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_BOARD.map((row)=>[...row])];
  gameTurns.forEach((turn)=>{
      const {square:{row,col},player} = turn;
      gameBoard[row][col] = player;
  })
  return gameBoard;
}

function App() {

  const restartGame = () => {
    setGameTurns([]);
  }
  const handlePlayerNameChange = (symbol,name) => {
    setPlayerName((prePlayerName)=>{
      return {
        ...prePlayerName,
        [symbol]:name
      }
    })
  }
  const handleSelectSquare = (rowIdx,colIdx)=>{

    setGameTurns((preTurn)=>{
      let currentPlayer = deriveActivePlayer(preTurn);
      if(preTurn.length && preTurn[0].player==='X') currentPlayer = 'O';
      const updatedTurns = [ { square :{row:rowIdx,col:colIdx},player:currentPlayer } ,...preTurn];
      return updatedTurns;
    })
  }
  const [playerName ,setPlayerName ] = useState(PLAYERS);
  const [gameTurns,setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard,playerName);
  const hasDraw = gameTurns.length === 9 && !winner;


  

  return (
    <>    
      <main>
        <div id="game-container">
          <ol id="players" className='highlight-player' >
            <Player isActive={activePlayer==='X'} initialName="Player 1" symbol="X" onChangeName={handlePlayerNameChange} />
            <Player isActive={activePlayer==='O'} initialName="Player 2" symbol="O"onChangeName={handlePlayerNameChange} />
          </ol>
          { (winner || hasDraw) && <GameOver winner={winner} restart={restartGame}/>  }
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}  />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
