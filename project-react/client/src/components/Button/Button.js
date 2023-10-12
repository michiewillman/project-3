// import { Link } from "react-router-dom";
import styles from "./ButtonStyles.js";

export const PrimaryButton = ({ text, action }) => {
  return (
    <div>
      <button onClick={action} style={styles.primaryButton}>
        {text}
      </button>
    </div>
  );
};

export const SecondaryButton = ({ text, action }) => {
  return (
    <div>
      <button onClick={action} style={styles.secondaryButton}>
        {text}
      </button>
    </div>
  );
};
