import React, { useState } from "react";
import "./sukudu.css";

const Suduku = () => {
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const AlfArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  const arrRowCol = Array(9).fill().map(()=>Array(9).fill(''));
  const [game,setGame] = useState(arrRowCol);
  const [error,setError] = useState();

  const seeValue = (row,col,value)=>{
    if(game[row].includes(value)){
      return false;
    }
    for(let i = 0; i <9;i++){
      if(game[i][col]===value){
        return false;
      }  
    }
    return true;
  }
  const handleChange = (row, col, value) => {
    if (value === ''||(value>=1 && value<=9 && seeValue(row,col,value))){
      const newGame = game.map((i, rowIndex) => 
        i.map((cell, colIndex) => (rowIndex === row && colIndex === col ? value : cell))
      );
      setGame(newGame);
      setError('');
    }else{
      setError('Number is invalid')
    }
  }

 

  return (
    <>
    <div className="maindiv">
    <p className="para">Sudoku</p>
    <label className="error">{error}</label>
      <div className="numberArray">
        {numberArray.map((i,rowIndex) => (
          <div className="innerdiv" key={rowIndex}>
            {AlfArray.map((i,colIndex) => (
              <input type="text" key={colIndex} className="inputdiv" value={game[rowIndex][colIndex]} onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}/>
            ))}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};
export default Suduku;
