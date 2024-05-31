import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";

function SearchandFilter({ onChange, onSearch }) { // Fixed destructuring of props

    const [selectedContinent, setSelectedContinent] = useState('');

    const handleSelectChange = (event) => {
        const continent = event.target.value;
        setSelectedContinent(continent);
        onChange(continent); // Corrected passing of selected continent to the parent component
    };

    const handleInputChange = (event) => {
      const text = event.target.value;
      
      onSearch(text); // Pass the search text to the parent component
    };

   

  return (
    <div className='flex flex-wrap gap-4 py-6 justify-between sticky top-[12vh]'>
        <div className="flex items-center  gap-4 py-2 px-6 rounded search-input"><IoSearch size={32} /><input className='bg-transparent' type="text" placeholder='Search for a country...' onChange={handleInputChange}/></div>
        <select className='px-4 py-2 rounded search-input' id="continentSelect" value={selectedContinent} onChange={handleSelectChange} >
            <option value="">All</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
  )
}

export default SearchandFilter;
