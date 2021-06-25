import { MdSearch } from "react-icons/md";

const SearchField: React.FC = () => {
  return (
    <form className="search">
      <div className="search__input__wrapper">
        <input
          type="text"
          className="search__input"
          placeholder="search location"
        />
        <MdSearch size={25} className="search__icon" />
      </div>
      <button className="search__button">Search</button>
    </form>
  );
};

export default SearchField;
