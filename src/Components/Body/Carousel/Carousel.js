import { useState } from "react";
import CarouselImages from "./CarouselImages";
import Button from "../../../utils/Button";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

function Carousel({ propertyImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? propertyImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === propertyImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <>
      <div className="relative">
        {/* <!-- Carousel wrapper --> */}
        <div>
          {propertyImages.map((image, index) => (
            <CarouselImages
              key={index}
              src={image}
              index={index}
              isActive={index === currentIndex}
            />
          ))}
        </div>
        {/* <!-- Slider controls --> */}
        <PrevButton onPrev={handlePrev}/>
        <NextButton onNext={handleNext}/>
      </div>
    </>
  );
}

export default Carousel;
