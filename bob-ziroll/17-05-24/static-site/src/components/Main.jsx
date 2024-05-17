import Navbar from "./Navbar";
import { FaHeart } from "react-icons/fa";

export default function Main() {
  return (
    <div>
      <Navbar />
      <div className="m-10 text-slate-700">
        <h1 className="mb-5 text-5xl">My awesome website in React</h1>
        <h3 className="mb-2 text-3xl">
          Reasons why I <FaHeart className="inline text-red-500" /> React
        </h3>
        <ul className="leading-10 pl-5">
          <li>It&apos;s composable</li>
          <li>It&apos;s declarative</li>
          <li>It&apos;s a hireable skill</li>
          <li>It&apos;s maintained by skilled people</li>
        </ul>
      </div>
    </div>
  );
}
