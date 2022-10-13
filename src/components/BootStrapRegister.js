import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../firebase/firebase.init';

const auth = getAuth(app)

function BootStrapRegister() {

  const handleSubmit = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    console.log(email,password)

   const emailAndPassAuthentication = async () =>{
    try {
      const result = await createUserWithEmailAndPassword(auth,email,password);
      console.log(result.user);
    } catch (error) {
      console.error('error:', error)
    };
   
   };

   emailAndPassAuthentication()

  }

  return (
   <div className='w-50 mx-auto'>
    <h1 className='text-primary'>Please Register</h1>
     <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
   </div>
  );
}

export default BootStrapRegister;