// Use query to get graphQL data
import { useQuery } from "@apollo/client";
import { QUERY_SYMPTOM_LOGS } from "../../utils/queries";
import SymLogCard from "../SymLogCard/SymLogCard";
import Loading from "../Loading/Loading";
import "./SymptomLogList.css";
import { PrimaryButton } from "../Button/Button";
import { useState } from "react";
import SympLogForm from "../SympLogForm/SympLogForm";

const SymptomLogList = (props) => {
  const [isShown, setIsShown] = useState(false);

  const toggleModal = () => {
    setIsShown(!isShown);
  };

  // Get user's symptoms property (as array)
  const { datetime } = props;
  const { loading, data } = useQuery(QUERY_SYMPTOM_LOGS, {
    variables: { datetime },
  });
  const logData = data?.symptomLogs || [];
  const [listState, setListState] = useState(logData);

  const renderParent = () => {
    // setListState(listState);
    console.log(listState);
  };

  return (
    <div className="flexContainer">
      <h2>Symptoms Logged Today</h2>
      {logData.length ? (
        <div className="flex-row">
          {logData.map((log, index) => (
            <SymLogCard
              key={log._id + log.datetime}
              logId={log._id}
              name={log.symptomName}
              severity={log.severity}
              time={log.datetime}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't logged any symptoms yet.</h3>
      )}
      <PrimaryButton text={"Log Symptom"} action={toggleModal} />
      {isShown && (
        <SympLogForm
          renderParent={renderParent}
          shown={isShown}
          setIsShown={setIsShown}
          toggleModal={toggleModal}
        />
      )}
      {/* <Loading loading={loading} /> */}
    </div>
  );
};

export default SymptomLogList;
