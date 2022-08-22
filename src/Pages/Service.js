import webDevelopment from '../images/Service/web-development.svg';
import sysDevelopment from '../images/Service/web-development.svg';
import androidDevelopment from '../images/Service/Android Development.svg';
import logo from '../images/Service/Logo.svg';
function Service() {
  return (
    <section className="service">
      <div className="title">
        <h2>Service</h2>
      </div>
      <div className="service-cont">
        <div className="box-cont">
          <div className="box">
            <img src={webDevelopment} alt={"web development"}/>
            <p>Web Development</p>
          </div>
          <div className="box">
          <img src={androidDevelopment} alt={"web development"}/>
            <p>Android Development</p>
          </div>
          <div className="box">
          <img src={webDevelopment} alt={"web development"}/>
            <p>System Development</p>
            </div>
          <div className="box">
          <img src={logo} alt={"web development"}/>
            <p>Logo Design</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
