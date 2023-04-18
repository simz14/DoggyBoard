import { createContext, useEffect, useState } from "react";
import { fetchDogs } from "../services/dogs";

export const DogsContext = createContext({
  dogs: [],
  setDogs: () => {},
  error: "",
  setError: () => {},
  loading: false,
  setLoading: () => {},
});

export const DogsProvider = ({ children }) => {
  const [dogs, setDogs] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const setData = async () => {
    try {
      setLoading(true);
      const dogsData = await fetchDogs();
      setTimeout(() => {
        setDogs(dogsData);
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
    <DogsContext.Provider
      value={{ dogs, setDogs, error, setError, loading, setLoading }}
    >
      {children}
    </DogsContext.Provider>
  );
};
