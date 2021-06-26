import { useState } from "react";
import SearchField from "../SearchField";
import AsideContent from "./Aside";
import ContentSection from "./ContentSection";

const MainContents: React.FC = () => {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <main className="main">
      <aside className={`aside`}>
        {!openSearch ? (
          <AsideContent setOpenSearch={setOpenSearch} openSearch={openSearch} />
        ) : (
          <SearchField setOpenSearch={setOpenSearch} openSearch={openSearch} />
        )}
      </aside>
      <ContentSection />
    </main>
  );
};

export default MainContents;
