import BlogCards from "../components/BlogCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./styles/Home.css";

function Home() {
  return (
    <>
      <div className="home__Navbar">
        <Navbar />
      </div>
      <div className="home__main">
        <div className="home__Title">
          <p className="home__Title-h1">Welcome, dear developer</p>
          <p className="home__Title-h1">
            In this section, click on an article if you want to modify or delete
            it
          </p>
          <p className="home__Title-h1">
            You can also add new articles at the bottom of the page
          </p>
          <p className="home__Title-h1">"Have fun!"</p>
        </div>
        <div className="home__Blogcard">
          <BlogCards />
        </div>
      </div>
      <div className="home_footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
