import styles from "./Message.module.css";
import PropTypes from "prop-types";

function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired, // Ensure message is a string // Validating cities as an array of strings
};
export default Message;
