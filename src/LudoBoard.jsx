import { useState } from 'react';

export default function LudoBoard(){
   return(
    <div>
        <h3>Let start</h3>
        <div className="board">
            <p>Blue: </p>
            <button>+1</button>
            <p>Yellow: </p>
            <button>+1</button>
            <p>Green: </p>
            <button>+1</button>
            <p>Red: </p>
            <button>+1</button>
        </div>
    </div>
   );
}