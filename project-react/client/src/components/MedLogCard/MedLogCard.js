import { useMutation } from "@apollo/client";
import { DELETE_MEDICATION_LOG } from "../../utils/mutations";

const MedLogCard = (props) => {
  const [deleteMedLog, { error }] = useMutation(DELETE_MEDICATION_LOG);

  const { _id, name, dosage, time } = props;

  const handleDeleteLog = async (logId) => {
    try {
      const { data } = await deleteMedLog({
        variables: { logId },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="med-log-card">
      {/* <input key={key}></input> */}
      <p className="med-log-time">{time}</p>
      <p className="med-log-name">{name}</p>
      <p className="med-log-dosage">{dosage}</p>
      <button
        className="del-log-btn"
        onClick={() => handleDeleteLog(_id)}
      ></button>
    </div>
  );
};

export default MedLogCard;
