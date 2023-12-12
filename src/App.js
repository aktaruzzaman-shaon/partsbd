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
import RequireAdmin from './Component/ProtectedRoute/RequireAdmin';
import PaymentPage from './Component/PaymentPage/PaymentPage';
import AddProducts from './Component/AddProducts/AddProducts';
import ManageProducts from './Component/ManageProducts/ManageProducts';
import DeliveryInfo from './Component/DeliveryInfoPage/DeliveryInfo';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import AddBrand from './Component/Dashborad/AddBrand/AddBrand';
import SingleProductDetailsPage from './Component/Products/SingleProductDetailsPage';
import Carts from './Component/Cart/Carts';


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
          {/* nested route start for dashboard*/}
          {/* <Route index element={<Orders></Orders>}></Route> */}
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
          <Route path='manageProducts' element={
            <RequireAdmin>
              <ManageProducts></ManageProducts>
            </RequireAdmin>}>
          </Route>
          <Route path='deliveryInfo' element={
            <DeliveryInfo></DeliveryInfo>
          }>
          </Route>
          <Route path='addBrand' element={
            <AddBrand></AddBrand>
          }>
          </Route>
        </Route>
        {/* Nested route end */}

        <Route path='order' element={<Order></Order>}></Route>
        <Route path='cart' element={
          <RequireAuth>
            <Carts></Carts>
          </RequireAuth>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='payment' element={<PaymentPage></PaymentPage>}></Route>
        <Route path='singleProductDetails' element={<SingleProductDetailsPage></SingleProductDetailsPage>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
