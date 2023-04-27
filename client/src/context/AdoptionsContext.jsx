import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { fetchAdoptions } from "../services/adoptionsService";
import useDogs from "../hooks/useDogs";

export const AdoptionsContext = createContext({
  adoptions: [],
  setAdoptions: () => {},
  error: "",
  setError: () => {},
  loading: false,
  setLoading: () => {},
});

export const AdoptionsProvider = ({ children }) => {
  const [adoptions, setAdoptions] = useState(null);
  const [adopters, setAdopters] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { dogs } = useDogs();

  const setDogsInfo = () => {
    if (dogs && adopters) {
      setAdoptions(
        adopters.map((adopter) => {
          return {
            id: adopter.id,
            date: adopter.date,
            adopter: {
              age: adopter.age,
              email: adopter.email,
              firstName: adopter.firstName,
              lastName: adopter.lastName,
              petId: adopter.petId,
              phone: adopter.phone,
              reasonForAdopting: adopter.reasonForAdopting,
              status: adopter.status,
            },
            dog: dogs.find((dog) => dog.petId === adopter.petId),
          };
        })
      );
    }
  };

  const setData = async () => {
    try {
      setLoading(true);
      const adoptersData = await fetchAdoptions();
      setTimeout(() => {
        setAdopters(adoptersData);
        setLoading(false);
      }, 2000);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    setData();
    setDogsInfo();
  }, [dogs]);

  return (
    <AdoptionsContext.Provider
      value={{ adoptions, setAdoptions, error, setError, loading, setLoading }}
    >
      {children}
    </AdoptionsContext.Provider>
  );
};
AdoptionsContext.propTypes = {
  children: PropTypes.node,
};
