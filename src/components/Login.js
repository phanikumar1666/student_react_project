import React from "react";
import Footer from "./Footer";

const Login = () => {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-transparent flex h-screen w-screen items-center justify-center ">
     <div className="justify-center bg-gradient-to-r from-transparent to-transparent border-1 shadow-2xl shadow-black border-b-red-400 w-1/3 rounded-xl h-2/5">
        <div className="p-2 justify-center text-center flex font-semibold text-5xl text-[#C9252C]">
          Login
        </div>
    
        <div className="p-2 w-full">
          <div className="px-2 text-[#C9252C] text-xl">
            <label>User Name:</label>
          </div>
          <div className="p-2">
            <input
              name="uname"
              id="uname"
              className="border-2 focus:border-[#C9252C] w-full text-xl h-12 p-1 rounded-xl border-[#C9252C] "
            />
          </div>
          <div className="px-1 text-[#C9252C] text-xl">
            <label>Password:</label>
          </div>
          <div className="p-2">
            <input
              name="password"
              id="password"
              className="border-2 w-full text-xl h-12 p-1 rounded-xl border-[#C9252C] hover:border-[#FFBC00] focus:border-[#FFBC00]"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="p-2 justify-end">
           <a className="text-2xl font-semibold underline align-middle top-2">Register</a>
          </div>
          <div className="p-2 justify-end">
            <button className="bg-[#C9252C] h-14 w-32 rounded-xl text-[#FFBC00] text-2xl font-semibold ">
              Login
            </button>
          </div>
        </div>
      </div>
      <Footer/>  
    </div>
  );
};

export default Login;
