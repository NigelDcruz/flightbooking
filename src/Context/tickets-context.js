import React, { useState } from "react";

const ticketContext = React.createContext({
  ticketReturn: false,
  handleChangeticket: (element) => {}
});

export const TicketContextProvider = (props) => {
  let [ticketReturn, setticketReturn] = useState(false);

  
  let handleChangeticket = (bool) => {
    console.log('cli');
    setticketReturn(bool)
  };

  return (
    <ticketContext.Provider
      value={{
        ticketReturn: ticketReturn,
        handleChangeticket: handleChangeticket,
      }}
    >
      {props.children}
    </ticketContext.Provider>
  );
};

export default ticketContext;
