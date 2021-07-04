import { useState, Fragment, useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import SearchField from "../SearchField";
import Spinner from "../Spinner";
import AsideContent from "./Aside";
import ContentSection from "./ContentSection";

const MainContents: React.FC = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const { fetchWeatherData, getLocationPosition } = useActions();

  const { loading, woeid, coords, error } = useTypedSelector(
    (state) => state.weather
  );

  useEffect(() => {
    if (coords) {
      getLocationPosition(coords);
      setOpenSearch(false);
    }
    fetchWeatherData(woeid);

    // eslint-disable-next-line
  }, [woeid, coords]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <main className="main">
          <aside className={error ? "aside aside__error" : "aside"}>
            {!openSearch ? (
              <AsideContent
                setOpenSearch={setOpenSearch}
                openSearch={openSearch}
              />
            ) : (
              <SearchField
                setOpenSearch={setOpenSearch}
                openSearch={openSearch}
              />
            )}
          </aside>
          <ContentSection />
        </main>
      )}
    </Fragment>
  );
};

export default MainContents;
