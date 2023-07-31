// components/AboutSection.js
import "./About.css";
import aboutimg1 from "../assets/heroImage.png";
import aboutimg2 from "../assets/chat.png";

const AboutSection = () => {
  return (
    <>
      <div className="about-section">
        <div className="col col1">
          <div className="col-left">
            <img src={aboutimg1} alt="" />
          </div>
          <div className="col-right">
            <h1>Why Choose Us?</h1>
            <p>
              <li>
                <span className="material-symbols-outlined">grade</span> Unique
                jobs at startups and tech <br /> companies you can&apos;t find
                anywhere else
              </li>
              <li>
                <span className="material-symbols-outlined">left_click</span> Say
                goodbye to cover letters - your <br /> profile is all you need.
                One click to apply and you&apos;re done.
              </li>
              <li>
                {" "}
                <span className="material-symbols-outlined">
                  dashboard_customize
                </span>
                Everything you need to know to job search - <br /> including
                seeing salary and stock options upfront when looking
              </li>
              <li>
                {" "}
                <span className="material-symbols-outlined">
                  compare_arrows
                </span>
                Connect directly with founders at top startups - <br /> no third
                party recruiters allowed
              </li>
            </p>
          </div>
              </div>
              <div className = "col col1">
              <div className = "col-right">
              <h1>Why recruiters love us?</h1>
            <p>
              <li>
              <span className = "material-symbols-outlined">
groups_2
</span> Unique
                jobs at startups and tech <br /> companies you can&apos;t find
                anywhere else
              </li>
              <li>
                <span className="material-symbols-outlined">tune</span>Say
                goodbye to cover letters - your <br /> profile is all you need.
                One click to apply and you&apos;re done.
              </li>
              <li>
                {" "}
                <span className="material-symbols-outlined">
                analytics
                </span>
                Everything you need to know to job search - <br /> including
                seeing salary and stock options upfront when looking
              </li>
              <li>
                {" "}
                <span className="material-symbols-outlined">
                  sensor_occupied
                </span>
                Connect directly with founders at top startups - <br /> no third
                party recruiters allowed
              </li>
            </p>
          
          </div>
          <div className="col-left">
          <img src={aboutimg2} alt="" />
          </div>
              </div>
      </div>
    </>
  );
};

export default AboutSection;
