
import './App.css';
import Home from './Components/Home'
import About from './Components/About'
import Items from './Components/Items';
import Navbar from './Components/Nav';
import Find from './Components/Find';
import PrintAddtocart from './Components/addTocartPage';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDislay from './Components/ProductDisplay';
import AddtoCartDisplay from './Components/AddtoCartDisplay';
import Signup from './Components/Signup';
import Checkoutcart from './Components/Checkout';
function App() {
  return (
    <>
     <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/ProductDisplay' element={<ProductDislay />}></Route>
        <Route path='/AddtoCartDisplay' element={<AddtoCartDisplay />}></Route>
        <Route path='/Find/:id' element={<Find />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Checkoutcart' element={<Checkoutcart/>}></Route>
     </Routes>
     </BrowserRouter>
    
    </>
  );
}

export default App;
