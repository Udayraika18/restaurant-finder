import { MapPin, UtensilsCrossed } from "lucide-react";

export default function RestaurantCard({ restaurant, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer p-6 flex flex-col justify-between"
    >
      {/* Top Content */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 line-clamp-2">
          {restaurant.venue_name}
        </h2>

        <div className="flex items-center gap-2 text-gray-500 mb-3">
          <MapPin size={18} className="text-orange-500" />
          <span>{restaurant.city}</span>
        </div>

        <div className="flex items-start gap-2 mb-6">
          <UtensilsCrossed
            size={18}
            className="text-orange-500 mt-1"
          />

          <div>
            <p className="text-sm text-gray-500">
              Cuisine
            </p>

            <p className="text-orange-600 font-semibold capitalize">
              {restaurant.cuisine || "Not Available"}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-xl font-medium transition-all"
      >
        View Details
      </button>
    </div>
  );
}