import {
  SiStripe,
  SiSupabase,
  SiVercel,
  SiGithub,
} from "react-icons/si";

const LogosSection = () => {
  return (
    <section className="relative w-full py-16 px-4 bg-gradient-to-b from-[#0b0b14] to-[#050508]">
      {/* Title */}
      <p className="text-center text-[10px] sm:text-xs tracking-[0.3em] uppercase text-slate-500 mb-8">
        Trusted by 2,000+ Modern Teams
      </p>

      {/* Logos */}
      <div className="flex items-center justify-center gap-10 sm:gap-14 md:gap-20 text-slate-400 opacity-60">
        <SiStripe className="w-6 h-6 sm:w-7 sm:h-7" />
        <SiSupabase className="w-6 h-6 sm:w-7 sm:h-7" />
        <SiVercel className="w-6 h-6 sm:w-7 sm:h-7" />
        <SiGithub className="w-6 h-6 sm:w-7 sm:h-7" />
      </div>
    </section>
  );
}

export default LogosSection;