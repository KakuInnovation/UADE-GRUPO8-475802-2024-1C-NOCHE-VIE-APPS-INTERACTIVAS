import Header from "../components/Header.jsx";
import HomeComp from "../components/Home.jsx";
import Body from "./producto.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <div>
        <Header />
      </div>

      <div>
        <Body />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
