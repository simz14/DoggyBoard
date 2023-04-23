import styled from "styled-components";
import { Container } from "../../components/Container";
import Layout from "../../components/Layout";
import PawsBcg from "../../components/PawsBcg";
import GetBack from "../../components/getBack";
import DogsTableBody from "./components/DogDetail/DogsTableBody";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBcgBlue};
  position: relative;
  min-height: 100vh;
  .content {
    margin-top: 48px;
  }
`;

const NewDog = () => {
  return (
    <Layout>
      <Wrapper>
        <PawsBcg>
          <Container>
            <div className="content">
              <GetBack naviageTo="/dogs" backPage="Dogs" />
              <h2>New Dog</h2>
              <div></div>
            </div>
          </Container>
        </PawsBcg>
      </Wrapper>
    </Layout>
  );
};

export default NewDog;
