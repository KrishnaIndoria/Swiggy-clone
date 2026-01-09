import { useState,useEffect } from "react";
import { useParams } from "react-router";

export default function RestaurantMenu(){
    const {id} = useParams();
    const [RestData,setRestData] = useState(null);
    useEffect(() => {
        async function fetchData() {
          const proxyServer = "https://cors-anywhere.herokuapp.com/";
          const swiggyServer = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9753&lng=77.591&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
    
          const response = await fetch(proxyServer + swiggyServer);
          const data = await response.json();
    
          setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    
        }
    
        fetchData();
      }, []);

      return(
        <h2>hello {id}</h2>
      )
    
}