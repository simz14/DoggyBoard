import React, { useState } from "react";
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
import useMediaByFodlerId from "../../hooks/useMediaByFolderId";
import Masonry from "@mui/lab/Masonry";
import { HiUpload } from "react-icons/hi";
import StyledLabel from "../../components/StyledLabel";
import ImageZoom from "./components/ImageZoom";

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
    align-items: center;
    justify-content: space-between;

    .titleIcon {
      display: flex;
      align-items: center;
    }
  }
  .boxWrapper {
    width: 100%;
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
      gap: 1rem;
    }
    .image {
      background-color: white;
      padding: ${({ theme }) => theme.spacing.padding.s};
      border-radius: ${({ theme }) => theme.border.radius.m};
      cursor: pointer;
    }
  }
  @media (max-width: 600px) {
    .introWrap {
      display: flex;
      flex-direction: column;
    }
    .image {
      width: 100%;
    }
  }
`;

const FolderScreen = () => {
  const { loading } = useFolders();
  const { id } = useParams();
  const { folder } = useFolder(id);
  const { mediaById } = useMediaByFodlerId(id);
  const [showZoom, setShowZoom] = useState(null);

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
                    <div>
                      <GetBack
                        backArrow={true}
                        naviageTo="/media"
                        backPage="Back to media"
                      />
                      <div className="titleIcon">
                        <h2>Media</h2>
                        <span>
                          <HiChevronRight /> {folder?.name}
                        </span>
                      </div>
                    </div>
                    <div>
                      <StyledLabel icon={<HiUpload />} title={"Upload image"}>
                        <input hidden accept="image/*" multiple type="file" />
                      </StyledLabel>
                    </div>
                  </div>
                  <div className="contentWrapper">
                    <div className="filesWrapper">
                      <h3>Files</h3>
                      <div className="files">
                        {mediaById && (
                          <Masonry columns={{ sx: 1, sm: 3 }} spacing={2}>
                            {mediaById.map((item, index) => {
                              return (
                                <img
                                  onClick={() => setShowZoom(item.src)}
                                  className="image"
                                  key={item.id}
                                  src={item.src}
                                  alt="photo"
                                />
                              );
                            })}
                          </Masonry>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Container>
          {showZoom && (
            <ImageZoom setShowZoom={setShowZoom} showZoom={showZoom} />
          )}
        </PawsBcg>
      </Wrapper>
    </Layout>
  );
};

export default FolderScreen;
