import React from "react";
import Header from "./Header";
import HanbleClicks from "./HandleClick";

const HomePage = () => {
    const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]
    const [likes, setLikes] = React.useState(0)
  
    return (
        <div>
          <Header title="Develop. Preview. Ship." />
          <ul className="leading-10">
            {names.map((name) => (
              <li className="text-2xl mb-5" key={name}>{name}</li>
            ))}
          </ul>

          <button className="mt-5 border-solid border-2 border-indigo-600 w-32 rounded-3xl h-10 hover:bg-indigo-400 hover:text-white tracking-wider" onClick={HanbleClicks}>Like ({likes})</button>
        </div>
      )
}

export default HomePage;