
import ContactUsCard from "./ContactUsCard";
import DetailCard from "./DetailCard";

function PropertyDetails({ property }) {
  return (
    <div className="max-w-6xl mx-auto py-16 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 lg:gap-x-10 gird-cols-1 gap-y-5 ">
      <div className="lg:col-span-2 md:col-span-2  sm:col-span-2 lg:m-0 m-2">
        <h5 className="text-sm font-semibold uppercase">{property.location}</h5>
        <h1 className="relative text-3xl py-5">
          {property.title}
          <div className="absolute left-0 bottom-0 w-1/4 h-0.5 bg-green-500"></div>
        </h1>

        {Object.keys(property.details).map((detail, index) => (
          <div key={index}>
            <h2 className="capitalize text-xl py-3">{detail.split("_")}</h2>
            <p className="text-gray-500">{property.details[detail]}</p>
          </div>
        ))}
        <p className="text-center mt-4">...</p>
      </div>
      <div className="flex flex-col gap-6 lg:order-last md:order-last sm:order-last order-first m-4">
        <DetailCard cardDetails={property.property}/>
        <ContactUsCard contactusDetails={property.contact_us}/>
      </div>
    </div>
  );
}

export default PropertyDetails;
