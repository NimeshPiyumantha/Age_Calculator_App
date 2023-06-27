import { useState } from "react";

const AgeCalculatorForm = () => {
  const [birthDate, setBirthDate] = useState("");
  console.log(birthDate);

  const handleChangeDate = (e) => {
    setBirthDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("button sibmit");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={birthDate} type="date" onChange={handleChangeDate} />
      <button type="submit">Calculate Age</button>
    </form>
  );
};

export default AgeCalculatorForm;
