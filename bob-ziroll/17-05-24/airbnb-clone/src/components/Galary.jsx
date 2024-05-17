import Swimmer from "../assets/image 12.png";
import Wedding from "../assets/wedding-photography 1.png";
import Bike from "../assets/mountain-bike 1.png";
import Group65 from "../assets/Group 65.png";
import Group78 from "../assets/Group 78.png";
import Group79 from "../assets/Group 79.png";

export default function Galary() {
  return (
    <div className="flex justify-between">
      <div>
        <img className="w-[176px]" src={Swimmer} alt="" />
        <img src={Group65} alt="" />
      </div>
      <div>
        <img src={Wedding} alt="" />
        <img src={Group78} alt="" />
      </div>
      <div>
        <img src={Bike} alt="" />
        <img src={Group79} alt="" />
      </div>
    </div>
  );
}
