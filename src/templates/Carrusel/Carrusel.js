import { CardsCarrusel } from "/src/components/CardsCarrusel/CardsCarrusel";
import norway from "/src/img/norway.jpg";
import newyork from "/src/img/new_york.jpg";
import yosemite from "/src/img/yosemite.jpg";
import seattle from "/src/img/seattle.jpg";
import bali from "/src/img/bali.jpg";
import chicago from "/src/img/chicago.jpg";
import europe from "/src/img/europe.jpg";
import iceland from "/src/img/iceland.jpg";
import la from "/src/img/LA.jpg";
import miami from "/src/img/miami.jpg";
import sanFrancisco from "/src/img/sanFrancisco.jpg";
import switzerland from "/src/img/switzerland.jpg";
import sydney from "/src/img/sydney.jpg";

function Carrusel() {
  return (
    <section className="p-5 my-5 dark:bg-darkModeColor">
      <h2 className="text-h2Size font-bold text-version1 ml-5 sm:ml-0">
        Our Recomendations
      </h2>

      <div className="flex flex-nowrap py-5 overflowXScroll">
        <CardsCarrusel
          imgPlace={norway}
          namePLace="Norway"
          descPlace="Beautiful landscapes"
          backgroundColor="bg-version2" //En lengiaje tailwind usando variables del tema
          textColor="text-white" //En lengiaje tailwind usando variables del tema
        />

        <CardsCarrusel
          imgPlace={newyork}
          namePLace="New York"
          descPlace="Concrete jungle"
          backgroundColor="bg-white" //En lengiaje tailwind usando variables del tema
          textColor="text-version2" //En lengiaje tailwind usando variables del tema
        />

        <CardsCarrusel
          imgPlace={yosemite}
          namePLace="Yosemite"
          descPlace="A break from the world"
          backgroundColor="bg-version2" //En lengiaje tailwind usando variables del tema
          textColor="text-white" //En lengiaje tailwind usando variables del tema
        />

        <CardsCarrusel
          imgPlace={seattle}
          namePLace="Seattle"
          descPlace="Big City"
          backgroundColor="bg-white" //En lengiaje tailwind usando variables del tema
          textColor="text-version2" //En lengiaje tailwind usando variables del tema
        />

        <CardsCarrusel
          imgPlace={bali}
          namePLace="Bali"
          descPlace="Bali is an Indonesian island with lush volcanic mountains..."
          backgroundColor="bg-version2" //En lengiaje tailwind usando variables del tema
          textColor="text-white" //En lengiaje tailwind usando variables del tema
        />

        <CardsCarrusel
          imgPlace={chicago}
          namePLace="Chicago"
          descPlace="Colloquially known as the Windy City"
          backgroundColor="bg-white" //En lengiaje tailwind usando variables del tema
          textColor="text-version2" //En lengiaje tailwind usando variables del tema
        />

        <CardsCarrusel
          imgPlace={europe}
          namePLace="Europe"
          descPlace="The second smallest continent in terms of area..."
          backgroundColor="bg-version2" //En lengiaje tailwind usando variables del tema
          textColor="text-white" //En lengiaje tailwind usando variables del tema
        />

        <CardsCarrusel
          imgPlace={iceland}
          namePLace="Iceland"
          descPlace="Nordic island country in the North Atlantic Ocean"
          backgroundColor="bg-white" //En lengiaje tailwind usando variables del tema
          textColor="text-version2" //En lengiaje tailwind usando variables del tema
        />

        <CardsCarrusel
          imgPlace={la}
          namePLace="LA"
          descPlace="Most populous city in the US state of California"
          backgroundColor="bg-version2" //En lengiaje tailwind usando variables del tema
          textColor="text-white" //En lengiaje tailwind usando variables del tema
        />

        <CardsCarrusel
          imgPlace={miami}
          namePLace="Miami"
          descPlace="City-port located in southeastern Florida, United States"
          backgroundColor="bg-white" //En lengiaje tailwind usando variables del tema
          textColor="text-version2" //En lengiaje tailwind usando variables del tema
        />

        <CardsCarrusel
          imgPlace={sanFrancisco}
          namePLace="San Francisco"
          descPlace="Famous for the iconic Golden Gate Bridge, cable cars, and colorful Victorian homes"
          backgroundColor="bg-version2" //En lengiaje tailwind usando variables del tema
          textColor="text-white" //En lengiaje tailwind usando variables del tema
        />

        <CardsCarrusel
          imgPlace={switzerland}
          namePLace="Switzerland"
          descPlace="Located in Central Europe, with several lakes, villages and the peaks of the Alps"
          backgroundColor="bg-white" //En lengiaje tailwind usando variables del tema
          textColor="text-version2" //En lengiaje tailwind usando variables del tema
        />

        <CardsCarrusel
          imgPlace={sydney}
          namePLace="Sydney"
          descPlace="Capital of New South Wales and one of the largest cities in Australia"
          backgroundColor="bg-version2" //En lengiaje tailwind usando variables del tema
          textColor="text-white" //En lengiaje tailwind usando variables del tema
        />
      </div>

    </section>
  );
}

export { Carrusel };
