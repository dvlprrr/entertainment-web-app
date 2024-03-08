/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/require-default-props */
import { ReactNode, useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { checkAuth } from "../features/users-slice"
import { useAppDispatch } from "../redux-hooks"

interface ProtectedRouteProps {
  children?: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const dispatch = useAppDispatch()

  const jwt = localStorage.getItem("jwt")

  useEffect(() => {
    if (jwt) dispatch(checkAuth(jwt))
  }, [dispatch, jwt])

  if (!jwt) {
    return <Navigate to="/sign-in" replace />
  }

  return children ? children : <Outlet />
}
