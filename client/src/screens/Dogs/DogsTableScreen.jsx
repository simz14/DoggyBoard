import styled from "styled-components";
import { Container } from "../../components/Container";
import Layout from "../../components/Layout";
import useDogs from "../../hooks/useDoga";
import { useEffect } from "react";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBcgBlue};
`;

const DogsTableScreen = () => {
  const { dogs, loading } = useDogs();

  useEffect(() => {
    console.log(dogs, loading);
  }, [dogs, loading]);

  return (
    <Layout>
      <Wrapper>
        <Container>
          <div className="contentWrap">
            <div className="introWrap">
              <h2>Dogs</h2>
            </div>

            <div className="tableWrap"></div>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default DogsTableScreen;
