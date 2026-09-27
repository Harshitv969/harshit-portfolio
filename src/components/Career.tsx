import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {/* Experience */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Analyst – IT Operations & Automation</h4>
                <h5>Cognizant Technology Solutions</h5>
              </div>
              <h3>2026–Now</h3>
            </div>
            <p>
              • ServiceNow automation workflows, saving 5+ hours/week<br/>
              • PowerShell automation for IT operations<br/>
              • AI-assisted support workflows with Microsoft Copilot
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Software Engineer</h4>
                <h5>MediGlobal, UK (Remote)</h5>
              </div>
              <h3>2025–2026</h3>
            </div>
            <p>
              • Built the live staffing CRM end to end: database, backend, APIs, frontend<br/>
              • 25+ REST API endpoints, role-based access, Azure integration<br/>
              • Cut page load time by 40%; built KPI dashboard and company website
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Web Development Intern</h4>
                <h5>Main Flow Services and Technologies</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              • Web applications with Python, JavaScript and SQL<br/>
              • Features, bug fixes and Git collaboration
            </p>
          </div>
          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MCA</h4>
                <h5>Amity University Online</h5>
              </div>
              <h3>2025–Present</h3>
            </div>
            <p>Master of Computer Applications</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BCA</h4>
                <h5>Amity University</h5>
              </div>
              <h3>2022–2025</h3>
            </div>
            <p>Bachelor of Computer Applications</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>12th Standard</h4>
                <h5>Ryan International School, Noida</h5>
              </div>
              <h3>Score: 90%</h3>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>10th Standard</h4>
                <h5>Secondary School</h5>
              </div>
              <h3>Score: 85%</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
