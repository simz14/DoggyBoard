import { useContext } from "react";
import { DogsContext } from "../context/DogsContext";

const useDogs = () => {
  return useContext(DogsContext);
};
export default useDogs;
