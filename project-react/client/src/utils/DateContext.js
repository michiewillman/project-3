import React, { useState } from "react";

export const DateContext = React.createContext();

const DateProvider = ({ children }) => {
  const initialDate = new Date();
  initialDate.setHours(0, 0, 0, 0);

  const [date, setDate] = useState(initialDate);

  return (
    <DateContext.Provider value={{ date, setDate }}>
      {children}
    </DateContext.Provider>
  );
};

export default DateProvider;
