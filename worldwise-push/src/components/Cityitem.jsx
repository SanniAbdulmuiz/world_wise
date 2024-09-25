import styles from "./Cityitem.module.css";
import PropTypes from "prop-types";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function Cityitem({ city }) {
  const { cityName, emoji, date } = city;

  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatDate(date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

Cityitem.propTypes = {
  city: PropTypes.arrayOf(PropTypes.string).isRequired, // Validating cities as an array of strings
  cityName: PropTypes.arrayOf(PropTypes.string).isRequired, // Validating cities as an array of strings
  emoji: PropTypes.arrayOf(PropTypes.string).isRequired, // Validating cities as an array of strings
  date: PropTypes.arrayOf(PropTypes.string).isRequired, // Validating cities as an array of strings
};
export default Cityitem;
