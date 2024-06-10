function CarouselImages({src,isActive}) {

  return (
    <div className={`duration-700 ease-in-out ${isActive ? 'block':'hidden'}`}>
      <img
        src={src}
        className="w-full h-[550px] object-cover"
        alt={src}
      />
    </div>
  );
}

export default CarouselImages;
