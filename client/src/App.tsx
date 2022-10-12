import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainLayout from "./layouts/MainLayout";
import Cart from "./pages/Cart";
import FullPizza from "./pages/FullPizza";
import Home from "./components/Home/Home";
import NotFound from "./pages/NotFound";
// import { useAppDispatch, useAppSelector } from "./redux/hooks/redux";
import "./scss/app.scss";
import { AddProduct } from "./components/AddProduct/AddProduct";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { ProductItem } from "./components/ProductItem/ProductItem";

const App: FC = () => {
  // const [searchValue, setSearchValue] = useState<string>('');
  // const { searchValue: value } = useAppSelector(state => state.filterReducer);

  // const dispatch = useAppDispatch();

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/admin" element={<AddProduct/>}/>
        <Route path="/products" element={<ProductsList/>}/>
        <Route path="/product/:id" element={<ProductItem/>}/>
        <Route path="/pizza/:id" element={<FullPizza/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
};

export default App;
