import { useState } from 'react'
import confetti from 'canvas-confetti';

import Square from './components/Square';

import { TURNS } from './utils/constants';
import { checkWinnerFrom } from './utils/checkWinner';
import { checkEndGame } from './utils/checkEndGame';
import WinnerModal from './components/WinnerModal';

import './App.css'
import Board from './components/Board';
import TURNSComponent from './components/TURNS';



function App() {
  //tablero de 9 posiciones y fill() metodo para rellenar
  const [board, setBoard] = useState(Array(9).fill(null))

  //para saber de quien es el turno
  const [turn, setTurn] = useState(TURNS.X)

  //para saber cuando hay un ganador
  const [winner, setWinner] = useState(null)  //null=hay ganador, falso= empate



  //cambia turno cada vez que se selecciona uno
  const updateBoard = (index) => {
    //para evitar modificar si ya hay algo en la posicion ->se mantiene como esta
    if (board[index] || winner) return;

    //para no modificar el estado copio uno y luego actualizo con los 
    //nuevos datos
    const newBoard = [...board]
    newBoard[index] = turn //x | o
    setBoard(newBoard)

    //cambia turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //chequeo si existe un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  //seteo los estados a iniciales
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }


  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Empezar de Nuevo</button>
      <Board 
        board={board} 
        updateBoard={updateBoard} 
      />
      <TURNSComponent 
        turn={turn}      
      />

      {/* modal para que muestre quien gano */}
      <WinnerModal 
        winner={winner} 
        resetGame={resetGame}        
      />
    </main>
  )
}

export default App
