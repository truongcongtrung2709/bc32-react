import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <Content />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
