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
import { Route,Routes } from 'react-router-dom';
import Carddetails from './Reactproj/Carddetails';
// Route
// import { Route, Routes } from "react-router-dom";
// import { routes,Route } from 'react-browser-router';
// import ThemeContext from './Context/ThemeContext';

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
        <Routes>

          <Route path="/" element={<Main />} />
          <Route path="/Home" element={<Main />} />
          <Route path="/:id" element={<Carddetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* </Routes> */}
      </>



  );
}

export default App;
