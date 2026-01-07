import {GrocerygridElements} from "../Utils/GroceryData";
export default function GroceryOption(){
    return(
        <>
        <h2 className="text-2xl font-bold container mx-auto w-[80%] mt-10">Shop groceries on Instamart</h2>
        <div className="mt-5 w-[80%] container mx-auto flex overflow-x-auto overflow-y-hidden flex-nowrap gap-10">
            {
                GrocerygridElements.map((grocerydata)=>{
                    return(
                    <div key={grocerydata.id}>
                   <a href={grocerydata?.action?.link}><img className="h-45 w-36" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+grocerydata.imageId}/></a>
                   <h2 className="text-xl font-bold text-gray-600 text-center w-36">{grocerydata?.action?.text}</h2>
                   </div>
                    )
                })
            }
        </div>
        </>
    )
}