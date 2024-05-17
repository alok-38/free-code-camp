import PropTypes from "prop-types";

export default function Cards({ images }) {
  return (
    <div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt || `Image ${index + 1}`}
          className="card-image"
        />
      ))}
    </div>
  );
}

Cards.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
};
