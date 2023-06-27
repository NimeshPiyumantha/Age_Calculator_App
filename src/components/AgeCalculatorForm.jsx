import { useState } from "react";

const AgeCalculatorForm = () => {
  const [birthDate, setBirthDate] = useState("");

  const handleChangeDate = (e) => {
    setBirthDate(e.target.value);
  };

  return (
    <form>
      <input value={birthDate} type="date" onChange={handleChangeDate} />
      <button>Calculate Age</button>
    </form>
  );
};

export default AgeCalculatorForm;
