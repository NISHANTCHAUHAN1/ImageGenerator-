import ImageGrid from "../components/ImageGrid";
import Loader from "../components/Loader";
import { fetchImages } from "../utils/api";
import { useState } from "react";
import { Search } from "lucide-react";


const Home = () => {
  // State for storing fetched images
  const [images, setImages] = useState([]);

  // State for loading 
  const [loading, setLoading] = useState(false);

  // Predefined size options for images
  const SIZES = [
    { label: "Small – 320x240", w: 320, h: 240 },
    { label: "Medium – 640x480", w: 640, h: 480 },
    { label: "Large – 1280x720", w: 1280, h: 720 },
    { label: "HD – 1920x1080", w: 1920, h: 1080 },
  ];

  // State for keeping track of the currently selected size
  const [selectedSize, setSelectedSize] = useState(SIZES[1]); // Default: Medium

  // Function to handle search query and fetch images
  const handleSearch = async (query) => {
    if (!query.trim()) return; 
    setLoading(true); 
    try {
      const data = await fetchImages(query);
      setImages(data.results); 
    } catch (error) {
      console.error(error); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <main className="min-h-screen p-5 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Search Bar Sec */}
      <div className="flex justify-center mb-6 mt-10">
        <div className="flex items-center w-full max-w-2xl bg-gray-200/30 dark:bg-gray-800/30 backdrop-blur-md rounded-full px-4 py-3 shadow-lg">
          <Search className="text-gray-500 dark:text-gray-300 w-5 h-5 mr-3" />
          <input
            type="text"
            aria-label="Search images"
            placeholder="Search for free Images, Videos, Music & more"
            className="w-full bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-lg"
            onKeyDown={(e) => e.key === "Enter" && handleSearch(e.target.value)}
          />
        </div>
      </div>

      {/*Size Section Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        {SIZES.map((size) => (
          <button
            key={size.label}
            className={`px-4 py-2 rounded-lg shadow-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
              selectedSize.label === size.label
                ? "bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            onClick={() => setSelectedSize(size)}
          >
            {size.label}
          </button>
        ))}
      </div>

      {/* Image Grid Sec */}
      <div className="mt-8">
        {loading ? (
          <Loader />
        ) : (
          <ImageGrid images={images} selectedSize={selectedSize} />
        )}
      </div>
    </main>
  );
};

export default Home;
