import React, { useContext } from "react";
import { HiSearch } from "react-icons/hi";
import { MdNotifications } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa";
import { useNavigate,Link } from "react-router-dom";
import { context, firecontext } from "../../store/context";

function NavBar() {
  const navigate=useNavigate();
  const { user } = useContext(context);
  const { firebase } = useContext(firecontext);
  return (
    <div className="bg-black h-20 flex justify-between items-center px-8">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt=""
        className="w-30 h-10"
      />
      <div className=" text-white text-[20px] font-bold ml-80">
        <ul className="flex gap-5">
          <li className="cursor-pointer hover:text-red-500 duration-150">
            Home
          </li>
          <li className="cursor-pointer hover:text-red-500 duration-150">
            TV Shows
          </li>
          <li className="cursor-pointer hover:text-red-500 duration-150">
            Originals
          </li>
          <li className="cursor-pointer hover:text-red-500 duration-150">
            Movies
          </li>
          <li className="cursor-pointer hover:text-red-500 duration-150">
            My List{" "}
          </li>
        </ul>
      </div>
      <div className="h-20 w-80 flex justify-center items-center text-white text-[20px] gap-2">
        <h className=" font-bold break-all text-[24px] underline ">
          {user ? user.displayName : "Login"}
        </h>
        <FaUserCheck />
      </div>
      <div className="">
        <ul className="flex gap-5 text-[23px]">
          <li className="">
            <button className="text-white hover:scale-110 duration-150">
              <HiSearch />
            </button>
          </li>

          <li>
            <button className="text-white hover:scale-110 duration-150">
              <MdNotifications />
            </button>
          </li>
          <li className="text-white ml-3 bg-[red] rounded-[0.5rem] h-7 flex justify-center items-center w-7 hover:scale-110 duration-150">
            {user? <button
              onClick={() => {
                firebase.auth().signOut();
                navigate("/")

              }}
            >
              <IoMdLogOut />
            </button>
            :<Link to="/"><IoMdLogOut className="cursor-pointer"/></Link>}
            
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
