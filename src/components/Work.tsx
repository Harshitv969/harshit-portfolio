import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Work = () => {
  return (
    <div className="work-section w-full py-20" id="work">
      <div className="w-full">
        <h2 className="text-5xl md:text-7xl font-bold mb-12">
          My <span className="text-purple-400">Work</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {([
            { title: "MediGlobal Staffing CRM", category: "Live Client Product", tools: "PHP, MySQL, React, Tailwind CSS, Azure · 25+ REST APIs · used daily by 10+ staff", image: "/images/work/mediglobal-hero.jpg", links: [{ label: "CRM ↗", url: "https://crm.mediglobal.info/" }, { label: "Company Site ↗", url: "https://mediglobal.info/" }] },
            { title: "Distributed Payment Wallet", category: "FinTech Backend", tools: "Java, Spring Boot, PostgreSQL, Kafka, Redis · Saga pattern · zero balance mismatches across 1,000+ concurrent transfers", image: "/images/work/payment-wallet.svg" },
            { title: "Enterprise RAG Platform", category: "AI / LLM", tools: "Python, FastAPI, pgvector, OpenAI API · 500+ documents · 90%+ answer accuracy", image: "/images/work/rag-platform.svg" },
            { title: "Scalable Booking System", category: "Distributed Systems", tools: "Python, FastAPI, Redis Redlock, PostgreSQL, Docker · 1,000+ concurrent requests, zero double-bookings", image: "/images/work/booking-system.svg" },
            { title: "AI Incident Resolution Agent", category: "AI Agents", tools: "Python, OpenAI API, RAG, Tool Calling · 90%+ resolution accuracy · 2–3s latency", image: "/images/work/incident-agent.svg" },
            { title: "Employee & Payroll Management", category: "Backend / Microservices", tools: "Java, Spring Boot Microservices, Spring Security, MySQL · JWT & RBAC across 4 user roles", image: "/images/work/employee-payroll.svg" },
            { title: "Customer Churn & Retention Intelligence", category: "Data Analytics / ML", tools: "Python, SQL, ML, Power BI, SHAP · CLV & retention recommendations via BI dashboard", image: "/images/work/customer-churn.svg" },
            { title: "Sales & Revenue Forecasting Platform", category: "Data Analytics / ML", tools: "SQL, Python, Time Series, Power BI · Monthly/quarterly revenue forecasting & product insights", image: "/images/work/sales-forecasting.svg" },
            { title: "Transaction Fraud Detection", category: "Machine Learning", tools: "Python, SQL, ML, class-imbalance handling · 90%+ recall on fraudulent transactions", image: "/images/work/fraud-detection.svg" }
          ] as { title: string; category: string; tools: string; image?: string; links?: { label: string; url: string }[] }[]).map((project, index) => (
            <div className="work-box relative group flex flex-col justify-between border border-white/10 bg-black/20 hover:bg-black/40 backdrop-blur-sm transition-all duration-500 p-8 rounded-2xl h-full overflow-hidden" key={index}>
              <div className="work-info mb-8 z-10 relative">
                <div className="work-title flex flex-col items-start mb-6 relative">
                  <h3 className="work-index-number text-8xl md:text-9xl font-extrabold text-transparent absolute -top-10 -left-6 z-0 pointer-events-none">
                    0{index + 1}
                  </h3>
                  <div className="text-left relative z-10 w-full pt-4 md:pt-6">
                    <h4 className="text-xl md:text-2xl font-semibold text-white tracking-wide">{project.title}</h4>
                    <p className="text-purple-400 text-sm mt-2 font-medium tracking-wider uppercase">{project.category}</p>
                  </div>
                </div>
                <div className="relative z-10 mt-6 pt-6 border-t border-white/5">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Tools & Features</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.tools}</p>
                </div>
              </div>
              {project.image && (
                <div className="mt-auto w-full relative z-10 rounded-xl overflow-hidden shadow-2xl group-hover:shadow-purple-500/10 transition-shadow duration-500">
                  <WorkImage image={project.image} alt={project.title} link={project.links?.[0]?.url} />
                </div>
              )}
              {project.links && project.links.length > 0 && (
                <div className="mt-auto relative z-10 flex flex-wrap gap-x-6 gap-y-2 pt-4">
                  {project.links.map((l, i) => (
                    <a key={i} href={l.url} target="_blank" rel="noreferrer" className="inline-block text-purple-400 font-semibold text-sm tracking-wider uppercase hover:text-white transition-colors" data-cursor="disable">
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
