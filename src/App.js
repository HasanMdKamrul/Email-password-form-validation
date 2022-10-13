import { getAuth } from 'firebase/auth';
import './App.css';
import app from './firebase/firebase.init';


const auth = getAuth(app);

// ** 1st system
const handleSubmit = (event)=>{
 
  event.preventDefault();

 const email = event.target.email.value;
 const password = event.target.password.value;

 console.log(email,password)

}

// ** 2nd system

const handleEmail = event=>{


  console.log(event.target.value)

}
const handlePassword = event=>{
  console.log(event.target.value)
}

const handleEmailOnBlur = event=>{


  console.log(event.target.value)

}

const handlePasswordOnBlur = event=>{
  console.log(event.target.value)
}




function App() {
  return (
    <div className="App">
      <br />
     <form onSubmit={handleSubmit} >
      <input onBlur={handleEmailOnBlur} type="email" name="email" id="email" placeholder='Email' />
      <br />
      <br />
      <input onBlur={handlePasswordOnBlur} type="password" name="password" id="password" placeholder='Password' />
      <br />
      <br />
      <button type="submit">Register</button>
     </form>
    </div>
  );
}

export default App;
