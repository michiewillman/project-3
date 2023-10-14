import "../Button/Button.css";

const SymLogCard = (props) => {
  const { _id, name, severity, time, handleDeleteLog } = props;

  return (
    <div className="sym-log-card">
      <p className="sym-log-time">{time}</p>
      <p className="sym-log-name">{name}</p>
      <p className="sym-log-severity">{severity}</p>
      <button className="delLogButton" onClick={handleDeleteLog}>
        X
      </button>
    </div>
  );
};

export default SymLogCard;
