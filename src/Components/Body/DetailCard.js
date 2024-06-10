import bathroom from "../../assets/icons/bathroom.svg";
import bedroom from "../../assets/icons/bedroom.svg";
import car from "../../assets/icons/Car.png";
import SqFeet from "../../assets/icons/sq_feet.svg";
import PropertyFeatures from "./PropertyFeatures";
import PropertyMainDetails from "./PropertyMainDetails";

function DetailCard({ cardDetails }) {
  return (
    <div className="border-[1px] border-l-[3px] border-l-emerald-500 rounded-sm">
      <div className="p-1 me-2 mt-2 capitalize text-white text-[11px] bg-emerald-500 rounded-sm font-bold w-max h-max float-end ">
        {cardDetails.status}
      </div>

      <PropertyMainDetails
        propertyType={cardDetails.type}
        propertyPrice={cardDetails.price}
        propertyAddress={cardDetails.address}
      />

      <PropertyFeatures
        featureName1="Bedrooms"
        featureName2="Bathrooms"
        feature1={cardDetails.features.bedrooms}
        feature2={cardDetails.features.bathrooms}
        featureImg1={bedroom}
        featureImg2={bathroom}
      />
      <PropertyFeatures
        featureName1="Sq Feet"
        featureName2="Parking Sp"
        feature1={cardDetails.features.area}
        feature2={cardDetails.features.parking_spaces}
        featureImg1={car}
        featureImg2={SqFeet}
      />
    </div>
  );
}

export default DetailCard;
