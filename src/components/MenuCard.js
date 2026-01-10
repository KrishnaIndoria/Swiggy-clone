import RestInfo from "./RestInfo"
export default function MenuCard({MenuItems}){
    return(
        <div className="w-full">
            <p>{MenuItems?.title}</p>
            <div>
                {
                    MenuItems?.itemCards.map((items)=><RestInfo key={items?.card?.info?.id} RestData={items?.card?.info}></RestInfo>)
                }
            </div>
        </div>
    )
}