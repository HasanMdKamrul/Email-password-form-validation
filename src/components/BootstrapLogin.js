
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import app from "../firebase/firebase.init";

const auth = getAuth(app)

const BootstrapLogin = () => {

    const [userEmail,setUserEmail] = useState('')


    const handleLogIn = event => {
        

        event.preventDefault()

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password);


        const signIn = async ()=>{
            try {
                const result = await signInWithEmailAndPassword(auth,email,password);
                console.log(result.user)
            } catch (error) {
                console.log(error)
            }
        }
        
        signIn()
      
    };

    const logoutHandler = ()=>{
     
        const signoutInfo = async ()=>{
           try {
            await signOut(auth);
            console.log("signout done")
           } catch (error) {
            console.log(error)
           }
        };

        signoutInfo()
        
    };

    const forgotPass = ()=>{

        const reset = async ()=>{
           try {
            if (!userEmail) {
                alert('Please provide an email');
                return;
            }
            await sendPasswordResetEmail(auth, userEmail);
            alert('Reset credentials sent')
           } catch (error) {
            console.log(error)
           }
        };

        reset()
    };

    const emailHandler = (event)=>{
        
        

        const email = event.target.value;
        setUserEmail(email);
    }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogIn}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Name
          </label>
          <input
          onBlur={emailHandler}
            type="email"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Email
          </label>
          <input
            type="password"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="password"
            name="password"
          />
        </div>
        <p>
        <small>Don't have an account?
            <Link to='/register'>Register</Link>
        </small>
        </p>
        <button className="btn btn-primary btn-lg" type="submit">Login</button>
        
      </form>
      <button onClick={logoutHandler} className="btn btn-primary btn-lg mt-2" type="button">Logout</button>
      <button onClick={forgotPass} className="btn btn-primary btn-lg mt-2" type="button">ResetPass</button>
    </div>
  );
};

export default BootstrapLogin;
