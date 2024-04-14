import { FiSearch } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

import css from "./SearchBar.module.css"

const SearchBar = ({ onSubmit}) => {
  return (
    <div>
      <form 
        onSubmit={onSubmit} 
        className={css.SearchForm}>
        <button type="reset" className={css.Button}><IoCloseOutline size="16px" /></button>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          className={css.SearchInput}
        />
        <button type="submit" aria-label="search" className={css.Button}><FiSearch size="16px" /></button>
      </form>
    </div>
  )
}

export default SearchBar