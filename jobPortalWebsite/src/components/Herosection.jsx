  // pages/Homepage.js
import './Herosection.css';
import HeroImg from '../assets/1 1.png'
import Compcount from './Comp_Count';
import LogoSlider from './logoSlide';
import AboutSection from './About';
import JobListSection from './Joblist';

const Herosection = () => {
   

  return (
    <div className="homepage">
      <div className="content-container">
        <div className="text-section">
          <h1>Welcome to UFoundIT Website</h1>
          <p>
            UFoundIT is a leading platform that connects job seekers with companies offering exciting job opportunities.
            Whether you&apos;re looking for your dream job or seeking top talent for your organization, we&apos;ve got you covered.
            Join us today and take your career or business to new heights.
          </p>
          <button className="explore-button">Explore Jobs</button>
        </div>
        <div className="image-section">
          <img src={HeroImg} alt="Banner" />
        </div>
          </div>
          <Compcount />
          <LogoSlider />
          <AboutSection />
          <button className = 'button'> <span className = "material-symbols-outlined">search</span>Search For Job Now</button>
          <JobListSection/>
    </div>
  );
};

export default Herosection;
