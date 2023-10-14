import { useMutation } from "@apollo/client";
import { DELETE_SYMPTOM_LOG } from "../../utils/mutations";

const SymLogCard = (props) => {
  const [deleteSymLog, { error }] = useMutation(DELETE_SYMPTOM_LOG);

  const { _id, name, severity, time } = props;

  const handleDeleteLog = async (logId) => {
    try {
      const { data } = await deleteSymLog({
        variables: { logId },
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="sym-log-card">
      {/* <input key={key}></input> */}
      <p className="sym-log-time">{time}</p>
      <p className="sym-log-name">{name}</p>
      <p className="sym-log-severity">{severity}</p>
      <button
        className="del-log-btn"
        onClick={() => handleDeleteLog(_id)}
      ></button>
    </div>
  );
};

export default SymLogCard;
