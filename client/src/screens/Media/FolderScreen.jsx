import React, { useContext } from "react";
import Layout from "../../components/Layout";
import PawsBcg from "../../components/PawsBcg";
import { Container } from "../../components/Container";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";
import useFolders from "../../hooks/useFolders";
import { HiChevronRight } from "react-icons/hi";
import { useParams } from "react-router-dom";
import useFolder from "../../hooks/useFolder";
import GetBack from "../../components/GetBack";
import { MediaContext } from "../../context/MediaContext";

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
  .introWrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .titleIcon {
      display: flex;
      align-items: center;
    }
  }
  .boxWrapper {
    width: 100%;
  }
  @media (max-width: 600px) {
    .introWrap {
      display: flex;
      flex-direction: column;
    }
  }
  .contentWrapper {
    background-color: white;
    border-radius: ${({ theme }) => theme.border.radius.m};
    padding: ${({ theme }) => theme.spacing.padding.l};
  }
  .filesWrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.colors.lightBcgBlue};
    border-radius: ${({ theme }) => theme.border.radius.m};
    border: 1px solid ${({ theme }) => theme.colors.borderLighBlue};
    padding: ${({ theme }) => theme.spacing.padding.m};
    .files {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

const FolderScreen = () => {
  const { loading } = useFolders();
  const { media } = useContext(MediaContext);
  const { id } = useParams();
  const { folder } = useFolder(id);
  console.log(media);
  return (
    <Layout>
      <Wrapper>
        <PawsBcg>
          <Container>
            <div className="screenWrapper">
              {loading ? (
                <CircularProgress />
              ) : (
                <div className="boxWrapper">
                  <div className="introWrap">
                    <GetBack naviageTo="/media" backPage="Back to media" />
                    <div className="titleIcon">
                      <h2>Media</h2>
                      <span>
                        <HiChevronRight /> {folder?.name}
                      </span>
                    </div>
                  </div>
                  <div className="contentWrapper">
                    <div className="filesWrapper">
                      <h3>Files</h3>
                      <div className="files"></div>
                    </div>
                  </div>
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
