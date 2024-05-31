import React from "react";
import { useParams, Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

function CountryPage({ data }) {
  const { countryName } = useParams();
  const decodedCountryName = decodeURIComponent(countryName);
  const country = data.find(
    (c) => c.name.toLowerCase() === decodedCountryName.toLowerCase()
  );

  if (!country) {
    return (
      <div className="text-white text-5xl grid place-content-center h-full">
        Country not found
      </div>
    );
  }

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };


  return (
    <div className="country-card py-8">
      <Link
        to="/"
        className="shadow-lg shadow-slate-800 py-2 px-4 rounded flex items-center w-fit gap-1"
      >
        <IoIosArrowRoundBack size={32} />
        Back to Home
      </Link>
      <div className="mt-8 grid md:grid-cols-2 items-start gap-8">
        <img
          src={country.flags.svg}
          alt={`${country.name}-flag`}
          className="aspect-[3/2] w-full sm:w-[75%] mx-auto object-cover rounded"
        />
        <div className="info ">
          <h1 className="font-bold text-3xl mb-6">{country.name}</h1>
          <div className="grid md:grid-cols-2">
            <div className="col1 mb-6">
              <p>Country Name: {country.nativeName}</p>
              <p>Population: {formatNumberWithCommas(country.population)}</p>
              <p>Region: {country.region}</p>
              <p>Sub Region: {country.subregion}</p>
              <p>Capital: {country.capital}</p>
            </div>
            <div className="col2">
              <p>Top Level Domain: {country.topLevelDomain}</p>
              <p>
                Currencies:{" "}
                {country.currencies.map((curr) => curr.name).join(", ")}
              </p>
              <p>
                Languages:{" "}
                {country.languages.map((lang) => lang.name).join(", ")}
              </p>
            </div>
          </div>
          <p className="flex gap-x-4 gap-y-2 items-center flex-wrap">
            Border Countries:
            <div className="flex gap-2 flex-wrap">
              {country.borders?.length > 0 ? (
                <div className="flex gap-2 flex-wrap">
                  {country.borders.map((bor, index) => {
                    const matchingCountry = data.find(
                      (country) => country.alpha3Code === bor
                    );
                    if (matchingCountry) {
                      return (
                        <Link
                          to={`/${matchingCountry.name}`}
                          className="p-2 shadow-lg shadow-slate-800  rounded"
                          key={index}
                        >
                          {bor}
                        </Link>
                      );
                    }
                    return null; // Return null if no matching country is found
                  })}
                </div>
              ) : (
                <p>no border sharing countries</p>
              )}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
