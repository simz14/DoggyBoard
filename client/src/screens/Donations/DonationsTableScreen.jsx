import styled from "styled-components";
import { Container } from "../../components/Container";
import Layout from "../../components/Layout";
import PawsBcg from "../../components/PawsBcg";
import DonationsHead from "./components/Table/DonationsHead";
import DonationsBody from "./components/Table/DonationsBody";
import TableWrapper from "../../components/TableWrapper";
import { CircularProgress, Table } from "@mui/material";
import useDonations from "../../hooks/useDonations";
import SearchComponent from "../../components/SearchComponet";
import { useState } from "react";
import { useEffect } from "react";
import { search } from "../../utils/search";

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
  .introWrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const DonationsTableScreen = () => {
  const { donations, loading } = useDonations();
  const [searchWord, setSearchWord] = useState("");
  const [relevantDonations, setRelevantDonations] = useState([]);

  const filteredDonations = search(relevantDonations, searchWord);

  useEffect(() => {
    if (donations) {
      setRelevantDonations(
        donations.map((item) => {
          return {
            id: item.id,
            firstName: item.firstName,
            lastName: item.lastName,
            phone: item.phone,
            amount: item.amount,
          };
        })
      );
    }

    search(relevantDonations, searchWord);
  }, [donations]);
  return (
    <Layout>
      <Wrapper>
        <PawsBcg>
          <Container>
            <div className="contentWrapper">
              <div className="introWrap">
                <h2>Donations</h2>
                <div className="field">
                  <SearchComponent setWord={setSearchWord} />
                </div>
              </div>
              {loading ? (
                <CircularProgress />
              ) : (
                <TableWrapper>
                  <Table sx={{ minWidth: 700 }}>
                    <DonationsHead />

                    <DonationsBody donations={filteredDonations} />
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
