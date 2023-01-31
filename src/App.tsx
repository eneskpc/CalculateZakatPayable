import TextBox from "./components/TextBox";
import { useState } from "react";

function App() {
  const [amountX, setAmountX] = useState(0);
  const [amountY, setAmountY] = useState(0);

  return (
    <div className="h-screen bg-green-200 flex justify-center items-center">
      <div className="max-w-5xl w-full bg-white p-4 shadow-md rounded-md">
        <div className="flex justify-between items-center">
          <TextBox
            className="px-3"
            value={`${amountX}`}
            placeholder="Type Amount X"
            onInput={(value) => setAmountX(parseFloat(value || "0"))}
          />
          <strong>-</strong>
          <TextBox
            className="px-3"
            value={`${amountY}`}
            placeholder="Type Amount Y"
            onInput={(value) => setAmountY(parseFloat(value || "0"))}
          />
          <div>
            <small className="block">The result of X minus Y</small>
            <strong>{amountX - amountY}</strong>
          </div>
          <div>
            <small className="block">
              The output that had taken 25% of the result{" "}
            </small>
            <strong>{(amountX - amountY) * 0.25}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
