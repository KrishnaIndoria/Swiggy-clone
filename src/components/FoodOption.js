import {imageGridCards} from "../Utils/FoodData";
import FoodCard from "./FoodCard";
export default function FoodOption(){
    return(
        <>
        <div className="container mx-auto w-[80%] mt-10 text-2xl font-bold">Order our best food options</div>
        <div className="container mx-auto w-[80%] mt-5 grid grid-flow-col grid-rows-2 overflow-x-auto overflow-y-hidden">
            {
                imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData}></FoodCard>)
            }
        </div>
        </>
    )
}