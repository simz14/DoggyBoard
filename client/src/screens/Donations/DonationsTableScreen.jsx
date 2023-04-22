import styled from "styled-components";
import { Container } from "../../components/Container";
import Layout from "../../components/Layout";
import PawsBcg from "../../components/PawsBcg";
import DonationsHead from "./components/DonationsHead";
import DonationsBody from "./components/DonationsBody";
import TableWrapper from "../../components/TableWrapper";
import { CircularProgress, Table } from "@mui/material";
import useDonations from "../../hooks/useDonations";

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
  const { donations, loading } = useDonations();
  return (
    <Layout>
      <Wrapper>
        <PawsBcg>
          <Container>
            <div className="contentWrapper">
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
