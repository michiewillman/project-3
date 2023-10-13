// import { Link } from "react-router-dom";
import styles from "./ButtonStyles.css";
// import Button from "@mui/material/Button";

export const PrimaryButton = ({ text, action, type }) => {
  return (
    <button onClick={action} style={styles.primaryButton} type={type}>
      {text}
    </button>
  );
};

export const SecondaryButton = ({ text, action, type }) => {
  return (
    <button onClick={action} sx={styles.secondaryButton} type={type}>
      {text}
    </button>
  );
};
