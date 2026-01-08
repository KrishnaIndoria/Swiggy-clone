import { dineoutRestaurants } from "../Utils/DineData";
import DineCard from "./DineCard";
export default function DineOption(){
    return(
        <>
        <h2 className="w-[80%] font-bold text-2xl mt-20 mx-auto">Discover best restaurants on Dineout</h2>
        <div className="w-[80%] mb-20 gap-9 flex flex-nowrap mx-auto mt-15 overflow-x-auto overflow-y-hidden">
            {
                dineoutRestaurants.map((dinedata)=><DineCard key={dinedata.info.id} dinedata={dinedata}></DineCard>)
            }
        </div>
        </>
    )
}