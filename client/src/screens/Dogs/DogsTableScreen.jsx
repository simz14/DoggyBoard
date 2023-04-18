import styled from "styled-components";
import { Container } from "../../components/Container";
import Layout from "../../components/Layout";
import useDogs from "../../hooks/useDoga";
import { useEffect, useState } from "react";
import DogsTableHead from "./components/DogsTableHead";
import { InputAdornment, Table, TextField } from "@mui/material";
import DogsTableBody from "./components/DogsTableBody";
import TableWrapper from "../../components/TableWrapper";
import { HiSearch } from "react-icons/hi";
import { search } from "../../utils/search";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBcgBlue};
  .contentWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  }
`;

const DogsTableScreen = () => {
  const { dogs, loading } = useDogs();
  const [searchWord, setSearchWord] = useState("");
  const [relevantDogsValues, setRelevantDogsValues] = useState([]);

  const filteredDogs = search(relevantDogsValues, searchWord);

  useEffect(() => {
    search(dogs, searchWord);
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
  }, [dogs, loading]);

  return (
    <Layout>
      <Wrapper>
        <Container>
          <div className="contentWrap">
            <div className="introWrap">
              <h2>Dogs</h2>
              <div>
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
            </div>
            <TableWrapper>
              <Table sx={{ minWidth: 700 }}>
                <DogsTableHead />
                <DogsTableBody dogs={filteredDogs} />
              </Table>
            </TableWrapper>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default DogsTableScreen;
