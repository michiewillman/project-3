import "./UserMeds.css";

const UserMeds = (props) => {
  const userMeds = props.medications;

  return (
    <>
      <p>Your listed meds are:</p>
      <div className="medContainer">
        <div className="medCard">
          <p className="medName">Prednisone</p>
          <p className="medDose">60 mg</p>
          <button>Take Med</button>
        </div>
        <div className="medCard">
          <p className="medName">Prednisone</p>
          <p className="medDose">60 mg</p>
          <button>Take Med</button>
        </div>
        <div className="medCard">
          <p className="medName">Prednisone</p>
          <p className="medDose">60 mg</p>
          <button>Take Med</button>
        </div>
        <div className="medCard">
          <p className="medName">Prednisone</p>
          <p className="medDose">60 mg</p>
          <button>Take Med</button>
        </div>
      </div>
    </>
  );
};

export default UserMeds;
