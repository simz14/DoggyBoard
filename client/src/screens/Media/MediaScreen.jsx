import React, { useState } from "react";
import Layout from "../../components/Layout";
import PawsBcg from "../../components/PawsBcg";
import { Container } from "../../components/Container";
import styled from "styled-components";
import useFolders from "../../hooks/useFolders";
import FolderBox from "./components/FolderBox";
import { CircularProgress } from "@mui/material";
import BasicButton from "../../components/BasicButton";
import { BsPlusLg } from "react-icons/bs";
import NewFolder from "./components/NewFolder";

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
  const [showAddFolder, setShowFolder] = useState(false);

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
                    <BasicButton
                      onClick={() => setShowFolder(true)}
                      icon={<BsPlusLg />}
                      title="New folder"
                    />
                  </div>
                  <div className="mediaWrapper">
                    <div className="foldersWrapper">
                      <h3>Folders</h3>
                      <div className="folders">
                        {folders.map((folder) => {
                          return <FolderBox key={folder.id} folder={folder} />;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {showAddFolder && <NewFolder setShowFolder={setShowFolder} />}
          </Container>
        </PawsBcg>
      </Wrapper>
    </Layout>
  );
};

export default MeidaScreen;
