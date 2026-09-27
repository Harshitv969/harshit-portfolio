import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { smoother } from "./Navbar";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              HARSHIT
              <br />
              <span>VERMA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>AI & Backend Engineer</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Python</div>
              <div className="landing-h2-2">AI/ML</div>
            </h2>

            
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mt-8 w-full sm:w-auto">
              <a href="#work" onClick={(e) => { e.preventDefault(); smoother?.scrollTo("#work", true, "top top"); }} className="landing-btn w-full sm:w-auto text-center" style={{ padding: '12px 24px', border: '1px solid white', borderRadius: '30px', color: 'white', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 'bold', position: 'relative', zIndex: 20 }} data-cursor="disable">View Projects</a>
              <a href="/Harshit_Resume.pdf" download="Harshit_Resume.pdf" target="_blank" className="landing-btn w-full sm:w-auto text-center" style={{ padding: '12px 24px', backgroundColor: 'white', color: 'black', borderRadius: '30px', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 'bold', position: 'relative', zIndex: 20 }} data-cursor="disable">Download Resume</a>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
