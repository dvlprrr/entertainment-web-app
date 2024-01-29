import styled from "styled-components";
import { ReactComponent as Favourite } from "../../images/favouriteMovie.svg";
import movie from "../../images/movieTest.png";
import { ReactComponent as Movies } from "../../images/movies.svg";
export const RecomendedWrapper = styled.div`
  width: 100%;
`;
export const RecomendedTitle = styled.h2`
  margin: 0 0 32px;
  font-size: 32px;
  font-weight: 300;
`;
export const RecomendedList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
`;

export const RecomendedPlay = styled.div`
  display: flex;
  gap: 20px;
  background-color: rgba(151, 151, 151, 0.4);
  border-radius: 25px;
  height: fit-content;
  width: 100px;
  padding: 9px;
  margin: 20px auto 15px;
  align-self: center;
  justify-self: center;
  align-items: center;
  transition: opacity 0.3s ease;
  opacity: 0;
  z-index: 2;
`;
export const RecomendedCardMovieWrapper = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  width: 100%;
  height: 210px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${movie});
  display: flex;
  flex-direction: column;
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
  }

  &:hover {
    ${RecomendedPlay} {
      opacity: 1;
      transition: opacity 1s;
    }
  }
`;
export const FavouriteMovie = styled(Favourite)`
  cursor: pointer;
`;
export const FavouriteMovieWrapper = styled.div`
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

export const RecomendedPlayIcon = styled.img`
  width: 30px;
  height: 30px;
`;
export const RecomendedPlayText = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
`;
export const RecomendedCardInfoDetails = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 8px;
  align-items: center;
  font-size: 13px;
`;
export const RecomendedCardInfoText = styled.p`
  margin: 0;
  opacity: 0.8;
`;
export const RecomendedCardInfoDot = styled.span`
  width: 4px;
  height: 4px;
  background-color: #fff;
  border-radius: 50%;
  opacity: 0.5;
`;
export const RecomendedCardMovieIcon = styled(Movies)`
  width: 12px;
  height: 12px;
  path {
    fill: #fff;
    opacity: 0.8;
  }
`;
export const RecomendedCardMovieTitle = styled.p`
  margin: 5px 0 0 0;
  font-weight: 300;
  font-size: 18px;
`;
