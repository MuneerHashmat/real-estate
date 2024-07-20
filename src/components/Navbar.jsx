import { Link } from "react-router-dom";
import building from "../assets/building.png";
const Navbar = () => {
  return (
    <div className="px-10 py-5 flex justify-between shadow-md w-[100vw] fixed top-0 bg-white z-20">
      <div className="flex gap-2 items-center">
        <img src={building} alt="logo" className="w-[32px]" />
        <h1 className="font-semibold text-2xl text-[#FF6D38]">StayEasy</h1>
      </div>

      <Link
        to={"/liked"}
        className="px-2 py-1 rounded-md bg-[#FF6D38] hover:scale-[1.02] transition-all text-white font-semibold"
      >
        Liked
      </Link>
    </div>
  );
};

export default Navbar;
