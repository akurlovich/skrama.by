import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainLayout from "./layouts/MainLayout";
import Cart from "./pages/Cart";
import FullPizza from "./pages/FullPizza";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { useAppDispatch, useAppSelector } from "./redux/hooks/redux";
import React from 'react';
// import "./scss/app.scss";

const App: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  // const { searchValue: value } = useAppSelector(state => state.filterReducer);

  const dispatch = useAppDispatch();

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home searchValue={searchValue}/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/pizza/:id" element={<FullPizza/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
};

export default App;

