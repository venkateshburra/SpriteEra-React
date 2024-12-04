import { useState, useRef } from "react";
import Gallaryimage1 from "../GallarySection/image1.png";
import Gallaryimage2 from "../GallarySection/image2.png";
import Gallaryimage3 from "../GallarySection/image3.png";
import Gallaryimage4 from "../GallarySection/image4.png";
import Gallaryimage5 from "../GallarySection/image5.png";
import Gallaryimage6 from "../GallarySection/image6.png";
import Gallaryimage7 from "../GallarySection/image7.png";
import Gallaryimage8 from "../GallarySection/image8.png";
import Gallaryimage9 from "../GallarySection/image9.png";
import Gallaryimage10 from "../GallarySection/image10.png";
import Gallaryimage11 from "../GallarySection/image11.png";
import Gallaryimage12 from "../GallarySection/image12.png";
import { GallaryClose } from "../GallarySection/GallaryClose"; // Import the GallaryClose component

const images = [
  Gallaryimage1,
  Gallaryimage2,
  Gallaryimage3,
  Gallaryimage4,
  Gallaryimage5,
  Gallaryimage6,
  Gallaryimage7,
  Gallaryimage8,
  Gallaryimage9,
  Gallaryimage10,
  Gallaryimage11,
  Gallaryimage12,
];

export function Gallary() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const enlargedImageRef = useRef(null);

  function handleClick(index) {
    setSelectedImageIndex(index); // Set the index of the clicked image
    setTimeout(() => {
      // Ensure the enlarged image is displayed at the top
      enlargedImageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }

  function closeImage() {
    setSelectedImageIndex(null); // Deselect the image
  }

  return (
    <div id="gallery" className="mt-44 relative max-w-[1300px] mx-auto">
      <h1 className="text-2xl font-medium md:text-4xl md:font-semibold text-center">
        Gallery
      </h1>

      {/* Render GallaryClose only if an image is selected */}
      {selectedImageIndex !== null && (
        <GallaryClose
          selectedImageIndex={selectedImageIndex}
          closeImage={closeImage}
          images={images} // Pass images array
          enlargedImageRef={enlargedImageRef} // Pass the reference
        />
      )}

      {/* Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 sm:gap-4 gap-4 md:gap-7 mx-7 lg:mx-12 mt-12">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            onClick={() => handleClick(index)} // Pass the index of the clicked image
            className="cursor-pointer transition-transform"
          />
        ))}
      </div>
    </div>
  );
}
