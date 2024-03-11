import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import logo from "../../images/logo.svg"
<<<<<<< Updated upstream
import { useAppDispatch } from "../../redux-toolkit"
import { loginUser } from "../users-slice"
=======
import { useAppDispatch } from "../../redux-hooks"
import { loginUser } from "../users/users-slice"
>>>>>>> Stashed changes
import {
  AuthButton,
  AuthContainer,
  AuthErrorMessage,
  AuthForm,
  AuthInput,
  AuthLink,
  AuthLinkInfo,
  AuthLinkWrapper,
  AuthLogo,
  AuthTitle,
  AuthWrapper,
} from "./styled"

type LoginUser = {
  email: string
  password: string
}

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUser>({
    mode: "onSubmit",
  })
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<LoginUser> = (data) => {
    dispatch(loginUser(data))
      .unwrap()
      .then(() => {
        navigate("/")
      })
  }
  return (
    <AuthContainer>
      <AuthLogo src={logo} />
      <AuthWrapper>
        <AuthTitle>Login</AuthTitle>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <AuthInput
              isError={Boolean(errors.email)}
              {...register("email", {
                required: {
                  value: true,
                  message: "This field cannot be empty",
                },
                maxLength: {
                  value: 40,
                  message: "Max length 40 symbols",
                },
                minLength: {
                  value: 6,
                  message: "Min length 6 symbols",
                },
                pattern: {
                  value:
                    // eslint-disable-next-line no-useless-escape
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                  message: "Please enter correct email",
                },
              })}
              placeholder="Email address"
            />
            {errors.email && (
              <AuthErrorMessage>{errors.email.message}</AuthErrorMessage>
            )}
          </div>
          <div>
            <AuthInput
              isError={Boolean(errors.password)}
              {...register("password", {
                required: {
                  value: true,
                  message: "This field cannot be empty",
                },
                minLength: {
                  value: 8,
                  message: "Min length 8 symbols",
                },
              })}
              placeholder="Password"
              type="password"
            />
            {errors.password && (
              <AuthErrorMessage>{errors.password.message}</AuthErrorMessage>
            )}
          </div>
          <AuthButton type="submit">Login to your account</AuthButton>
          <AuthLinkWrapper>
            <AuthLinkInfo>Don’t have an account?</AuthLinkInfo>
            <AuthLink to="/sign-up">Sign Up</AuthLink>
          </AuthLinkWrapper>
        </AuthForm>
      </AuthWrapper>
    </AuthContainer>
  )
}
