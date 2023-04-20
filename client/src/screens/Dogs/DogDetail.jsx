import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import pawsBcg from "../../assets/pawsBcg.jpg";
import { useParams } from "react-router-dom";
import useDogs from "../../hooks/useDogs";
import { CircularProgress, TextField } from "@mui/material";
import { Container } from "../../components/Container";
import { useForm } from "react-hook-form";
import useDog from "../../hooks/useDog";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBcgBlue};
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .paws {
    object-fit: cover;
    position: absolute;
    bottom: 0;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0.07;
  }
`;

const ContentWrapper = styled.div`
  padding-top: 48px;
  height: 100%;
  width: 100%;
  .dogInfo {
    background-color: white;
    border-radius: ${({ theme }) => theme.border.radius.s};
  }
`;

const DogDetail = () => {
  const { id } = useParams();
  const { loading } = useDogs();
  const { dog } = useDog(id);
  const { register, handleSubmit, getValues } = useForm();

  console.log(dog);
  return (
    <Layout>
      <Wrapper>
        <img className="paws" src={pawsBcg} alt="paws" />

        <ContentWrapper>
          {loading ? (
            <CircularProgress />
          ) : (
            <Container>
              <div className="intro">
                <h2>{dog?.name}</h2>
                <p>Dog detail</p>
              </div>
              <div className="dogInfo">
                <TextField {...register("name")} defaultValue={dog?.name} />
              </div>
            </Container>
          )}
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default DogDetail;
