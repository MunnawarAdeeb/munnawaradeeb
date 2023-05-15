import Home from "./Components/Routes/home.component";
import Navigation from "./Components/Routes/Navigation.component";
import { Routes, Route } from "react-router-dom";
import Authentication from "./Components/Authentication/authentication.component";
import Shop from "./Components/Shop/Shop-item-component";
import CheckOut from "./Components/Cart_/CheckOut.component";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home />}/>
          <Route path="Shop" element={<Shop />}/>
          <Route path="auth" element={<Authentication/>}/>
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
