function PropertyMainDetails({propertyType,propertyPrice,propertyAddress}) {
  return (
    <>
      <h5 className="text-sm font-semibold uppercase px-5 mt-5">
        {propertyType}
      </h5>
      <p className="text-gray-500 text-2xl py-2 px-5">{propertyPrice}</p>
      <p className="text-gray-500 px-5 pb-5">{propertyAddress}</p>
    </>
  );
}

export default PropertyMainDetails;
