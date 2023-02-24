import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components_V2/RoutersComponents/MainLayout/MainLayout";
import Home from "./components_V2/Home/Home";
import "./scss/app.scss";
import { ProductsBlock } from "./components_V2/ProductsBlock/ProductsBlock";
import { About } from "./components_V2/About/About";
import { ProductInfo } from "./components_V2/ProductsBlock/ProductInfo/ProductInfo";
import { ProductsCart } from "./components_V2/ProductsCart/ProductsCart";
import { PageNotFound } from "./components_V2/PageNotFound/PageNotFound";
import { AdminAuthRouter } from "./components_V2/RoutersComponents/AdminAuth/AdminAuthRouter";
import { AddProduct } from "./components_V2/AddProduct/AddProduct";

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
        <Route path="polikarbonat" element={<ProductsBlock/>}/>
        <Route path="polikarbonat/:id" element={<ProductInfo/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Route>
    </Routes>
  );
};

export default App;
