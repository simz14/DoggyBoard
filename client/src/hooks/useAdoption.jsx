import { useEffect, useState } from "react";
import useAdoptions from "./useAdoptions";

const useAdoption = (id) => {
  const { adoptions } = useAdoptions();
  const [adoption, setAdoption] = useState();

  useEffect(() => {
    if (adoptions) {
      setAdoption(adoptions.find((adoption) => adoption.id == id));
    }
  }, [adoptions]);

  return { adoption };
};
export default useAdoption;
