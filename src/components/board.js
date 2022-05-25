import { useEffect, useState } from "react"
import "../styles/board.css"

const ChessBoard = ({board}) =>{
  const [move,setMove] = useState(false)
  const [pieces,setPieces] = useState()
  const [logMove,setLogMove] = useState([])
  const onMove=(value)=>{
    let temp = [...logMove]
    temp.push(value)
    setLogMove(temp)
    setMove(true)
    setPieces(value)
    // move(value)
    // console.log(value)
  }
  const moveTo = ({row,col})=>{
    if (row==pieces.row&&col==pieces.col) return
    board[row][col] = pieces.pieces
    board[pieces.row][pieces.col] = ''
    setMove(!move)
  }

  const DrawBoard = () => {
    const temp = []
    const rows = [1, 2, 3, 4, 5, 6, 7, 8]
    const cols = ["a", "b", "c", "d", "e"]

    rows.map((h,i)=>{
      cols.map((v,j)=>{
        if(j==0) temp.push(<div key={`${v} ${i}`}>{h}</div>)
        if ((i+j)%2==0){
          if(move){
            temp.push(<div onClick={()=>moveTo({row:i,col:j})} key={i+''+j} className="tile tile-black">{board[i][j]}</div>)
          }else{
            if (board[i][j]){
              temp.push(<div onClick={()=>onMove({pieces:board[i][j],row:i,col:j})} key={i+''+j} className="tile tile-black tile-hover">{board[i][j]}</div>)
            }else{
              temp.push(<div key={i+''+j} className="tile tile-black">{board[i][j]}</div>)
            }
          }
        }else{
          if(move){
            temp.push(<div onClick={()=>moveTo({row:i,col:j})} key={i+''+j} className="tile tile-white">{board[i][j]}</div>)
          }else{
            if(board[i][j]){
              temp.push(<div onClick={()=>onMove({pieces:board[i][j],row:i,col:j})} key={i+''+j} className="tile tile-white tile-hover">{board[i][j]}</div>)
            }else{
              temp.push(<div key={i+''+j} className="tile tile-white">{board[i][j]}</div>)
            }
          }
        }
      })
      if(i==rows.length-1) {
        temp.push(<div key={i+'l'} ></div>)
        cols.map(v=>temp.push(<div key={i+'lv'+v}>{v}</div>))
      }
    })
    return temp
  }

  return (
    <div id="board">
      <DrawBoard />
      {logMove&&(
        <div>{JSON.stringify(logMove)}</div>
      )}
      {/* <button onClick={()=>console.log('hello')}>hello</button> */}
    </div>
  )
}

export default ChessBoard