import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
// import { useTranslation } from "react-i18next";
import MenuCart from "./sub-components/MenuCart";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { setCurrency } from "../../store/slices/currency-slice"
// import { useDispatch } from "react-redux";
// import { setCurrency } from "../../store/slices/currency-slice"
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db,dbdata, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import { getAuth, onAuthStateChanged, UserCredential  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDwjYE-3pTYAZZBnllBfalXOBWaA_M2ySA",
  authDomain: "react-firebase-auth-c4b95.firebaseapp.com",
  projectId: "react-firebase-auth-c4b95",
  storageBucket: "react-firebase-auth-c4b95.appspot.com",
  messagingSenderId: "964312904452",
  appId: "1:964312904452:web:cf4c48c0da67f34b1d5651",
  measurementId: "G-6LBHWQYY0W"
};

const firebaseApp = initializeApp(firebaseConfig);
const dbstore = getDatabase(firebaseApp);



const IconGroup = ({ iconWhiteClass}) => {
let array=[];
  const [UserEmail, setUserEmail] = useState("");
  const [name, setName] = useState("");
  const [Email, setEmail] = useState(null);
  const [idToken, setIdToken] = useState(null);

  useEffect(() => {
    const auth = getAuth(firebaseApp);

    // Listen for changes in the user's sign-in state
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        // User is signed in
        setEmail(authUser);

        const userEmail = authUser.email;
        setUserEmail(userEmail);
        setEmail(authUser);
        const responseDataEnrollPrg = await fetch(
          "https://react-firebase-auth-c4b95-default-rtdb.firebaseio.com/users.json"
      );
        const data = await responseDataEnrollPrg.json();
        console.log(Object.values(data),data,"apidata");
        array = Object.values(data).filter(items =>items.email===userEmail);
        console.log(array,userEmail,"152")
        setName(array[0].displayName);



        // Get the ID token
        authUser
          .getIdToken()
          .then((token) => {
            setIdToken(token);
          })
          .catch((error) => {
            console.error('Error getting ID token:', error);
          });
      } else {
        // User is signed out
        setEmail(null);
        setIdToken(null);
      }
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);



console.log(Email,idToken,"token")


  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();


  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const changeLanguageTrigger = e => {
    const languageCode = e.target.value;
    i18n.changeLanguage(languageCode);
  };

  const setCurrencyTrigger = e => {
    const currencyName = e.target.value;
    dispatch(setCurrency(currencyName));
  };



  const handleClick = e => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };
  const { compareItems } = useSelector((state) => state.compare);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { cartItems } = useSelector((state) => state.cart);
  const[visible,setVisible] = useState();
  const handleClicknew = () => {
    // }
    navigate('/login')
    //window.location.href = '/login';
  };
  const orderfood =() => {
    window.location.href = '/cloud-kitchen';
  }
  const handleDashboardClick = (e) => {
    // }
    if(user)
    {
      
      user.getIdToken().then((idToken) => {
        const dataToSend = {
          message: 'Hello from Sender!',
          someValue: user.email,
        };
        const dataRef = ref(dbstore, 'sharedData');
      push(dataRef, dataToSend);
      console.log(dataRef,"user");
        console.log(idToken,"idToken123");
       let obj = JSON.stringify(Email);
       window.name = obj;
        window.parent.postMessage(JSON.stringify(Email),"http://member.rezingo.com/");
      window.location.href = `http://member.rezingo.com/`;
      });

    }
    else{
      console.log(user,"usernull");
    }
   // window.location.href = 'http://member.rezingo.com/'; 
  };

  // const changeLanguageTrigger = e => {  
  //   const languageCode = e.target.value;
  //   i18n.changeLanguage(languageCode);
  //   closeMobileMenu();
  // };

  // const setCurrencyTrigger = e => {
  //   const currencyName = e.target.value;
  //   dispatch(setCurrency(currencyName));
  //   closeMobileMenu();
  // };
  const location = useLocation();
  const { displayName } = location.state || {};

  const users = location.state?.users;

  // const dispatch = useDispatch();
  // const currency = useSelector((state) => state.currency);
  return (
    <div className={clsx("header-right-wrap", iconWhiteClass)}>

{/* <div>
<div className="slider-btn btn-hover">
                <Link
                  className="animated" style={{backgroundColor:"#ab87cd",color:"#fff"}}
                  to={process.env.PUBLIC_URL + data.url}
                >
                  SHOP NOW
                </Link>
              </div>
</div> */}
      <div className="btn-hover2 d-none d-lg-block">
        <button className="p-1" onClick={orderfood}>
        Order Food
        </button>
      </div>

   {/* <div>{user?.email}</div> */}
  {user?.email?
  (
  <div className="same-style account-setting language-profile-wrap d-none d-lg-block" >
    <div className="same-language-profile use-style">
  <button
   style={{border: "none",
   backgroundColor: "white",
   marginTop: "4px"}}
    className="account-setting-active"
    onClick={e => handleClick(e)}
  >
      <i className="pe-7s-user-female" style={{color:"#a0a0a0"}} />
  </button>
  <div className="lang-profile-dropdown">
    <ul>
    <li style={{display:"flex",borderBottom:"1px solid #eff2f7",marginLeft:"-7px"}}>
      
      {/* <i className="fa fa-user" style={{color:"#6a6a6a",marginTop:"3px",fontSize:"21px",marginRight:"7px"}} /> */}
      <img src="https://traininglabs.in/uploads/user/1687846976-Asi5tpLMnK.png" alt="img" class="radius-50" style={{ width: "31px", height: "31px", borderRadius: "50%", marginRight: "10px",marginTop:"9px"}}></img>
      <div>
      
      {/* <h5 style={{marginTop:"7px"}}>  {users.displayName}</h5> */}
      {users ? (
        <>
         <h5 style={{marginTop:"7px",marginBottom:"17px"}}> {name} </h5>
          {/* Display other user data as needed */}
        </>
      ) : (
        <h5 style={{marginTop:"7px",marginBottom:"17px"}}> {name} </h5>
      )}
        <p style={{fontSize:"11px",marginTop:"-11px",marginBottom:"20px"}}>
        {user?.email}
        </p>
        </div>
      
      </li>
      {/* <li style={{display:"flex"}}>
      <i className="fa fa-user" style={{color:"#6a6a6a",marginTop:"3px",fontSize:"21px",marginRight:"7px"}} />
        <Link to={"http://member.rezingo.com/UserInfo.html"}>{user?.email}</Link>
      </li> */}
      <li style={{display:"flex",marginTop:"10px",borderBottom:"1px solid #eff2f7"}}>
      <i className="fa fa-windows" style={{color:"#6a6a6a",marginTop:"7px",fontSize:"17px",marginRight:"20px"}} />
        {/* <Link style={{ textTransform: "capitalize",marginBottom:"10px"}} to={process.env.PUBLIC_URL + "http://member.rezingo.com/"}>
        Admin Dashboard
        </Link> */}
        <button 
    className="buttonhover"
    onClick={e => handleDashboardClick(e)}
  >Member Dashboard</button>
      </li>
      <li style={{display:"flex",marginTop:"10px"}} >
      <i className="fa fa-question-circle" style={{color:"#6a6a6a",marginTop:"5px",fontSize:"21px",marginRight:"20px"}} />
        <Link style={{marginBottom:"10px"}} to={process.env.PUBLIC_URL + "#"}>
        Help Support      
        </Link>
      </li>
      <li style={{display:"flex",marginLeft:"4px" ,}}>
      <i className="fa fa-sign-out" style={{color:"#6a6a6a",marginTop:"5px",fontSize:"21px",marginRight:"10px"}} />
      <button className="dashboard__btn buttonhover" style={{marginLeft:"0px"}} onClick={logout}>
           Logout
        </button>
      </li>
    </ul>
  </div>
</div>
</div>)
   :(
   <div className="slider-btn btn-hover d-none d-lg-block ">
        <button className="p-1" id="sample"  style={{backgroundColor:"#703ca2",color:"#fff",marginRight:"10px",width:"100px",border:"none"}}  onClick={handleClicknew}>
        Get Started
        </button>
      </div>
      )
}

    <div className="same-style account-setting language-currency-wrap d-none d-lg-block">
    <div className="same-language-currency use-style">
        <button
        style={{border: "none",
        backgroundColor: "white",
        marginTop: "4px"}}
          className="account-setting-active"
          onClick={e => handleClick(e)}
        >
           <FontAwesomeIcon icon={faSackDollar} style={{color:"#a0a0a0",fontSize:"22px"}} />
        </button>
        <div className="lang-car-dropdown" style={{width:"100px",padding:"8px 12px 10px"}}>
          <ul>
            <li style={{display:"flex"}}>
            <i className="fa fa-usd" style={{color:"#6a6a6a",fontSize:"16px",marginTop:"5px",marginRight:"5px"}} />
          
              <button value="USD" style={{border:"none",backgroundColor:"white",color:"#1f1f1f",fontSize:"15px"}} onClick={e => setCurrencyTrigger(e)}>
                USD
              </button>
       
            </li>
            <li style={{display:"flex"}}>
            <i className="fa fa-eur" style={{color:"#6a6a6a",marginTop:"5px",fontSize:"16px",marginRight:"5px"}} />
            <button value="EUR" style={{border:"none",backgroundColor:"white",color:"#1f1f1f",fontSize:"15px"}} onClick={e => setCurrencyTrigger(e)}>
            EUR
              </button>
            </li>
            <li style={{display:"flex"}} >
            <i className="fa fa-inr" style={{color:"#6a6a6a",fontSize:"16px",marginTop:"5px",marginRight:"5px",marginLeft:"2px"}} />
            <button value="INR" style={{border:"none",backgroundColor:"white",color:"#1f1f1f",fontSize:"15px"}} onClick={e => setCurrencyTrigger(e)}>
            INR
              </button>
            </li>
          
          </ul>
        </div>
        </div>
      </div>



      <div className="same-style cart-wrap d-none d-lg-block">
        <button className="icon-cart" onClick={e => handleClick(e)}>
          <i className="pe-7s-shopbag" style={{color:"#a0a0a0"}}/>
          <span className="count-style">
            {cartItems && cartItems.length ? cartItems.length : 0}
          </span>
        </button>
        {/* menu cart */}
        <MenuCart />
      </div>
      
      <div className="same-style cart-wrap d-block d-lg-none">
        <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartItems && cartItems.length ? cartItems.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style mobile-off-canvas d-block d-lg-none">
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <i className="pe-7s-menu" />
        </button>
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  iconWhiteClass: PropTypes.string,
};



export default IconGroup;
