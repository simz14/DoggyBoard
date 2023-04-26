import React from "react";
import Layout from "../../components/Layout";
import PawsBcg from "../../components/PawsBcg";
import { CircularProgress, Container } from "@mui/material";
import styled from "styled-components";
import useFolders from "../../hooks/useFolders";
import { HiChevronRight } from "react-icons/hi";
import { useParams } from "react-router-dom";
import useFolder from "../../hooks/useFolder";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBcgBlue};
  position: relative;
  min-height: 100vh;
  .screenWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 48px;
  }
  .contentWrapper {
    width: 100%;
  }
  .introWrap {
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;

const FolderScreen = () => {
  const { loading } = useFolders();
  const { id } = useParams();
  const { folder } = useFolder(id);
  return (
    <Layout>
      <Wrapper>
        <PawsBcg>
          <Container>
            <div className="screenWrapper">
              {loading ? (
                <CircularProgress />
              ) : (
                <div className="contentWrapper">
                  <div className="introWrap">
                    <h2>Media</h2>
                    <p>
                      <HiChevronRight />
                      {folder?.name}
                    </p>
                  </div>
                  <div className="mediaWrapper"></div>
                </div>
              )}
            </div>
          </Container>
        </PawsBcg>
      </Wrapper>
    </Layout>
  );
};

export default FolderScreen;
