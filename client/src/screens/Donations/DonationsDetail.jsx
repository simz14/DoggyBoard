import React from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { CircularProgress, Table } from "@mui/material";
import { Container } from "../../components/Container";
import GetBack from "../../components/getBack";
import PawsBcg from "../../components/PawsBcg";
import useDonation from "../../hooks/useDonation";
import useDonations from "../../hooks/useDonations";
import DetailHead from "./components/Detail/DetailHead";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBcgBlue};
  position: relative;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  padding-top: 48px;
  height: 100%;
  width: 100%;

  .intro {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .id {
      font-weight: ${({ theme }) => theme.typography.weight.s};
      font-size: ${({ theme }) => theme.typography.size.xl};
    }
    p {
      font-size: ${({ theme }) => theme.typography.size.s};
    }
  }

  .donationInfo {
    background-color: white;
    border-radius: ${({ theme }) => theme.border.radius.m};
    padding: ${({ theme }) => theme.spacing.padding.m};
  }
`;

const DonationDetail = () => {
  const { id } = useParams();
  const { loading } = useDonations();
  const { donation, donationsByPhone } = useDonation(id);

  console.log(donationsByPhone);

  return (
    <Layout>
      <Wrapper>
        <PawsBcg>
          <ContentWrapper>
            {loading ? (
              <CircularProgress />
            ) : (
              <Container>
                <div className="intro">
                  <GetBack naviageTo="/donations" backPage="Donations" />
                  <div>
                    <span className="id">Donation id:{donation?.id}</span>
                    <p>
                      From: {donation?.firstName} {donation?.lastName}
                    </p>
                  </div>
                </div>

                <div className="donationInfo">
                  <Table sx={{ minWidth: 700 }}>
                    <DetailHead />
                  </Table>
                  <h2>
                    {donation?.firstName} {donation?.lastName}
                  </h2>
                  <p>Phone number: {donation?.phone}</p>
                  <p>Donated: {donation?.amount}</p>
                  <p>Date:{donation?.date} </p>
                </div>
              </Container>
            )}
          </ContentWrapper>
        </PawsBcg>
      </Wrapper>
    </Layout>
  );
};

export default DonationDetail;
