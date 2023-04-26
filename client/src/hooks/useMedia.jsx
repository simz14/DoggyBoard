import { useContext } from "react";
import { MediaContext } from "../context/MediaContext";

const useMedia = () => {
  return useContext(MediaContext);
};

export default useMedia;
