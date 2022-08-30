import React, { useState } from "react";

const styles = {
  container:
    "mx-auto w-1/4 min-w-[287px] max-w-[350px] h-[30rem] bg-[#e2e8ec] rounded-2xl my-shadow",
  number:
    "text-white rounded-full w-14 h-14 bg-[#737373] flex items-center justify-center m-1 cursor-pointer my-shadow press",
  screen:
    "mx-auto w-3/4 h-1/5 bg-white rounded-2xl relative top-5 flex justify-end items-center px-5 shadow-md",
  number_container: "flex flex-col items-center",
  row: "flex",
  computation: "text-2xl",
  top_row:
    "rounded-full bg-[#d6d6d6] w-14 h-14 flex items-center justify-center cursor-pointer m-1 my-shadow press",
  zero: "text-white rounded-full bg-[#737373] w-28 h-14 flex items-center justify-start cursor-pointer my-1 mx-2 my-shadow press px-5",
  signs: "flex flex-col",
  sign: "rounded-full w-14 h-14 bg-[#FF8AFF] flex items-center justify-center m-1 cursor-pointer my-shadow press",
  buttons_container: "flex justify-center mt-8 h-80",
};

const numbers: number[] = [7, 8, 9, 4, 5, 6, 1, 2, 3];
const signs: string[] = ["/", "x", "-", "+", "="];

const Calculator = () => {
  const [computation, setComputation] = useState<string>("0");
  const [result, setResult] = useState<number>(0);
  const [operator, setOperator] = useState<string>("");

  const handleClick = (number: number) => {
    if (computation.length <= 9)
      setComputation(computation === "0" ? `${number}` : computation.concat(`${number}`));
  };

  const handleClear = () => {
    setComputation("0");
    setOperator("");
    setResult(0);
  };

  const handleNegative = () => {
    setComputation(computation[0] === "-" ? computation.slice(1) : `-${computation}`);
  };

  const handlePercent = () => {
    setComputation((Number(computation) / 100).toString());
  };

  const handlePeriod = () => {
    if (computation.length < 10) setComputation(computation.concat("."));
  };

  const handleSign = (sign: string) => {
    if (sign === "=") {
      if (operator === "+") {
        if (`${result + Number(computation)}`.length <= 10) {
          setComputation(`${result + Number(computation)}`);
        } else {
          const length = `${result + Number(computation)}`.length;
          const answer = `${result + Number(computation)}`;
          const sliced = answer.slice(0, 7) + "e";
          const concatStr = sliced.slice(0, 1) + "." + sliced.slice(1);
          const final = concatStr + (length - 1).toString();
          setComputation(final);
        }
      } else if (operator === "-") {
        setComputation(`${result - Number(computation)}`);
      } else if (operator === "x") {
        if (`${result * Number(computation)}`.length <= 10) {
          setComputation(`${result * Number(computation)}`);
        } else {
          const length = `${result * Number(computation)}`.length;
          const answer = `${result * Number(computation)}`;
          const sliced = answer.slice(0, 7) + "e";
          const concatStr = sliced.slice(0, 1) + "." + sliced.slice(1);
          const final = concatStr + (length - 1).toString();
          setComputation(final);
        }
      } else if (operator === "/") {
        setComputation(`${result / Number(computation)}`);
      }
      setOperator("");
    } else {
      setResult(Number(computation));
      setOperator(sign);
      setComputation("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.screen}>
        <div className={styles.computation}>{computation}</div>
      </div>
      <div className={styles.buttons_container}>
        <div className={styles.number_container}>
          <div className={styles.row}>
            <div onClick={handleClear} className={styles.top_row}>
              AC
            </div>
            <div onClick={handleNegative} className={styles.top_row}>
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
          <div className={styles.row}>
            <div onClick={() => handleClick(0)} className={styles.zero}>
              0
            </div>
            <div onClick={handlePeriod} className={styles.number}>
              .
            </div>
          </div>
        </div>
        <div className={styles.signs}>
          {signs.map((sign, i) => {
            return (
              <div key={i} onClick={() => handleSign(sign)} className={styles.sign}>
                {sign}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
