import { Link } from "react-router-dom"
import styled from "styled-components"

export const styleFormControll = {
  width: "50%",
  minWidth: "100px",

  "& .MuiFormLabel-root": {
    color: "#ffffff",
  },
  "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
    color: "#ffffff",
  },
  "& .MuiSvgIcon-root": {
    color: "#ffffff",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #ffffff",
    outline: "none",
  },
  "& .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root:hover .MuiOutlinedInput-notchedOutline":
    {
      border: "1px solid #ffffff",
    },
  "& .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline":
    {
      border: "2px solid #ffffff",
    },
  "& .MuiSelect-select": {
    color: "#ffffff",
  },
  "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
    {
      border: "1px solid #ffffff",
    },
  "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
    {
      border: "2px solid #ffffff",
    },
}

export const styleDemoContainer = {
  width: "fit-content",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #ffffff",
  },
}

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
`

export const DashboardWrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const DashboardInfo = styled.div`
  background-color: #161d2f;
  width: fit-content;
  padding: 30px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const DashboardInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const AddMovieWrapper = styled.div`
  margin-left: 30px;
  height: 90vh;
  display: flex;
`

export const AddMovieForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`

export const ErrorMessage = styled.p`
  font-size: 14px;
  margin: 0;
  margin-top: 5px;
  color: #ff0000;
`
