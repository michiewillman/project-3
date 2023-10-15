import { SmallButton } from "../Button/Button";
import "./UserMeds.css";

const UserMeds = (props) => {
  const userMeds = props.medications;

  return (
    <>
      <div className="medContainer">
        <div className="medCard">
          <p className="medName">Prednisone</p>
          <p className="medDose">60 mg</p>
          <SmallButton text={"Take Med"} />
        </div>
        <div className="medCard">
          <p className="medName">Prednisone</p>
          <p className="medDose">60 mg</p>
          <SmallButton text={"Take Med"} />
        </div>
        <div className="medCard">
          <p className="medName">Prednisone</p>
          <p className="medDose">60 mg</p>
          <SmallButton text={"Take Med"} />
        </div>
        <div className="medCard">
          <p className="medName">Prednisone</p>
          <p className="medDose">60 mg</p>
          <SmallButton text={"Take Med"} />
        </div>
      </div>
    </>
  );
};

export default UserMeds;
