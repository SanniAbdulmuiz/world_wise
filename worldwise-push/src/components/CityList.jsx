import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Cityitem from "./Cityitem";
import PropTypes from "prop-types";
import Message from "./Message";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <Cityitem city={city} key={city.id} />
      ))}
    </ul>
  );
}
CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired, // Validating cities as an array of strings
  isLoading: PropTypes.bool.isRequired, // isLoading should be a boolean // isLoading should be a boolean // Validating cities as an array of strings
  message: PropTypes.string, // Ensure message is a string // Validating cities as an array of strings
};
export default CityList;
