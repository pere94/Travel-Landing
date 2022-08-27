import React from "react";
import { AppContext } from "../context/AppContext";
import { MdTravelExplore } from "react-icons/md";

import SwitchDarkMode from '../components/SwitchDarkMode/SwitchDarkMode';


function Nav({navLinks}) {
  const [toggle, setToggle] = React.useState(true);
  const {darkMode, setDarkMode} = React.useContext(AppContext);
  
  const [locationPlace, setLocationPlace] = React.useState(true);
  const [staysPlace, setStaysPlace] = React.useState(false);
  const [faqsPlace, setFaqsPlace] = React.useState(false);
  const [aboutUs, setAboutUs] = React.useState(false);

  const handleDarkModeSwitch = () => {
    setDarkMode(!darkMode);
  };

  React.useEffect(() => {
    window.onscroll = () => {
      const staysDespl = document.getElementById('stays').offsetTop; 
      const faqsDespl = document.getElementById('faqs').offsetTop; 

      if (document.documentElement.scrollTop > staysDespl && document.documentElement.scrollTop < faqsDespl) {
        setStaysPlace(true);
        setLocationPlace(false);
        setFaqsPlace(false);
        setAboutUs(false);
      } else if (document.documentElement.scrollTop > faqsDespl && document.documentElement.scrollTop < 2600) {
        setFaqsPlace(true);
        setStaysPlace(false);
        setLocationPlace(false);
        setAboutUs(false);
      } else if (document.documentElement.scrollTop > 2600) {
        setAboutUs(true);
        setFaqsPlace(false);
        setStaysPlace(false);
        setLocationPlace(false);
      } 
      else if (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < staysDespl) {
        setLocationPlace(true);
        setAboutUs(false);
        setFaqsPlace(false);
        setStaysPlace(false);
      }

    };
  }, []);


  return (
    <nav id="Nav" className="bg-white border-gray-200 px-4 lg:px-6 py-0 lg:py-2 
      dark:bg-gray-800 fixed top-0 left-0 z-40 w-full">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
        <a href="https://flowbite.com" className="flex items-center">
          <MdTravelExplore className="w-9 h-9 text-version1" />
          
          <p className="text-version1 ml-2 self-center text-[25px] h-auto font-bold 
            dark:text-white">
            TravelApp
          </p>
        </a>
        
        <div
          className={`lg:fixed lg:z-20 lg:top-12 lg:left-0 p-2 bg-white dark:bg-darkModeColor 
          items-center justify-between ${toggle ? "lg:hidden" : ""} lg:w-full lg:flex w-auto lg:order-1`}

        >
          <ul className="flex lg:flex-col font-medium flex-row lg:space-x-8 lg:mt-0 lg:w-full">

            {navLinks.map(nameLink => (
              <li className="navBarLink" key={nameLink}>
                <a
                  href={`#${nameLink.toLowerCase().replace(' ', '-')}`}
                  className={`block p-2 text-primary-700 rounded hover:bg-primary-700 
                  ${locationPlace && nameLink == navLinks[0] ? 'navBarElementActive' : ""}
                  ${staysPlace && nameLink == navLinks[1] ? 'navBarElementActive' : ""}
                  ${faqsPlace && nameLink == navLinks[2] ? 'navBarElementActive' : ""}
                  ${aboutUs && nameLink == navLinks[3] ? 'navBarElementActive' : ""}
                  lg:bg-transparent lg:text-primary-700 hover:text-white dark:text-white`}
                  aria-current="page"
                >
                  {nameLink}
                </a>
              </li>
            ))}
            
          </ul>
        </div>
        
        <div className="flex items-center lg:order-2">

          <button onClick={handleDarkModeSwitch}>
              <SwitchDarkMode />
          </button>
          
          <button
            onClick={() => setToggle(!toggle)}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-1 ml-2 text-xl text-version1 
              rounded-lg hover:bg-gray-100 focus:outline-none lgMin:hidden
              focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}

export {Nav};
