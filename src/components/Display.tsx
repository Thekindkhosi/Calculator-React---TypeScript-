import "./Display.css";

interface Props {
  currentEquation: string;
  previousEquation: string;
}

const Display = ({ currentEquation, previousEquation }: Props) => {
  return (
    <>
      <div className="display-container">
        <p className="previous-equation">{previousEquation}</p>
        <p className="current-equation">{currentEquation}</p>
      </div>
    </>
  );
};

export default Display;
