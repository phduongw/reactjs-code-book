import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './index.css';
import App from './App';
import { ScrollToTop } from "./components";
import { FilterProvider, CartProvider } from "./context";
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <CartProvider >
              <FilterProvider>
                  <ScrollToTop />
                  <ToastContainer closeButton={false} autoClose={2000} position={"top-right"}/>
                  <App />
              </FilterProvider>
          </CartProvider>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
