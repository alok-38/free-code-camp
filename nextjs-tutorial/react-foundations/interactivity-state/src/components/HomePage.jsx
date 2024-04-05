import Header from "./Header";
import HandleClick from "./HandleClick";

const HomePage = () => {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <div>
            <Header className="text-5xl" title="Develop. Preview. Ship." />
            <ul className="leading-10">
                {names.map((name, index) => {
                    // Use index as a key (not recommended if the list can reorder or filter)
                    return <li key={index}>{name}</li>;
                })}
            </ul>
            <button onClick={HandleClick} className="tracking-widest	bg-violet-500 w-40 rounded-3xl h-10 mt-10 text-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
  LIKE
</button>
        </div>
    );
}

export default HomePage;