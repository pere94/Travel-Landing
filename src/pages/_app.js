import '../styles/globals.css'
import {Nav} from '../templates/Nav';
import {AppContext } from "../context/AppContext";
import {useInitialState} from "../hooks/useInitialState";


function MyApp({ Component, pageProps }) {
  
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <div className={`${initialState.darkMode ? 'dark' : ''}`}>
        <Nav 
          navLinks={[
            'Locations',
            'Stays',
            'FAQs',
            'About Us',
          ]}
        />
        <Component {...pageProps} />
      </div>
    </AppContext.Provider>

);}

export default MyApp
