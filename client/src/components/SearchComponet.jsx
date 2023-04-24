import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import { HiSearch } from "react-icons/hi";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const Wrapper = styled.div`
  .MuiInputBase-root {
    border-radius: 30px;
    background-color: white;
    input {
      padding: 5.5px 14px;
    }
  }
`;

const SearchComponent = ({ setWord }) => {
  return (
    <Wrapper>
      <TextField
        onChange={(e) => setWord(e.target.value)}
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
    </Wrapper>
  );
};

SearchComponent.propTypes = {
  setWord: PropTypes.func,
};

export default SearchComponent;
