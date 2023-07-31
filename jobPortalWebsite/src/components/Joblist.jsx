  // components/JobListSection.js
import './Joblist.css';

const JobListSection = () => {
  return (
    <div className="job-list-section">
      <div className="horizontal-section">
        <div className="dropdown">
          <div className="dropdown-header">Internship</div>
          <div className="dropdown-content">
            <ul>
              <li>Web development</li>
              <li>Data analytics</li>
              <li>Graphic Designer</li>
              <li>UI/UX Designer</li>
              <li>Data Science</li>
            
            </ul>
          </div>
        </div>
      </div>
      <div className="horizontal-section">
        <div className="dropdown">
          <div className="dropdown-header">Remote Jobs</div>
          <div className="dropdown-content">
            <ul>
            <li>Web development</li>
              <li>Data analytics</li>
              <li>Graphic Designer</li>
              <li>UI/UX Designer</li>
              <li>Data Science</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="horizontal-section">
        <div className="dropdown">
          <div className="dropdown-header">Start-Up Comapnies</div>
          <div className="dropdown-content">
            <ul>
            <li>Web development</li>
              <li>Data analytics</li>
              <li>Graphic Designer</li>
              <li>UI/UX Designer</li>
              <li>Data Science</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="horizontal-section">
        <div className="dropdown">
          <div className="dropdown-header">Jobs by Location</div>
          <div className="dropdown-content">
            <ul>
              <li>India</li>
              <li>USA</li>
              <li>Canada</li>
              <li>Russia</li>
              <li>China</li>
            
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListSection;
