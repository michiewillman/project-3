import { useMutation } from "@apollo/client";
import { DELETE_SYMPTOM_LOG } from "../../utils/mutations";
import "../Button/Button.css";
import "../Icons/Icons.css";
import "./SymLogCard.css";
import "../../App.css";

const SymLogCard = (props) => {
  const { logId, name, severity } = props;

  const [deleteSymptomLog, { error }] = useMutation(DELETE_SYMPTOM_LOG);

  const handleDeleteLog = async (logId) => {
    try {
      const { data } = await deleteSymptomLog({
        variables: { logId },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card symptomLogCard">
      <div className="logLeft">
        {" "}
        <p className="symptomLogName">{name}</p>
        <p className="symptomLogSeverity">Severity: {severity}</p>
      </div>
      <div className="logRight">
        <button className="delLogButton" onClick={() => handleDeleteLog(logId)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="icon"
          >
            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SymLogCard;
