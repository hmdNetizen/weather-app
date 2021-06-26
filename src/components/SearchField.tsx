import { MdSearch, MdClose } from "react-icons/md";

interface Props {
  openSearch: boolean;
  setOpenSearch: (search: boolean) => void;
}

const SearchField: React.FC<Props> = ({ openSearch, setOpenSearch }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    console.log(event);
  };
  return (
    <div className="search">
      <MdClose
        size={30}
        className="search__closeIcon"
        onClick={() => setOpenSearch(false)}
      />
      <form className="search__form" onSubmit={handleSubmit}>
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
    </div>
  );
};

export default SearchField;
