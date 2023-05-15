import SignUpForm from "../SIgn-up-Form/sign-up-form.component";
import FormInput1 from "../Sign-in-form/form-input-component";
import "./authentication.component.scss";
const Authentication = () => {
  return (
    <>
      <div className="authentication-container">
        <FormInput1 />
        <SignUpForm />
      </div>
    </>
  );
};
export default Authentication;
