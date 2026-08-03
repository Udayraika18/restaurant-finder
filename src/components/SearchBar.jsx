import { Search } from "lucide-react";
export default function SearchBar({
  search,
  setSearch,
 city,
  setCity,
  cities,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-10 border border-gray-100">

      <div className="relative mb-4">

      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search Restaurant..."
        className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      </div>
      <p className="text-sm font-medium text-gray-600 mb-2">
        Select City
      </p>
      <select
        className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="">All Cities</option>

        {cities.map((city) => (
          <option key={city}>
            {city}
          </option>
        ))}

      </select>

    </div>
  );
}