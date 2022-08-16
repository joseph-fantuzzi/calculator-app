import React from "react";

const styles = {
  container: "mx-auto w-1/2 h-96 bg-blue-800 rounded-xl",
  number: "rounded-full w-10 h-10 bg-white flex items-center justify-center",
  screen: "",
};

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Calculator = () => {
  return (
    <div className={styles.container}>
      <div className={styles.screen}></div>
      {numbers.map((number, i) => {
        return (
          <div key={i} className={styles.number}>
            {number}
          </div>
        );
      })}
    </div>
  );
};

export default Calculator;
