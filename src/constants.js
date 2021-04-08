// const localhost = "http://orbitplug.com.swadexpress.com";
// const localhost = "https://orbitplug.xyz"; 
// const localhost = "http://127.0.0.1:8000"; 
// const localhost = "http://192.168.1.137:8000/"; 
const localhost = "https://kawsarkhan.com"; 


// Iffat Jahan
// Feriha islam any


const apiURL = "/shop";
export const endpoint = `${localhost}${apiURL}`;
export const endpointauth = `${localhost}`;
export const endpointlocahost = `${localhost}`;
export const endpointlocahostsocilauth = `${localhost}`;
export const endpointlocahostimage = `${localhost}`;
export const productListURL = `${endpoint}/products/`;
export const productDetailURL = id => `${endpoint}/products/${id}/`;
export const OrderDetailURL = id => `${endpoint}/orderdetail/${id}/`;
export const addToCartURL = `${endpoint}/add-to-cart/`;
export const orderSummaryURL = `${endpoint}/order-summary/`;
export const checkoutURL = `${endpoint}/checkout/`;
export const addCouponURL = `${endpoint}/add-coupon/`;
export const countryListURL = `${endpoint}/countries/`;
export const userIDURL = `${endpoint}/user-id/`;
export const addressListURL = addressType => `${endpoint}/addresses/?address_type=${addressType}`;
export const addressCreateURL = `${endpoint}/addresses/create/`;
export const addressUpdateURL = id => `${endpoint}/addresses/${id}/update/`;
export const userProfileUpdateURL = id => `${endpoint}/userprofileupdate/`;
export const addressDeleteURL = id => `${endpoint}/addresses/${id}/delete/`;
export const orderItemDeleteURL = id => `${endpoint}/order-items/${id}/delete/`;
export const orderItemUpdateQuantityURL = `${endpoint}/order-item/update-quantity/`;
export const paymentListURL = `${endpoint}/payments/`;