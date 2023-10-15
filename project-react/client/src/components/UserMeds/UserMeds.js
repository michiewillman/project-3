import { SmallButton } from "../Button/Button";
import "./UserMeds.css";

const UserMeds = (props) => {
  const userMeds = props.medications;
  // console.log(userMeds);

  return (
    <div className="medContainer">
      {userMeds.length ? (
        <div className="flex-row">
          {userMeds.map((med, index) => (
            <div key={med.name + index} className="medCard">
              <p className="medName">{med}</p>
              <SmallButton text={"Take Med"} />
            </div>
          ))}
        </div>
      ) : (
        <h3>No meds added. Add some now!</h3>
      )}
    </div>
  );
};

export default UserMeds;
