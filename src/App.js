import React, { useContext } from "react";

import "./App.scss";
import Sidebar from "./Components/Sidebar/Sidebar";
import TicketItem from "./Components/TicketItem/TicketItem";
import FlightPreview from "./Components/FlightPreview/FlightPreview";
import storeGlobalContext from "./Context/storeGlobal-context";
import placeHolder from "./assets/images/loader.gif";
import Logo from "./assets/images/button.gif";

function App() {
  const ctx = useContext(storeGlobalContext);

  return (
    <div className="main-container">
      <h1>
        Flight Search Engine
        <img src={Logo} alt="Logo" width="30" className="logo" />
      </h1>
      <div className="layout">
        <Sidebar />
        <main>
          <FlightPreview />
          {ctx.filterdArray.length < 1 && (
            <img src={placeHolder} alt="Place holder" className="placeholder" />

          )}
          <ul>
            {ctx.filterdArray.map((ticket, index) => {
              return (
                <TicketItem
                  key={index}
                  company={ticket.company}
                  price={ticket.price}
                  id={ticket.id}
                  from={ticket.origin}
                  to={ticket.destination}
                  departTime={ticket.departTime}
                  arrivalTime={ticket.arrivalTime}
                  departDate={ticket.departureDate}
                  animationClass={ticket.animationClass}
                />
              );
            })}
          </ul>
          {ctx.filterdArray.length < 1 && (
            <p className="placeholder__text">No Flights Yet!</p>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
