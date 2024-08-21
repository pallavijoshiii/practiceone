import React from "react";
import "./App.css";

const Fibonace = ({ number }) => {

  function fiboArr(number) {
    let num1 = 0;
    let num2 = 1;
    let array = [0, 1];
    for (let i = 2; i < number; i++) {
      let pNum = num1 + num2;
      array.push(pNum);
      num1 = num2;
      num2 = pNum;
    }
    return array;
  }
  const fibonSeries = fiboArr(number);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height:'100vh',
          backgroundColor:"#31473A",
        }}
      >
        {fibonSeries.map((num,index) => (
          <div
            className="App"
            style={{
              borderRadius: "50%",
              border: "2px solid #EDF4F2",
              width: `${num}px`,
              height:`${num}px`,
              position:'absolute',
            }}
          >
          </div>
        ))}
      </div>
    </>
  );
};

export default Fibonace;
