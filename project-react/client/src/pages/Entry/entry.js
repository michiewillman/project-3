import { Link } from "react-router-dom";
import { PrimaryButton } from "../../components/Button/Button";

const Entry = () => {
  return (
    <div>
      <h1>MG Won't Stop Me</h1>
      <p>
        Being diagnosed with Myasthenia Gravis doesn't have to be the end of
        your story. Your life has just begun.
      </p>
      <p>Start reclaiming your health now and live that life.</p>
      <div>
        <Link to="/login">
          <PrimaryButton text="Login" />
        </Link>
        <Link to="/signup">
          <PrimaryButton text="Sign Up" />
        </Link>
      </div>
    </div>
  );
};

export default Entry;
