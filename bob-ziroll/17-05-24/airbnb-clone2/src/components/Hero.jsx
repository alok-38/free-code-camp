import Group from "../assets/Group 77.png";

export default function Hero() {
  return (
    <div>
      <img className="mt-5" src={Group} alt="group photo" />;
      <h2 className="text-3xl font-bold mb-5">Online Experiences</h2>
      <p className="w-1/2">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
