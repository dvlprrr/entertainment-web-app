/* eslint-disable no-nested-ternary */
import { Link } from "react-router-dom"
import styled from "styled-components"

export const SettingsNavigationListWrapper = styled.ul`
  margin: 0;
  padding: 10px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const SettingsNavigationItem = styled.li`
  cursor: pointer;
  transition: opacity 0.6s;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    opacity: 0.7;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: currentColor;
`

export const SettingsNavigationWrapper = styled.nav`
  background-color: #161d2f;
  width: 10%;
  min-width: 150px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  box-sizing: border-box;
`

export const SettingsLogo = styled.img`
  width: 32px;
  cursor: pointer;
`
export const DashboardWrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const DashboardInfo = styled.div`
  background-color: #161d2f;
  padding: 30px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
`
export const DashboardInfoMovie = styled.div`
  background-color: #161d2f;
  padding: 30px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
`

export const DashboardInfoGenres = styled.div`
  background-color: #161d2f;
  padding: 30px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
`

export const DashboardGenre = styled.p<{ place: number }>`
  margin: 5px;
  font-size: 24px;
  text-align: start;
  color: ${({ place }) =>
    place === 1
      ? "#FFD700"
      : place === 2
        ? "#c0c0c0"
        : place === 3
          ? "#D2B48C"
          : "#ffffff"};
`

export const DashboardInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`

export const DashboardInfoContentMovie = styled.div`
  width: 310px;
`

export const DashboardInfoGenreContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`

export const DashboardInfoTitle = styled.p`
  margin: 0;
  font-size: 16px;
  opacity: 0.6;
`

export const DashboardInfoAmount = styled.p`
  margin: 0;
  font-size: 24px;
`

export const DashboardInfoWrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "users genres film film"
    "online genres film film";
`

export const AddMovieWrapper = styled.div`
  margin-left: 30px;
  height: 90vh;
  display: flex;
`

export const AddMovieForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  width: 100%;
`

export const AddMovieLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 70%;
`

export const AddMovieInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  outline: none;
  background-color: #161d2f;
  border: none;
  border-radius: 8px;
  color: currentColor;
  padding: 10px;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const AddMovieInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  width: 70%;
`

export const ErrorMessage = styled.p`
  font-size: 14px;
  margin: 0;
  margin-top: 5px;
  color: #ff0000;
`

export const SubmitButton = styled.button`
  font-weight: 200;
  font-size: 20px;
  width: 20%;
  padding: 10px;
  background-color: #fc4747;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: #000000;
    transition:
      background-color 0.6s,
      color 0.6s;
  }
`

export const ChartsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

export const LineChartWrapper = styled.div`
  width: 55%;
`

export const PieChartWrapper = styled.div`
  width: 25%;
`

export const ChartTitle = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  font-weight: 200;
  text-align: center;
`

export const AddMovieTrendingWrapper = styled.div``

export const EditProfileWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  height: 90vh;
`

export const EditProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  align-self: center;
  width: 60%;
`

export const EditProfilelabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`

export const EditProfileInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  outline: none;
  background-color: #161d2f;
  border: none;
  border-radius: 8px;
  color: currentColor;
  padding: 10px;
`

export const EditProfileButton = styled.button``
