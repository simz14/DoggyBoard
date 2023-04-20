import { useEffect, useState } from "react";
import useDogs from "./useDogs";

const useDog = (id) => {
  const { dogs } = useDogs();
  const [dog, setDog] = useState();

  useEffect(() => {
    setDog(dogs.find((dog) => dog.id == id));
  }, [dogs]);

  return { dog };
};
export default useDog;
