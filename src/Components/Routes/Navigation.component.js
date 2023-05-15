import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../contexts/user-context-component";
import "./navigation.styles.scss";
import { ReactComponent as CrownLogo } from "../../Assets/crown.svg";
import { SignOutUser } from "../utils/utils.fireBase";
import Carticon from "../Cart_/Cart-icon-component.js";
import Cart_Drop_Down from "../Cart_/cart-dropdown-component";
import { CartContext } from "../contexts/cart-context-component";

const Navigation = () => {
  const { currentuser, setCurrentuser } = useContext(userContext);
  const { isCartIsOpen } = useContext(CartContext);
  console.log(currentuser);
  const SignOutHandler = async () => {
    await SignOutUser();
    setCurrentuser(null);
  };
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentuser ? (
            <spna className="nav-link" onClick={SignOutHandler}>
              Sign Out
            </spna>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign IN
            </Link>
          )}

          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Carticon />
        </div>
        {isCartIsOpen && <Cart_Drop_Down />}
        {/* // This will render only when the setIsCartIsOpen is true//  */}
      </div>

      <Outlet />
    </>
  );
};
export default Navigation;
