import { useState } from "react";


const ImageCard = ({ image, selectedSize }) => {
  // State to track whether the URL has been copied
  const [copied, setCopied] = useState(false);

  // Generate the image URL with selected width and height
  const getImageUrl = () => {
    return `${image.urls.raw}&w=${selectedSize.w}&h=${selectedSize.h}`;
  };

  // Download image function
  const downloadImage = async () => {
    try {
      const url = getImageUrl(); 
      const res = await fetch(url); 
      const blob = await res.blob();
      const objectUrl = URL.createObjectURL(blob); 

      // Create a hidden link element to download the image
      const a = document.createElement("a");
      a.href = objectUrl;
      a.download = `image-${selectedSize.w}x${selectedSize.h}.jpg`; 
      document.body.appendChild(a);
      a.click(); 
      a.remove();
      URL.revokeObjectURL(objectUrl); 
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  // Copy image URL to clipboard
  const copyUrl = () => {
    navigator.clipboard.writeText(getImageUrl());
    setCopied(true); 
    setTimeout(() => setCopied(false), 1500); 
  };

  return (
    <div className="relative group rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-2 transition-opacity duration-300">
        <div className="flex gap-2">
          <a
            href={image.links.html}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 transition"
          >
            View
          </a>

          {/* Download button */}
          <button
            onClick={downloadImage}
            className="text-white bg-green-600 px-3 py-1 rounded hover:bg-green-700 transition"
          >
            Download
          </button>

          {/* Copy URL button */}
          <button
            onClick={copyUrl}
            className={`px-3 py-1 rounded transition ${
              copied
                ? "bg-gray-400 text-gray-800"
                : "bg-yellow-500 text-white hover:bg-yellow-600"
            }`}
          >
            {copied ? "Copied!" : "Copy URL"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
