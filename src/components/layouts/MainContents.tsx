import { useState, Fragment } from "react";
import SearchField from "../SearchField";
import Spinner from "../Spinner";
import AsideContent from "./Aside";
import ContentSection from "./ContentSection";

const MainContents: React.FC = () => {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <Fragment>
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
        <Spinner />
      </main>
    </Fragment>
  );
};

export default MainContents;
