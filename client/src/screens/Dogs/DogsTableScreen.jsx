import styled from "styled-components";
import { Container } from "../../components/Container";
import Layout from "../../components/Layout";
import useDogs from "../../hooks/useDogs";
import { useEffect, useState } from "react";
import DogsTableHead from "./components/DogsTableHead";
import {
  CircularProgress,
  InputAdornment,
  Table,
  TextField,
} from "@mui/material";
import DogsTableBody from "./components/DogsTableBody";
import TableWrapper from "../../components/TableWrapper";
import { HiSearch } from "react-icons/hi";
import { search } from "../../utils/search";
import BasicButton from "../../components/BasicButton";
import PawsBcg from "../../components/PawsBcg";

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
    .MuiInputBase-root {
      border-radius: 30px;
      background-color: white;
      input {
        padding: 5.5px 14px;
      }
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
  const { dogs, loading } = useDogs();
  const [searchWord, setSearchWord] = useState("");
  const [relevantDogsValues, setRelevantDogsValues] = useState([]);

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
                    <TextField
                      onChange={(e) => setSearchWord(e.target.value)}
                      placeholder="Search"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <HiSearch />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>

                  <div className="button">
                    <BasicButton title="Add" />
                  </div>
                </div>
              </div>
              {loading ? (
                <CircularProgress />
              ) : (
                <TableWrapper>
                  <Table sx={{ minWidth: 700 }}>
                    <DogsTableHead />

                    <DogsTableBody dogs={filteredDogs} />
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

export default DogsTableScreen;
