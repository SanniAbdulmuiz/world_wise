import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Countryitem from "./Countryitem";
//import PropTypes from "prop-types";
import Message from "./Message";
import { useCities } from "./contexts/CitiesContexts";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((accumulator, currCity) => {
    if (!accumulator.map((el) => el.country).includes(currCity.country))
      return [
        accumulator,
        { country: currCity.country, emoji: currCity.emoji },
      ];
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <Countryitem country={country} key={country.id} />
      ))}
    </ul>
  );
}
// CountryList.propTypes = {
//   cities: PropTypes.arrayOf(
//     PropTypes.shape({
//       country: PropTypes.string.isRequired, // Validate that cities is an array of objects with name as a string
//     })
//   ).isRequired,
//   isLoading: PropTypes.bool.isRequired, // isLoading should be a boolean // isLoading should be a boolean // Validating cities as an array of strings
//   message: PropTypes.string, // Ensure message is a string // Validating cities as an array of strings
// };
export default CountryList;
