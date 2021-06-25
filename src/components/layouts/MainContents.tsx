import SearchField from "../SearchField";
import AsideContent from "./Aside";
import ContentSection from "./ContentSection";

const MainContents: React.FC = () => {
  return (
    <main className="main">
      <aside className="aside">
        <SearchField />
        {/* <AsideContent /> */}
      </aside>
      <ContentSection />
    </main>
  );
};

export default MainContents;
