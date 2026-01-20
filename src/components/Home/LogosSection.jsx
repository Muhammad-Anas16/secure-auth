import {
  SiVercel,
  SiGithub,
  SiFirebase,
  SiNetlify,
} from "react-icons/si";

const LogosSection = () => {
  return (
    <section className="relative w-full py-16 px-4 bg-gradient-to-b from-[#0b0b14] to-[#050508]">
      {/* Title */}
      {/* <p className="text-center text-[10px] sm:text-xs tracking-[0.3em] uppercase text-slate-500 mb-8">
        Trusted by developer 
      </p> */}

      {/* Logos */}
      <div className="flex items-center justify-center gap-10 sm:gap-14 md:gap-20 text-slate-400 opacity-60">
        <SiFirebase className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer" title="Firebase" />
        <SiNetlify className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer" title="Netlify" />
        <SiVercel className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer" title="Vercel" />
        <SiGithub className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer" title="GitHub" />
      </div>
    </section>
  );
}

export default LogosSection;