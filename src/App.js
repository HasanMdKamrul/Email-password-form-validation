import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import BootstrapLogin from './components/BootstrapLogin';
import BootStrapRegister from './components/BootStrapRegister';
import Main from './layouts/Main';


// const auth = getAuth(app);

// ** 1st system
// const handleSubmit = (event)=>{
 
//   event.preventDefault();

//  const email = event.target.email.value;
//  const password = event.target.password.value;

//  console.log(email,password)

// }

// // ** 2nd system

// const handleEmail = event=>{


//   console.log(event.target.value)

// }
// const handlePassword = event=>{
//   console.log(event.target.value)
// }

// const handleEmailOnBlur = event=>{


//   console.log(event.target.value)

// }

// const handlePasswordOnBlur = event=>{
//   console.log(event.target.value)
// }

const router = createBrowserRouter([
  {
    path: '/',
    element:<Main/>,
    children:[
      {
        index: true,
        element: <BootStrapRegister/>
      },
      {
       path:'/register',
        element: <BootStrapRegister/>
      },
      {
       path:'/login',
        element: <BootstrapLogin/>
      },
    ]
  }
])




function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
      
      {/* <br />
     <form onSubmit={handleSubmit} >
      <input onBlur={handleEmailOnBlur} type="email" name="email" id="email" placeholder='Email' />
      <br />
      <br />
      <input onBlur={handlePasswordOnBlur} type="password" name="password" id="password" placeholder='Password' />
      <br />
      <br />
      <button type="submit">Register</button>
     </form> */}
    </div>
  );
}

export default App;
