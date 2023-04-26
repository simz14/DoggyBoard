import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { fetchMedia } from "../services/mediaService";

export const MediaContext = createContext({
  media: [],
  setMedia: () => {},
  error: "",
  setError: () => {},
  loading: false,
  setLoading: () => {},
});

export const MediaProvider = ({ children }) => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const setData = async () => {
    try {
      setLoading(true);
      const mediaData = await fetchMedia();
      setTimeout(() => {
        setMedia(mediaData);
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
    <MediaContext.Provider
      value={{
        media,
        setMedia,
        loading,
        error,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};
MediaProvider.propTypes = {
  children: PropTypes.node,
};
