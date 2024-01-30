import styled from "styled-components";

export const WrapperTrending = styled.div`
  margin-top: 20px;
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 35px;
  }
  @media (max-width: 426px) {
    margin-top: 25px;
  }
`;

export const TrendingTitle = styled.h2`
  margin: 0 0 25px;
  font-size: 32px;
  font-weight: 300;
  @media (max-width: 426px) {
    margin-bottom: 16px;
    font-size: 20px;
  }
`;
