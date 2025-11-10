import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.from(headlineRef.current, { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' })
      .from(subRef.current, { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
      .from(ctaRef.current, { y: 10, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3');
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0a0f] text-white">
      {/* Grainy gradient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(110,0,255,0.35),transparent),radial-gradient(1200px_600px_at_80%_10%,rgba(0,153,255,0.35),transparent)]" />
        <div className="absolute inset-0 opacity-[0.25]" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'1200\' height=\'800\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.25\'/></svg>" )', backgroundSize: 'cover' }} />
      </div>

      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pt-28 md:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-blue-300" />
          Futuristic Footwear
        </span>
        <h1 ref={headlineRef} className="text-4xl font-black tracking-tight sm:text-6xl md:text-7xl">
          Step into the future
          <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent"> of shoes</span>
        </h1>
        <p ref={subRef} className="max-w-xl text-base text-white/80 sm:text-lg">
          Interactive 3D experience with vibrant gradients, motion, and color-morphing details. Built for creators who want bold, digital art energy.
        </p>
        <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
          <a href="#collection" className="rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-700/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-indigo-300">
            Explore Collection
          </a>
          <a href="#customize" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
            Customize Colors
          </a>
        </div>
      </div>
    </section>
  );
}
