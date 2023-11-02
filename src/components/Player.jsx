import { useState } from "react";

export default function Player({initialName,symbol,isActive}) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const onChange = (event)=> setPlayerName(event.target.value);
    
    const onEdit = () =>  setIsEditing((editing)=>!editing);
    
    const playerInputField=() => (<input type="text" className="player-name" defaultValue={initialName} onChange={onChange} />);
    
    const playerNameSpan=() => (<span className="player-name">{playerName}</span>);
    
    console.log(initialName,symbol);
    
    const playerNameInput=(isEditing?playerInputField():playerNameSpan()); 
    

    return (
    <>
      <li className={isActive ? 'active':undefined}>
        <span className="player">
          {playerNameInput}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={()=> onEdit()} className="player-remove">{!isEditing ? "Edit" : "Save" }</button>
      </li>
    </>
  );
}

