import { RestartAlt } from "@mui/icons-material";
import { useContext, useState } from "react";
import PropertiesContext from "../context/PropertiesContext";

const FilterForm = () => {
  const [city, setCity] = useState("");
  const [beds, setBeds] = useState("all");
  const [price, setPrice] = useState("all");
  const [type, setType] = useState("all");

  const { handleFilter, reset } = useContext(PropertiesContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleFilter(city, price, type, beds);
  };

  const handleReset = () => {
    setCity("");
    setPrice("all");
    setType("all");
    reset();
  };
  return (
    <div className="p-3 mt-5 bg-gray-200 flex flex-col items-center">
      <h1 className="text-center text-2xl font-semibold mb-4">
        Filter Properties
      </h1>
      <form
        onSubmit={handleOnSubmit}
        className="flex sm:w-auto w-full sm:flex-row flex-col sm:items-center gap-2 w-[85vw rounded-md sm:flex-wrap"
      >
        <div className="flex flex-col">
          <label>City</label>
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            className="outline-none border border-black p-1 rounded-md font-mono"
          />
        </div>

        <div className="flex flex-col">
          <label>Price</label>
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="outline-none border border-black p-2 rounded-md font-mono"
          >
            <option value="all">All</option>
            <option value="500">Rs. 0 - 500</option>
            <option value="1000">Rs. 500 - 1000</option>
            <option value="1500">Rs. 1000 - 1500</option>
            <option value="2000">Rs. 1500 - 2000</option>
            <option value="2500">Rs. 2000 - 2500</option>
            <option value="3000">Rs. 2500 - 3000</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label>Property Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="outline-none border border-black p-2 rounded-md font-mono"
          >
            <option value="all">All</option>
            <option value="house">House</option>
            <option value="farm-house">Farm houses</option>
            <option value="villa">Villa</option>
            <option value="outdore">Outdore</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label>Beds</label>
          <select
            value={beds}
            onChange={(e) => setBeds(e.target.value)}
            className="outline-none border border-black p-2 rounded-md font-mono"
          >
            <option value="all">All</option>
            <option value="1">1 bed</option>
            <option value="2">2 beds</option>
            <option value="3">3 beds</option>
            <option value="4">4 beds</option>
            <option value="5">5 beds</option>
          </select>
        </div>

        <div className="flex gap-1 items-center sm:mt-6">
          <button className="px-2 py-1 rounded-md bg-[#FF6D38] hover:scale-[1.02] transition-all text-white font-semibold">
            Submit
          </button>
        </div>
        <button
          onClick={handleReset}
          className="px-2 py-1 rounded-md bg-[#FF6D38] hover:scale-[1.02] transition-all text-white font-semibold sm:mt-6 w-[40px]"
        >
          <RestartAlt />
        </button>
      </form>
    </div>
  );
};

export default FilterForm;
