import styled from "styled-components"

export const MoviesWrapper = styled.section`
  width: 100%;
`

export const MoviesTitle = styled.h2`
  margin: 0 0 35px;
  font-size: 32px;
  font-weight: 300;

  @media (max-width: 768px) {
    margin-bottom: 25px;
  }

  @media (max-width: 426px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`
