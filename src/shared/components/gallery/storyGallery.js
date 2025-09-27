import "./storyGallery.css";

function StoryGallery({ images }) {
  return (
    <div
      className="details-story-images-container"
      role="region"
      aria-label="Story visual gallery"
    >
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          alt={img.alt}
          className="details-img"
          loading="lazy"
          width={img.width || "600"} // optional, can be passed in data
          height={img.height || "400"} // optional, can be passed in data
        />
      ))}
    </div>
  );
}

export default StoryGallery;
