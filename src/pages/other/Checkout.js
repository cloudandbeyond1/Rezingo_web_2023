import { Fragment,useEffect,useState } from "react";
import { Link, useAsyncError, useLocation,useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import Accordion from "react-bootstrap/Accordion";
import { auth, db,dbdata, logout } from "../../firebase";
import swal from 'sweetalert';
import { addToCart, decreaseQuantity, deleteFromCart, deleteAllFromCheckout } from "../../store/slices/cart-slice";
import {loadStripe} from '@stripe/stripe-js';
//import {loadStripe} from '@stripe/react-stripe-js'
import { database } from "../../firebase";
import { set, ref, push, get } from 'firebase/database';

import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import { deleteAllFromCart } from "../../store/slices/cart-slice";


const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const {error: submitError} = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await fetch('/create-intent', {
      method: 'POST',
    });

    const {client_secret: clientSecret} = await res.json();

    const {error} = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret,
      confirmParams: {
        return_url: '/',
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <PaymentElement />
      {/* <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button> */}
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
      </div>
    </form>
  );
};

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

const Checkout = () => {
  let cartTotalPrice = 0;

  let { pathname } = useLocation();
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);



    const [user, loading, error] = useAuthState(auth);
    const handleClick = e => {
      e.currentTarget.nextSibling.classList.toggle("active");
    };
    const handleClicknew = () => {
      // }
      window.location.href = '/login';
    };
    console.log(user,"user")

//const TableName="enrolledprograms";


    const handleClickCheck = async() => {
    //  let newDate = new Date()
//let date = newDate.getDate();


const currentDate = new Date().toLocaleDateString('en-GB')

      for(let items in cartItems)
      {
      console.log(items,cartItems,"cartItems");
      let totaldays= cartItems[items].weeks * 7;

var newDate = new Date(Date.now()+totaldays*24*60*60*1000);
      let enddate = newDate.toLocaleDateString("en-GB");
      console.log(currentDate,totaldays,enddate,"totaldays");
        //const tableRef = ref(database, TableName);
let newValue="";
        if(cartItems[items].type ==="Program")
        {
           newValue = {
          user: user.email,
          cartItemId:cartItems[items].cartItemId,
          category:cartItems[items].category,
          name:cartItems[items].name,
          id:cartItems[items].id,
          image:cartItems[items].image,
          type:cartItems[items].type,
          price:cartItems[items].price, 
          startdate:currentDate,
          weeks:cartItems[items].weeks,
          enddate:enddate,
          NoofDays:totaldays
        };
      }
      else{
        newValue = {
          user: user.email,
          cartItemId:cartItems[items].cartItemId,
          category:cartItems[items].category,
          name:cartItems[items].name,
          id:cartItems[items].id,
          image:cartItems[items].image,
          type:cartItems[items].type,
          price:cartItems[items].price,
          date:currentDate
        };
      }
        console.log(cartItems[items].type,"typeprd")
if(cartItems[items].type ==="Program")
{
        const responseData = await fetch(
          "https://react-firebase-auth-c4b95-default-rtdb.firebaseio.com/enrolledprograms.json",
          {
              method: "POST",
              body: JSON.stringify(newValue),
              headers: {
                  "Content-Type": "application/json",
              },
          }
      );
      const data = await responseData.json();
      console.log(data,"postdata");
        }
        if(cartItems[items].type ==="Product")
{
        const responseDataprd = await fetch(
          "https://react-firebase-auth-c4b95-default-rtdb.firebaseio.com/orderedproducts.json",
          {
              method: "POST",
              body: JSON.stringify(newValue),
              headers: {
                  "Content-Type": "application/json",
              },
          }
      );
      const data12 = await responseDataprd.json();
      console.log(responseDataprd,data12,"postdata12");
        }


      }
        

      
    };

    






    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


    const validationSchema = Yup.object().shape({
       firstname: Yup.string().required('First Name is required'),
       lastname: Yup.string().required('Last Name is required'),
       address: Yup.string().required('Address is required'),
       town: Yup.string().required('Town / City is required'),
       state : Yup.string().required('State / County is required'),
   
     
      email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
          phoneNumber: Yup.string()
          .min(10)
          .matches(phoneRegExp, "Phone number is not valid")
          .notRequired(),
          postcode: Yup.string()
          .required('Postcode / ZIP is required')
          .min(6),
          accountType: Yup.bool()
              .oneOf([true], "Please accept")
              .required("Please accept"),
             
              
      });
      const formOptions = { resolver: yupResolver(validationSchema) };
  
      // get functions to build form with useForm() hook
      const { register, handleSubmit, reset, formState } = useForm(formOptions);
      const { errors } = formState;
  
      function onSubmit(data) {
          // display form data on success
          
          swal({
            title: "success",
            text: " Payment received successfully stay with us! ",
            icon: "success",
            dangerMode: true,
          
          });
          
        dispatch(deleteAllFromCart());
        navigate("/");
          return false;
      }

      const dispatch = useDispatch();
      const navigate = useNavigate();

  return (
    <Fragment>
      <SEO
        titleTemplate="Checkout"
        description="Checkout page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Checkout", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <div className="row" style={{display:"flex"}}>
                
             <form className="formcheckout" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-lg-7 formcheckout1">
                <div className="billing-info-wrap">
                    <h3>Billing Details</h3>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>First Name</label>
                          <input type="text" {...register('firstname')}
            className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}/>
             <div className="invalid-feedback">{errors.firstname?.message}</div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Last Name</label>
                          <input type="text" {...register('lastname')}
            className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}/>
             <div className="invalid-feedback">{errors.lastname?.message}</div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Phone</label>
                          <input type="number" {...register('phoneNumber')}
            className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}/>
             <div className="invalid-feedback">{errors.phoneNumber?.message}</div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Email Address</label>
                          <input type="email"  {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}/>
             <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-select mb-20">
                          <label>Country</label>
                          <select>
                            <option>Select a country</option>
                            <option>Azerbaijan</option>                            
                            <option>Bahamas</option>
                            <option>Bahrain</option>
                            <option>Bangladesh</option>
                            <option>Barbados</option>
                            <option>India</option>
                            <option>United States of America</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>Address</label>
                          <input
                          
                            placeholder="House number and street name"
                            type="text"
                            {...register('address')}
                            className={`form-control billing-address ${errors.address ? 'is-invalid' : ''}`}/>
                             <div className="invalid-feedback">{errors.address?.message}</div>
                          
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>Town / City</label>
                          <input type="text"  {...register('town')}
                            className={`form-control billing-address ${errors.town ? 'is-invalid' : ''}`}/>
                             <div className="invalid-feedback">{errors.town?.message}</div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>State / County</label>
                          <input type="text" {...register('state')}
                            className={`form-control billing-address ${errors.state ? 'is-invalid' : ''}`}/>
                             <div className="invalid-feedback">{errors.state?.message}</div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Postcode / ZIP</label>
                          <input type="number" {...register('postcode')}
                            className={`form-control billing-address ${errors.postcode ? 'is-invalid' : ''}`}/>
                             <div className="invalid-feedback">{errors.postcode?.message}</div>
                        </div>
                      </div>
                    
                    </div>

                   
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="your-order-area">
                    <h3>Your order</h3>
                    <div className="your-order-wrap gray-bg-4">
                      <div className="your-order-product-info">
                        <div className="your-order-top">
                          <ul>
                            <li>Product</li>
                            <li>Total</li>
                          </ul>
                        </div>
                        <div className="your-order-middle">
                          <ul>
                            {cartItems.map((cartItem, key) => {
                              const discountedPrice = getDiscountPrice(
                                cartItem.price,
                                cartItem.discount
                              );
                              const finalProductPrice = (
                                cartItem.price * currency.currencyRate
                              ).toFixed(2);
                              const finalDiscountedPrice = (
                                discountedPrice * currency.currencyRate
                              ).toFixed(2);

                              discountedPrice != null
                                ? (cartTotalPrice +=
                                    finalDiscountedPrice * cartItem.quantity)
                                : (cartTotalPrice +=
                                    finalProductPrice * cartItem.quantity);
                              return (
                                <li key={key}>
                                  <span className="order-middle-left">
                                    {cartItem.name} X {cartItem.quantity}
                                  </span>{" "}
                                  <span className="order-price">
                                    {discountedPrice !== null
                                      ? currency.currencySymbol +
                                        (
                                          finalDiscountedPrice *
                                          cartItem.quantity
                                        ).toFixed(2)
                                      : currency.currencySymbol +
                                        (
                                          finalProductPrice * cartItem.quantity
                                        ).toFixed(2)}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="your-order-bottom">
                          <ul>
                            <li className="your-order-shipping">Shipping</li>
                            <li>Free shipping</li>
                          </ul>
                        </div>
                        <div className="your-order-total">
                          <ul>
                            <li className="order-total">Total</li>
                            <li>
                              {currency.currencySymbol +
                                cartTotalPrice.toFixed(2)}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="payment-method">
                      <div>
<div style={{borderBottom: "1px solid #979797", borderTop: "1px solid #979797"}}>

           
<div className=" col-lg-12">
  <div className="myaccount-wrapperNew">
    <Accordion>
      <Accordion.Item eventKey="0" className="single-my-account mb-20" style={{border:"none",marginBottom:"0px"}}>
      <div style={{display:"flex",backgroundColor:"#f6f6f6"}}>
      <input type="checkbox"  style={{width:"20px"}} {...register('accountType')}
                           className={`  ${errors.accountType ? 'is-invalid' : ''}`}/>
     <Accordion.Header className="panel-heading">
        Card Payment
        </Accordion.Header>
        </div>
        
        <Accordion.Body>
         <Elements stripe={stripePromise} options={options}>
           <CheckoutForm />
         </Elements>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
</div>
</div>

                    </div>

                      </div>
                    </div>

{user?.email?
  (
    <div className="place-order mt-25 slider-btn btn-hover d-lg-block">
    <button className="btn-hover" onClick={handleClickCheck}>Place Order</button>
  </div>)
   :(
<div className="place-order mt-25 slider-btn btn-hover d-lg-block">
    <button className="btn-hover" onClick={handleClicknew}>Place Order</button>
  </div>
      )
}

                  </div>
                </div>
                </form>
              </div>

            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cash"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in cart to checkout <br />{" "}
                      <div className="place-order mt-25 slider-btn btn-hover d-lg-block">
                      <Link to={process.env.PUBLIC_URL + "/shopdetails"}>
                        Shop Now
                      </Link>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Checkout;
