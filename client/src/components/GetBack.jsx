import { BsArrowLeft } from "react-icons/bs";
import styled from "styled-components";

const Wrapper = styled.span`
  display: flex;
  align-items: center;
  transition: 0.5s ease;
  cursor: pointer;
  :hover {
    transition: 0.5s ease;
    transform: translateY(-10px);
  }
`;

const GetBack = ({ naviageTo, backPage }) => {
  return (
    <Wrapper onClick={() => navigate(naviageTo)} className="backTo">
      <BsArrowLeft />
      {backPage}
    </Wrapper>
  );
};

export default GetBack;
