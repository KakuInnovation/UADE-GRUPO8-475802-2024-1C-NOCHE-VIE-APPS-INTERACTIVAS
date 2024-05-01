import Header from "../components/Header.jsx";
import HomeComp from "../components/Home.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <div>
        <Header />
      </div>

      <div>
        <HomeComp />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
