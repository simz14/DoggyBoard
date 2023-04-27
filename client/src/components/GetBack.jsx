import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const Wrapper = styled.span`
  display: grid;
  align-items: center;
  transition: 0.5s ease;
  cursor: pointer;
  span {
    display: flex;
    align-items: center;
  }
  .getTo {
    justify-self: end;
    color: ${({ theme }) => theme.colors.darkPurple};
  }
  :hover {
    span {
      transition: 0.5s ease;
      transform: translateY(-10px);
    }
  }
`;

const GetBack = ({ naviageTo, backPage, backArrow, toArrow }) => {
  const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate(naviageTo)}>
      <span className={backArrow ? "backTo" : "getTo"}>
        {backArrow && <BsArrowLeft />}
        {backPage}
        {toArrow && <BsArrowRight />}
      </span>
    </Wrapper>
  );
};

GetBack.propTypes = {
  naviageTo: PropTypes.string,
  backPage: PropTypes.string,
};

export default GetBack;
