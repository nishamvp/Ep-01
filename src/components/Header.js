import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState ,useContext} from "react";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  const {name} = useContext(userContext)
  const cartItems = useSelector((store)=>store.cart.items)
  return (
    <div className=" flex justify-between items-center bg-yellow-400 shadow-lg ">
      <div className="w-28 p-3">
        <img className="rounded-lg" src={LOGO_URL} alt="" />
      </div>
      <div className="">
        <ul className="flex gap-8 mr-10 ">
          <Link to="/">
            <li className="text-white font-semibold">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-white font-semibold">About</li>
          </Link>
          <Link to="/contact">
            <li className="text-white font-semibold">Contact</li>
          </Link>
          <Link to="/grocery">
            <li className="text-white font-semibold">Grocery</li>
          </Link>
          <button
            className="text-white font-semibold"
            onClick={() => {
              btnNameReact && btnNameReact === "login"
                ? setBtnNameReact("logout")
                : setBtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
          <Link to="/cart"><li className="text-white font-bold text-xl">cart({cartItems.length})</li></Link>
          <li className="text-white font-bold">{name}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
