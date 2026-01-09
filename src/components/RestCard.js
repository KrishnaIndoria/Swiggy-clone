import { Link } from "react-router";
export default function RestCard({ restinfo }) {
  const info = restinfo?.info;

  return (
    <Link to={"/city/bangalore/"+restinfo?.info?.id}>
    <div className="w-65 rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden">
      
      {/* Image */}
      <div className="relative">
        <img
          className="w-full h-40 object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            info?.cloudinaryImageId
          }
          alt={info?.name}
        />

        {/* Rating badge */}
        <div className="absolute bottom-2 left-2 bg-green-600 text-white text-sm px-2 py-1 rounded-lg">
          ⭐ {info?.avgRating}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="font-bold text-lg truncate">
          {info?.name}
        </h2>

        <div className="flex items-center justify-between text-gray-600 text-sm mt-2">
          <span>{info?.sla?.slaString}</span>
          <span>{info?.cuisines?.slice(0, 2).join(", ")}</span>
        </div>
      </div>
    </div>
    </Link>
  );
}
