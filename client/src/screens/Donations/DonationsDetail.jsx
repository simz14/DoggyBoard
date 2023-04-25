import React, { useEffect, useState } from "react";
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
import DetailRow from "./components/Detail/DetailRow";
import TableWrapper from "../../components/TableWrapper";

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
    justify-content: space-between;
    align-items: center;

    .infoWrap {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .id {
      font-weight: ${({ theme }) => theme.typography.weight.s};
      font-size: ${({ theme }) => theme.typography.size.xl};
    }
    p {
      font-size: ${({ theme }) => theme.typography.size.s};
    }
    .total {
      background-color: ${({ theme }) => theme.colors.mediumPurple};
      color: white;
      border-radius: ${({ theme }) => theme.border.radius.m};
      padding: ${({ theme }) => theme.spacing.padding.m};
    }
  }

  .donationInfo {
    background-color: white;
    border-radius: ${({ theme }) => theme.border.radius.m};
    padding: ${({ theme }) => theme.spacing.padding.m};
  }

  @media (max-width: 600px) {
    .intro {
      margin: 1rem 0;
      display: flex;
      flex-direction: column;
      .infoWrap {
        align-items: center;
      }
      .info {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

const DonationDetail = () => {
  const { id } = useParams();
  const { loading } = useDonations();
  const { donation, donationsByPhone } = useDonation(id);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    if (donationsByPhone) {
      let sum = 0;
      donationsByPhone.map((item) => {
        sum += Number(item.amount);
      });
      setTotal(sum);
    }
  }, [donationsByPhone]);

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
                  <div className="infoWrap">
                    <GetBack naviageTo="/donations" backPage="Donations" />
                    <div className="info">
                      <span className="id">Donation id:{donation?.id}</span>
                      <p>
                        From: {donation?.firstname} {donation?.lastname}
                      </p>
                    </div>
                  </div>

                  <div className="total">Total donated: {total}$</div>
                </div>

                <div className="donationInfo">
                  <TableWrapper>
                    <Table sx={{ minWidth: 700 }}>
                      <DetailHead />
                      <tbody>
                        <DetailRow item={donation} />
                      </tbody>
                    </Table>
                  </TableWrapper>

                  <p>All donations:</p>
                  <TableWrapper>
                    <Table sx={{ minWidth: 700 }}>
                      <tbody>
                        {donationsByPhone.map((item) => {
                          return <DetailRow key={item.id} item={item} />;
                        })}
                      </tbody>
                    </Table>
                  </TableWrapper>
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
