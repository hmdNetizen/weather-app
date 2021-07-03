import { useState } from "react";
import { MdSearch, MdClose, MdLocationOn } from "react-icons/md";
import { useActions } from "../components/hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { locationDataset } from "../store/reducers/weatherReducer";

interface Props {
  openSearch: boolean;
  setOpenSearch: (search: boolean) => void;
}

const SearchField: React.FC<Props> = ({ setOpenSearch }) => {
  const { getLocationFromMap, getLocationsCoords } = useActions();
  const { autocomplete } = useTypedSelector((state) => state.weather);

  const [inputText, setInputText] = useState("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputText(event.target.value);
    getLocationFromMap(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!inputText) {
      return;
    }
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
            value={inputText}
            onChange={handleInputChange}
          />
          <MdSearch size={25} className="search__icon" />
        </div>
        <button className="search__button">Search</button>
      </form>
      {autocomplete.length > 0 && (
        <ul
          className="search__list"
          style={{ display: inputText ? "block" : "none" }}
        >
          {autocomplete.map((location: locationDataset, index: number) => (
            <li
              className="search__list__item"
              key={index}
              onClick={() => getLocationsCoords(location)}
            >
              <MdLocationOn className="search__list__item__icon" />{" "}
              <span className="search__list__item__text">
                {location.display_name}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchField;
