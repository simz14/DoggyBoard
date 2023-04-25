import styled from "styled-components";
import { Container } from "../../../components/Container";
import Layout from "../../../components/Layout";
import PawsBcg from "../../../components/PawsBcg";
import GetBack from "../../../components/getBack";
import BasicButton from "../../../components/BasicButton";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAdoptions from "../../../hooks/useAdoptions";
import NewAdoptionForm from "./NewAdoption/NewAdoptionForm";
import { useState } from "react";
import useDogs from "../../../hooks/useDogs";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBcgBlue};
  position: relative;
  min-height: 100vh;
  .content {
    margin-top: 48px;
  }
  .head {
    display: flex;
    justify-content: space-between;
  }
  .buttons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const NewAdoption = () => {
  const { adoptions, setAdoptions } = useAdoptions();
  const { dogs } = useDogs();
  const [adoptionStatus, setAdoptionStatus] = useState("pending");
  const {
    reset,
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      age: "",
      reasonForAdopting: "",
      petId: "",
      status: "",
    },
  });

  const handleClickAdd = () => {
    const getLastId = adoptions.at(-1).id;
    setAdoptions((prev) => {
      return [
        ...prev,
        {
          id: getLastId + 1,
          adopter: { ...getValues(), status: adoptionStatus },
          dog: dogs.find((dog) => dog.petId == getValues().petId),
        },
      ];
    });
    Swal.fire({ title: "New adoption has been added", icon: "success" });
    reset();
  };

  return (
    <Layout>
      <Wrapper>
        <PawsBcg>
          <Container>
            <div className="content">
              <div className="head">
                <div className="intro">
                  <GetBack naviageTo="/adoptions" backPage="Adoptions" />
                  <h2>New adoption</h2>
                </div>

                <div className="buttons">
                  <BasicButton onClick={() => reset()} title="Remove" />
                  <BasicButton
                    onClick={handleSubmit(handleClickAdd)}
                    title="Add"
                  />
                </div>
              </div>

              <div>
                <NewAdoptionForm
                  adoptionStatus={adoptionStatus}
                  setAdoptionStatus={setAdoptionStatus}
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
          </Container>
        </PawsBcg>
      </Wrapper>
    </Layout>
  );
};

export default NewAdoption;
