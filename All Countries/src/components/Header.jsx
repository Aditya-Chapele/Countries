import React,{useState,useEffect} from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";


function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
      document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    };

    useEffect(() => {
      document.body.setAttribute('data-theme', 'light');
    }, []);
  return (
    <div className='header sticky top-0 full-width'>
        <div className="flex items-center justify-between py-4 h-[12vh]">
            <h1 className='header-text font-bold'>Where in the world?</h1>
            <div onClick={toggleTheme} className='flex items-center gap-2 header-text-1'>
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
            {isDarkMode ? 'Light Theme' : 'Dark Theme'}</div>
        </div>
    </div>
  )
}

export default Header