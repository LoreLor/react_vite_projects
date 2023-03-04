export const checkEndGame = (newBoard) => {
    //revisamos si hay empate
    //si no hay mas espacios vacios en el tablero
    return newBoard.every((square) => square !== null)
 }
  
