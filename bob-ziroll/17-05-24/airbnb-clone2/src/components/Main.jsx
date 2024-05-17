import Navbar from "./Navbar";
import Hero from "./Hero";

// Import images
import mountainBike from "../assets/mountain-bike 1.png";
import weddingPhotography from "../assets/wedding-photography 1.png";
import swimmer from "../assets/swimmer.png";

const images = [
  { src: swimmer, alt: "Swimmer", width: "176px" }, // Set width to 176px for the swimmer image
  { src: weddingPhotography, alt: "Wedding Photography" },
  { src: mountainBike, alt: "Mountain Bike" },
];

export default function Main() {
  return (
    <main className="max-w-xl mx-auto p-5">
      <Navbar />
      <Hero />
      <div className="cards flex justify-between mt-5">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            style={{ width: image.width }}
          />
        ))}
      </div>
    </main>
  );
}
