export default function Navbar() {
  return (
    <nav className="flex justify-between bg-orange-400 text-white p-10">
      <div className="pl-10">
        <a href="#">Logo</a>
      </div>
      <div className="flex">
        <ul className="flex gap-10">
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li className="pr-10">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
