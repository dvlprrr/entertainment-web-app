import styled from "styled-components"

export const WrapperSearch = styled.div`
  padding-top: 32px;
  display: flex;
  gap: 24px;

  @media (max-width: 426px) {
    padding-top: 24px;
    gap: 16px;
  }
`

export const SearchIcon = styled.img`
  width: 32px;
  align-self: flex-start;

  @media (max-width: 426px) {
    width: 24px;
  }
`

export const Searchinput = styled.input`
  font-size: 24px;
  outline: none;
  background-color: transparent;
  color: #ffffff;
  border: none;
  font-weight: 300;
  padding-bottom: 15px;
  width: 100%;
  caret-color: #fc4747;
  box-sizing: border-box;
  transition: box-shadow 0.3s ease;

  &:focus {
    box-shadow: 0 1px 0 0 #5a698f;
  }

  @media (max-width: 768px) {
    padding-bottom: 0;

    &:focus {
      box-shadow: none;
    }
  }

  @media (max-width: 426px) {
    font-size: 16px;
  }
`
