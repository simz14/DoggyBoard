import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const Wrapper = styled.span`
  display: flex;
  align-items: center;
  transition: 0.5s ease;
  cursor: pointer;
  span {
    display: flex;
    align-items: center;
  }
  :hover {
    span {
      transition: 0.5s ease;
      transform: translateY(-10px);
    }
  }
`;

const GetBack = ({ naviageTo, backPage }) => {
  const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate(naviageTo)} className="backTo">
      <span>
        <BsArrowLeft />
        {backPage}
      </span>
    </Wrapper>
  );
};

GetBack.propTypes = {
  naviageTo: PropTypes.string,
  backPage: PropTypes.string,
};

export default GetBack;
