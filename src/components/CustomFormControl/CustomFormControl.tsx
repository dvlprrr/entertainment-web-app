import { FormControl } from "@mui/material"
import { ReactNode } from "react"
import { styleFormControl } from "./style"

export function CustomFormControl({ children }: { children: ReactNode }) {
  return (
    <FormControl sx={styleFormControl} fullWidth>
      {children}
    </FormControl>
  )
}
