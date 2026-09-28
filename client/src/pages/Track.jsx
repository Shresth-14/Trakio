import { Link } from "react-router-dom";
import ShinyText from "../Components/ShinyText/ShinyText";

export default function Track() {
  return (
    <div className="relative flex min-h-[calc(100vh-4.25rem)] items-center justify-center overflow-hidden bg-black text-white font-sans selection:bg-white/20 px-6">
      {/* Background Ambient Glows */}
      <div
        className="pointer-events-none absolute top-1/4 -left-[20%] h-[45vw] w-[45vw] rounded-full bg-purple-600/15 mix-blend-screen filter blur-[140px] opacity-25"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 -right-[20%] h-[45vw] w-[45vw] rounded-full bg-amber-500/10 mix-blend-screen filter blur-[150px] opacity-20"
        aria-hidden="true"
      />

      {/* Faint Background Watermark */}
      <div className="pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center overflow-hidden opacity-80">
        <h1 className="whitespace-nowrap text-center font-bold leading-[0.85] tracking-[-8px] text-white/5 text-[100px] sm:text-[160px] md:text-[220px] lg:text-[280px]">
          TRAKIO
        </h1>
      </div>

      {/* Centered Minimalist Content */}
      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
          <ShinyText
            text="Coming Soon"
            disabled={false}
            speed={3}
            className=""
            color="#ffffff"
          />
        </h1>

        <p className="mt-6 text-base text-gray-400 sm:text-lg">
          Real-time school bus tracking is currently in development.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <Link
            to="/"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
          >
            Back to Home
          </Link>
          <Link
            to="/profile"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-all hover:bg-gray-100 active:scale-95"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}