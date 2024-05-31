import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import Header from './components/Header';
import data from './data.json';
import CountryPage from './Pages/CountryPage';
import Home from "./Pages/Home";

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    console.log(country)
  };


  return (
    <Router>
      <ReactLenis root>
        <div className='content-grid'>
          <Header />
          <div className="min-h-[88vh]">
            <Routes>
              <Route path='/' element={<Home
                data={data}
                handleCountrySelect={handleCountrySelect}
              />} />
               <Route
                path={'/:countryName'}
                element={<CountryPage data={data} />}
              />
            </Routes>
          </div>
        </div>
      </ReactLenis>
    </Router>
  );
}

export default App;
