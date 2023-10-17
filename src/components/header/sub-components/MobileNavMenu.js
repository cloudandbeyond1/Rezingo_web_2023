import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../../firebase";
import { useState,useEffect } from "react";
import { getDatabase, ref, push } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, UserCredential  } from 'firebase/auth';

const MobileNavMenu = () => {
  let array=[];
  const [UserEmail, setUserEmail] = useState("");
  const [name, setName] = useState("");
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

  const { t } = useTranslation();
  const handleClicknew = () => {
    window.location.href = '/login';
  };
  const orderfood =() => {
    window.location.href = '/cloud-kitchen';
  }

  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);

  const users = location.state?.users;

  const [Email, setEmail] = useState(null);
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

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>{t("home")}</Link>
        </li>

        {/* <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/about"}>
            {t("about")}
          </Link>
        </li> */}
        <li>
          <Link to={process.env.PUBLIC_URL + "/program"}>
            {t("Program")}
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/Shop"}>{t("shop")}</Link>
          
          {/* <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/cart"}>
                {t("cart")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/checkout"}>
                {t("checkout")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/wishlist"}>
                {t("wishlist")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/compare"}>
                {t("compare")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/my-account"}>
                {t("my_account")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/login-register"}>
                {t("login_register")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/about"}>
                {t("about_us")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/contact"}>
                {t("contact_us")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/not-found"}>
                {t("404_page")}
              </Link>
            </li>
          </ul> */}



        </li>






{/* 
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "#"}>{t("Supplement")}</Link>
          
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/benefits"}>
                {t("The Benefits")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/health"}>
                {t("Health")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/beauty"}>
                {t("Beauty")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/performance"}>
                {t("Performance")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/sleep"}>
                {t("Sleep")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/anxiety"}>
                {t("Anxiety")}
              </Link>
            </li> 
          </ul>
        </li> */}



















        {/* <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/cart"}>
            {t("cart")}
          </Link>
         
        </li> */}
        {/* <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            {t("contact_us")}
          </Link>
        </li> */}


<li>
{user?.email?
  (
    <li className="menu-item-has-children">
    
   {/* <button
   style={{border:"none",borderRadius:"30px",marginLeft:"100px",width:"45px",height:"45px"}}
    className="account-setting-active"
    onClick={e => handleClick(e)}
  >
      <i className="pe-7s-user-female" style={{color:"#a0a0a0"}} />
  </button> */}
   <Link to={process.env.PUBLIC_URL + "#"}>{t("Profile")}</Link>
    
    <ul className="sub-menu" style={{top:"-3px",marginLeft:"13px",marginTop:"20px"}}>
    <li style={{display:"flex",borderBottom:"1px solid #eff2f7",marginLeft:"-7px"}}>
      
  
      <img src="https://traininglabs.in/uploads/user/1687846976-Asi5tpLMnK.png" alt="img" class="radius-50" style={{ width: "31px", height: "31px", borderRadius: "50%", marginRight: "10px",marginTop:"9px"}}></img>
      <div>
      {users ? (
        <>
         <h5 style={{marginTop:"7px"}}> {name} </h5>
       
        </>
      ) : (
        <h5 style={{marginTop:"7px"}}> {name} </h5>
      )}
       
  
        <p style={{fontSize:"11px",marginTop:"-11px",marginBottom:"20px"}}>
        {user?.email}
        </p>
        </div>
      
      </li>
      <li style={{display:"flex",marginTop:"10px",borderBottom:"1px solid #eff2f7"}}>
      <i className="fa fa-windows" style={{color:"#6a6a6a",marginTop:"7px",fontSize:"17px",marginRight:"20px"}} />
       
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
  </li>
  )
   :(
   <div className="slider-btn btn-hover d-lg-block ">
        <button className="p-1" id="sample"  style={{backgroundColor:"#703ca2",color:"#fff",marginRight:"10px",width:"100px",border:"none"}}  onClick={handleClicknew}>
        Get Started
        </button>
      </div>
      )
}
</li>



<li style={{display:"flex",marginTop:"23px"}}> 
{/* <div className="slider-btn btn-hover">
        <button className="p-1" style={{backgroundColor:"#703ca2",color:"#fff",marginRight:"20px",width:"100px",border:"none"}}  onClick={handleClicknew}>
        Get Started
        </button>
      </div> */}
      <div className="btn-hover2">
        <button className="p-1" onClick={orderfood}>
        Order Food
        </button>
      </div>     
      </li>

      </ul>
    </nav>
  );
};

export default MobileNavMenu;
