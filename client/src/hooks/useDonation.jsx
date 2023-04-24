import { useEffect, useState } from "react";
import useDonations from "./useDonations";

const useDonation = (id) => {
  const { donations } = useDonations();
  const [donation, setDonation] = useState({});
  const [donationsByPhone, setDonationsByPhone] = useState([]);
  const [total, setTotal] = useState();

  //this part handles finding one donation for detail based on id
  //and getting the total of donations amounts from the person by the phone number

  useEffect(() => {
    if (donations) {
      setDonation(
        donations.find((donation) => {
          if (donation.id == id) {
            setDonationsByPhone(() => {
              return donations.filter((item) => item.phone === donation.phone);
            });
            return donation;
          }
        })
      );
    }
  }, [donations, id]);

  return { donationsByPhone, donation };
};
export default useDonation;
