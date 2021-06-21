import React, { useState } from "react";

import Tickets from "../data";

const storeGlobal = React.createContext({
  formTypeReturn: false,
  filteredMinPrice: 0,
  filteredMaxPrice: 0,
  handleChangeFormType: (bool) => {},
  handelFilterValues: (filterValuse) => {},
  handelPriceFilter: () => {},
  setFilteredMinPrice: (priceMin) => {},
  setFilteredMaxPrice: (priceMax) => {},
  filterdArray: [],
  filterdValues: {},
});

export const StoreGlobalContextProvider = (props) => {

  let [formTypeReturn, setformTypeReturn] = useState(false);
  let [filterdValues, setFilteredValues] = useState({});
  let [filterdArray, setFilteredArray] = useState([]);
  let [filteredMinPrice, setFilteredMinPrice] = useState(0);
  let [filteredMaxPrice, setFilteredMaxPrice] = useState(10000);

  let handleChangeFormType = (bool) => {
    setformTypeReturn(bool);
  };

  let splitDate = (element) => {
    let transformedDate = [element.split(", ")];
    transformedDate = transformedDate[0][2];
    return transformedDate;
  };

  let transformArray = (newArray) => {
    const transformedArray = newArray.map((el) => {
      let transformedArray = {
        ...el,
        animationClass: 'ticket--animate',
        arrivalTime: splitDate(el.arrivalDate),
        departTime: splitDate(el.departureDate),
      };

      return transformedArray;
    });

    return transformedArray
  }

  let handelFilterValues = (filteredValues) => {
    setFilteredValues(filteredValues);
  
    let origin = filteredValues.originCity;
    let destination = filteredValues.destinationCity;

    const newArray = Tickets.filter((el) => {
      return el.origin === origin && el.destination === destination;
    });

    setFilteredArray(transformArray(newArray));
  };

  let handelPriceFilter = () => {
    
   let priceMin = filteredMinPrice;
   let priceMax = filteredMaxPrice;

    setFilteredValues(filterdValues);
  
    let origin = filterdValues.originCity;
    let destination = filterdValues.destinationCity;

    const newArray = Tickets.filter((el) => {
      return el.origin === origin && el.destination === destination && (el.price >= priceMin && el.price <= priceMax);
    });

    setFilteredArray(transformArray(newArray));
    
  }

  return (
    <storeGlobal.Provider
      value={{
        formTypeReturn: formTypeReturn,
        handleChangeFormType: handleChangeFormType,
        handelFilterValues: handelFilterValues,
        setFilteredMinPrice: setFilteredMinPrice,
        setFilteredMaxPrice: setFilteredMaxPrice,
        handelPriceFilter: handelPriceFilter,
        filterdArray: filterdArray,
        filterdValues: filterdValues,
        filteredMinPrice: filteredMinPrice,
        filteredMaxPrice: filteredMaxPrice,
      }}
    >
      {props.children}
    </storeGlobal.Provider>
  );
};

export default storeGlobal;
