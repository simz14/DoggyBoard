import { createContext, useEffect, useState } from "react";
import { fetchDonations } from "../services/donationsService";
import { PropTypes } from "prop-types";

export const DonationsContext = createContext({
  donations: [],
  setDonations: () => {},
  error: "",
  setError: () => {},
  loading: false,
  setLoading: () => {},
});

export const DonationsProvider = ({ children }) => {
  const [donations, setDonations] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const setData = async () => {
    try {
      setLoading(true);
      const donationsData = await fetchDonations();
      setTimeout(() => {
        setDonations(
          donationsData.map((donation) => {
            const dateFormat = new Date(Number(donation.date));
            const date =
              dateFormat.getDate() +
              "." +
              (dateFormat.getMonth() + 1) +
              "." +
              dateFormat.getFullYear() +
              " " +
              dateFormat.getHours() +
              ":" +
              dateFormat.getMinutes();

            return { ...donation, date: date };
          })
        );
        setLoading(false);
      }, 2000);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    setData();
  }, []);
  return (
    <DonationsContext.Provider
      value={{ donations, setDonations, error, setError, loading, setLoading }}
    >
      {children}
    </DonationsContext.Provider>
  );
};
DonationsProvider.propTypes = {
  children: PropTypes.node,
};
