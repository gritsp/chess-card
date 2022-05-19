import "./styles/App.css"
import ChessBoard from "./components/board";
import { useEffect, useState } from "react";
var boards = new Array(8)
    for (let i = 0; i<boards.length; i++){
      boards[i] = new Array(5)
    }
function App() {
  const [board,setBoard] = useState(boards)
  
  const insert = ({text,row,col}) =>{
    // console.log(board)
    // if(!board) return
    let temp = [...board]
    temp[row][col] = text
    console.log('temp',temp)
    setBoard(temp)
    // console.log(board)
  }

  // useEffect(()=>{
  //   insert({text:'king',row:'0',col:'2'})
  // },[])
  
  if(!board) return <>loading...</>
  // insert({text:'king',row:'0',col:'2'})
  return (
    <div id="app">
      <ChessBoard board={board}/>
    </div>
  );
}

export default App;
