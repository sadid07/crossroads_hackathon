import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import HomepageLayout from "./containers/Home";
import ProductList from "./containers/ProductList";
import ProductDetail from "./containers/ProductDetail";
import OrderSummary from "./containers/OrderSummary";
import Checkout from "./containers/Checkout";
import Profile from "./containers/Profile";
import OrderDetail from "./containers/OrderDetail"
import Order from "./containers/Order"
import UserProfileUpdate from "./containers/UserProfileUpdate"
import Payments from "./containers/Payments"
import UserProfile from "./containers/UserProfile"
import OrbitplugGuideline from "./containers/OrbitplugGuideline"
import YouCanTryforSell from "./containers/YouCanTryforSell"
import OrderTrack from "./containers/OrderTrack"
import CancelledOrders from "./containers/CancelledOrders"
// import OrderCancellerandReturns from "./containers/OrderCancellerandReturns"
import AllOrderProducts from "./containers/AllOrderProducts"
import AllCompletesOrderProducts from "./containers/AllCompletesOrderProducts"
import AllReturnsOrderProductsList from "./containers/AllReturnsOrderProductsList"
import AllCencelledOrderProductsList from "./containers/AllCencelledOrderProductsList"
import AllNewOrderProductsList from "./containers/AllNewOrderProductsList"
import OrderCanclledStatusChange from "./containers/OrderCanclledStatusChange"
import OrderReturnStatusChange from "./containers/OrderReturnStatusChange"
import UserOrderSummary from "./containers/UserOrderSummary"
import LoginAndSecurity from "./containers/LoginAndSecurity"
import YourProfile from "./containers/YourProfile"
import PasswordResetEmail from "./containers/PasswordResetEmail"
import PasswordResetComplete from "./containers/PasswordResetComplete"
import BullingAddress from "./containers/BullingAddress"
import ShippingAddress from "./containers/ShippingAddress"
import ShippingAddressUpdate from "./containers/ShippingAddressUpdate"
import Payment from "./containers/Payment"
import CategoryProducts from "./containers/CategoryProducts"
import Searching from "./containers/Searching"
// import Payments from "./constants/Payments"

const BaseRouter = () => (
  <Hoc>
    <Route  path="/products" component={ProductList} />
    <Route path="/single-product/:productID" component={ProductDetail} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/order-summary" component={OrderSummary} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/orderdetail/:orderdetailID" component={OrderDetail} />
    <Route path="/ordercanclledstatuschange/:ordercanclledstatuschangeID" component={OrderCanclledStatusChange} />
    <Route path="/orderreturnstatuschange/:orderreturnstatuschangeID" component={OrderReturnStatusChange} />
    {/* <Route path="/products/:orderdetailID" component={OrderDetail} /> */}

    <Route path="/searching/:searchingData" component={Searching} />
    <Route path="/category-products/:categoryID" component={CategoryProducts} />
    <Route path="/payment" component={Payment} />
    <Route path="/shippingaddressupdate" component={ShippingAddressUpdate} />
    <Route path="/shippingaddress" component={ShippingAddress} />
    <Route path="/bullingaddress" component={BullingAddress} />
    <Route path="/passwordresetcomplete" component={PasswordResetComplete} />
    <Route path="/passwordresetemail" component={PasswordResetEmail} />
    <Route path="/yourprofile" component={YourProfile} />
    <Route path="/loginandsecurity" component={LoginAndSecurity} />
    <Route path="/userordersummary" component={UserOrderSummary} />
    <Route path="/allneworderproductslist" component={AllNewOrderProductsList} />
    <Route path="/allcencelledorderproductslist" component={AllCencelledOrderProductsList} />
    <Route path="/allreturnsorderproductslist" component={AllReturnsOrderProductsList} />
    <Route path="/allcompletesorderproducts" component={AllCompletesOrderProducts} />
    <Route path="/allorderproducts" component={AllOrderProducts} />
    <Route path="/cancelledorders" component={CancelledOrders} />
    <Route path="/ordertrack" component={OrderTrack} />
    <Route path="/userprofile" component={UserProfile} />
    <Route path="/youcantryforsell" component={YouCanTryforSell} />
    <Route path="/orbitplugguideline" component={OrbitplugGuideline} />
    <Route path="/profile" component={Profile} />
    <Route path="/userprofileupdate" component={UserProfileUpdate} />
    <Route path="/order" component={Order} />
    <Route path="/payments" component={Payments} />
    <Route exact path="/" component={HomepageLayout} />
  </Hoc>
);

export default BaseRouter;
