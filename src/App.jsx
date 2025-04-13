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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 p-4">
        <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full space-y-6">
          <h2 className="text-2xl font-bold text-center text-indigo-700">Kalkulator Perkalian</h2>

          <div className="space-y-6">
            <input
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              placeholder="Angka pertama"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <input
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              placeholder="Angka kedua"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          <button onClick={handleMultiply} className="w-full bg-indigo-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition">
            Kalikan
          </button>

          {result !== null && <div className="text-center mt-4 text-indigo-800 text-xl font-semibold bg-indigo-100 py-2 rounded-xl">Hasil: {result}</div>}
        </div>
      </div>
    </>
  );
}

export default App;
