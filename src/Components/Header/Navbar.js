import callImg from '../../assets/call_logo.svg'
import A from '../../utils/Anchor';

const navbarTags = ["Properties","About us","Services","Faq","Blog","Contact us","Pages"]

function Navbar() {
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4 items-center">
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        {navbarTags.map((tag, index)=>(
            <A href="#" key={index} className="hover:text-white rounded-md px-3 py-2 text-sm font-medium uppercase">
                {tag}
            </A>
        ))}
        <A
          href="#"
          className=" hover:text-white rounded-md px-3 py-2 text-sm font-medium uppercase flex items-center gap-2"
        >
          <img src={callImg} className="h-4 w-4" />
          Call us today <span className="text-green-500">911-911-911</span>
        </A>
      </div>
    </div>
  );
}

export default Navbar;
