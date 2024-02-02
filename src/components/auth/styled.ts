import { Link } from "react-router-dom"
import styled from "styled-components"

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  margin-top: 80px;
  margin-left: -118px;
  height: 90vh;
  @media (max-width: 768px) {
    margin-left: 0;
  }
  @media (max-width: 426px) {
    margin-top: 50px;
    gap: 50px;
  }
`
export const AuthWrapper = styled.div`
  background-color: #161d2f;
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
`
export const AuthLogo = styled.img`
  width: 32px;
`

export const AuthTitle = styled.h2`
  margin: 0;
  font-size: 32px;
  font-weight: 300;
`
export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const AuthInput = styled.input`
  outline: none;
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-weight: 200;
  font-size: 15px;
  padding-bottom: 17px;
  border-bottom: 1px solid #5a698f;
  caret-color: #fc4747;

  &:focus {
    border-bottom: 1px solid #ffffff;
    transition: border-bottom 0.6s;
  }
`
export const AuthButton = styled.button`
  align-self: center;
  font-weight: 200;
  font-size: 15px;
  width: 100%;
  padding: 15px;
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

export const AuthLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

export const AuthLinkInfo = styled.p`
  margin: 0;
`

export const AuthLink = styled(Link)`
  text-decoration: none;
  color: #fc4747;

  &:hover {
    color: #ffffff;
    transition: color 0.6s;
  }
`
