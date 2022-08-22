import Header from "../inc/Header";
import "../styles/Style.css";
import Service from "./Service";
import AboutUs from "./AboutUs";
import Center from "./Center";
import Footer from "../inc/Footer";
function Home() {
  return (
    <>
    <section className="Home">
      <Header />
          <div className="Home-cont">
              <div className="content">
                <h2>Welcome</h2>
                <p>we are a here to sutsify your business need Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor malesuada sagittis. Vivamus tortor sapien, convallis hendrerit orci a, iaculis sollicitudin libero. Fusce nec risus eget urna efficitur suscipit molestie a velit.</p>
                <a href="/" className="btn-more">Explore More</a>
              </div>
              <div className="image-cont">
                <div className="image"></div>
              </div>
          </div>
          <Service />
          <Center />
          <AboutUs />
          <Footer />
      </section>
    </>
  );
}
export default Home;
