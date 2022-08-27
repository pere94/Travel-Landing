import React from "react";

function useInitialState() {
    const [darkMode, setDarkMode] = React.useState(false);


    return {
        darkMode,
        setDarkMode,
    };

}

export {useInitialState};