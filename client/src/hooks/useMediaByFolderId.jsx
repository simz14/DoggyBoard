import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import useMedia from "./useMedia";

const useMediaByFodlerId = (folderId) => {
  const { media } = useMedia();
  const [mediaById, setMediaById] = useState();

  useEffect(() => {
    if (media) {
      setMediaById(media.filter((item) => item.folderId == folderId));
    }
  }, [media]);

  return { mediaById, setMediaById };
};

useMediaByFodlerId.propTypes = {
  folderId: PropTypes.number,
};

export default useMediaByFodlerId;
