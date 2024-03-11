import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import logo from "../../images/logo.svg"
import { useAppDispatch } from "../../redux-hooks"
import { registerUser } from "../users/users-slice"
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

type RegisterUser = {
  email: string
  password: string
  confirmPassword: string
}

export function Registration() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<RegisterUser>({
    mode: "onSubmit",
  })
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<RegisterUser> = (data) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...userData } = data
    dispatch(registerUser(userData))
      .unwrap()
      .then(() => {
        navigate("/sign-in")
      })
  }
  return (
    <AuthContainer>
      <AuthLogo src={logo} />
      <AuthWrapper>
        <AuthTitle>Sign Up</AuthTitle>
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
              type="password"
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
            />
            {errors.password && (
              <AuthErrorMessage>{errors.password.message}</AuthErrorMessage>
            )}
          </div>
          <div>
            <AuthInput
              type="password"
              isError={Boolean(errors.confirmPassword)}
              {...register("confirmPassword", {
                required: true,
                validate: {
                  validate: (value) => value === getValues("password"),
                },
              })}
              placeholder="Repeat password"
            />
            {errors.confirmPassword &&
              errors.confirmPassword.type === "validate" && (
                <AuthErrorMessage>Passwords do not match</AuthErrorMessage>
              )}
          </div>

          <AuthButton type="submit">Create an account</AuthButton>
          <AuthLinkWrapper>
            <AuthLinkInfo>Already have an account?</AuthLinkInfo>
            <AuthLink to="/sign-in">Login</AuthLink>
          </AuthLinkWrapper>
        </AuthForm>
      </AuthWrapper>
    </AuthContainer>
  )
}
