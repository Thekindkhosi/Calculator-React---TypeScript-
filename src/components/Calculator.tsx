import Display from "./Display";
import Pad from "./Pad";
import "./Calculator.css";

const Calculator = () => {
  return (
    <div className="calculator">
      <Display />
      <Pad />
    </div>
  );
};

export default Calculator;
