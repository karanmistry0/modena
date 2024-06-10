import logoIcon from "../assets/logo_icon.png"

function Divider() {
  return (
    <div className="py-10 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-300 before:me-6 after:flex-1 after:border-t after:border-gray-300 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">
      <img src={logoIcon} alt="logoIcon" className="h-5"/>
    </div>
  );
}

export default Divider;
