import Link from "next/link";

export default function Navbar(): JSX.Element {
  return (
    <>
      <div className="w-screen h-20 fixed top-0 left-0 flex flex-row justify-start items-center">
        <div className="w-screen h-20 flex flex-row items-center justify-start p-16">
          <Link href="/">
            <img
              src="/logo_dark.png"
              className="w-[160px] h-[160px] p-3 cursor-pointer"
            />
          </Link>
        </div>
        <div className="w-screen h-20 flex flex-row items-center justify-evenly p-16 font-['Raleway']">
          <li
            className="text-white text-xl font-light cursor-pointer"
            key={"about"}
          >
            About Me
          </li>
          <li className="text-white text-xl cursor-pointer" key={"skills"}>
            Skills
          </li>
          <li className="text-white text-xl cursor-pointer" key={"portfolio"}>
            Portfolio
          </li>
          <li
            className="text-black bg-white pl-3 cursor-pointer transition-all pr-3 pt-2 pb-2 rounded-full text-xl font-extrabold "
            key={"contact"}
          >
            Contact Me
          </li>
        </div>
      </div>
    </>
  );
}
