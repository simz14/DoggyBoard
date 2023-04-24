import React from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { Container } from "../../components/Container";
import GetBack from "../../components/getBack";
import PawsBcg from "../../components/PawsBcg";
import useDonation from "../../hooks/useDonation";
import useDonations from "../../hooks/useDonations";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBcgBlue};
  position: relative;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  padding-top: 48px;
  height: 100%;
  width: 100%;
  text-align: center;
  .intro {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .buttons {
      display: flex;
      gap: 1rem;
    }
  }
`;

const DonationDetail = () => {
  const { id } = useParams();
  const { loading } = useDonations();
  const { donation } = useDonation(id);

  console.log(donation);

  return (
    <Layout>
      <Wrapper>
        <PawsBcg>
          <Container>
            <ContentWrapper>
              {loading ? (
                <CircularProgress />
              ) : (
                <div className="intro">
                  <div>
                    <GetBack naviageTo="/donations" backPage="Donations" />
                    <h2>
                      {donation?.firstName} {donation?.lastName}
                    </h2>
                    <p>Phone number: {donation?.phone}</p>
                    <p>Donated: {donation?.amount}</p>
                    <p>Date:{donation?.date} </p>
                  </div>
                </div>
              )}
            </ContentWrapper>
          </Container>
        </PawsBcg>
      </Wrapper>
    </Layout>
  );
};

export default DonationDetail;
