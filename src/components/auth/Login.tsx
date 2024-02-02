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

export function Login() {
  return (
    <AuthContainer>
      <AuthLogo src={logo} />
      <AuthWrapper>
        <AuthTitle>Login</AuthTitle>
        <AuthForm>
          <AuthInput placeholder="Email address" />
          <AuthInput placeholder="Password" />
          <AuthButton type="button">Create an account</AuthButton>
          <AuthLinkWrapper>
            <AuthLinkInfo>Don’t have an account?</AuthLinkInfo>
            <AuthLink to="/sign-up">Sign Up</AuthLink>
          </AuthLinkWrapper>
        </AuthForm>
      </AuthWrapper>
    </AuthContainer>
  )
}
