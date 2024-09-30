import styles from "./CountryItem.module.css";
//import PropTypes from "prop-types";

function Countryitem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

// Countryitem.propTypes = {
//   country: PropTypes.string, // Declare 'country' as a required string
// };
export default Countryitem;
