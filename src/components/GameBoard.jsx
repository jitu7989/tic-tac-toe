


export default function GameBoard({onSelectSquare,board}) 
{

    return <>
    
        <ol id="game-board">
            {board.map( (row,rowIdx)=>{
                return <li key={rowIdx}>
                    <ol>
                        {
                            row.map((symbol,colIdx)=>{
                                return <li key={colIdx}>
                                    <button onClick={()=>onSelectSquare(rowIdx,colIdx)} disabled={symbol !== null}>
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