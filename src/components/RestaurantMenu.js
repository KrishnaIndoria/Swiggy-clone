import { useState } from "react";
import { Recommended } from "../Utils/Rest";
import { Link } from "react-router";
export default function RestaurantMenu(){
  const [selected,setSlected] = useState(null);

  if(selected=="veg"){
    return(
    <div className="w-[65%] mx-auto mt-15">
      <div>
      <button className={`text-xl mr-5 border hover:cursor-pointer rounded-xl py-0.5 px-3 ${selected=="veg"? "bg-green-500":"bg-gray-100"}`} onClick={()=>setSlected(selected==="veg"?null:"veg")}>Veg</button>
      <button className={`text-xl border hover:cursor-pointer rounded-xl py-0.5 px-1 ${selected=="nonveg"?"bg-red-600":"bg-gray-100"}`} onClick={()=>setSlected(selected==="nonveg"?null:"nonveg")} >Non-Veg</button>
      </div>

      <h2 className="text-xl font-bold mb-7 mt-5 text-green-500">Veg is selected</h2>
      {
        Recommended.filter((item)=> item.category === "Veg Pizza").map((veggy)=>{
          return(
          <div key={veggy.id} className="w-full flex justify-between my-5 p-2 border-b-2 border-gray-300 transform hover:scale-105 transition: hover:border-black">
          <div className="w-[70%]">
            <p className="font-bold text-xl text-gray-800">{veggy.name}</p>
            <p className="text-gray-700">{veggy.description}</p>
          </div>

          <div>
            <img className="object-cover h-36 w-39 rounded-2xl transform hover:cursor-pointer" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+veggy.imageId}></img>
            <button className="relative bottom-6 left-5 bg-white rounded-2xl text-green-600 text-[20px] font-bold border-2 border-gray-300 w-30 h-10 transform hover:bg-gray-300 hover:cursor-pointer hover:scale-110">ADD</button>
          </div>

         </div>
          )
        })
      }
    </div>
    )
  }

  if(selected=="nonveg"){
    return(
      <div className="w-[65%] mx-auto mt-15">
      <div>
      <button className={`text-xl mr-5 border hover:cursor-pointer rounded-xl py-0.5 px-3 ${selected=="veg"? "bg-green-500":"bg-gray-100"}`} onClick={()=>setSlected(selected==="veg"?null:"veg")}>Veg</button>
      <button className={`text-xl border hover:cursor-pointer rounded-xl py-0.5 px-1 ${selected=="nonveg"?"bg-red-600":"bg-gray-100"}`} onClick={()=>setSlected(selected==="nonveg"?null:"nonveg")} >Non-Veg</button>
      </div>

      <h2 className="text-xl font-bold mb-7 mt-5 text-red-500">Non-Veg is selected</h2>
      {
        Recommended.filter((item)=> item.category === "Non Veg Pizza").map((veggy)=>{
          return(
          <div key={veggy.id} className="w-full flex justify-between my-5 p-2 border-b-2 border-gray-300 transform hover:scale-105 transition: hover:border-black">
          <div className="w-[70%]">
            <p className="font-bold text-xl text-gray-800">{veggy.name}</p>
            <p className="text-gray-700">{veggy.description}</p>
          </div>

          <div>
            <img className="object-cover h-36 w-39 rounded-2xl transform hover:cursor-pointer" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+veggy.imageId}></img>
            <button className="relative bottom-6 left-5 bg-white rounded-2xl text-green-600 text-[20px] font-bold border-2 border-gray-300 w-30 h-10 transform hover:bg-gray-300 hover:cursor-pointer hover:scale-110">ADD</button>
          </div>

         </div>
          )
        })
      }
    </div>
    )
  }

  // this will run on default
  return(
    <div className="w-[65%] mx-auto mt-10">
      <Link to={`/city/bangalore/search`}>
      <div className="w-full mx-auto bg-gray-200 py-2 hover:cursor-pointer">
        <p className="text-center text-xl">Search for dishes</p>
      </div>
      </Link>

      <div className="mt-15">
      <button className={`text-xl mr-5 border hover:cursor-pointer rounded-xl py-0.5 px-3 ${selected=="veg"? "bg-green-500":"bg-gray-100"}`} onClick={()=>setSlected(selected==="veg"?null:"veg")}>Veg</button>
      <button className={`text-xl border hover:cursor-pointer rounded-xl py-0.5 px-1 ${selected=="nonveg"?"bg-red-600":"bg-gray-100"}`} onClick={()=>setSlected(selected==="nonveg"?null:"nonveg")} >Non-Veg</button>
      </div>

      <h2 className="font-bold text-3xl mb-7 mt-5">Recommended</h2>
      {
      Recommended.map((item)=>{
        return(
        <div key={item.id} className="w-full flex justify-between my-5 p-2 border-b-2 border-gray-300 transform hover:scale-105 transition: hover:border-black">
          <div className="w-[70%]">
            <p className="font-bold text-xl text-gray-800">{item.name}</p>
            <p className="text-gray-700">{item.description}</p>
          </div>

          <div>
            <img className="object-cover h-36 w-39 rounded-2xl transform hover:cursor-pointer" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+item.imageId}></img>
            <button className="relative bottom-6 left-5 bg-white rounded-2xl text-green-600 text-[20px] font-bold border-2 border-gray-300 w-30 h-10 transform hover:bg-gray-300 hover:cursor-pointer hover:scale-110">ADD</button>
          </div>
        </div>
        )
      })
    }
    </div>
  )
}