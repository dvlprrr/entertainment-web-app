import { Axios } from "axios"
import * as API from "../features/config"

export type Extra = {
  client: Axios
  api: typeof API
}
