import { useContext } from "react";
import PropertiesContext from "../context/PropertiesContext";
import PropertyCard from "../components/PropertyCard";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

const Liked = () => {
  const { properties } = useContext(PropertiesContext);
  const likedProperties = properties.filter((property) => property.liked);
  return (
    <div className="pt-[80px]">
      <div className="px-10 mt-5">
        <Link to={"/"} className="flex gap-2">
          <ArrowBack sx={{ color: "#FF6D38", fontSize: "30px" }} />
          <p className="text-[#FF6D38] text-[20px] font-semibold">Home</p>
        </Link>
      </div>
      {likedProperties.length > 0 ? (
        <div className="flex flex-wrap gap-5 w-[80vw] mx-auto mb-10 mt-5">
          {likedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <h1 className="text-center text-2xl font-bold mt-10 text-[#FF6D38]">
          No items!
        </h1>
      )}
    </div>
  );
};

export default Liked;
