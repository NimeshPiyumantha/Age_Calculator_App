import { useState } from "react";
import { PropTypes } from "prop-types";

const AgeCalculatorForm = ({ calculateAge }) => {
  const [birthDate, setBirthDate] = useState("");
  console.log(birthDate);

  const handleChangeDate = (e) => {
    setBirthDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateAge(birthDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={birthDate} type="date" onChange={handleChangeDate} />
      <button disabled={!birthDate} type="submit">
        Calculate Age
      </button>
    </form>
  );
};

AgeCalculatorForm.propTypes = {
  calculateAge: PropTypes.func.isRequired,
}

export default AgeCalculatorForm;
