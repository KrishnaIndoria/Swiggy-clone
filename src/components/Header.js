// first div swiggy logo n all
import { Link } from "react-router"
export default function Header(){
    return(
        <header className="bg-[#ff5200]">
            <div className="flex container mx-auto justify-between py-8 font-bold"> 
                <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
                <div className="text-white flex gap-15 items-center">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy corporate</a>
                    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">partner with us</a>
                    <a className="border border-white py-3 px-4 rounded-2xl" target="_blank" href="https://www.swiggy.com/corporate/">Get the App</a>
                    <a className="bg-black border border-black py-3 px-4 rounded-2xl" target="_blank" href="https://www.swiggy.com/corporate/">Sign In</a>
                </div>
            </div>

            <div className="relative pt-16 pb-8">
                <img className="w-60 h-110 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="w-60 h-110 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <div className="max-w-[60%] text-center container mx-auto font-bold text-5xl text-white">Order food & groceries. Discover best restaurants. Swiggy it!</div>
                <div className="max-w-[70%] container mx-auto flex justify-center gap-4 mt-3">
                <input className="bg-white w-[30%] px-6 py-4 rounded-2xl" placeholder="Enter your delivery location"></input>
                <input className="bg-white w-[50%] px-6 py-4 rounded-2xl" placeholder="Search for restaurant,items or more"></input>
                </div>
            </div>

            <div className="max-w-[80%] container mx-auto flex">
                <Link to="/restaurant">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
                </Link>
                
                <Link>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
                </Link>

                <Link>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
                </Link>
            </div>
        </header>
    ) 
}