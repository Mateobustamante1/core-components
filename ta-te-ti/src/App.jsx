import './App.css'
import { useState } from 'react'
const TURNS = {
  X: 'x',
  O: 'o',
}

const board = Array(9).fill(null)

const [turn, setTurn] = useState(TURNS.X)



const Square = ({ children, updateBoard, index }) => {
  const className = `cell ${children === null ? 'empty' : children === TURNS.X ? 'x' : 'o'}`
  return (
    <div className={className} onClick={() => updateBoard(index)}>
      {children}
    </div>
  )
}

function App() {  
  const [board, setBoard] = useState(board)
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
  }

  return (
    <main className='board'> 
      <h1>Ta-Te-Ti</h1>
      <section className='game'> 
        {
          board.map((_, index) => (
            <Square 
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {index}
            </Square>
          )
        )}
      </section>
    </main>
  )
}
export default App
