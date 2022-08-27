import { AiFillHome } from "react-icons/ai";

function BootomBarMovil() {
    return (
        <div className="flex justify-center items-center gap-8 w-full h-14 bg-white fixed bottom-0 left-0 z-40">
            <AiFillHome className="w-8 h-8 text-primary-500" /> 
            <AiFillHome className="w-8 h-8 text-gray-300" /> 
            <AiFillHome className="w-8 h-8 text-gray-300" /> 
            <AiFillHome className="w-8 h-8 text-gray-300" /> 

        </div>
    );
}

export {BootomBarMovil};