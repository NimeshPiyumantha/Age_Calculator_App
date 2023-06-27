import AgeCalculatorForm from "./components/AgeCalculatorForm";
import AgeResult from "./components/AgeResult";

function App() {

    const calculateAge = () => {
      console.log("cal age");
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
