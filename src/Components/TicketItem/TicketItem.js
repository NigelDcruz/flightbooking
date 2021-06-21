import React, { useContext } from "react";
import storeGlobalContext from "../../Context/storeGlobal-context";

import "./TicketItem.scss";

// import airIndia from './TicketItemPlaceholder/airIndia.jpg'
import planeAI from "./TicketItemPlaceholder/AI.png";
import planeIN from "./TicketItemPlaceholder/ind.png";
import planeSJ from "./TicketItemPlaceholder/SG.png";

function TicketItem(props) {
  const ctx = useContext(storeGlobalContext);

  let imgUrl = "";
  if (props.company === "Spice Jet") {
    imgUrl = planeSJ;
  }
  if (props.company === "Indigo") {
    imgUrl = planeIN;
  }
  if (props.company === "Air India") {
    imgUrl = planeAI;
  }

  return (
    <li className={`ticket ${props.animationClass}`}>
      <div className="ticket__left">
        <h2 className="color-blue">&#8377; {props.price}</h2>
        <div className="ticket__left-col-2">
          <div className="ticket__details">
            <p className="ticket_id">AI-{props.id}</p>
            <p className="color-green city">
              <strong>
                {props.from} &gt; {props.to}
              </strong>
            </p>
            <p>
              <strong>Depart:</strong> {props.departTime}
            </p>
            <p>
              <strong>Arrive:</strong> {props.arrivalTime}
            </p>
          </div>
          {ctx.formTypeReturn && ctx.filterdValues.returnDate && (
            <div className="ticket__details">
              <p className="ticket_id">AI-{props.id}</p>
              <p className="color-green city">
                <strong>
                  {props.to} &gt; {props.from}
                </strong>
              </p>
              <p>
                <strong>Depart:</strong> {props.arrivalTime}
              </p>
              <p>
                <strong>Arrive:</strong> {props.departTime}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="ticket__right">
        <img src={imgUrl} alt={props.company} className="ticket__image" />
        <button className="ticket__cta">Book a flight</button>
      </div>
    </li>
  );
}

export default TicketItem;
