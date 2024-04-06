export default function Programmers() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    return (
        <ul className="leading-10 mx-auto mb-10">
        <h3 className="text-2xl mb-5 underline underline-offset-1">Programmers</h3>
            {names.map((name) => (
                <li key={name}>{name}</li>
            ))}
        </ul>
    )
}