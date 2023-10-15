import { SmallButton } from "../Button/Button";
import "./UserMeds.css";
import firstToUppercase from "../../utils/firstToUppercase";
import Grid from "@mui/material/Grid"; // Grid version 1
import AddBoxIcon from "@mui/icons-material/AddBox";

const UserMeds = (props) => {
  const userMeds = props.medications;
  // console.log(userMeds);

  return (
    <Grid>
      <div className="">
        <Grid container>
          {userMeds.length &&
            userMeds.map((med, index) => (
              <Grid key={med + index}>
                <div className="medCard">
                  <p className="medName">{firstToUppercase(med)}</p>
                  <SmallButton text={"Take Med"} />
                </div>
              </Grid>
            ))}
          <Grid className="addMedCard">
            <AddBoxIcon fontSize="large" className="addIcon"/>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default UserMeds;
