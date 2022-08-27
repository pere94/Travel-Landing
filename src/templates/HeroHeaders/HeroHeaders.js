import Image from "next/image";


function HeroHeaders({ h1_title, imageHeader }) {
  return (
    <section className="">
      <div
        className="absolute z-10 grid max-w-screen-xl px-4 sm:p-1 py-8 mx-auto 
            max-w-[320px] align-middle h-96 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      >
        <div className="mr-auto w-3/4 place-self-center lg:col-span-7 
            min-w-[320px]">
          <h1
            className="max-w-2xl mb-4 text-h1Size font-extrabold leading-none tracking-tight 
                md:text-5xl xl:text-6xl"
          >
            {h1_title}
          </h1>
          <a
            href="#"
            className="inline-flex shadow-simpleSh items-center justify-center px-10 py-3 mb-2 ml-3 
                text-base font-medium text-center bg-white dark:bg-darkModeColor rounded-full 
                text-primary-500 hover:bg-primary-50 dark:hover:bg-darkModeColorHover focus:ring-4 
                focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="relative z-0 h-2 min-h-[500px]">
        <Image
          src={imageHeader}
          layout="fill"
          className="object-cover object-center"
          priority 
        />
      </div>
    </section>
  );
}

export { HeroHeaders };
