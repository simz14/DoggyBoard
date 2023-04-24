import styled from "styled-components";
import { Container } from "../../components/Container";
import Layout from "../../components/Layout";
import useDogs from "../../hooks/useDogs";
import { useEffect, useState } from "react";
import DogsTableHead from "./components/Table/DogsTableHead";
import { CircularProgress, Table, TablePagination } from "@mui/material";
import DogsTableBody from "./components/Table/DogsTableBody";
import TableWrapper from "../../components/TableWrapper";
import { search } from "../../utils/search";
import BasicButton from "../../components/BasicButton";
import PawsBcg from "../../components/PawsBcg";
import { BsPlusLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import SearchComponent from "../../components/SearchComponet";
import usePagination from "../../hooks/usePagination";

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

const DogsTableScreen = () => {
  const navigate = useNavigate();
  const { dogs, loading } = useDogs();
  const [searchWord, setSearchWord] = useState("");
  const [relevantDogsValues, setRelevantDogsValues] = useState([]);
  const [sortBy, setSortBy] = useState(["random", "asc", "desc"]);
  const [sort, setSort] = useState("");

  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    sliceStart,
    sliceEnd,
  } = usePagination();
  const filteredDogs = search(relevantDogsValues, searchWord);

  useEffect(() => {
    if (dogs) {
      setRelevantDogsValues(
        dogs.map((item) => {
          return {
            id: item.id,
            name: item.name,
            breed: item.breed,
            age: item.age,
            location: item.location,
          };
        })
      );
    }

    search(relevantDogsValues, searchWord);
  }, [dogs]);

  return (
    <Layout>
      <Wrapper>
        <PawsBcg>
          <Container>
            <div className="contentWrap">
              <div className="introWrap">
                <h2>Dogs</h2>
                <div className="interact">
                  <div className="field">
                    <SearchComponent setWord={setSearchWord} />
                  </div>

                  <div className="button">
                    <BasicButton
                      onClick={() => navigate("/dogs/new")}
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
                    <DogsTableHead
                      sortBy={sortBy}
                      setSort={setSort}
                      setSortBy={setSortBy}
                    />
                    <DogsTableBody
                      sort={sort}
                      sortBy={sortBy}
                      sliceStart={sliceStart}
                      sliceEnd={sliceEnd}
                      dogs={filteredDogs}
                    />
                  </Table>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={dogs.length}
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

export default DogsTableScreen;
