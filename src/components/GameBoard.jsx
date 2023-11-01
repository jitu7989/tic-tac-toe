
import {useState}  from 'react'
const initialBoard = [
    [null,null,null], 
    [null,null,null], 
    [null,null,null],
]

export default function GameBoard({onSelectSquare,symbol}) 
{

    const [gameBoard,setGameBoard] = useState(initialBoard);

    const handleSelectSquare=(rowIdx,colIdx)=>{
        setGameBoard((prevGameBoard)=>{
            const updatedBoard = [...prevGameBoard.map((arr)=>[...arr])];
            updatedBoard[rowIdx][colIdx] = symbol;
            return updatedBoard;
        });
        onSelectSquare();
    }
    return <>
    
        <ol id="game-board">
            {gameBoard.map( (row,rowIdx)=>{
                return <li key={rowIdx}>
                    <ol>
                        {
                            row.map((symbol,colIdx)=>{
                                return <li key={colIdx}>
                                    <button onClick={()=>handleSelectSquare(rowIdx,colIdx)}>
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