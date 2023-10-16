import { SmallButton } from "../Button/Button";
import { useState } from "react";
import MedLogForm from "../MedLogForm/MedLogForm";
import firstToUppercase from "../../utils/firstToUppercase";
import Grid from "@mui/material/Grid"; // Grid version 1
import AddBoxIcon from "@mui/icons-material/AddBox";
import "./UserMeds.css";

const UserMeds = (props) => {
  const userMeds = props.medications;

  const [isShown, setIsShown] = useState(false); // Modal for MedLogForm showing or not
  const [selectedMedication, setSelectedMedication] = useState(""); // Selected medication to render in the form

  const toggleModal = (medName) => {
    setSelectedMedication(medName); // Set the selected medication before toggling the modal
    setIsShown(!isShown);
  };

  return (
    <>
      <Grid>
        <div className="">
          <Grid container>
            {userMeds.length &&
              userMeds.map((med, index) => (
                <Grid key={med + index}>
                  <div className="medCard">
                    <p className="medName">{firstToUppercase(med)}</p>
                    <SmallButton
                      text={"Take Med"}
                      action={() => toggleModal(firstToUppercase(med))}
                    />
                  </div>
                </Grid>
              ))}
            <Grid className="addMedCard">
              <AddBoxIcon
                fontSize="large"
                className="addIcon"
                onClick={() => toggleModal("")} // Clear selectedMedication for the "Add Med" button
              />
            </Grid>
          </Grid>
        </div>
      </Grid>
      {isShown && (
        <MedLogForm
          // Pass the selected medication as a prop to MedLogForm
          selectedMedication={selectedMedication}
          shown={isShown}
          setIsShown={setIsShown}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};

export default UserMeds;
