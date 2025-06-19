import React, { useEffect } from "react";
import { auth } from "../Utility/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utility/userSlice";
import { netflixLogo } from "../Utility/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-6 py2 bg-gradient-to-br from-black z-10 w-full flex justify-between">
      <img className="w-40" src={netflixLogo} alt="logo" />
      {user && (
        <div className="flex">
          <p>{user.displayName}</p>
          {console.log(user, "logged-In User")}
          <button onClick={handleSignOut} className=" text-white font-bold">
            (Sign-Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
