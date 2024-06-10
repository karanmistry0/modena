import { useEffect, useState } from "react";
import Carousel from "./Carousel/Carousel";
import PropertyDetails from "./PropertyDetails";
import LatestPropertyDetails from "./LatestPropertyDetails";
import Divider from "../../utils/Divider";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



function MainBody() {
  const [properties, setProperties] = useState([]);
  const [propertyId, setPropertyId] = useState("1");

  useEffect(() => {
    fetch("http://localhost:5000/properties")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProperties(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  function handleSelectedProperty(propertyId) {
    setPropertyId(propertyId);
  }

  const filteredProperty = properties.filter(
    (property) => property.id === propertyId
  );

  const otherProperties = properties
    .filter((property) => property.id !== propertyId)
    .slice(0, 4);

  const footerProperties = properties.filter((property)=> property.id !== propertyId).slice(0,3)

  return (
    <>
      <Header/>
      {filteredProperty.map((property) => (
        <div key={property.id}>
          <Carousel propertyImages={property.property.images} />
          <PropertyDetails property={property} />
        </div>
      ))}

      <div className="max-w-6xl mx-auto pb-10 ">
        <h2 className="text-3xl pb-10 lg:m-0 m-3">Latest Property Deals</h2>
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 grid-cols-1 m-2">
          {otherProperties.map((property) => (
            <LatestPropertyDetails
              key={property.id}
              propertyDetails={property}
              onSelectProperty={handleSelectedProperty}
            />
          ))}
        </div>
        <Divider />
      </div>
      <Footer properties={footerProperties} onSelectProperty={handleSelectedProperty}/>
    </>
  );
}

export default MainBody;
