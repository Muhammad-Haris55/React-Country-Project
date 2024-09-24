// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter } from 'react-router-dom';
// import Multiplerendering from './Multiplerendering';
import Axios from './Axios';
// import StatevsProps from './StatevsProps';
import Axios2 from './Axios2';
import Usestate from './Usestate';
import Darkmode from './Darkmode';
import Parent from './Parent';
import UseEfffect from './UseEfffect';
import Main from "./Reactproj/Main"
import Error from './Error';
import { Route, Routes } from 'react-router-dom';
import Carddetails from './Reactproj/Carddetails';
import Contextapi from './Contextapi';
import Items from './Items';
import Todolist from './Todolist';
import Login from './Login & Signup/Login';
import Formvalidate from './Reactproj/Formvalidate';
import Dashboard from './Login & Signup/Dashboard';
import SIgnup from './Login & Signup/SIgnup';
import Home from './Login & Signup/Home';
import Basics from './Redux/Basics';
import Redux from './Redux/Redux';
import Statemanagement from './Redux/Statemanagement';
import Page from './Redux/Page';
import Cart from './Reactproj/Cart';
import Wishlist from './Reactproj/Wishlist';
import Commentsreply from './Coding/Commentsreply';
import Main2 from './Reactproj2/Main2';
import Carddetails2 from './Reactproj2/Carddetails2';
import TodoRTQ from './Coding/TodoRTQ';
// import { ApiProvider } from '@reduxjs/toolkit/query/react';
// import { api } from './Coding/RTQApislice';
// import Comments

function App() {
  return (
    <>
      {/* <Axios/> */}
      {/* <Axios2/> */}
      {/* <Usestate/> */}
      {/* <StatevsProps/> */}
      {/* <Multiplerendering/> */}
      {/* <UseEfffect/> */}
      {/* <ThemeContext/> */}
      {/* <Darkmode/> */}
      {/* <Parent/> */}
      {/* <Main  /> */}
      {/* <Routes> */}
      {/* <Contextapi /> */}

      {/* These Routes are of react project */}
      {/* <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Home" element={<Main />} />
        <Route path="/:id" element={<Carddetails />} />
        <Route path="*" element={<Error />} />
      </Routes>  */}


      {/* React proj through redux */}
      <Routes>
        <Route path="/" element={<Main2 />} />
        <Route path="/Home" element={<Main2 />} />
        <Route path="/:id" element={<Carddetails2 />} />
        <Route path="*" element={<Error />} />
      </Routes> 

      {/* Cart Prooject
      <Items />
      <Todolist /> */}

      {/* Login funcitonality through local stroage */}
      {/* <Routes>
        <Route path='/Dashboard' element={<Dashboard/>}> </Route>
        <Route path='/Login' element={<Login/>}> </Route>
        <Route path='/Signup' element={<SIgnup/>}> </Route>
        <Route path='/' element={<Home/>}> </Route>
      </Routes>
       */}
      {/* <Formvalidate/> */}

      {/* Redux Learning*/}
      {/* <Basics/> */}
      {/* <Redux/> */}
      {/* <Statemanagement/> */}
      {/* Redux Cart Implementation */}
      
      {/* <Routes>
        <Route path='/' element={<Page />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
        <Route path='/WIshlist' element={<Wishlist />}></Route>
      </Routes> */}

      {/* Coding  */}
      {/* <Commentsreply/> */}
      {/* <ApiProvider api={api}> */}

      {/* <TodoRTQ /> */}
      {/* </ApiProvider> */}
    </>



  );
}

export default App;
