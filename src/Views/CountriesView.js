import React, { useState, useEffect } from "react";
import Card from "../components/Card/Card";

//services
import { getCountries } from "../services/CountriesServices";
function CountriesView() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries()
      .then((result) => {
        setCountries(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const showCount = () => {
    const newC = countries.map((pais) => {
      return (
        <Card
          titulo={pais.name.common}
          descripcion={pais.region}
          buttonText="incrementar"
          buttonText_less="desminuir"
        />
      );
    });
    return newC;
  };

  return <div className="countries-view d-flex flex-wrap">{showCount()}</div>;
}

export default CountriesView;
