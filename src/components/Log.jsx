export default function Log({turns}){
    return <>
    <ol id="log">
        {turns.map(turn => <li key={`${row.col}`} >{turn.player} selected {trun.square.row}.{trun.square.col} </li> )}
    </ol>
    </>
}