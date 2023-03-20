import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Products from './Component/Products/Products';
import MyAccount from './Component/MyAccount/MyAccount';
import Blog from './Component/Blog/Blog';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='products' element={<Products></Products>}></Route>
        <Route path='myaccount' element={<MyAccount></MyAccount>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
