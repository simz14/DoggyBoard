import { useContext } from "react";
import { FoldersContext } from "../context/FoldersContext";

const useFolders = () => {
  return useContext(FoldersContext);
};

export default useFolders;
