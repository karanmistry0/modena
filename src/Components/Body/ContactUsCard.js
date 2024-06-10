function ContactUsCard({ contactusDetails }) {
  return (
    <div className="border-[1px] border-l-[3px] border-l-emerald-500 rounded-sm">
      <h5 className="text-sm font-semibold uppercase px-5 mt-5">Contact Us</h5>
      <p className="text-green-500 py-2 px-5">{contactusDetails.phone}</p>
      <p className="text-green-500 px-5">{contactusDetails.email}</p>
      <p className="px-5 pt-2 text-gray-500">{contactusDetails.days}</p>
      <p className="px-5 pb-4 text-gray-500">{contactusDetails.hours}</p>

      <button className="p-3 bg-emerald-500 w-full text-white">
        Contact Us
      </button>
    </div>
  );
}

export default ContactUsCard;
