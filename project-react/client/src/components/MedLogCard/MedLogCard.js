import { useMutation } from "@apollo/client";
import { DELETE_MEDICATION_LOG } from "../../utils/mutations";

const MedLogCard = (med) => {
  const [deleteMedLog, { error }] = useMutation(DELETE_MEDICATION_LOG);

  const { _id, medicationName, datetime, dosage } = med;

  // const hours = getHours(datetime);
  // const mins = getMinutes(datetime);
  // const time = hours + mins

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
      <p className="med-log-time">{datetime}</p>
      <p className="med-log-name">{medicationName}</p>
      <p className="med-log-dosage">{dosage}</p>
      <button
        className="del-log-btn"
        // onClick={() => handleDeleteLog(logId)}
      ></button>
    </div>
  );
};

export default MedLogCard;
