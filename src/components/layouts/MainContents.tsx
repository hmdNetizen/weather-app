import AsideContent from "./Aside";

const MainContents: React.FC = () => {
  return (
    <main className="main">
      <AsideContent />
      <section className="section">Section</section>
    </main>
  );
};

export default MainContents;
