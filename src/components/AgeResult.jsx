import PropTypes from "prop-types";

const AgeResult = ({ age }) => {
  return (
    <h4 className="mt-10 lg:text-3xl font-semibold text-gray-700 dark:text-white sm:text-lg font-Pooppins">
      You are {age.years} Years {age.months} Months and {age.days} Days old.
    </h4>
  );
};

AgeResult.propTypes = {
  age: PropTypes.shape({
    years: PropTypes.number.isRequired,
    months: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
  }),
};

export default AgeResult;
