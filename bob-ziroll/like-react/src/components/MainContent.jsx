const MainContent = () => {
    return (
        <main className="bg-[url('./logo.svg')] bg-no-repeat z-0 text-white">
            <h1 className="mt-10 mb-10 text-5xl">Fun facts about React.</h1>
            <ul className="leading-[3rem] ml-10">
                <li>React is a JavaScript library for building user interfaces.</li>
                <li>React is declarative. This means that React makes it easy to reason about how your application works.</li>
                <li>React is component-based. This means that you can build encapsulated components that manage their own state, then compose them to make complex UIs.</li>
                <li>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</li>
                <li>Was created at Facebook</li>
            </ul>
        </main>
    );
}

export default MainContent;