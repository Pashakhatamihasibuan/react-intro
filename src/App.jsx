import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleMultiply = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (!isNaN(number1) && !isNaN(number2)) {
      setResult(number1 * number2);
    } else {
      setResult("Input tidak valid");
    }
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Kalkulator Perkalian</h2>

          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Angka pertama"
            style={{ ...styles.input, marginBottom: "20px" }}
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Angka kedua"
            style={{ ...styles.input, marginBottom: "20px" }}
          />

          <button onClick={handleMultiply} style={styles.button}>
            Kalikan
          </button>

          {result !== null && <div style={styles.result}>Hasil: {result}</div>}
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "30px",
    textAlign: "center",
    color: "#4338ca",
  },
  input: {
    padding: "12px 16px",
    fontSize: "16px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    backgroundColor: "#4f46e5",
    color: "white",
    padding: "12px",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  result: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "600",
    color: "#1e3a8a",
    background: "#e0e7ff",
    padding: "10px",
    borderRadius: "10px",
  },
};

export default App;
