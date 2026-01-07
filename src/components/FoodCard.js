export default function FoodCard({foodData}){
    return(
        <>
        <a href={foodData?.action?.link}><img className="h-50 w-50 mx-21" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+foodData.imageId}></img></a>
        </>
    )
}


// ? helps to avoid errors , if foodData? has some errror in gettting data  it wont go to actions..