import React, { useEffect } from "react";
import { auth } from "../Utility/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utility/userSlice";
import { netflixLogo, SUPPORTED_LANGUAGES } from "../Utility/constants";
import { toggleGptSearchView } from "../Utility/gptSlice";
import { changeLanguage } from "../Utility/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolutep px-6 y2 bg-gradient-to-br from-black z-10 w-full  flex flex-col md:flex-row md:justify-between ">
      <img className="w-40 mx-auto md:mx-0" src={netflixLogo} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-600 text-white rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-2 my-2 bg-red-700 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Netflix Home" : "GPT search"}
          </button>
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
