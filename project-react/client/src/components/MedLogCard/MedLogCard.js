import { useMutation } from "@apollo/client";
import { DELETE_MEDICATION_LOG } from "../../utils/mutations";
import "../Button/Button.css";
import "../Icons/Icons.css";
import "./MedLogCard.css";

const MedLogCard = (props) => {
  const { name, dosage, time } = props;

  // Capitalize every word in medicine name
  const words = name.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  //Join all the elements of the array back into a string
  //using a blankspace as a separator
  const displayName = words.join(" ");
  // Get only time & 'am' pr 'pm' from timestamp
  const sections = time.split(" ");
  // Capitalize AM/PM
  const displayTime = sections[4] + " " + sections[5].toUpperCase();

  const [deleteMedicationLog, { error }] = useMutation(DELETE_MEDICATION_LOG);

  const handleDeleteLog = async (logId) => {
    try {
      console.log(typeof logId);
      const { data } = await deleteMedicationLog({
        variables: { logId },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card medLogCard">
      <div className="logLeft">
        <p className="medLogTime">{displayTime}</p>
        <p className="medLogName">{displayName}</p>
        <p className="medLogDosage">{dosage}</p>
      </div>
      <div className="logRight">
        <button className="delLogButton" onClick={handleDeleteLog}>
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

export default MedLogCard;
