import "../Button/Button.css";

const MedLogCard = (props) => {
  const { name, dosage, time, handleDeleteLog } = props;

  return (
    <div className="med-log-card">
      <p className="med-log-time">{time}</p>
      <p className="med-log-name">{name}</p>
      <p className="med-log-dosage">{dosage}</p>
      <button className="delLogButton" onClick={handleDeleteLog}>
        X
      </button>
    </div>
  );
};

export default MedLogCard;
