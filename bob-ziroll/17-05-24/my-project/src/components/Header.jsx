import reactLogo from "../assets/react.svg";

export default function Header() {
  return (
    <header className="block mx-auto p-10">
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </header>
  );
}
