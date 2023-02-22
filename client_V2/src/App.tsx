import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components_V2/RoutersComponents/MainLayout/MainLayout";
import Home from "./components_V2/Home/Home";
import "./scss/app.scss";
import { AddProduct } from "./components/AddProduct/AddProduct";
import { ProductsList } from "./components/ProductsList/ProductsList";
// import { ProductItem } from "./components/ProductItem/ProductItem";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { AdminAuthRouter } from "./components/RoutersComponents/AdminAuth/AdminAuthRouter";
import { ProductListItems } from "./components/ProductListItems/ProductListItems";
import Cart from "./components/Cart/Cart";
import { ProductsBlock } from "./components_V2/ProductsBlock/ProductsBlock";
import { ProductItem } from "./components_V2/ProductsBlock/ProductItem/ProductItem";
import { About } from "./components_V2/About/About";
import { ProductInfo } from "./components_V2/ProductsBlock/ProductInfo/ProductInfo";
import { ProductsCart } from "./components_V2/ProductsCart/ProductsCart";

const App: FC = () => {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}/>
        <Route path="cart" element={<ProductsCart/>}/>
        <Route path='admin' element={
          <AdminAuthRouter>
            <AddProduct/>
          </AdminAuthRouter>
        }/>
        {/* <Route path="products" element={<ProductListItems/>}/> */}
        <Route path="products" element={<ProductsBlock/>}/>
        <Route path="product/:id" element={<ProductInfo/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Route>
    </Routes>
  );
};

export default App;
