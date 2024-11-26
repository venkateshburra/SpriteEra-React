import { useState } from "react";
import Gallaryimage1 from "../assets/image1.png";
import Gallaryimage2 from "../assets/image2.png";
import Gallaryimage3 from "../assets/image3.png";
import Gallaryimage4 from "../assets/image4.png";
import Gallaryimage5 from "../assets/image5.png";
import Gallaryimage6 from "../assets/image6.png";
import Gallaryimage7 from "../assets/image7.png";
import Gallaryimage8 from "../assets/image8.png";
import Gallaryimage9 from "../assets/image9.png";
import Gallaryimage10 from "../assets/image10.png";
import Gallaryimage11 from "../assets/image11.png";
import Gallaryimage12 from "../assets/image12.png";

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

  function handleClick(index) {
    setSelectedImageIndex(index); // Set the index of the clicked image
  }

  function closeImage() {
    setSelectedImageIndex(null); // Deselect the image
  }

  return (
    <div className="mt-44 relative max-w-[1300px] mx-auto">
      <h1 className="text-2xl font-medium md:text-4xl md:font-semibold text-center">
        Gallery
      </h1>

      {/* Enlarged Image Section */}
      {selectedImageIndex !== null && (
        <div className="absolute top-[0px] lg:top-[-80px] left-1/2 z-30">
          <div className="relative">
            <img
              src={images[selectedImageIndex]}
              alt="Selected"
              className="relative transform -translate-x-1/2 md:w-[500px] w-[100%] md:h-[300px] lg:w-[801px] lg:h-[478px] z-20"
            />
            <p className="bg-white p-4 text-[15px] absolute sm-bottom-[-70px] left-[-50%] right-[50%] ">Lorem ipsum is a dummy or placeholder text commonly used in graphic design,</p>
              <button
            onClick={closeImage}
            className="absolute top-[-10px] right-[40%] sm:right-[45%] lg:right-[46%] border-[1.6px] border-gray-600 px-3 py-1 sm:px-4 hover:bg-gray-300 sm:py-[9px] font-normal text-[15px] z-20 rounded-full"
          >
            X
          </button>
          </div>
        
        </div>
      )}

      {/* Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mx-7 lg:mx-12 mt-12">
        {images.map((img, index) => (
          <img
            onClick={() => handleClick(index)} // Pass the index of the clicked image
            src={img}
            alt=""
            key={index}
            className="cursor-pointer transition-transform"
          />
        ))}
      </div>
    </div>
  );
}
