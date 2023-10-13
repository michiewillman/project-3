// import { Link } from "react-router-dom";
import styles from "./ButtonStyles.css";
import Button from "@mui/material/Button";

export const PrimaryButton = ({ text, action, type }) => {
  return (
    <Button onClick={action} style={styles.primaryButton} type={type}>
      {text}
    </Button>
  );
};

export const SecondaryButton = ({ text, action, type }) => {
  return (
    <Button onClick={action} sx={styles.secondaryButton} type={type}>
      {text}
    </Button>
  );
};
