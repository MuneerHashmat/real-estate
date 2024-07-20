import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PropertiesContext from "./PropertiesContext";
import data from "../data/data";

const PropertiesProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem("properties")) || data;
  const [properties, setProperties] = useState(initialState);

  const setLiked = (id) => {
    setProperties(
      properties.map((property) => {
        return property.id == id
          ? { ...property, liked: !property.liked }
          : property;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("properties", JSON.stringify(properties));
  }, [properties]);

  return (
    <PropertiesContext.Provider value={{ properties, setLiked }}>
      {children}
    </PropertiesContext.Provider>
  );
};

PropertiesProvider.propTypes = {
  children: PropTypes.node,
};

export default PropertiesProvider;
