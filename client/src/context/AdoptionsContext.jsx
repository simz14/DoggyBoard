import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { fetchAdoptions } from "../services/adoptionsService";

export const AdoptionsContext = createContext({
  adoptions: [],
  setAdoptions: () => {},
  error: "",
  setError: () => {},
  loading: false,
  setLoading: () => {},
});

export const AdoptionsProvider = ({ children }) => {
  const [adoptions, setAdoptions] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const setData = async () => {
    try {
      setLoading(true);
      const adoptionsData = await fetchAdoptions();
      setTimeout(() => {
        setAdoptions(adoptionsData);
        setLoading(false);
      }, 2000);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    setData();
  }, []);
  return (
    <AdoptionsContext.Provider
      value={{ adoptions, setAdoptions, error, setError, loading, setLoading }}
    >
      {children}
    </AdoptionsContext.Provider>
  );
};
AdoptionsContext.propTypes = {
  children: PropTypes.node,
};
