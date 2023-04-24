import styled from "styled-components";
import { Container } from "../../components/Container";
import Layout from "../../components/Layout";
import PawsBcg from "../../components/PawsBcg";
import GetBack from "../../components/getBack";
import DogsTableBody from "./components/DogDetail/DogsTableBody";
import NewDogForm from "./components/NewDog/NewDogForms";
import BasicButton from "../../components/BasicButton";

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

const NewDog = () => {
  return (
    <Layout>
      <Wrapper>
        <PawsBcg>
          <Container>
            <div className="content">
              <div className="head">
                <div className="intro">
                  <GetBack naviageTo="/dogs" backPage="Dogs" />
                  <h2>New Dog</h2>
                </div>

                <div className="buttons">
                  <BasicButton title="Remove" />
                  <BasicButton title="Save" />
                </div>
              </div>

              <div>
                <NewDogForm />
              </div>
            </div>
          </Container>
        </PawsBcg>
      </Wrapper>
    </Layout>
  );
};

export default NewDog;
