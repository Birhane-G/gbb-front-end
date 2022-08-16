import Header from "../inc/Header";
import "../styles/Style.css";

function Home() {
  return (
    <div>
      <Header />
      <section className="Home">
          <div className="Home-cont">
              <div className="image"></div>
          </div>
      </section>
    </div>
  );
}
export default Home;
