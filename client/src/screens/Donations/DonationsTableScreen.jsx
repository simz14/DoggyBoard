import styled from "styled-components";
import { Container } from "../../components/Container";
import Layout from "../../components/Layout";
import PawsBcg from "../../components/PawsBcg";
import DonationsHead from "./components/Table/DonationsHead";
import DonationsBody from "./components/Table/DonationsBody";
import TableWrapper from "../../components/TableWrapper";
import { CircularProgress, Table, TablePagination } from "@mui/material";
import useDonations from "../../hooks/useDonations";
import SearchComponent from "../../components/SearchComponet";
import { useState } from "react";
import { useEffect } from "react";
import { search } from "../../utils/search";
import usePagination from "../../hooks/usePagination";

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
  @media (max-width: 600px) {
    .introWrap {
      display: flex;
      flex-direction: column;
    }
  }
`;

const DonationsTableScreen = () => {
  const { donations, loading } = useDonations();
  const [searchWord, setSearchWord] = useState("");
  const [relevantDonations, setRelevantDonations] = useState([]);
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    sliceStart,
    sliceEnd,
  } = usePagination();
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
                    <DonationsBody
                      sliceStart={sliceStart}
                      sliceEnd={sliceEnd}
                      donations={filteredDonations}
                    />
                  </Table>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={donations.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
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
