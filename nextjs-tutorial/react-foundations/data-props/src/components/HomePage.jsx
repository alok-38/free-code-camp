import Header from "./Header";

const HomePage = () => {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <div>
            <Header title="Develop. Preview. Ship." />
            <ul className="leading-10">
                {names.map((name, index) => {
                    // Use index as a key (not recommended if the list can reorder or filter)
                    return <li key={index}>{name}</li>;
                })}
            </ul>
        </div>
    );
}

export default HomePage;
