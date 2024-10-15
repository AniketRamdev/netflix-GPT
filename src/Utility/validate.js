export const checkValidData = (email, password) => {
  // const isNameValid =
  //   /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
  //     fullname
  //   );

  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  //   if (!isNameValid) return "Please enter valid name ⛔";
  if (!isEmailValid) return "Email is not valid ⛔";
  if (!isPasswordValid) return "Password is not valid ⛔";

  return "Details are valid";
};
