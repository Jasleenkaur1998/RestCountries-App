import React, { useEffect, useState } from "react";

function CountriesApi() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        alignItems: "center",
        justifyItems: "center",
        gap: "20px",
      }}
    >
      {countries.map((country, index) => (
        <div key={index}>
          <img src={country.flags.png} alt="flag" />
          <h3>{country.name.common}</h3>
          <p>
            <strong>Population:</strong> {country.population}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CountriesApi;
