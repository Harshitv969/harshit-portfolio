import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

type SmootherType = {
  paused: (value: boolean) => void;
  scrollTo: (
    target: string,
    smooth?: boolean,
    position?: string
  ) => void;
};

export let smoother: SmootherType | null = null;

const Navbar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    smoother = {
      paused: () => {},
      scrollTo: (target: string) => {
        const sectionEl = document.querySelector(target);
        if (sectionEl) {
          sectionEl.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      },
    };

    const links = document.querySelectorAll(".header ul a");

    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;

      element.addEventListener("click", (e) => {
        e.preventDefault();

        const target = e.currentTarget as HTMLAnchorElement;
        const section = target.getAttribute("data-href");

        if (section) {
          smoother?.scrollTo(section, true, "top top");
        }
      });
    });
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Harshit Verma
        </a>
        <a
          href="mailto:vharshit969@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          vharshit969@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar; 