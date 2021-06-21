import React, { useContext } from "react";
import storeGlobalContext from "../../Context/storeGlobal-context";
import "./FlightPreview.scss";

function FlightPreview() {
  const ctx = useContext(storeGlobalContext);
  return (
    <div className="flight__preview">
      {!ctx.filterdValues.originCity ? (
        <h2>Where would you like to go?</h2>
      ) : (
        <h2>
          {`${ctx.filterdValues.originCity} > `}
          {ctx.filterdValues.destinationCity}
          {ctx.formTypeReturn ? ` > ${ctx.filterdValues.originCity}` : ""}
        </h2>
      )}
      <div>
        {ctx.filterdValues.departureDate && (
          <p> <strong>Depart:</strong> {ctx.filterdValues.departureDate}</p>
        )}
        {ctx.filterdValues.returnDate && (
          <p> <strong>Return:</strong> {ctx.filterdValues.returnDate}</p>
        )}
      </div>
    </div>
  );
}

export default FlightPreview;
