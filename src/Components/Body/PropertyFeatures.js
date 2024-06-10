function PropertyFeatures({
  featureName1,
  featureName2,
  feature1,
  feature2,
  featureImg1,
  featureImg2,
}) {
  return (
    <div className="grid grid-cols-2  border-t-2  px-2">
      <div className="lg:flex gap-x-0 text-gray-500 text-sm py-4 ">
        <span className="flex gap-2">
          <img src={featureImg1} alt="bedrooms" className="w-5 h-5" />
          {feature1} 
        </span>
        <span className="lg:ms-2">
          {featureName1}
        </span>
      </div>
      <div className="lg:flex text-gray-500 text-sm pl-4 py-4 border-l">
        <span className="flex gap-2">
          <img src={featureImg2} className="w-5 h-5" alt="bathrooms" />
          {feature2}
        </span>
        <span className="lg:ms-2">
           {featureName2}
        </span>
      </div>
    </div>
  );
}

export default PropertyFeatures;
