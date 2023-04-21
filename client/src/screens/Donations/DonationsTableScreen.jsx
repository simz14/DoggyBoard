import styled from "styled-components";
import { Container } from "../../components/Container";
import Layout from "../../components/Layout";
import PawsBcg from "../../components/PawsBcg";
import DonationsHead from "./components/DonationsHead";
import DonationsBody from "./components/DonationsBody";
import { useContext } from "react";
import { DonationsContext } from "../../context/DonationsContext";
import TableWrapper from "../../components/TableWrapper";
import { CircularProgress, Table } from "@mui/material";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBcgBlue};
  position: relative;
  min-height: 100vh;
  .contentWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 48px;
  }
`;

const DonationsTableScreen = () => {
  const { donations, loading } = useContext(DonationsContext);
  return (
    <Layout>
      <Wrapper>
        <PawsBcg>
          <Container>
            <div className="contentWrap">
              <div className="introWrap">
                <h2>Donations</h2>
              </div>
              {loading ? (
                <CircularProgress />
              ) : (
                <TableWrapper>
                  <Table sx={{ minWidth: 700 }}>
                    <DonationsHead />

                    <DonationsBody donations={donations} />
                  </Table>
                </TableWrapper>
              )}
            </div>
          </Container>
        </PawsBcg>
      </Wrapper>
    </Layout>
  );
};

export default DonationsTableScreen;
