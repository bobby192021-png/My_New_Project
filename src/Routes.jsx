import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/auth/Login";
import Signup from "./Pages/auth/Signup";
import OtpVerification from "./Pages/auth/otp";
import ForgotPassword from "./Pages/auth/ForgotPassword";
import ResetPassword from "./Pages/auth/ResetPassword";
import Dashboard from "./Pages/dashboard/index";
import SignupForm from "./Pages/auth/signup-form";
import SubscriptionForm from "./Pages/auth/SubscripitionDetails";
import AuthLayout from "./Pages/auth/AuthLayout";
import MainContainer from "./layout/Maincontainer";
import ManageProducts from "./feathers/productManagement/manageProducts";
import ManageInventory from "./feathers/productManagement/manageInventory";
import AddProductEnhanced from "./feathers/productManagement/addProduct";
import OrderManagement from "./feathers/orderManagement/order";
import ViewOrderManagement from "./feathers/orderManagement/view";
import CagmpainList from "./feathers/DiscountAndCoupon/discountCoupon";
import HomePage from "./Pages/main/HomePage";
import AddProduct from "./Pages/main/add"; 
import CartPage from "./Pages/main/CartPage";
import Signup1 from "./Pages/auth/Signup1";
import Products from "./Pages/main/products";
import AddProductApi from "./Pages/main/addProductapi";
import EditProduct from "./Pages/main/EditProduct";

const Routing = () => { 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/sign-up1" element={<Signup1 />} />
      <Route path="/otp" element={<OtpVerification/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route path="/reset-password" element={<ResetPassword/>} />
      <Route path="/signup-form" element={<SignupForm/>} />
      <Route path="/Subscription-form" element={<SubscriptionForm/>}/>
      <Route path="AuthLayout" element={<AuthLayout/>}/>

      <Route element={<MainContainer/>}>

      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/manage-products" element={<ManageProducts/>} />
      <Route path="/manage-inventory" element={<ManageInventory/>} />
      <Route path= "/add-product"  element={<AddProductEnhanced/>} />
      <Route path= "/order-management"  element={<OrderManagement/>} />
      <Route path= "/order-management/view"  element={<ViewOrderManagement/>} />
      <Route path= "/marketing"  element={<CagmpainList/>} />
      <Route path= "/home-page"  element={<HomePage/>} />
      <Route path= "/add"  element={<AddProduct/>} />
      <Route path= "/cart-page"  element={<CartPage/>} />
      <Route path= "/products"  element={<Products/>} />
      <Route path= "/addProductapi"  element={<AddProductApi/>} />
      <Route path= "/editProduct"  element={<EditProduct/>} />

      </Route>

    </Routes>
    </BrowserRouter>
  )
}
export default Routing;
