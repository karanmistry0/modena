import footerImg from "../../assets/footer_logo.png";
import A from "../../utils/Anchor";

function Footer({ properties, onSelectProperty }) {
  return (
    <footer className="bg-emerald-500 text-white">
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-5 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 border-b border-b-gray-500 ">
        <div>
          <img src={footerImg} alt="footer Image" className="h-14 mb-4" />
          <p className="text-sm">
            Modena is a Real Estate Webflow template that was thought to be easy
            to customize and easy to create your property listings.
          </p>
          <div className="flex gap-2">
            <span></span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-medium uppercase">Menu</h4>
          <A href="#" className="text-white">
            Home
          </A>
          <A href="#" className="text-white">
            Properties
          </A>
          <A href="#" className="text-white">
            About Us
          </A>
          <A href="#" className="text-white">
            Services
          </A>
          <A href="#" className="text-white">
            Faq
          </A>
          <A href="#" className="text-white">
            Blog
          </A>
          <A href="#" className="text-white">
            Contact Us
          </A>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-medium uppercase">Social</h4>
          <A href="#" className="text-white">
            Facebook
          </A>
          <A href="#" className="text-white">
            Twitter
          </A>
          <A href="#" className="text-white">
            Instagram
          </A>
          <A href="#" className="text-white">
            Linkedin
          </A>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-medium uppercase">Contact</h4>
          <A href="#" className="text-white">
            Evergreen 27 San Francisco, Cal
          </A>
          <A href="#" className="text-white">
            800 123-456
          </A>
          <A href="#" className="text-white">
            About Us
          </A>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-medium uppercase">Latest Properties</h4>
          {properties.map((property) => (
            <div className="flex items-center pb-2 border-b border-b-gray-500">
              <img
                src={property.property.images[0]}
                className="w-20 h-20 cursor-pointer"
                onClick={() => onSelectProperty(property.id)}
              />
              <div className="ms-4">
                <p className="uppercase text-[13px] font-medium">
                  {property.property.type}
                </p>
                <p>{property.property.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-4 text-[13px] lg:flex md:flex gap-2 mx-auto w-full max-w-screen-xl px-4">
        <A href="#" className="underline">Buy Template</A>|
        <A href="#" className="underline">Version 1.4</A>|
        <span>Image <A href="#" className="underline">Licensing</A> |</span>
        <span>Made By <A href="#" className="underline">Pablo Ramos</A> |</span>
        <span>Visit My <A href="#" className="underline">Templates</A> |</span>
        <span>Powered By <A href="#" className="underline">Webflow</A></span>

        
      </div>
    </footer>
  );
}

export default Footer;
