import styled from "styled-components"

import { ReactComponent as Movies } from "../../images/movies.svg"

export const RecomendedCardInfoDetails = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 8px;
  align-items: center;
  font-size: 13px;

  @media (max-width: 426px) {
    font-size: 11px;
    gap: 6px;
  }
`

export const RecomendedCardInfoText = styled.p`
  margin: 0;
  opacity: 0.8;
`

export const RecomendedCardInfoDot = styled.span`
  width: 4px;
  height: 4px;
  background-color: #fff;
  border-radius: 50%;
  opacity: 0.5;

  @media (max-width: 426px) {
    width: 3px;
    height: 3px;
  }
`

export const RecomendedCardMovieIcon = styled(Movies)`
  width: 12px;
  height: 12px;

  path {
    fill: #fff;
    opacity: 0.8;
  }

  @media (max-width: 426px) {
    width: 10px;
    height: 10px;
  }
`

export const RecomendedCardMovieTitle = styled.p`
  margin: 5px 0 0 0;
  font-weight: 300;
  font-size: 18px;

  @media (max-width: 426px) {
    font-size: 14px;
  }
`

export const RecomendedPlay = styled.div`
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
  align-self: center;
  justify-self: center;
  align-items: center;
  transition: opacity 0.3s ease;
  opacity: 0;
  z-index: 2;

  @media (max-width: 1200px) {
    margin-top: 0;
  }
`

export const RecomendedPlayIcon = styled.img`
  width: 30px;
  height: 30px;
`

export const RecomendedPlayText = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
`

export const RecomendedCardMovieWrapper = styled.div<{ url: string }>`
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  width: 100%;
  max-width: 308px;
  height: 210px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${({ url }) => url});
  display: flex;
  flex-direction: column;
  padding: 8px;
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
    border-radius: 8px;
  }

  &:hover {
    ${RecomendedPlay} {
      opacity: 1;
      transition: opacity 1s;
    }
  }

  @media (max-width: 1200px) {
    height: 140px;
  }

  @media (max-width: 768px) {
    &:hover::before {
      background-color: transparent;
    }

    &:hover {
      ${RecomendedPlay} {
        opacity: 0;
      }
    }
  }

  @media (max-width: 475px) {
    height: 110px;
  }
`
