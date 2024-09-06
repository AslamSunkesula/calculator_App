import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  function displayValue(event) {
    const clickedValue = event.target.value;
    setValue((prevValue) => prevValue + clickedValue); 
  }

  function clearDisplay() {
    setValue(""); 
  }

  function calculateResult() {
    try {
      setValue(eval(value)); 
    } catch (error) {
      setValue("Error"); 
    }
  }

  return (
    <div className="container">
      <header className="calculator">
        <form>
          <div className="display">
            <input type="text" value={value} readOnly />{" "}
          </div>
          <div>
            <input type="button" value="AE" onClick={displayValue} />
            <input type="button" value="DE" onClick={clearDisplay} />{" "}
            <input type="button" value="." onClick={displayValue} />
            <input type="button" value="/" onClick={displayValue} />
          </div>
          <div>
            <input type="button" value="7" onClick={displayValue} />
            <input type="button" value="8" onClick={displayValue} />
            <input type="button" value="9" onClick={displayValue} />
            <input type="button" value="*" onClick={displayValue} />
          </div>
          <div>
            <input type="button" value="4" onClick={displayValue} />
            <input type="button" value="5" onClick={displayValue} />
            <input type="button" value="6" onClick={displayValue} />
            <input type="button" value="+" onClick={displayValue} />
          </div>
          <div>
            <input type="button" value="1" onClick={displayValue} />
            <input type="button" value="2" onClick={displayValue} />
            <input type="button" value="3" onClick={displayValue} />
            <input type="button" value="-" onClick={displayValue} />{" "}

          </div>
          <div>
            <input type="button" value="00" onClick={displayValue} />
            <input type="button" value="0" onClick={displayValue} />
            <input
              type="button"
              value="="
              className="equal"
              onClick={calculateResult}
            />{" "}
            {/* Calculate result */}
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
