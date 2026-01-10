import { useState,useEffect } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";

export default function RestaurantMenu(){
    const {id} = useParams();
    const [RestData,setRestData] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const proxyServer = "https://cors-anywhere.herokuapp.com/";
          const swiggyServer = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9753&lng=77.591&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
    
          const response = await fetch(proxyServer + swiggyServer);
          const data = await response.json();
          const tempData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
          const filterData = tempData.filter((item)=> 'title' in item?.card?.card)
          setRestData(filterData); 
    
        }
    
        fetchData();
      }, []);

      return(
        <div className="w-[80%] mx-auto">
          {
          RestData.map((MenuItems)=> <MenuCard key={MenuItems?.card?.card?.title} MenuItems={MenuItems?.card?.card}></MenuCard>)
          }
        </div>
      )
    
}