import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Contextprovider } from './Context/Apicontext';
import { Dataprovider } from './Context/Apicontext';
import { Cartprovider } from './Context/Apicontext';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Authprovider } from "./Login & Signup/Authcontext"

import { store } from './Redux/Statemanagement';
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Dataprovider>
      <Contextprovider>
        <Cartprovider>
          <Authprovider>
            <Provider store={store}>
              <App />
            </Provider>
          </Authprovider>
        </Cartprovider>
      </Contextprovider>
    </Dataprovider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
