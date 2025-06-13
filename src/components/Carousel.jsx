import { useState } from "react";
import xadrez_1 from "../assets/img/xadrez_1.png";
import xadrez_2 from "../assets/img/xadrez_2.png";
import xadrez_3 from "../assets/img/xadrez_3.png";
import AudioPlayer from "./AudioPlayer";

const images = [xadrez_1, xadrez_2, xadrez_3];

const Carousel = ({audio, ref}) => {
  const [index, setIndex] = useState(0);
  const length = images.length;

  const handlePrevious = () => {
    setIndex(index === 0 ? length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === length - 1 ? 0 : index + 1);
  };

  return (
    <div className="carousel flex flex-col items-center">
      <AudioPlayer audio={audio} loop ref={ref} />
      <div className="relative w-90 h-90 overflow-hidden mb-4">
        <img
          src={images[index]}
          alt={`Slide ${index}`}
          className="w-full h-full object-cover rounded-xlshadow-md transition-all duration-500"
        />
      </div>
      <div className="flex gap-4">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          {"<"}
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
