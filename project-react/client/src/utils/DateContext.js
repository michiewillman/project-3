import React, { useState } from "react";

export const DateContext = React.createContext();

const DateProvider = ({ children }) => {
  const [date, setDate] = useState(new Date());

  return (
    <DateContext.Provider value={{ date, setDate }}>
      {children}
    </DateContext.Provider>
  );
};

export default DateProvider;
