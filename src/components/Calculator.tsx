import React, { useState } from "react";

const styles = {
  container: "mx-auto w-1/4 min-w-[220px] max-w-[350px] h-96 bg-[#FCC65D] rounded-2xl shadow-md",
  number:
    "rounded-full w-14 h-14 bg-white flex items-center justify-center m-1 cursor-pointer shadow-md",
  screen:
    "mx-auto w-10/12 h-1/5 bg-white rounded-2xl relative top-5 flex justify-end items-center px-5 shadow-md",
  number_container: "mt-10 flex flex-col items-center",
  row: "flex",
  computation: "text-2xl",
  top_row:
    "rounded-full bg-white shadow-md w-14 h-14 flex items-center justify-center cursor-pointer m-1",
};

const numbers: number[] = [7, 8, 9, 4, 5, 6, 1, 2, 3];

const Calculator = () => {
  const [computation, setComputation] = useState<string>("0");

  const handleClick = (number: number) => {
    setComputation(computation === "0" ? `${number}` : computation.concat(`${number}`));
  };

  const handleClear = () => {
    setComputation("0");
  };

  const handleSign = () => {
    setComputation(computation[0] === "-" ? computation.slice(1) : `-${computation}`);
  };

  const handlePercent = () => {
    setComputation((Number(computation) / 100).toString());
  };

  return (
    <div className={styles.container}>
      <div className={styles.screen}>
        <div className={styles.computation}>{computation}</div>
      </div>
      <div className={styles.number_container}>
        <div className={styles.row}>
          <div onClick={handleClear} className={styles.top_row}>
            AC
          </div>
          <div onClick={handleSign} className={styles.top_row}>
            +/-
          </div>
          <div onClick={handlePercent} className={styles.top_row}>
            %
          </div>
        </div>
        <div className={styles.row}>
          {numbers.slice(0, 3).map((number, i) => {
            return (
              <div key={i} className={styles.number} onClick={() => handleClick(number)}>
                {number}
              </div>
            );
          })}
        </div>
        <div className={styles.row}>
          {numbers.slice(3, 6).map((number, i) => {
            return (
              <div key={i} className={styles.number} onClick={() => handleClick(number)}>
                {number}
              </div>
            );
          })}
        </div>
        <div className={styles.row}>
          {numbers.slice(6, 9).map((number, i) => {
            return (
              <div key={i} className={styles.number} onClick={() => handleClick(number)}>
                {number}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
