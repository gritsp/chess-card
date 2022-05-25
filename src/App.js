import "./styles/App.css"
import ChessBoard from "./components/board";
import { useEffect, useState } from "react";
var boards = new Array(8)
    for (let i = 0; i<boards.length; i++){
      boards[i] = new Array(5)
    }
function App() {
  const [board,setBoard] = useState(boards)
  const [moveTo,setMoveTo] = useState()

  const onMove = (value)=>{
    console.log(value)
    setMoveTo(true)
  }
  
  const insert = ({text,row,col}) =>{
    // console.log(board)
    let temp = [...board]
    temp[row][col] = text
    // console.log('temp',temp)
    setBoard(temp)
  }

  useEffect(()=>{
    insert({text:'king',row:'0',col:'2'})
    insert({text:'knight',row:'7',col:'2'})
  },[])
  
  if(!board) return <>loading...</>
  // insert({text:'king',row:'0',col:'2'})
  return (
    <div id="app">
      <ChessBoard board={board}/>
    </div>
  );
}

export default App;
