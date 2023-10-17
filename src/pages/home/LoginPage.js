import '../../assets/css/loginupdated.css';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle,database, ref, set ,get } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();


  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);


    const validationSchema = Yup.object().shape({
      // fullname: Yup.string().required('Full Name is required'),
      email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
          password: Yup.string()
              .required('Password is required')
              .min(6, 'Password must be at least 6 characters'),
              termsOfService: Yup.bool()
              .oneOf([true], "Please accept")
              .required("Please accept"),
          // confirmPassword: Yup.string()
          //     .required('Confirm Password is required')
          //     .oneOf([Yup.ref('password')], 'Passwords must match')
              
      });
      const formOptions = { resolver: yupResolver(validationSchema) };
      // get functions to build form with useForm() hook
      const { register, handleSubmit, formState } = useForm(formOptions);
      const { errors } = formState

      // Realtime Database 

      const handleLogin = async (e) => {
    
        try {
          // Sign in with email and password
          await signInWithEmailAndPassword(auth, email, password);
    
          // Fetch additional user data from the Realtime Database
          const userUid = auth.currentUser.uid;
          const userRef = ref(database, `users/${userUid}`);
          const userSnapshot = await get(userRef);
    
          if (userSnapshot.exists()) {
            const users = userSnapshot.val();
    
            // Redirect to another page with the user's profile
            navigate('/', { state: { users } });
          }
        } catch (error) {
          // Handle login errors
          console.error(error.message);
        }
      };


     // firebase Google login

      // const handleGoogleLogin = async () => {
      //   try {
      //     // Sign in with Google
      //     const result = await signInWithGoogle();
    
      //     // Extract user information from the result (this may vary depending on Firebase version)
      //     const user = result.user;
      //     const { displayName, email, uid } = user;
    
      //     // Push user data to the Realtime Database
      //     const userRef = ref(database, `users/${uid}`);
      //     await set(userRef, {
      //       displayName,
      //       email,
      //     });
    
      //     // Redirect to another page with the displayName in state
      //     navigate('/',{state : {displayName}});
      //   } catch (error) {
      //     // Handle Google Sign-In errors
      //     console.error(error.message);
      //   }
      // };


      // signInWithGoogle Firebase
      const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
          const result = await signInWithPopup(auth, provider,email);
          // User is signed in with Google
          const user = result.user;
          // You can access user.displayName here
          // Push user data to the Realtime Database as needed
       
        } catch (error) {
          console.error('Error signing in with Google:', error);
        }
      };
   
      const pushUserDataToDatabase = async (user) => {
        try {
          // Check if the user has a display name
          if (user.displayName) {
            const userData = {
              email: user.email,
              displayName: user.displayName,
              // Add other user data fields here
            };
      
            await set(ref(database, 'users/' + user.uid), userData);
          }
        } catch (error) {
          console.error('Error pushing user data to the database:', error);
        }
      };

      const handleSignInWithGoogle = async () => {
        // Perform Google Sign-In
        await signInWithGoogle();
        
        // After successful sign-in, push user data and navigate to another page
        const user = auth.currentUser; // Get the currently signed-in user
        if (user) {
          await pushUserDataToDatabase(user);
          navigate('/', { state: { displayName: user.displayName } }); // Navigate to another page
        }
      };
    

  return (
   

<div class="login-container">
  <div class="login-form">
    <div class="login-form-inner">
      <h1 style={{textAlign:"center",fontWeight:"600"}}>Login</h1>
      <p class="body-text" style={{textAlign:"center"}}>See your growth and get consulting support!</p>

      <button onClick={handleSignInWithGoogle} class="rounded-button google-login-button">
      <span class="facebook-icon" style={{marginLeft:"20px"}} >
		  <i class="fa fa-google" style={{marginRight:"10px",display:"flex",fontSize:"24px"}}></i>
		  </span>
        <span>Login with google</span>
      </button>


	  <Link to={"https://www.facebook.com/"} className="rounded-button google-login-button" style={{backgroundColor:"#3b5998",color:"#fff"}}>
        <span class="facebook-icon" style={{marginLeft:"20px"}} >
		  <i class="fa fa-facebook-official" style={{marginRight:"10px",display:"flex",fontSize:"24px"}}></i>
		  </span>
        <span>Login with Facebook</span>
      </Link>
      <div class="sign-in-seperator">
        <span>or Sign in with Email</span>
      </div>
      <form onSubmit={handleSubmit(handleLogin)}>
      <div className="login-form-group">
      <label for="email">Email <span class="required-star">*</span></label>
            <input name="email"  {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`} autocomplete="off" type="email"  value={email} onChange= {(e) => setEmail(e.target.value)} placeholder="email@website.com" id="email" />
            <div className="invalid-feedback">{errors.email?.message}</div>
      </div>

      <div class="login-form-group">
         <label for="pwd">Password <span class="required-star">*</span></label>
            <input name="password" type="password" value={password}   {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`} onChange= {(e) => setPassword(e.target.value)}   placeholder="Minimum 8 characters" />
                <div className="invalid-feedback">{errors.password?.message}</div>
      </div>
      <div class="login-form-group single-row">
        <div class="custom-check">
		<input type="checkbox" checked {...register('termsOfService')}
            className={`form-control  ${errors.termsOfService ? 'is-invalid' : ''}`} /><label for="remember">Remember me</label>
        </div>


        <Link  to={""} class="link forgot-link">Forgot Password ?</Link>
        {/* <div className="invalid-feedback">{errors.termsOfService?.message}</div> */}
      </div>
      

	  <div className="slider-btn btn-hover" style={{margin:"25px 0 35px"}}>
         <button type="submit" style={{width:"100%",height:"45px",color:"#fff",border:"none"}}> Login </button>
      </div>
      </form>
      <div class="register-div">Not registered yet? <Link to={"/signup"} class="link create-account">Sign Up Now</Link></div>
    </div>

  </div>
  <div class="onboarding">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide color-1">
          <div class="slide-image">
             <img src="/assets/img/slider/login.png" loading="lazy" alt="" />
          </div>
          <div class="slide-content">
            <h2>Join our classes now.</h2>
            <p>Your one-stop platform for holistic health, traditional medicine, and transformative well-being.</p>
          </div>
        </div>
      </div>
      
      <div class="swiper-pagination"></div>
    </div>
  </div>
</div>

  );
}

export default LoginPage;
