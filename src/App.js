import Home from './components/header/Header.jsx'
import {Routes, Route,BrowserRouter} from 'react-router-dom';
import Shop from './components/shop'
import Contact  from './components/contact.js';
import About from './components/about.js';
import PageNotFound from './components/PageNotFound.jsx';


import { createBrowserHistory } from "history";

import Login from './components/login.js'
// import './App.css';
import ProList from './components/ProList';
import Cart from './components/Cart.jsx';
import RegisterForm from './components/UserRegister.jsx';

function App() {
  const customHistory = createBrowserHistory();
  const storedEmail = localStorage.getItem('email');
  console.log(storedEmail,"hey");
  
  return (

    <BrowserRouter>
    {window.location.pathname !== "/login" && storedEmail && <Home/>}
    {window.location.pathname === "/" && window.location.pathname !== "/login" && <Home/>}
    <Routes>
    <Route path="/" element={<Shop/>} />
    <Route path="/contact" element={ storedEmail ? <About/> : <PageNotFound/>} />
    <Route path="/about" element={storedEmail ?<Contact/> : <PageNotFound/>} />
    <Route path="/shop" element={ storedEmail ? <Shop/> : <PageNotFound/>} />
    <Route path="/login" element={<Login history={customHistory}/>} />
    <Route path="/Products/:id" element={ storedEmail ?<ProList/> : <PageNotFound/>} />
    <Route path="/Cart" element={ storedEmail ?<Cart/> : <PageNotFound/>} />
    <Route path="/register" element={<RegisterForm/>} />


    
    {/* <Route path={["/"]} render={(props) => <Shop {...props}/>} />
    <Route path={"/contact"} render={(props) => <About {...props}/>} />
    <Route path={"/about"} render={(props) => <Contact {...props}/>} />
    <Route path={"/login"} render={(props) => <Log {...props}/>} />
    <Route path={"/Products/:id"} render={(props) => <ProList {...props}/>} /> */}
  </Routes>
  </BrowserRouter>
  );
}

export default App;

