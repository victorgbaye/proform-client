import { SearchBarWrapper } from "../../assets/wrappers/SearchBar.styles"
import search from '../../assets/images/search.svg'
const SearchBar = () => {
  return (
    <SearchBarWrapper>
        <img src={search}/>
        <input placeholder="Search by keyword" type="text"/>
    </SearchBarWrapper>
  )
}

export default SearchBar