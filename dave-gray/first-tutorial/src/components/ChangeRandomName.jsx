import { useState } from 'react'; // Import useState from React

export default function ChangeRandomName() {
    const names = ['Bob', 'Kevin', 'Dave'];
    const [randomName, setRandomName] = useState('');

    // Function to change the random name
    const changeRandomName = () => {
        const randomIndex = Math.floor(Math.random() * names.length);
        setRandomName(names[randomIndex]);
    };

}
