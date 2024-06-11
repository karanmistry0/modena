import PropertyFeatures from "./PropertyFeatures";
import PropertyMainDetails from "./PropertyMainDetails";
import bathroom from "../../assets/icons/bathroom.svg";
import bedroom from "../../assets/icons/bedroom.svg";

function LatestPropertyDetails({ propertyDetails ,onSelectProperty}) {
    let cssClasses = "absolute p-0.5 mr-2 mt-2 capitalize text-white text-[10px]  rounded-sm w-max h-max right-0"
    if(propertyDetails.property.status === "for rent"){
        cssClasses += ' bg-amber-400'
    }else{
        cssClasses += ' bg-emerald-500'
    }
  return (
    <div className="relative border-[1px] rounded-sm">
      <div className={cssClasses}>
        {/* {propertyDetails.property.status} */}
        <p>For Sale</p>
      </div>
      <img
        src={propertyDetails.property.images[0]}
        className="h-[200px] w-full rounded-sm"
        alt="propertyImage"
        onClick={()=> { console.log(propertyDetails.id)
          onSelectProperty(propertyDetails.id)}}
      />
      <PropertyMainDetails
        propertyType={propertyDetails.propertytype}
        propertyPrice={propertyDetails.propertyprice}
        propertyAddress={propertyDetails.property.address}
      />
      <PropertyFeatures
        featureName1="Bedrooms"
        featureName2="Bathrooms"
        feature1={propertyDetails.property.features.bedrooms}
        feature2={propertyDetails.property.features.bathrooms}
        featureImg1={bedroom}
        featureImg2={bathroom}
      />
    </div>
  );
}

export default LatestPropertyDetails;
