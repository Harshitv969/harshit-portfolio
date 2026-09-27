import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section relative z-10 w-full py-20 md:py-32" id="contact">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h3 className="text-5xl md:text-7xl font-bold mb-16 tracking-tight text-white/90">
          <span className="text-purple-400">Contact</span> Me
        </h3>
        
        <div className="flex flex-col md:flex-row gap-16 justify-between w-full bg-white/[0.02] border border-white/5 p-8 md:p-14 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden group">
          
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="flex flex-col gap-10 flex-1 relative z-10">
            <div className="contact-box group/item">
              <h4 className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-400/80 mb-3 font-medium">Email</h4>
              <p>
                <a href="mailto:vharshit969@gmail.com" className="text-2xl md:text-3xl font-light text-white hover:text-purple-400 transition-colors duration-300" data-cursor="disable">
                  vharshit969@gmail.com
                </a>
              </p>
            </div>
            
            <div className="contact-box group/item">
              <h4 className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-400/80 mb-3 font-medium">Phone</h4>
              <p>
                <a href="tel:+918318052440" className="text-2xl md:text-3xl font-light text-white hover:text-purple-400 transition-colors duration-300" data-cursor="disable">
                  +91 8318052440
                </a>
              </p>
            </div>
            
            <div className="contact-box mt-auto pt-10 border-t border-white/5">
              <h2 className="text-gray-400/80 font-light text-lg md:text-xl leading-relaxed">
                Designed and Developed <br /> by <span className="text-white font-medium">Harshit Verma</span>
              </h2>
              <h5 className="mt-4 text-sm text-gray-500/80 flex items-center gap-1.5 font-medium tracking-wide">
                <MdCopyright className="text-lg" /> 2026
              </h5>
            </div>
          </div>

          <div className="flex flex-col flex-1 md:pl-16 md:border-l border-white/5 relative z-10">
            <h4 className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-400/80 mb-8 font-medium">Social</h4>
            <div className="flex flex-col gap-6">
              {[
                { name: "Github", url: "https://github.com/Harshitv969" },
                { name: "Linkedin", url: "https://www.linkedin.com/in/harshit-verma-9124b6242/" },
                { name: "Twitter", url: "https://x.com/harshit_969" },
                { name: "Instagram", url: "https://www.instagram.com/harshitcreates_/" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                  className="contact-social group/link flex items-center justify-between pb-4 border-b border-white/5 hover:border-purple-400/50 transition-all duration-300"
                >
                  <span className="text-xl md:text-2xl font-light text-gray-300 group-hover/link:text-white transition-colors duration-300 tracking-wide">{social.name}</span>
                  <MdArrowOutward className="text-2xl text-gray-500 group-hover/link:text-purple-400 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
