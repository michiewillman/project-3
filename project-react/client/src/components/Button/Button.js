import { Link } from "react-router-dom";

export const PrimaryButton = ({ text, action }) => {
  return (
    <div>
      <Link>
        <button className="primaryButton" onClick={action}>
          {text}
        </button>
      </Link>
    </div>
  );
};

export const SecondaryButton = ({ text, action }) => {
  return (
    <div>
      <Link>
        <button className="secondaryButton" onClick={action}>
          {text}
        </button>
      </Link>
    </div>
  );
};
