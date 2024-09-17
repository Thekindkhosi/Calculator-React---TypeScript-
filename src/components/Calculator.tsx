import Display from "./Display";
import Pad from "./Pad";
import "./Calculator.css";
import { useState } from "react";

const Calculator = () => {
  const [currentEquation, setCurrentEquation] = useState("0");
  const [previousEquation, setPreviousEquation] = useState("");
  const [error, setError] = useState("");

  function onDigit(value: string) {
    if (currentEquation.length >= 5) {
      setError("Chill mate!!");
      return;
    }
    if (currentEquation[0] === "0" && currentEquation.length === 1)
      setCurrentEquation(value);
    else setCurrentEquation(currentEquation + value);
  }

  function onOperator(value: string) {
    if (
      !currentEquation.includes("+") &&
      !currentEquation.includes("-") &&
      !currentEquation.includes("*") &&
      !currentEquation.includes("/")
    ) {
      setCurrentEquation(currentEquation + value);
    } else {
      let separatedEquation = currentEquation.split(/[-+*/]/);
      if (separatedEquation.length === 2 && separatedEquation[1]) {
        let result = (eval(currentEquation) as number).toLocaleString();
        setPreviousEquation(currentEquation);
        setCurrentEquation(result + value);
      } else {
        setCurrentEquation(
          currentEquation.replace(currentEquation.slice(-1), value)
        );
      }
    }
  }

  function onEqual() {
    let separatedEquation = currentEquation.split(/[-+*/]/);
    if (separatedEquation.length === 2 && separatedEquation[1]) {
      let result = (eval(currentEquation) as number).toLocaleString();
      setPreviousEquation(currentEquation);
      setCurrentEquation(result);
    }
  }

  function onDecimal() {
    if (!currentEquation.includes("."))
      setCurrentEquation(currentEquation + ".");
    let separatedEquation = currentEquation.split(/[-+*/]/);
    if (
      separatedEquation.length === 2 &&
      separatedEquation[1] &&
      !separatedEquation[1].includes(".")
    ) {
      setCurrentEquation(currentEquation + ".");
    }
  }

  function onClear() {
    if (currentEquation !== "0") {
      setError("");
      setCurrentEquation("0");
      return;
    } else {
      setPreviousEquation("");
    }
  }

  function onDelete() {
    if (currentEquation.length === 1) setCurrentEquation("0");
    else setCurrentEquation(currentEquation.slice(0, -1));
  }

  return (
    <div className="calculator">
      <Display
        currentEquation={currentEquation}
        previousEquation={previousEquation}
        error={error}
      />
      <Pad
        onClear={onClear}
        onDelete={onDelete}
        onDigit={(value) => {
          onDigit(value);
        }}
        onOperator={(value) => onOperator(value)}
        onEqual={onEqual}
        onDecimal={onDecimal}
      />
    </div>
  );
};

export default Calculator;
