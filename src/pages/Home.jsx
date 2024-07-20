import PropertyCard from "../components/PropertyCard";
import { useContext } from "react";
import PropertiesContext from "../context/PropertiesContext";
const Home = () => {
  const { properties } = useContext(PropertiesContext);

  return (
    <div className="pt-[80px]">
      <div className="flex flex-wrap gap-5 w-[80vw] mx-auto my-10 justify-center">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Home;
