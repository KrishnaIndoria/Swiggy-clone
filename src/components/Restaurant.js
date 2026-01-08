import { useEffect, useState } from "react"
import RestCard from "./RestCard";
export default function Restaurant(){
    const [RestData,setRestData] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyServer = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9753&lng=77.591&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
            const response = await fetch(proxyServer+swiggyServer);
            const data = await response.json();
            setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        }

        fetchData();
    },[])

    return(
        <div className="flex flex-wrap w-[80%] mx-auto gap-5 mt-20">
            {
                RestData.map((restinfo)=> <RestCard key={restinfo.info.id} restinfo={restinfo}></RestCard>)
            }
        </div>
    )
}