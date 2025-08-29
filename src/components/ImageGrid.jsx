import ImageCard from "./ImageCard";

const ImageGrid = ({ images, selectedSize }) => {
  // If no images are available, show a message
  if (!images.length) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No images found. Try a different keyword.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8 p-5">
      {images.map((img) => (
        <ImageCard 
          key={img.id} 
          image={img}
          selectedSize={selectedSize}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
