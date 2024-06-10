function PropertyDetails({ property }) {
  return (
    <div className="max-w-6xl mx-auto py-16 grid grid-cols-3 gap-x-10">
      <div className="col-span-2">
        <h5 className="text-sm font-semibold uppercase">{property.location}</h5>
        <h1 className="relative text-3xl py-5">
          {property.title}
          <div className="absolute left-0 bottom-0 w-1/4 h-0.5 bg-green-500"></div>
        </h1>

        {Object.keys(property.details).map((detail, index) => (
          <div key={index}>
            <h2 className="capitalize text-xl py-3">{detail}</h2>
            <p className="text-gray-500">{property.details[detail]}</p>
          </div>
        ))}
      </div>
      <div className="">
        <div className="border-[1px] pt-4 border-l-[3px] border-l-green-500 rounded-sm">
          <h5 className="text-sm font-semibold uppercase px-5">
            {property.property.type}
          </h5>
          <p className="text-gray-500 text-2xl py-2 px-5">
            {property.property.price}
          </p>
          <p className="text-gray-500 px-5">{property.property.address}</p>
          <div className="grid grid-cols-2  border-t-2 mt-4 px-5">
            <p className="text-gray-500 text-sm py-4">
              {property.property.features.bedrooms} Bedrooms
            </p>
            <p className="text-gray-500 text-sm pl-4 py-4 border-l">
              {property.property.features.bathrooms} Bathrooms
            </p>
          </div>
          <div className="grid grid-cols-2 border-t-2 px-5">
            <p className="text-gray-500 text-sm  py-4">
              {property.property.features.area} Sq Feet
            </p>
            <p className="text-gray-500 text-sm pl-4 py-4 border-l">
              {property.property.features.parking_spaces} parking Sq
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
