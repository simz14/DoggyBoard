import React from "react";
import PropTypes from "prop-types";

const FolderBox = ({ folder }) => {
  return (
    <div>
      <p>{folder?.name}</p>
    </div>
  );
};

FolderBox.propTypes = {
  folder: PropTypes.object,
};

export default FolderBox;
