import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setIsDesktopView(window.innerWidth > 1024);
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main relative bg-[#0a0a0a] min-h-screen">
      <div className="z-30 relative">
        <Cursor />
        <Navbar />
        <SocialIcons />
      </div>

      {isDesktopView && children}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="relative">
            {isDesktopView && (
              <div className="fixed inset-0 z-0 pointer-events-none opacity-20 blur-md mix-blend-screen transition-opacity duration-1000">
                <Suspense fallback={<div>Loading....</div>}>
                  <TechStack />
                </Suspense>
              </div>
            )}

            <main className="relative z-10 w-full overflow-x-hidden">
              <Landing>{!isDesktopView && children}</Landing>
              <About />
              <WhatIDo />
              <Career />
              <Work />
              <Contact />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;