
const initialBoard = [
    [null,null,null], 
    [null,null,null], 
    [null,null,null],
]

export default function GameBoard({onSelectSquare,turns}) 
{
    let gameBoard = initialBoard;
    console.log(turns);
    turns.forEach((turn)=>{
        const {square:{row,col},player} = turn;
        gameBoard[row][col] = player;
    })
    return <>
    
        <ol id="game-board">
            {gameBoard.map( (row,rowIdx)=>{
                return <li key={rowIdx}>
                    <ol>
                        {
                            row.map((symbol,colIdx)=>{
                                return <li key={colIdx}>
                                    <button onClick={()=>onSelectSquare(rowIdx,colIdx)}>
                                        {symbol}
                                    </button>
                                </li>
                            })
                        }
                    </ol>
                </li>
            })}
        </ol>
    
    </>
}