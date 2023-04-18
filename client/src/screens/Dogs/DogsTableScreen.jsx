import styled from "styled-components";
import { Container } from "../../components/Container";
import Layout from "../../components/Layout";
import useDogs from "../../hooks/useDoga";
import { useEffect } from "react";
import DogsTableHead from "./components/DogsTableHead";
import { Table } from "@mui/material";
import DogsTableBody from "./components/DogsTableBody";
import TableWrapper from "../../components/TableWrapper";

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
