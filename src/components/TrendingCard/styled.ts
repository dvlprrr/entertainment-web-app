import styled from "styled-components";
import movie from "../../images/movieTest.png";
const baseIconStyles = `
  cursor: pointer;

  &:hover {
    path {
      transition: fill 0.3s ease; 
      fill: #FC4747; 
    }
  }
`;
export const TrendingCardWrapper = styled.div`
  width: 470px;
  height: 230px;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${movie});
  display: flex;
  flex-direction: column;
`;
export const TrendingBackgroundContainer = styled.div`
  cursor: pointer;
  margin: 16px 24px 0 0;
  align-self: flex-end;
  border-radius: 32px;
  background-color: #161d2f;
  opacity: 0.500647;
  box-sizing: border-box;
  padding: 9px 10px;
  background-size: 32px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #ffffff;
  }
`;
