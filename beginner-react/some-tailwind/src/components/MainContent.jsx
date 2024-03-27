import React from 'react';
import '../App.css';

function MainContent() {
    return (
        <div className="main-content min-h-[600px] leading-10 w-3/6 mx-auto">
            <h1>Why Learn React?</h1>
            <p>React is one of the most popular JavaScript libraries for building user interfaces, and there are several compelling reasons why you should consider learning it:</p>
            <ul>
                <li>
                    <strong>Popularity:</strong> React is widely adopted by developers and companies worldwide. Learning React opens up numerous job opportunities and enhances your marketability as a developer.
                </li>
                <li>
                    <strong>Component-Based Architecture:</strong> React follows a component-based architecture, allowing you to build encapsulated, reusable UI components. This makes code maintenance and scalability much easier.
                </li>
                <li>
                    <strong>Declarative Syntax:</strong> React uses a declarative approach to describe how your UI should look, which leads to cleaner and more readable code compared to imperative alternatives.
                </li>
                <li>
                    <strong>Virtual DOM:</strong> React's virtual DOM efficiently updates only the necessary parts of the actual DOM, resulting in improved performance and a smoother user experience.
                </li>
                <li>
                    <strong>React Ecosystem:</strong> React has a vast ecosystem of tools and libraries (such as Redux, React Router, and Material-UI) that complement its capabilities and streamline the development process.
                </li>
                <li>
                    <strong>Community Support:</strong> React boasts a vibrant and active community of developers who contribute to its ongoing development, provide support, and share valuable resources and best practices.
                </li>
            </ul>
            <p>Whether you're a beginner looking to start your journey in web development or an experienced developer seeking to stay up-to-date with the latest technologies, learning React can significantly boost your skills and career prospects.</p>
        </div>
    );
}

export default MainContent;
