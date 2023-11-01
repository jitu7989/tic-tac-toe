import Player from "./components/Plater";
import GameBoard from "./components/GameBoard";
import {useState} from 'react'
import Log from "./components/Log";
function App() {

  
  const [activePlayer,setActivePlayer] = useState('X');

  const handleSelectSquare = ()=>{
    setActivePlayer((curActivePlayer)=>(curActivePlayer==='X'?'O':'X'));
  }

  return (
    <>    
      <main>
        <div id="game-container">
          <ol id="players" className='highlight-player' >
            <Player isActive={activePlayer==='X'} initialName="Player 1" symbol="X" />
            <Player isActive={activePlayer==='O'} initialName="Player 2" symbol="O" />
          </ol>
          <GameBoard symbol={activePlayer} onSelectSquare={handleSelectSquare}  />
        </div>
        <Log />
      </main>
    </>
  );
}

export default App;
