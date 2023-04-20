import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import pawsBcg from "../../assets/pawsBcg.jpg";
import { useParams } from "react-router-dom";
import useDogs from "../../hooks/useDogs";
import { CircularProgress } from "@mui/material";
import { Container } from "../../components/Container";
import useDog from "../../hooks/useDog";
import DogTextField from "./components/DogTextField";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBcgBlue};
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
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
  text-align: center;
  .intro {
    display: flex;
    justify-content: space-between;
  }
  .dogInfo {
    background-color: white;
    border-radius: ${({ theme }) => theme.border.radius.s};
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: ${({ theme }) => theme.spacing.padding.m};
    .storyField {
      grid-column: 1/3;
    }
  }
`;

const DogDetail = () => {
  const { id } = useParams();
  const { loading } = useDogs();
  const { dog } = useDog(id);
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [petId, setPetId] = useState("");
  const [story, setStory] = useState("");

  useEffect(() => {
    if (dog) {
      setName(dog.name);
      setBreed(dog.breed);
      setSex(dog.sex);
      setAge(dog.age);
      setLocation(dog.location);
      setColor(dog.color);
      setSize(dog.size);
      setPetId(dog.petId);
      setStory(dog.story);
    }
  }, [dog]);

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
                <div>
                  <h2>{dog?.name}</h2>
                  <p>Dog detail</p>
                </div>
                <div></div>
              </div>
              <div className="dogInfo">
                <DogTextField label="Name" setter={setName} value={name} />
                <DogTextField label="Breed" setter={setBreed} value={breed} />
                <DogTextField label="Sex" setter={setSex} value={sex} />
                <DogTextField
                  type="number"
                  label="Age"
                  setter={setAge}
                  value={age}
                />
                <DogTextField
                  label="Location"
                  setter={setLocation}
                  value={location}
                />
                <DogTextField label="Color" setter={setColor} value={color} />
                <DogTextField label="Size" setter={setSize} value={size} />
                <DogTextField
                  type="number"
                  label="Pet Id"
                  setter={setPetId}
                  value={petId}
                />
                <DogTextField
                  className="storyField"
                  label="Story"
                  setter={setStory}
                  value={story}
                  multiline={true}
                />
              </div>
            </Container>
          )}
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default DogDetail;
