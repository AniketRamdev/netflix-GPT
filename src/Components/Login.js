import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utility/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utility/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../Utility/userSlice";
import { BG_IMG_URL } from "../Utility/constants";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  // const fullname = useRef(null);

  const handleBtnClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrMessage(message);

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/113989155?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(message + "-" + errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(message + "-" + errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMG_URL} alt="hero-img" />
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
