import { Link } from "react-router-dom";

const PrimaryButton = ({ text, action }) => {
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

const SecondaryButton = ({ text, action }) => {
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

export default { PrimaryButton, SecondaryButton };
