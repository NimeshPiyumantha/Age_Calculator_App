import { useState } from "react";
import AgeCalculatorForm from "./components/AgeCalculatorForm";
import AgeResult from "./components/AgeResult";

function App() {
  const [age,setAge]=useState(null);

    const calculateAge = (birthDate) => {
     const today = new Date();
     const birthDateObj = new Date(birthDate);
     console.log(today, birthDateObj);
    }

  return (
    <>
      <h1>Age Calculator</h1>
      <AgeCalculatorForm calculateAge={calculateAge} />
      <AgeResult/>
    </>
  );
}

export default App;
