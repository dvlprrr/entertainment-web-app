import logo from "../../images/logo.svg"
import {
  AuthButton,
  AuthContainer,
  AuthForm,
  AuthInput,
  AuthLink,
  AuthLinkInfo,
  AuthLinkWrapper,
  AuthLogo,
  AuthTitle,
  AuthWrapper,
} from "./styled"

export function Registration() {
  return (
    <AuthContainer>
      <AuthLogo src={logo} />
      <AuthWrapper>
        <AuthTitle>Sign Up</AuthTitle>
        <AuthForm>
          <AuthInput placeholder="Email address" />
          <AuthInput placeholder="Password" />
          <AuthInput placeholder="Repeat password" />
          <AuthButton type="button">Create an account</AuthButton>
          <AuthLinkWrapper>
            <AuthLinkInfo>Already have an account?</AuthLinkInfo>
            <AuthLink to="/sign-in">Login</AuthLink>
          </AuthLinkWrapper>
        </AuthForm>
      </AuthWrapper>
    </AuthContainer>
  )
}
