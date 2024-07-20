import PropTypes from "prop-types";
import {
  AirlineSeatIndividualSuite,
  Bathtub,
  Favorite,
  SquareFoot,
} from "@mui/icons-material";
import { useContext } from "react";
import PropertiesContext from "../context/PropertiesContext";
const PropertyCard = ({ property }) => {
  const { setLiked } = useContext(PropertiesContext);
  return (
    <div className="sm:w-[700px] md:w-[600px] xl:w-[390px] w-[95vw] shadow-lg rounded-md overflow-hidden flex flex-col gap-4 hover:scale-[1.02] transition-all">
      <img
        src={property.image}
        alt="image"
        className="w-full h-[200px] object-cover"
      />

      <div className="px-4 pb-4">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <h1 className="text-[#FF6D38] font-semibold text-[28px]">
              ₹{property.price}/<span className="text-[20px]">day</span>
            </h1>

            <button onClick={() => setLiked(property.id)}>
              <Favorite
                sx={{
                  color: property.liked ? "red" : "gray",
                  fontSize: "30px",
                }}
              />
            </button>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-[25px]">{property.title}</h1>

            <p className="text-gray-500">
              Type: <span className="uppercase">{property.type}</span>
            </p>
          </div>
        </div>
        <div className="mt-[8px] flex flex-col gap-3">
          <p className="text-gray-500">{property.address}</p>
          <hr />
          <div className="flex justify-between">
            <div className="flex gap-1">
              <AirlineSeatIndividualSuite sx={{ color: "#FF6D38" }} />
              <span className="text-gray-500">{property.beds} Beds</span>
            </div>

            <div className="flex gap-1">
              <Bathtub sx={{ color: "#FF6D38" }} />
              <span className="text-gray-500">
                {property.bathrooms} Bathrooms
              </span>
            </div>

            <div className="flex">
              <SquareFoot sx={{ color: "#FF6D38" }} />
              <span className="text-gray-500">{property.area} sqft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.object,
};

export default PropertyCard;
