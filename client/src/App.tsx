import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/RoutersComponents/MainLayout/MainLayout";
import Cart from "./pages/Cart";
import FullPizza from "./pages/FullPizza";
import Home from "./components/Home/Home";
import "./scss/app.scss";
import { AddProduct } from "./components/AddProduct/AddProduct";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { ProductItem } from "./components/ProductItem/ProductItem";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { AdminAuthRouter } from "./components/RoutersComponents/AdminAuth/AdminAuthRouter";
import { ProductListItems } from "./components/ProductListItems";

const App: FC = () => {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path='admin' element={
          <AdminAuthRouter>
            <AddProduct/>
          </AdminAuthRouter>
        }/>
        {/* <Route path="products" element={<ProductsList/>}/> */}
        <Route path="products" element={<ProductListItems/>}/>
        <Route path="product/:id" element={<ProductItem/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Route>
    </Routes>
  );
};

export default App;
