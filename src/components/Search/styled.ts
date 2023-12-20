import styled from "styled-components";
export const WrapperSearch = styled.div`
  padding-top: 32px;
  display: flex;
  align-items: center;
  gap: 24px;
`;
export const SearchIcon = styled.img`
  max-width: 32px;
`;
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
  &:focus {
    border-bottom: 1px solid #5a698f;
  }
`;
