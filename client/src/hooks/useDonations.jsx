import { useContext } from "react";
import { DonationsContext } from "../context/DonationsContext";

const useDonations = () => {
  return useContext(DonationsContext);
};
export default useDonations;
