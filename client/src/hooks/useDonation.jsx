import { useEffect, useState } from "react";
import useDonations from "./useDonations";

const useDonation = (id) => {
  const { donations } = useDonations();
  const [donation, setDonation] = useState();
  useEffect(() => {
    if (donations) {
      setDonation(donations.find((donation) => donation.id == id));
    }
  }, [donations]);

  return { donation };
};
export default useDonation;
