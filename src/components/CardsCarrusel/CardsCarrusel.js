
import Image from "next/image";

function CardsCarrusel({ imgPlace, namePLace, descPlace, backgroundColor, textColor }) {
  return (
    <div className="shadow-simpleSh w-[220px] min-w-[220px] items-center gap-0 bg-gray-50 shadow flex flex-col dark:bg-gray-800 
      dark:border-gray-700 mb-0 mr-4 rounded-2xl cursor-pointer hover:shadow-simpleSh+">
        <Image
          className="w-full rounded-t-2xl"
          src={imgPlace}
          alt={namePLace}
          width={220}
          height={150}
        />
      <div className={`p-3 w-full h-32 mt-0 rounded-b-2xl ${backgroundColor}`}>
        <h3 className={`text-xl font-bold tracking-tight text-white ${textColor}`}>
          <a href="#">{namePLace}</a>
        </h3>
        <p className={`mt-2 h-16 font-light ${textColor}`}>
          {descPlace}
        </p>
      </div>
    </div>
  );
}

export { CardsCarrusel };
