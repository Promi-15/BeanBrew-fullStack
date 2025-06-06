import { FaSquareGithub } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
const Login = () => {
  return (
    <div
      className="lg:pt-40 pt-30 min-h-screen w-full bg-cover bg-no-repeat relative bg-center "
      style={{ backgroundImage: "url('/img2.jpg')" }}
    >
      <form className="lg:w-[500px] w-[300px] mt-12 lg:mt-20 rounded-md bg-clip-padding backdrop-brightness-75  backdrop-blur-md opacity-85 border border-white p-6 space-y-5 absolute lg:right-48 right-10">
        <p className="font-bold italic text-4xl roboto text-center text-white">
          Login Form
        </p>
        <div className="flex flex-col  space-y-4 ">
          <label className="text-white ">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 rounded-3xl border-b-2 border-black backdrop-blur-md shadow-2xl bg-white/10  bg-clip-padding  text-white cursor-pointer"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <label className="text-white ">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="p-2 rounded-3xl border-b-2 border-black backdrop-blur-md shadow-2xl bg-white/10  bg-clip-padding  text-white  cursor-pointer"
          />
        </div>
        <button className=" rounded-3xl border-b-2 border-black backdrop-blur-md shadow-2xl bg-white/10  bg-clip-padding  text-white w-full p-2 hover:bg-white hover:text-black hover:transform hover:transition-all hover:duration-1000 mt-5">
          Login
        </button>
        <div className="flex justify-between">
          {/* GitHub */}
          <button className="btn bg-black text-white border-black hover:shadow-2xl hover:shadow-white ">
            <FaSquareGithub />
           <p> Login with GitHub</p>
          </button>

          {/* Google */}
          <button className="btn bg-black text-white border-black hover:shadow-2xl hover:shadow-white ">
           <FaGooglePlusG />
            Login with Google
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default Login;
