import { useMutation } from "@apollo/client";
import { DELETE_SYMPTOM_LOG } from "../../utils/mutations";
import "../Button/Button.css";
import "../Icons/Icons.css";
import "./SymLogCard.css";
import "../../App.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

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
          <CloseOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default SymLogCard;
