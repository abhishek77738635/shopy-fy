import Home from './components/header/Header.jsx'
import {Routes, Route,BrowserRouter} from 'react-router-dom';
import Shop from './components/shop'
import Contact  from './components/contact.js';
import About from './components/about.js';

import { createBrowserHistory } from "history";

import Log from './components/login.js'
// import './App.css';
import ProList from './components/ProList';

function App() {
  const customHistory = createBrowserHistory();
  return (

    <BrowserRouter>
    <Home/>
    <Routes>
    <Route path="/" element={<Shop/>} />
    <Route path="/contact" element={<About/>} />
    <Route path="/about" element={<Contact/>} />
    <Route path="/shop" element={<Shop/>} />
    <Route path="/login" element={<Log history={customHistory}/>} />
    <Route path="/Products/:id" element={<ProList/>} />
    
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

