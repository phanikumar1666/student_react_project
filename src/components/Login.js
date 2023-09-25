import React, { useState } from "react";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const rashmikamandanna= useNavigate();
  const dbusername="dhanush@indiapost.gov.in";
  const dbpassword="Mahesh";
  const [uname, setUname]=useState('');
  const handleuname=(e)=>{
    setUname(e.target.value);
  }
  const [pswd, setPswd]=useState('');
  const handlepswd=(e)=>{
    setPswd(e.target.value);
  }
  const handleLogin=(e)=>{
    //checking whether username is entered or not
      if (uname ===''){
        alert('Please Enter User Name...!!!!');
        return;
      }

  // checking whehter password is entered or not
      if (pswd ===''){
        alert('Please Enter Password....!!!');
        return;
      }

  //checking whehter username is in proper email format or not
      const emailformat=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; //this is email regex
      if(emailformat.test(uname) === false){
        alert("Invalid Email Id Enterd, Cannot Continue...!!!");
        return;
      }
      //chekcing with username and password
      if(uname === dbusername && pswd === dbpassword){
          alert("Login Successful....");
          rashmikamandanna("/dashboard");      //navigating to dashboard
      }else{
          alert("Username/Password is not matching...!!!!");
      }
  }
  return (
    <div style={{backgroundColor: '#c7ad67'}} className="flex h-screen w-screen items-center justify-center ">
     <div className=" bg-bg-white justify-center border-1 shadow-2xl shadow-black border-b-red-400 w-1/3 rounded-xl h-2/5">
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
              value={uname}
              onChange={handleuname}
              placeholder="Please Enter Your Email Id..!!!"
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
              placeholder="Please Enter Your Password"
              type="password"
              value={pswd}
              onChange={handlepswd}
              className="border-2 w-full text-xl h-12 p-1 rounded-xl border-[#C9252C] hover:border-[#FFBC00] focus:border-[#FFBC00]"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="p-2 justify-end">
           <a href="/register" className="text-2xl font-semibold underline align-middle top-2">Register</a>
           <br/>
           </div>
          <div className="p-2 justify-end">
            <button onClick={handleLogin} className="bg-[#C9252C] h-14 w-32 rounded-xl text-[#FFBC00] text-2xl font-semibold ">
              Login
            </button>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Login;
