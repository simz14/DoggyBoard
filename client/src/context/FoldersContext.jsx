import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { fetchFolders } from "../services/foldersService";

export const FoldersContext = createContext({
  folders: [],
  setFolders: () => {},
  error: "",
  setError: () => {},
  loading: false,
  setLoading: () => {},
});

export const FoldersProvider = ({ children }) => {
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const setData = async () => {
    try {
      setLoading(true);
      const foldersData = await fetchFolders();
      setTimeout(() => {
        setFolders(foldersData);
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
    <FoldersContext.Provider
      value={{
        folders,
        setFolders,
        loading,
        error,
      }}
    >
      {children}
    </FoldersContext.Provider>
  );
};
FoldersProvider.propTypes = {
  children: PropTypes.node,
};
