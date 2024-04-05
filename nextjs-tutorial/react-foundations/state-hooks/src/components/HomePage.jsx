import React from "react";
import HandleClicks from "./HandleClicks";

const HomePage = () => {
    const [likes, setLikes] = React.useState(0);

    return (
        <button className="border-solid border-2 border-indigo-600 w-24 rounded-full h-10 hover:bg-indigo-400 hover:text-white" onClick={() => HandleClicks(setLikes, likes)}>Like({likes})</button>
    );
}

export default HomePage;
