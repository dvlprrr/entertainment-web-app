import styled from "styled-components";
import { ReactComponent as Favourite } from "../../images/favouriteMovie.svg";
import movie from "../../images/movieTest.png";
import { ReactComponent as Movies } from "../../images/movies.svg";

export const TrendingPlay = styled.div`
  display: flex;
  gap: 20px;
  background-color: rgba(151, 151, 151, 0.4);
  border-radius: 25px;
  height: fit-content;
  width: 100px;
  padding: 9px;
  margin: 35px auto 15px;
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
  padding: 24px;
  box-sizing: border-box;

  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: background-color 0.3s ease;
  }

  &:hover {
    ${TrendingPlay} {
      opacity: 1;
      transition: opacity 1s;
    }
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.75) 100%
    );
  }
`;

export const FavouriteMovie = styled(Favourite)`
  cursor: pointer;
`;

export const TrendingBackgroundContainer = styled.div`
  align-self: flex-end;
  border-radius: 32px;
  background-color: #161d2f;
  opacity: 0.5;
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

export const TrendingPlayIcon = styled.img`
  width: 30px;
  height: 30px;
`;
export const TrendingPlayText = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
`;
export const TrendingInfoWrapper = styled.div`
  z-index: 2;
`;
export const TrendingInfoDetails = styled.div`
  color: #fff;
  /* z-index: 2; */
  opacity: 0.8;
  font-feature-settings: "clig" off, "liga" off;
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const TrendingInfoText = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 200;
  line-height: normal;
`;
export const TrendingInfoDot = styled.span`
  width: 4px;
  height: 4px;
  background-color: #fff;
  border-radius: 50%;
  opacity: 0.5;
`;
export const TrendingMovieIcon = styled(Movies)`
  width: 12px;
  height: 12px;
  path {
    fill: #fff;
    opacity: 0.8;
  }
`;
export const TrendingMovieTitle = styled.p`
  margin: 0;
  font-weight: 300;
  font-size: 24px;
`;
