
// import Head from 'next/head';
import Image from 'next/image'
import {HeroHeaders} from "../templates/HeroHeaders/HeroHeaders";
import {Carrusel} from "../templates/Carrusel/Carrusel";
import {Faqs} from "../templates/Faqs/Faqs";
import {Footer} from "../templates/Footer";

import imageHeader from "../img/sanFranciscoDesktop.jpg";
import imageSection1 from "../img/chicago.jpg";
import la from "/src/img/LA.jpg";
import miami from "/src/img/miami.jpg";
import bali from "/src/img/bali.jpg";



export default function Home() {
  // const [darkMode, setDarkMode] = useState(true);
  // console.log(darkMode ? "dark" : "");
  
  return (
    <main className="dark:bg-darkModeColor">

      <HeroHeaders 
        h1_title="Find More Locations like this"
        imageHeader={imageHeader}
      />

      <Carrusel />

      <section id="stays" className="mt-5 p-5 sm:p-1">

        <h2
          className="ml-5 sm:ml-0 mb-5 text-h2Size text-version1 font-bold"
        >Trending Stays</h2>
        
        <div className="flex gap-4 flex-wrap">
          
          <div className="relative z-0 h-2 min-h-[500px] w-full min-w-[320px]  rounded-3xl">
            <div
              className="absolute z-10 p-5 flex flex-col w-[95%] justify-end"
            >
              <h2
                className="text-h2Size text-white font-bold text-end"
              >Chicago</h2>
              <p className="text-end text-white ">2 rooms, bathroom and kitchen.</p>

            </div>
            <Image
              src={imageSection1}
              layout="fill"
              className="object-cover object-center rounded-3xl"
            />
          </div>

          <div className="relative z-0 h-2 min-h-[500px] w-[37%] md:w-full rounded-3xl">
            <div
              className="absolute z-10 p-5 flex flex-col w-[95%] justify-end items-end"
            >
              <h2
                className="text-h2Size text-white font-bold text-end"
              >LA</h2>
              <p className="text-end text-white w-40">4 rooms, 3 bathrooms,  kitchen and private pool.</p>

            </div>
            <Image
              src={la}
              layout="fill"
              className="object-cover object-center rounded-3xl"
            />
          </div>

          <div className="flex flex-col w-[60%] md:w-full gap-5">

            <div className="relative z-0 h-2 min-h-[240px] md:min-h-[500px] md:w-full rounded-3xl">
              <div
                className="absolute z-10 p-5 flex flex-col w-[95%] justify-end items-end"
              >
                <h2
                  className="text-h2Size text-white font-bold text-end"
                >Miami</h2>
                <p className="text-end text-white w-60">3 rooms, 2 bathrooms,  kitchen and amazing sea view.</p>

              </div>
              <Image
                src={miami}
                layout="fill"
                className="object-cover object-top rounded-3xl"
              />
            </div>

            <div className=" relative z-0 h-2 min-h-[240px] md:min-h-[500px] md:w-full rounded-3xl">
              <div
                className="absolute z-10 p-5 flex flex-col w-[95%] justify-end items-end"
              >
                <h2
                  className="text-h2Size text-white font-bold text-end "
                >Bali</h2>
                <p className="text-end text-white w-60">2 rooms, 2 bathrooms Kitchen and private pool</p>

              </div>
              <Image
                src={bali}
                layout="fill"
                className="object-cover object-center rounded-3xl"
              />
            </div>
          </div>

          

        </div>

        

      </section>

      <Faqs />

      <Footer />

    </main>
  )
}
