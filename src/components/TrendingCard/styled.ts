import styled from "styled-components";
import { ReactComponent as Favourite } from "../../images/favouriteMovie.svg";
import movie from "../../images/movieTest.png";

export const TrendingPlay = styled.div`
  display: flex;
  background-color: rgba(151, 151, 151, 0.4);
  border-radius: 25px;
  height: fit-content;
  width: 120px;
  padding: 9px;
  margin: 43px auto 20px;
  align-items: center;
  transition: opacity 0.3s ease;
  opacity: 0;
  z-index: 2;
`;
export const TrendingCardWrapper = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  width: 470px;
  height: 230px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${movie});
  display: flex;
  flex-direction: column;
  &:hover::before {
    content: "";
    position: absolute;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    transition: background-color 0.3s ease;
  }
  &:hover {
    ${TrendingPlay} {
      opacity: 1;
    }
  }
`;

export const FavouriteMovie = styled(Favourite)`
  cursor: pointer;
`;

export const TrendingBackgroundContainer = styled.div`
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
    transition: 0.3s ease;
    background-color: #ffffff;
    ${FavouriteMovie} {
      path {
        transition: 0.3s ease;
        stroke: #161d2f;
      }
    }
  }
`;

export const TrendingPlayIcon = styled.img``;
export const TrendingPlayText = styled.p``;
