import PropertyCard from "../components/PropertyCard";
import { useContext } from "react";
import PropertiesContext from "../context/PropertiesContext";
import FilterForm from "../components/FilterForm";
const Home = () => {
  const { properties } = useContext(PropertiesContext);

  return (
    <div className="pt-[80px]">
      <FilterForm />
      {properties.length > 0 ? (
        <div className="flex flex-wrap gap-5 w-[80vw] mx-auto my-10 justify-center">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <h1 className="my-10 text-center text-2xl font-semibold text-[#FF6D38]">
          No items !
        </h1>
      )}
    </div>
  );
};

export default Home;
