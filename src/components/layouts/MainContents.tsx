import { useState, Fragment, useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import SearchField from "../SearchField";
import Spinner from "../Spinner";
import AsideContent from "./Aside";
import ContentSection from "./ContentSection";

const MainContents: React.FC = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [woeid, setWoeid] = useState(1398823);
  const { fetchWeatherData } = useActions();

  const { loading } = useTypedSelector((state) => state.weather);

  useEffect(() => {
    fetchWeatherData(woeid);

    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <main className="main">
          <aside className="aside">
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
