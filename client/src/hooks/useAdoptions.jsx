import { useContext } from "react";
import { AdoptionsContext } from "../context/AdoptionsContext";

const useAdoptions = () => {
  return useContext(AdoptionsContext);
};
export default useAdoptions;
