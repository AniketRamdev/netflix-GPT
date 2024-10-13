import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utility/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  // const fullname = useRef(null);

  const handleBtnClick = () => {
    console.log(
      email.current.value,
      password.current.value
      // fullname.current.value
    );
    const message = checkValidData(
      // fullname.current.value,
      email.current.value,
      password.current.value
    );
    setErrMessage(message);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg"
          alt="hero-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-4/12  p-12 my-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-75 "
      >
        <h1 className="font-bold text-3xl py-4 text-center">
          {isSignInForm ? "Sign-In" : "Sign-Up"}
        </h1>
        {!isSignInForm && (
          <input
            // ref={fullname}
            type="text"
            placeholder="Full Name "
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter Password "
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-700 font-bold text-lg text-center">
          {errMessage}
        </p>
        <button
          className="p-4 my-8 bg-red-700 w-full rounded-lg"
          onClick={handleBtnClick}
        >
          {isSignInForm ? "Sign-In" : "Sign-Up"}
        </button>

        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "Are You New to " : "Already Registered to "}
          <span className="text-red-700 ">Netflix </span>
          <br />
        </p>
      </form>
    </div>
  );
};

export default Login;
