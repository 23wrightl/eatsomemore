import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Menu from './Menu';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-dom";
import SSRProvider from 'react-bootstrap/SSRProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SSRProvider>
    <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reserve" element={<Reserve />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    </SSRProvider>;
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
