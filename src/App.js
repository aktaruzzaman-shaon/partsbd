import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Products from './Component/Products/Products';
import Blog from './Component/Blog/Blog';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import Dashboard from './Component/Dashborad/Dashboard';
import Order from './Component/MakeOrder/Order';
import RequireAuth from './Component/ProtectedRoute/RequireAuth';
import Orders from './Component/Orders/Orders';
import Users from './Component/Users/Users';
import Navbar from './Component/Shared/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import OrderPage from './Component/OrderPage/OrderPage';
import RequireAdmin from './Component/ProtectedRoute/RequireAdmin';
import PaymentPage from './Component/PaymentPage/PaymentPage';
import AddProducts from './Component/AddProducts/AddProducts';
import RemoveProducts from './Component/RemoveProducts/RemoveProducts';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='products' element={<Products></Products>}></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          {/* nested route start*/}
          <Route index element={<Orders></Orders>}></Route>
          <Route path='users' element={
            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>}>
          </Route>
          <Route path='addProducts' element={
            <RequireAdmin>
              <AddProducts></AddProducts>
            </RequireAdmin>}>
          </Route>
          <Route path='removeProducts' element={
            <RequireAdmin>
              <RemoveProducts></RemoveProducts>
            </RequireAdmin>}>
          </Route>
        </Route>
        {/* Nested route end */}

        <Route path='order' element={<Order></Order>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='payment' element={<PaymentPage></PaymentPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
