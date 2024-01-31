import styled from "styled-components";
import { ReactComponent as Favourite } from "../../images/favouriteMovie.svg";
import { ReactComponent as Movies } from "../../images/movies.svg";

export const TrendingPlay = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 20px;
  background-color: rgba(151, 151, 151, 0.4);
  border-radius: 25px;
  height: fit-content;
  width: 100px;
  padding: 9px;
  align-items: center;
  transition: opacity 0.3s ease;
  opacity: 0;
  z-index: 2;
`;

export const TrendingCardWrapper = styled.div<{ url: string }>`
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  width: 470px;
  height: 230px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ url }) => url});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
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
    border-radius: 0 0 8px 8px;
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
    border-radius: 0 0 8px 8px;
  }

  @media (max-width: 768px) {
    &:hover::before {
      background-color: transparent;
    }

    &:hover {
      ${TrendingPlay} {
        opacity: 0;
      }
    }
  }

  @media (max-width: 426px) {
    width: 250px;
    height: 140px;
    padding: 8px;
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
  border-radius: 8px;
  padding: 8px;
`;

export const TrendingInfoDetails = styled.div`
  color: #fff;
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

  @media (max-width: 426px) {
    font-size: 12px;
  }
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

  @media (max-width: 426px) {
    font-size: 15px;
  }
`;
