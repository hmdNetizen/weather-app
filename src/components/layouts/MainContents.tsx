import AsideContent from "./Aside";
import ContentSection from "./ContentSection";

const MainContents: React.FC = () => {
  return (
    <main className="main">
      <AsideContent />
      <ContentSection />
    </main>
  );
};

export default MainContents;
