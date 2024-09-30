import { Link } from "react-router-dom";
import styles from "./Cityitem.module.css";
import { useCities } from "./contexts/CitiesContexts";
//import PropTypes from "prop-types";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function Cityitem({ city }) {
  const { currentCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active "] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

// Cityitem.propTypes = {
//   city: PropTypes.arrayOf(PropTypes.string).isRequired, // Validating cities as an array of strings
//   // cityName: PropTypes.arrayOf(PropTypes.string).isRequired, // Validating cities as an array of strings
//   // emoji: PropTypes.arrayOf(PropTypes.string).isRequired, // Validating cities as an array of strings
//   // date: PropTypes.arrayOf(PropTypes.string).isRequired, // Validating cities as an array of strings
// };
export default Cityitem;
