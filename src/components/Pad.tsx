import "./Pad.css";

interface Props {
  onDigit: (value: string) => void;
  onOperator: (value: string) => void;
  onEqual: () => void;
  onDecimal: () => void;
  onClear: () => void;
  onDelete: () => void;
}

const Pad = ({
  onDigit,
  onDecimal,
  onEqual,
  onOperator,
  onClear,
  onDelete,
}: Props) => {
  let buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  const parseValue = (value: string) => {
    if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].indexOf(value) >= 0)
      onDigit(value);
    else if (["+", "-", "*", "/"].indexOf(value) >= 0) onOperator(value);
    else if (value === "=") onEqual();
    else onDecimal();
  };

  return (
    <>
      <div className="pad-container">
        <button className="two-span" onClick={onClear}>
          C
        </button>
        <button className="two-span" onClick={onDelete}>
          DEL
        </button>
        {buttons.map((b, index) => (
          <button
            key={index}
            onClick={(event) =>
              parseValue((event.target as HTMLInputElement).innerText)
            }
            value={b}
          >
            {b}
          </button>
        ))}
      </div>
    </>
  );
};

export default Pad;
