import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile
} from "firebase/auth";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import app from "../firebase/firebase.init";

const auth = getAuth(app);

function BootStrapRegister() {
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);

  const updateUserInfo = (name)=>{
     updateProfile(auth.currentUser,{
      displayName:name,
    }).then(()=> console.log('Profie name updated'))
  }


  const verifyEmail = async () => {
    const verified = await sendEmailVerification(auth.currentUser);

    return verified;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    const password = event.target.password.value;

    console.log(email, password, name);

    setSuccess(false);

    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setPasswordError("Please provide at least 2 uppercase letters");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Please provide at least 6 charecters");
      return;
    }

    if (!/(?=.*[!@#$&*])/.test(password)) {
      setPasswordError("Ensure string has one special case letter.");
      return;
    }

    setPasswordError("");

    const emailAndPassAuthentication = async () => {
      try {
        const result = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(result.user);
        setSuccess(true);
        updateUserInfo(name);
        event.target.reset();
        // ** amar register successfull hole ami ekta verification mail pathabo
        // verifyEmail();
        

        verifyEmail() && alert("Ting");
        // ** name ta pabo



      } catch (error) {
        console.error("error:", error);
        setPasswordError(error.message);
      }
    };

    emailAndPassAuthentication();
  };


  return (
    <div className="w-50 mx-auto">
      <h1 className="text-primary">Please Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <small>Already have an account? </small>
        <p>{passwordError}</p>
        {success && <p>User created successfully</p>}
        <p>
          <small>
            Don't have an account?
            <Link to="/login">Login</Link>
          </small>
        </p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default BootStrapRegister;
