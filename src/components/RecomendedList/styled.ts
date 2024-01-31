import styled from "styled-components";

export const RecomendedWrapper = styled.section`
  width: 100%;
`;

export const RecomendedTitle = styled.h2`
  margin: 0 0 32px;
  font-size: 32px;
  font-weight: 300;

  @media (max-width: 426px) {
    margin-bottom: 24px;
    font-size: 20px;
  }
`;

export const RecomendedListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 426px) {
    gap: 15px;
  }
`;
