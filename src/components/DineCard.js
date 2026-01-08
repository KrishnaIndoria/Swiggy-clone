
export default function DineCard({dinedata}){
    return(
        <div className="max-w-sm flex-none relative" >
            <a target="_blank" href={dinedata?.cta?.link}><img className="w-80 h-50" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+dinedata?.info?.mediaFiles[0]?.url}></img></a>
            <p className="absolute bottom-2 left-2 font-bold text-xl text-white z-10">{dinedata?.info?.name}</p>
            <p className="absolute bottom-2 right-2 font-bold text-xl text-white z-10">{dinedata?.info?.rating?.value}</p>
            <div className="absolute left-0 bottom-0 right-0 bg-linear-to-t from-black h-15"></div>
        </div>
    )
}