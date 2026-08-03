import { X, MapPin, Phone, Globe, UtensilsCrossed } from "lucide-react";

export default function RestaurantModal({ restaurant, onClose }) {
  if (!restaurant) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-xl p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-5 right-5 text-gray-500 hover:text-red-500 transition"
          onClick={onClose}
        >
          <X size={26} />
        </button>

        <h2 className="text-3xl font-bold text-orange-500 mb-8">
          {restaurant.venue_name}
        </h2>

        <div className="space-y-5">

          {/* Cuisine */}
          <div className="flex gap-4 bg-orange-50 rounded-xl p-4">
            <UtensilsCrossed className="text-orange-500" />
            <div>
              <p className="text-sm text-gray-500">Cuisine</p>
              <p className="font-semibold capitalize">
                {restaurant.cuisine || "Not Available"}
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex gap-4 bg-gray-50 rounded-xl p-4">
            <MapPin className="text-orange-500" />
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p>{restaurant.address || "Not Available"}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4 bg-gray-50 rounded-xl p-4">
            <Phone className="text-orange-500" />
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p>{restaurant.owner_phone || "Not Available"}</p>
            </div>
          </div>

          {/* Website */}
          <div className="flex gap-4 bg-gray-50 rounded-xl p-4">
            <Globe className="text-orange-500" />
            <div>
              <p className="text-sm text-gray-500">Website</p>

              {restaurant.website_url ? (
                <a
                  href={restaurant.website_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Open Website ↗
                </a>
              ) : (
                <p>Not Available</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}