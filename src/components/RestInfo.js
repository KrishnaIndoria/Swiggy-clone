export default function RestInfo({RestData}){
    return(
        <div className="flex justify-between w-full">
            <div className="w-[70%]">
                <p>{RestData?.name}</p>
                <p>{"₹"+RestData?.defaultPrice/100}</p>
                <span>{RestData?.ratings?.aggregateRating?.rating}</span>
                <span>{"("+RestData?.ratings?.aggregateRating?.ratingCountV2+")"}</span>
                <p>
                    {RestData?.description}
                </p>
            </div>
            <div className="w-[20%] relative">
                <img  className="w-full object-cover h-36" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+RestData?.imageId}></img>
                <button className="absolute bottom-0 left-0 text-green-600 px-4 py-2 bg-white">ADD</button>
            </div>
        </div>
    )
}