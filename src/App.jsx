import { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";
import SearchBar from "./components/SearchBar";
import RestaurantCard from "./components/RestaurantCard";
import RestaurantModal from "./components/RestaurantModal";

export default function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    Papa.parse("/restaurants.csv", {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setRestaurants(results.data);
      },
    });
  }, []);

  const cities = useMemo(() => {
    return [...new Set(restaurants.map((r) => r.city).filter(Boolean))].sort();
  }, [restaurants]);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch =
      restaurant.venue_name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      restaurant.cuisine
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchesCity =
      city === "" || restaurant.city === city;

    return matchesSearch && matchesCity;
  });

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="text-center mb-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
        🍽️ Restaurant Finder
      </h1>

      <p className="text-gray-500 mt-2">
        Find restaurants across Madhya Pradesh by city
      </p>
      </div>
  
        <SearchBar
          search={search}
          setSearch={setSearch}
          city={city}
          setCity={setCity}
          cities={cities}
        />

        <div className="flex items-center justify-between mb-8">
          <p className="text-lg text-gray-600">
            Showing{" "}
            <span className="font-bold text-orange-500">
              {filteredRestaurants.length}
            </span>{" "}
            Restaurants
          </p>
        </div>

      {filteredRestaurants.length > 0 ? (

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredRestaurants.map((restaurant, index) => (

              <RestaurantCard
                  key={index}
                  restaurant={restaurant}
                  onClick={() => setSelectedRestaurant(restaurant)}
              />

          ))}

      </div>

      ) : (

      <div className="text-center py-20">

          <div className="text-6xl">
              🍽️
          </div>

          <h2 className="text-2xl font-bold mt-4">
              No Restaurants Found
          </h2>

          <p className="text-gray-500 mt-2">
              Try another restaurant name or city.
          </p>

      </div>

    )}

      </div>
          <RestaurantModal
           restaurant={selectedRestaurant}
           onClose={() => setSelectedRestaurant(null)}
          />
      <footer className="mt-16 border-t border-gray-200 py-6 text-center text-gray-500">
        <p className="font-medium">
           Restaurant Finder
        </p>

        <p className="text-sm">
           Internship Project • 2026
        </p>
      </footer>
    </div>
  );
}