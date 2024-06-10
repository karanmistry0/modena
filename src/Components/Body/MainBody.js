import { useEffect, useState } from "react";
import Carousel from "./Carousel/Carousel";
import PropertyDetails from "./PropertyDetails";
function MainBody() {
  const [properties, setProperties] = useState([]);

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
  console.log(properties);
  return (
    <>
      {properties.map((property, index) => (
        <div key={property.id}>
          <Carousel propertyImages={property.property.images} />
          <PropertyDetails property={property} />
        </div>
      ))}
    </>
  );
}

export default MainBody;
