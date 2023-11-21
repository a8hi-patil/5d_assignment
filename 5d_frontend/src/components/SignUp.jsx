import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { CiMobile4 } from "react-icons/ci";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
const SignUp = () => {
  const navigate = useNavigate();
 const [showpass,setShowpass]=useState(false)
  const [userData, setUserData] = useState({});
  const onSubmitHander = (e) => {
    e.preventDefault();
    console.log(userData);
    axios
      .post("http://localhost:4999/", userData)
      .then((res) => {
        console.log("res");
        console.log(res);
        //Link to add moment
        
        navigate("/addmoment");
      })

      .catch((er) => {
        alert("User Already Exist");
        console.log("err");
        console.log(er);
      });
  };

  return (
    <div className="container">
      <div className="headings">
        <h1>5D Solutions</h1>
      </div>
      <div className="signupform">
        <h1>Sign Up</h1>
        <form action="#" onSubmit={onSubmitHander}>
          <div className="form-container">
            <div className="left">
              <div className="inputbox">
                <label htmlFor="name">First Name</label>
                <div className="inner-inputbox">
                  <CiUser />
                  <input
                    type="text"
                    name="name"
                    value={userData.fname ? userData.fname : ""}
                    onChange={(e) => {
                      setUserData({ ...userData, fname: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="inputbox">
                <label htmlFor="name">Last Name</label>
                <div className="inner-inputbox">
                  {" "}
                  <CiUser />
                  <input
                    type="text"
                    name="lname"
                    value={userData.lname ? userData.lname : ""}
                    onChange={(e) => {
                      setUserData({ ...userData, lname: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="inputbox">
                <label htmlFor="name">Mobile</label>
                <div className="inner-inputbox">
                  <CiMobile4 />
                  <input
                    type="mobile"
                    name="mobile"
                    value={userData.mobile ? userData.mobile : ""}
                    onChange={(e) => {
                      setUserData({ ...userData, mobile: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="right">
              <div className="inputbox">
                <label htmlFor="name">Email</label>
                <div className="inner-inputbox">
                  <MdOutlineEmail />
                  <input
                    type="email"
                    name="email"
                    value={userData.email ? userData.email : ""}
                    onChange={(e) => {
                      setUserData({ ...userData, email: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="inputbox">
                <label htmlFor="name">City</label>
                <div className="inner-inputbox">
                  <RiCheckboxBlankCircleLine />
                  <input
                    type="text"
                    name="city"
                    value={userData.city ? userData.city : ""}
                    onChange={(e) => {
                      setUserData({ ...userData, city: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="inputbox">
                <label htmlFor="password">Password</label>
                <div className="inner-inputbox">
                  <CiLock />
                  <input
                    type={showpass?"text":"password"}
                    name="password"
                    value={userData.password ? userData.password : ""}
                    onChange={(e) => {
                      setUserData({ ...userData, password: e.target.value });
                    }}
                  />
                  <FaEyeSlash onClick={()=>{setShowpass(prev=>!prev)}} />
                </div>
              </div>
            </div>
          </div>
          <input id="submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
