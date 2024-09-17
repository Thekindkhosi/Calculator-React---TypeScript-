import "./Display.css";

interface Props {
  currentEquation: string;
  previousEquation: string;
  error: string;
}

const Display = ({ currentEquation, previousEquation, error }: Props) => {
  return (
    <>
      <div className="display-container">
        <p className="previous-equation">{previousEquation}</p>
        <p className="current-equation">{error ? error : currentEquation}</p>
      </div>
    </>
  );
};

export default Display;
