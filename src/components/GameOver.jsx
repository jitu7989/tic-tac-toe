export default function GameOver({winner,restart}) {
    return <>
        <div id="game-over">
            <p>Game Over!</p>
            {winner && <p>{winner} won!</p>}
            {!winner && <p>It's a draw!</p>}
            <p>
                <button onClick={()=>restart()}>Play Again</button>
            </p>
        </div>
    </>
}