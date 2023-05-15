import { useState,useContext } from "react";
import FormInput from "../Form-Input/Form-input-component";
import { userContext } from "../contexts/user-context-component";
import "./sign-up-form.styles.scss"
import Button from "../Buttons/button.component";
import {
  createAuthUserWithEmailAndpassword,
  createUserDocumentFromAuth,
} from "../utils/utils.fireBase";
const DefaultFields = {
  DisplayName: "",
  Email: "",
  PassWord: "",
  ConfirmPassWord: "",
};

const SignUpForm = () => {
  const [Filed, setField] = useState(DefaultFields);
  const { DisplayName, Email, PassWord, ConfirmPassWord } = Filed;
  console.log(Filed);
  const {setCurrentuser} =useContext(userContext)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setField({ ...Filed, [name]: value });
  };
  const resetFormFields = () => {
    setField(DefaultFields);
  };

  const submitHandle = async (event) => {
    event.preventDefault();
    if (PassWord !== ConfirmPassWord) {
      alert("PassWord Does Not Match Please try Again");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndpassword(
        Email,
        PassWord
      );
      setCurrentuser(user)
      await createUserDocumentFromAuth(user, { DisplayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitHandle}>
        <FormInput
          label="Display Name"
          type="string"
          value={DisplayName}
          required
          name="DisplayName"
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          type="email"
          value={Email}
          required
          name="Email"
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          value={PassWord}
          required
          name="PassWord"
          onChange={handleChange}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          value={ConfirmPassWord}
          required
          name="ConfirmPassWord"
          onChange={handleChange}
        />
        <Button>Submit</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
