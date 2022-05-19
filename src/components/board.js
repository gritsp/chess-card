import { useState } from "react"
import "../styles/board.css"

const ChessBoard = ({board}) =>{
  const drawBoard = () => {
    const temp = []
    const rows = [1, 2, 3, 4, 5, 6, 7, 8]
    const cols = ["a", "b", "c", "d", "e"]

    rows.map((h,i)=>{
      cols.map((v,j)=>{
        if(j==0) temp.push(<div key={`${v} ${i}`}>{h}</div>)
        if ((i+j)%2==0){
            temp.push(<div className="tile tile-black">{board[i][j]}</div>)
        }else{
            temp.push(<div className="tile tile-white">{board[i][j]}</div>)
        }
      })
      if(i==rows.length-1) {
        temp.push(<div ></div>)
        cols.map(v=>temp.push(<div >{v}</div>))
      }
    })
    return temp
  }

  return (
    <div id="board">
      {drawBoard()}
      {/* {JSON.stringify(board)} */}
    </div>
  )
}

export default ChessBoard