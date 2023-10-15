import { SmallButton } from "../Button/Button";
import "./UserMeds.css";
import firstToUppercase from "../../utils/firstToUppercase";
import Grid from "@mui/material/Grid"; // Grid version 1

const UserMeds = (props) => {
  const userMeds = props.medications;
  // console.log(userMeds);

  return (
    <Grid>
      <div className="">
        {userMeds.length ? (
          <Grid container>
            {userMeds.map((med, index) => (
              <Grid key={med + index}>
                <div className="medCard">
                  <p className="medName">{firstToUppercase(med)}</p>
                  <SmallButton text={"Take Med"} />
                </div>
              </Grid>
            ))}
          </Grid>
        ) : (
          <h3>No meds added. Add some now!</h3>
        )}
      </div>
    </Grid>
  );
};

export default UserMeds;
