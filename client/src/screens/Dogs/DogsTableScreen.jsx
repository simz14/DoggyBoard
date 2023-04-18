import styled from "styled-components";
import { Container } from "../../components/Container";
import Layout from "../../components/Layout";
import useDogs from "../../hooks/useDoga";
import { useEffect } from "react";
import DogsTableHead from "./components/DogsTableHead";
import { InputAdornment, Table, TextField } from "@mui/material";
import DogsTableBody from "./components/DogsTableBody";
import TableWrapper from "../../components/TableWrapper";
import { HiSearch } from "react-icons/hi";

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

  useEffect(() => {
    console.log(dogs, loading);
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
                <DogsTableBody />
              </Table>
            </TableWrapper>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default DogsTableScreen;
