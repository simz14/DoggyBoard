import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import PawsBcg from "../../components/PawsBcg";
import { useNavigate, useParams } from "react-router-dom";
import useAdoptions from "../../hooks/useAdoptions";
import useAdoption from "../../hooks/useAdoption";
import { CircularProgress, Table, TableBody } from "@mui/material";
import { Container } from "../../components/Container";
import BasicButton from "../../components/BasicButton";
import { handleClickDelete } from "../../utils/deleteFunction";
import { useForm } from "react-hook-form";
import GetBack from "../../components/GetBack";
import AdoptionDetailForm from "./components/Detail/AdoptionForm";
import Swal from "sweetalert2";
import TableWrapper from "../../components/TableWrapper";
import AdoptionDogHead from "./components/Detail/AdoptionDogHead";
import AdoptionTableRow from "./components/Detail/AdoptionTableRow";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBcgBlue};
  position: relative;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  padding-top: 48px;
  height: 100%;
  width: 100%;
  text-align: center;
  .intro {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .buttons {
      display: flex;
      gap: 1rem;
    }
  }
`;

const AdoptionDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { setAdoptions, loading } = useAdoptions();
  const { adoption } = useAdoption(id);
  const [adoptionStatus, setAdoptionStatus] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
    reset,
  } = useForm();

  const adopter = adoption?.adopter;
  const dog = adoption?.dog;

  useEffect(() => {
    reset({
      id: adoption?.id,
      firstName: adopter?.firstName,
      lastName: adopter?.lastName,
      email: adopter?.email,
      phone: adopter?.phone,
      age: adopter?.age,
      reasonForAdopting: adopter?.reasonForAdopting,
    });
    setAdoptionStatus(adopter?.status);
  }, [adoption]);

  const navigateToAdoptions = () => {
    navigate("/adoptions");
  };
  const removeAdoption = () => {
    setAdoptions((prev) => prev.filter((item) => item.id != id));
  };

  const handleSaveAdoption = () => {
    setAdoptions((prev) =>
      prev.map((item) => {
        if (item.id == id) {
          item.adopter = { ...getValues(), status: adoptionStatus };
        }
        return item;
      })
    );
    Swal.fire({
      title: "Saved",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });
  };
  return (
    <Layout>
      <Wrapper>
        <PawsBcg>
          <ContentWrapper>
            {loading ? (
              <CircularProgress />
            ) : (
              <Container>
                <div className="intro">
                  <div className="introInfo">
                    <GetBack
                      backArrow={true}
                      naviageTo="/adoptions"
                      backPage="Adoptions"
                    />
                    <h2>Adoption id: {id}</h2>
                  </div>
                  <div className="buttons">
                    <BasicButton
                      onClick={() =>
                        handleClickDelete(
                          id,
                          removeAdoption,
                          navigateToAdoptions
                        )
                      }
                      title="Remove"
                    />
                    <BasicButton
                      onClick={handleSubmit(handleSaveAdoption)}
                      title="Save"
                    />
                  </div>
                </div>
                <div className="adoptionInfo">
                  <AdoptionDetailForm
                    adoptionStatus={adoptionStatus}
                    setAdoptionStatus={setAdoptionStatus}
                    register={register}
                    adopter={adopter}
                    errors={errors}
                    setValue={setValue}
                  />
                </div>
                <div className="dogInfo">
                  <h2>Dog for adoption</h2>
                  <TableWrapper>
                    <Table sx={{ minWidth: 700 }}>
                      <AdoptionDogHead />
                      <TableBody>
                        <AdoptionTableRow item={dog} />
                      </TableBody>
                    </Table>
                  </TableWrapper>
                </div>
              </Container>
            )}
          </ContentWrapper>
        </PawsBcg>
      </Wrapper>
    </Layout>
  );
};

export default AdoptionDetail;
