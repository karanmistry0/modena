import Button from "../../../utils/Button";

function NextButton({onNext}) {
  return (
    <Button
      type="button"
      className="absolute top-0 end-0 z-30 flex items-center justify-center h-full  px-4  group focus:outline-none"
    >
      <span
        className="inline-flex items-center justify-center"
        onClick={onNext}
      >
        <svg
          className="w-5 h-10 text-green-400 hover:text-green-500 rtl:rotate-180  "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span className="sr-only ">Next</span>
      </span>
    </Button>
  );
}

export default NextButton;
