import styled from "styled-components";
import { Container } from "../../components/Container";
import Layout from "../../components/Layout";
import { useState } from "react";
import { CircularProgress, Table, TablePagination } from "@mui/material";
import TableWrapper from "../../components/TableWrapper";
import { search } from "../../utils/search";
import BasicButton from "../../components/BasicButton";
import PawsBcg from "../../components/PawsBcg";
import { BsPlusLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import SearchComponent from "../../components/SearchComponet";
import usePagination from "../../hooks/usePagination";
import useAdoptions from "../../hooks/useAdoptions";
import AdoptionsTableHead from "./components/Table/AdoptionsTableHead";
import AdoptionsTableBody from "./components/Table/AdoptionsTableBody";
import { useEffect } from "react";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBcgBlue};
  position: relative;
  min-height: 100vh;

  .contentWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 48px;
  }

  .tableWrap {
    overflow-x: auto;
    width: 100%;
    min-width: 400px;
  }
  .introWrap {
    width: 100%;
    grid-template-columns: 1fr 1fr;
    display: grid;
    .interact {
      grid-template-columns: 1fr 1fr 1fr;
      display: grid;
      align-items: center;
    }
    .field {
      grid-column: 1/3;
    }

    @media (max-width: 600px) {
      justify-items: center;
      grid-template-columns: 1fr;
      .interact {
        grid-template-columns: 1fr;
        justify-items: center;
        > div {
          margin-bottom: 1rem;
        }
      }
    }
  }
`;

const AdoptionsTableScreen = () => {
  const navigate = useNavigate();
  const { adoptions, loading } = useAdoptions();
  const [searchWord, setSearchWord] = useState("");
  const [sortBy, setSortBy] = useState(["random", "asc", "desc"]);
  const [sort, setSort] = useState("");
  const [relevantAdoptionsValues, setRelevantAdoptionsValues] = useState([]);
  const filteredAdoptions = search(relevantAdoptionsValues, searchWord);
  console.log(adoptions);
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    sliceStart,
    sliceEnd,
  } = usePagination();
  useEffect(() => {
    if (adoptions) {
      setRelevantAdoptionsValues(
        adoptions.map((item) => {
          return {
            id: item.id,
            firstName: item.firstName,
            lastName: item.lastName,
            email: item.email,
            petId: item.petId,
          };
        })
      );
    }

    search(relevantAdoptionsValues, searchWord);
  }, [adoptions]);
  return (
    <Layout>
      <Wrapper>
        <PawsBcg>
          <Container>
            <div className="contentWrap">
              <div className="introWrap">
                <h2>Adoptions</h2>
                <div className="interact">
                  <div className="field">
                    <SearchComponent setWord={setSearchWord} />
                  </div>

                  <div className="button">
                    <BasicButton
                      onClick={() => navigate("/adoptions/new")}
                      icon={<BsPlusLg />}
                      title={"Add"}
                    />
                  </div>
                </div>
              </div>
              {loading ? (
                <CircularProgress />
              ) : (
                <TableWrapper>
                  <Table sx={{ minWidth: 700 }}>
                    <AdoptionsTableHead
                      sort={sort}
                      sortBy={sortBy}
                      setSort={setSort}
                      setSortBy={setSortBy}
                    />
                    <AdoptionsTableBody
                      sort={sort}
                      sortBy={sortBy}
                      sliceStart={sliceStart}
                      sliceEnd={sliceEnd}
                      adoptions={filteredAdoptions}
                    />
                  </Table>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={adoptions.length}
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

export default AdoptionsTableScreen;
