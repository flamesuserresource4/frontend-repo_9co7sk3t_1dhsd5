import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Rocket, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  useEffect(() => {
    gsap.from('.nav-fade', { y: -10, opacity: 0, duration: 0.6, ease: 'power3.out', stagger: 0.05 });
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <a className="nav-fade pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/90 backdrop-blur ring-1 ring-white/20" href="#">
          <Rocket className="h-4 w-4 text-indigo-300" />
          Nebula Shoes
        </a>
        <nav className="nav-fade pointer-events-auto hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#collection" className="hover:text-white">Collection</a>
          <a href="#customize" className="hover:text-white">Customize</a>
          <a href="#about" className="hover:text-white">About</a>
        </nav>
        <button className="nav-fade pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur hover:bg-white/10">
          <ShoppingBag className="h-4 w-4" />
          Cart
        </button>
      </div>
    </header>
  );
}
