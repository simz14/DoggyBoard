import React from "react";
import Layout from "../../components/Layout";
import PawsBcg from "../../components/PawsBcg";
import { Container } from "../../components/Container";
import styled from "styled-components";
import useFolders from "../../hooks/useFolders";
import FolderBox from "./components/FolderBox";
import { CircularProgress } from "@mui/material";

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
    justify-content: space-between;
    align-items: center;
  }
  .contentWrapper {
    width: 100%;
  }
  @media (max-width: 600px) {
    .introWrap {
      display: flex;
      flex-direction: column;
    }
  }
  .mediaWrapper {
    background-color: white;
    border-radius: ${({ theme }) => theme.border.radius.m};
    padding: ${({ theme }) => theme.spacing.padding.l};
  }
  .foldersWrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.colors.lightBcgBlue};
    border-radius: ${({ theme }) => theme.border.radius.m};
    border: 1px solid ${({ theme }) => theme.colors.borderLighBlue};
    padding: ${({ theme }) => theme.spacing.padding.m};
    .folders {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

const MeidaScreen = () => {
  const { folders, loading } = useFolders();
  console.log(folders);
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
                  </div>
                  <div className="mediaWrapper">
                    <div className="foldersWrapper">
                      <h3>Folders</h3>
                      <div className="folders">
                        {folders.map((folder) => {
                          return <FolderBox folder={folder} />;
                        })}
                      </div>
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

export default MeidaScreen;
