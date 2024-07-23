import { useState } from 'react';
import{genTicket,sum} from "./helper";
import Table from "./Table";
export default function Lottery({n,winningSum}){
    let[table,setTable]=useState(genTicket(n));
    let isWinning=sum(table)===winningSum;

    let buyTicket=()=>{
        setTable(genTicket(n));
    }
        return(
        <div className="Lottery">
            <h1>Lottery</h1>
            <Table table={table}/>
            
            <br></br> <br></br> <br></br>
            <button onClick={buyTicket}>Buy new Ticket</button>
            <h3>{isWinning && "Congratulation You Won"}</h3>
        </div>
    )
}