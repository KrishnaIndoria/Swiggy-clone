import { useState } from "react";
import { Recommended } from "../Utils/Rest";

export default function SearchFood(){

    const [item,setitem] = useState("");

    return(
        <>
        <div className="w-[65%] mx-auto mt-10 py-2">
            <input placeholder="Search here" className="py-2 bg-gray-200 text-2xl text-center mx-auto w-full" onChange={(e)=>setitem(e.target.value)}></input>
        </div>

            {
                Recommended.filter((x)=>x.name.toLowerCase().includes(item.toLowerCase())).map((y)=>{
                    return(
                        <div className="w-[65%] mx-auto flex justify-between my-5 p-2 border-b-2 border-gray-300" key={y.id}>
                         <div className="w-[70%]">
                         <p className="font-bold text-xl text-gray-800">{y.name}</p>
                         <p className="text-gray-700">{y.description}</p>
                         </div>

                         <div>
                         <img className="object-cover h-36 w-39 rounded-2xl transform hover:cursor-pointer" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+y.imageId}></img>
                         <button className="relative bottom-6 left-5 bg-white rounded-2xl text-green-600 text-[20px] font-bold border-2 border-gray-300 w-30 h-10 transform hover:bg-gray-300 hover:cursor-pointer hover:scale-110">ADD</button>
                         </div>
                        </div>
                    )
                })
            }
        </>
    )
    
}