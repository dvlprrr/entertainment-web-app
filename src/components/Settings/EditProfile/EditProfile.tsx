import { SubmitHandler, useForm } from "react-hook-form"
import { UpdatedUser, updateUser } from "../hooks/service"
import {
  EditProfileForm,
  EditProfileInput,
  EditProfileWrapper,
  EditProfilelabel,
  ErrorMessage,
  SubmitButton,
} from "../styled"

export function EditProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdatedUser>({
    mode: "onSubmit",
  })

  const onSubmit: SubmitHandler<UpdatedUser> = (data) => {
    updateUser(data)
  }

  return (
    <EditProfileWrapper>
      <EditProfileForm onSubmit={handleSubmit(onSubmit)}>
        <EditProfilelabel>
          Email
          <EditProfileInput
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
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </EditProfilelabel>
        <EditProfilelabel>
          Avatar
          <EditProfileInput
            {...register("avatar", {
              required: {
                value: true,
                message: "This field cannot be empty",
              },
              pattern: {
                value: /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/gi,
                message: "This is incorrect link",
              },
            })}
          />
          {errors.avatar && (
            <ErrorMessage>{errors.avatar.message}</ErrorMessage>
          )}
        </EditProfilelabel>
        <SubmitButton type="submit">Submit</SubmitButton>
      </EditProfileForm>
    </EditProfileWrapper>
  )
}
