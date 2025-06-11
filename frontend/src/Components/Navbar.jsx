import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, logout,isLoading } = useAuth0();
   const [loginShown, setLoginShown] = useState(false);

  const handleLogin = () => {
    loginWithRedirect()
  }

   useEffect(() => {
    if (isAuthenticated && !loginShown && !isLoading) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login successful",
        showConfirmButton: false,
        timer: 1500,
      });
      setLoginShown(true);
    }
  }, [isAuthenticated, isLoading, loginShown]);

  console.log(user);
  return (
    <div className="bg-gray-200  rounded-sm flex justify-between items-center px-10  top-0 w-full z-50 shadow-md relative">
      <div className="flex items-center">
        <Link to={"/"}>
          <img src="/logoN.png " className="w-24 h-20" alt="" />
          <img
            src="/logoimg.png"
            className={`w-20 pt-3 opacity-45 absolute left-28 top-0 `}
            alt=""
          />
        </Link>
      </div>
      <div>
        {isAuthenticated ? (
          <div className=" relative group ">
            <img
              src={user.picture}
              className={`w-12 h-12 rounded-full cursor-pointer `}
              alt=""
              onClick={() => setIsOpen(!isOpen)}
            />
            <p className="absolute top-10 text-sm  shadow-xl w-[100px] shadow-white  opacity-0  group-hover:opacity-100 transition duration-200  hover:cursor-pointer text-black mt-0.5 ">
              {user.name}
            </p>
          </div>
        ) : (
          <div className=" relative group ">
            <img
              src="/cat.jpg"
              className="w-15 h-15 rounded-full cursor-pointer"
              alt=""
              onClick={() => setIsOpen(!isOpen)}
            />
            <p className="absolute top-10 text-sm  shadow-xl w-[100px] shadow-white  opacity-0  group-hover:opacity-100 transition duration-200  hover:cursor-pointer text-black mt-0.5 right-1">
              user
            </p>
          </div>
        )}
        {isOpen && (
          <div className="absolute bg-gray-200 top-24 right-5  rounded-xl   bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 text-center">
            <ul className="  space-y-1.5 text-sm  ">
              <Link to={"/createNewCoffee"}>
                {" "}
                <li className="hover:bg-cyan-100 px-8 py-2">ADD New items</li>
              </Link>
              {/* <Link to={"/login"}>
                <li className="hover:bg-cyan-100 px-8 py-2">Login</li>{" "}
              </Link> */}
              {!isAuthenticated && (
                <button
                  onClick={ handleLogin}
                  className="hover:bg-cyan-100 w-full py-2"
                >
                  Log In
                </button>
              )}
              {/* <button
                onClick={() => loginWithRedirect()}
                className="hover:bg-cyan-100  w-full py-2"
              >
                Log In
              </button> */}
              {isAuthenticated && (
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                  className="hover:bg-cyan-100 w-full py-2"
                >
                  Log Out
                </button>
              )}
              {/* <button
                className="hover:bg-cyan-100  w-full py-2"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button> */}
              {/* <li className="hover:bg-cyan-100 px-8 py-2">Register</li> */}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
