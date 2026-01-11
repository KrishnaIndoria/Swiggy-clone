import { Recommended } from "../Utils/Rest";
export default function RestaurantMenu(){
  return(
    <div className="w-[65%] mx-auto mt-10">
      <h2 className="font-bold text-3xl mb-7">Recommended</h2>
      {
      Recommended.map((item)=>{
        return(
        <div key={item.id} className="w-full flex justify-between my-5">
          <div className="w-[70%]">
            <p className="font-bold text-xl">{item.name}</p>
            <p>{item.description}</p>
          </div>

          <div>
            <img className="object-cover h-36 w-39 rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+item.imageId}></img>
            <button className="relative bottom-6 left-5 bg-white rounded-2xl text-green-600 text-[20px] font-bold border-2 border-gray-300 w-30 h-10 transform hover:bg-gray-300 hover:cursor-pointer">ADD</button>
          </div>
        </div>
        )
      })
    }
    </div>
  )
}