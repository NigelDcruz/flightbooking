import React, { useState, useContext } from "react";
import storeGlobalContext from "../../../../Context/storeGlobal-context";
import "./SliderFilter.scss";

function SliderFilter() {

  const ctx = useContext(storeGlobalContext);

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5001);

  let handleMinRange = (e) => {
    setMinValue(e.target.value)
    ctx.setFilteredMinPrice(minValue);
    ctx.handelPriceFilter();
    console.log(ctx.filteredMinPrice);
    console.log(ctx.filteredMaxPrice);
  };

  let handleMaxRange = (e) => {
    setMaxValue(e.target.value)
    ctx.setFilteredMaxPrice(maxValue);
    ctx.handelPriceFilter();
  };

  return (
    <div className="slider__container">
      <h3>Minimum Price - {ctx.filteredMinPrice}</h3>
      <div className="field">
        <div className="field__item field__left">0</div>
        <div className="field__item field__right">5000</div>
        <input
          onInput={handleMinRange}
          type="range"
          min="1000"
          max="5000"
          list="tickmarks"
        />
        <datalist id="tickmarks">
          <option value="1000"></option>
          <option value="2000"></option>
          <option value="3000"></option>
          <option value="4000"></option>
          <option value="5000"></option>
        </datalist>
      </div>
      <h3>Maximum Price - {ctx.filteredMaxPrice}</h3>
      <div className="field">
        <div className="field__item field__left">6000</div>
        <div className="field__item field__right">10000</div>
        <input
          onInput={handleMaxRange}
          type="range"
          min="5001"
          max="10000"
          list="tickmarks"
        />
        <datalist id="tickmarks">
          <option value="5001"></option>
          <option value="6000"></option>
          <option value="7000"></option>
          <option value="8000"></option>
          <option value="9000"></option>
          <option value="10000"></option>
        </datalist>
      </div>
    </div>
  );
}

export default SliderFilter;
