import search from "../../images/search.svg"
import { SearchIcon, Searchinput, WrapperSearch } from "./styled"

export function Search() {
  return (
    <WrapperSearch>
      <SearchIcon src={search} />
      <Searchinput placeholder="Search for movies or TV series" />
    </WrapperSearch>
  )
}
