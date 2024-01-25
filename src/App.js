import { clear } from "@testing-library/user-event/dist/clear";
import { useState } from "react";

function App() {
  const [showRes, setShowRes] = useState(false);
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  console.log(value)
  const btnStyle = {
    height: "50px",
    width: "50px",
    margin: "5px",
    border: "2px solid black",
    borderRadius: "8px",
  };
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h1>React Calculator</h1>
      <input value={value} type="text" />
      {showRes ? result : ""}
      <div
        style={{
          flexWrap: "wrap",
          height: "500px",
          width: "250px",
          marginTop: "10px",
        }}
      >
        <button style={btnStyle} onClick={() => setValue((prev) => prev + 7)}>
          7
        </button>
        <button style={btnStyle} onClick={() => setValue((prev) => prev + 8)}>
          8
        </button>
        <button style={btnStyle} onClick={() => setValue((prev) => prev + 9)}>
          9
        </button>
        <button style={btnStyle} onClick={() => setValue((prev) => prev + "+")}>
          +
        </button>
        <button style={btnStyle} onClick={() => setValue((prev) => prev + 4)}>
          4
        </button>
        <button style={btnStyle} onClick={() => setValue((prev) => prev + 5)}>
          5
        </button>
        <button style={btnStyle} onClick={() => setValue((prev) => prev + 6)}>
          6
        </button>
        <button style={btnStyle} onClick={() => setValue((prev) => prev + "-")}>
          -
        </button>
        <button style={btnStyle} onClick={() => setValue((prev) => prev + 1)}>
          1
        </button>
        <button style={btnStyle} onClick={() => setValue((prev) => prev + 2)}>
          2
        </button>
        <button style={btnStyle} onClick={() => setValue((prev) => prev + 3)}>
          3
        </button>
        <button
          style={btnStyle}
          onClick={() => {
            setValue((prev) => prev + "*");
            
          }}
        >
          *
        </button>
        <button style={btnStyle} onClick={() => {setValue("");
        setShowRes(false);
        setResult(0);
      }}>
          C
        </button>
        <button style={btnStyle} onClick={() => setValue((prev) => prev + "0")}>0</button>
        <button style={btnStyle} onClick={() =>{
          setShowRes(true);
          if(value !== "") {
            setResult(eval(value))
          }else{
            setResult("Error")
          }

        }}>
          =
        </button>
        <button style={btnStyle} onClick={() => setValue((prev) => prev + "/")}>/</button>
      </div>
    </div>
  );
}

export default App;
