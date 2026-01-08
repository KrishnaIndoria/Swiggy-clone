import React, { useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import FoodOption from "./components/FoodOption";
import GroceryOption from "./components/GroceryOption";
import DineOption from "./components/DineOption";
import Restaurant from "./components/Restaurant";
function App(){
    return(
        <>
        <Header></Header>
        <FoodOption></FoodOption>
        <GroceryOption></GroceryOption>
        <DineOption></DineOption>
        <Restaurant></Restaurant>
        </>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<App></App>);