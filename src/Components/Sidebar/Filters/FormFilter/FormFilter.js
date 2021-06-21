import React, { useRef, useContext, useState } from "react";
import storeGlobalContext from "../../../../Context/storeGlobal-context";
import "./FormFilter.scss";

function FotmFilter() {
  const ctx = useContext(storeGlobalContext);
  let originCity = useRef();
  let destinationCity = useRef();
  let departureDate = useRef();
  let returnDate = useRef();

  const [isValidDestination, setIsValidDestination] = useState(true);

  let handleFormType = (e) => {
    if (e.target.innerText === "Return") {
      ctx.handleChangeFormType(true);
    } else {
      ctx.handleChangeFormType(false);
    }
  };

  let handleFilterFlights = (e) => {
    e.preventDefault();
    let filters = {
      originCity: originCity.current.value,
      destinationCity: destinationCity.current.value,
      departureDate: departureDate.current.value,
      returnDate: ctx.formTypeReturn ? returnDate.current.value : null,
    };

    if (filters.originCity === filters.destinationCity) {
      setIsValidDestination(false);
    } else{
      ctx.handelFilterValues(filters);
      setIsValidDestination(true);
    }


  };

  return (
    <div className="form__container">
      <div className="form__types">
        <button
          className={ctx.formTypeReturn ? "" : "active"}
          onClick={handleFormType}
        >
          One Way
        </button>
        <button
          className={ctx.formTypeReturn ? "active" : ""}
          onClick={handleFormType}
        >
          Return
        </button>
      </div>
      <form onSubmit={handleFilterFlights}>
        <label htmlFor="originCity">Enter Origin City</label>
        <select ref={originCity} name="originCity" id="originCity" required>
          <option value="GOA">GOA</option>
          <option value="PNQ">PNQ</option>
          <option value="DEL">DEL</option>
          <option value="BLR">BLR</option>
        </select>
        <label htmlFor="destinationCity">Enter Destination City</label>
        <select
          ref={destinationCity}
          name="destinationCity"
          id="destinationCity"
          required={true}
        >
          <option value="PNQ">PNQ</option>
          <option value="GOA">GOA</option>
          <option value="DEL">DEL</option>
          <option value="BLR">BLR</option>
        </select>
        {!isValidDestination && <p className="error">Destination can't be same as origin.</p>}
        <label htmlFor="departureDate">Departure Date</label>
        <input ref={departureDate} id="departureDate" type="date" required />
        {ctx.formTypeReturn && (
          <>
            <label htmlFor="returnDate">Return Date</label>
            <input ref={returnDate} id="returnDate" type="date" required/>
          </>
        )}
        <label htmlFor="passengers">Passengers</label>
        <select name="passengers" id="passengers">
          <option value="">Passengers</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value=""> &gt; 5</option>
        </select>

        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default FotmFilter;
