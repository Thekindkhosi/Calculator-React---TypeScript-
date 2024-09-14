import "./Display.css";

const Display = () => {
  return (
    <>
      <div className="display-container">
        <p className="previous-equation">123,456 x 2</p>
        <p className="current-equation">{123456 * 2}</p>
      </div>
    </>
  );
};

export default Display;
