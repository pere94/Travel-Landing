import Image from "next/image";
import { MdTravelExplore } from "react-icons/md";
import imageHeader from "../img/sanFranciscoDesktop.jpg";

function Footer() {
  return (
    <footer>
      <div className="relative z-10 h-2 min-h-[250px] bg-gray-600/25 rounded-t-3xl">
        <Image
          src={imageHeader}
          layout="fill"
          className="object-cover object-center relative z-0 rounded-t-3xl"
        />
        <div className="relative z-20 min-h-[250px] w-full bg-black/80 rounded-t-3xl">
          <div class="mx-auto max-w-screen-xl text-center">
            <a href="https://flowbite.com" className="flex justify-center items-center pt-9">
              <MdTravelExplore className="w-9 h-9 text-version1" />

              <p className="text-version1 ml-2 self-center text-[25px] h-auto font-bold dark:text-white"
              >TravelApp</p>
            </a>
            <p class="my-6 text-white dark:text-gray-400">
              Open-source library of over 400+ web components and interactive
              elements built for better web.
            </p>
            <ul class="flex flex-wrap justify-center items-center mb-6 text-white text-bold dark:text-white">
              <li>
                <a href="#" class="mr-4 hover:text-primary-500 underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:text-primary-500 underline md:mr-6">
                  Premium
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:text-primary-500 underline md:mr-6 ">
                  Campaigns
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:text-primary-500 underline md:mr-6">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:text-primary-500 underline md:mr-6">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:text-primary-500 underline md:mr-6">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:text-primary-500 underline md:mr-6">
                  Contact
                </a>
              </li>
            </ul>
            <span class="text-sm text-gray-400 sm:text-center">
              © 2021-2022{" "}
              <a href="#" class="hover:text-primary-500">
                TravelApp
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
