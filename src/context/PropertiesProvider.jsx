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
    const storedProperties =
      JSON.parse(localStorage.getItem("properties")) || data;
    const updatedProperties = storedProperties.map((property) => {
      return property.id == id
        ? { ...property, liked: !property.liked }
        : property;
    });

    localStorage.setItem("properties", JSON.stringify(updatedProperties));
  };

  const handleFilter = (city, price, type, beds) => {
    let newProperties = [...initialState];

    if (city) {
      newProperties = newProperties.filter((item) => {
        return item.address.toLowerCase().includes(city.toLowerCase());
      });
    }

    if (price !== "all") {
      newProperties = newProperties.filter((item) => {
        return (
          item.price <= parseInt(price) && item.price >= parseInt(price) - 500
        );
      });
    }

    if (type !== "all") {
      newProperties = newProperties.filter((item) => {
        return item.type === type;
      });
    }

    if (beds != "all") {
      newProperties = newProperties.filter((item) => {
        return parseInt(beds) === item.beds;
      });
    }

    setProperties(newProperties);
  };

  const reset = () => {
    const storedProperties =
      JSON.parse(localStorage.getItem("properties")) || data;
    setProperties(storedProperties);
  };

  useEffect(() => {
    if (properties.length === 54) {
      localStorage.setItem("properties", JSON.stringify(properties));
    }
  }, [properties]);

  return (
    <PropertiesContext.Provider
      value={{ properties, setLiked, handleFilter, reset }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

PropertiesProvider.propTypes = {
  children: PropTypes.node,
};

export default PropertiesProvider;
