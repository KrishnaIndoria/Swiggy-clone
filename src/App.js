import React, { useState } from "react";
import ReactDom from "react-dom/client";
import Home from "./components/Home";
import Restaurant from "./components/Restaurant";
import { BrowserRouter,Routes,Route } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
function App(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
            <Route path="/city/bangalore/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<App></App>);