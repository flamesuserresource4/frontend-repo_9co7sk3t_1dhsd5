import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Customizer from './components/Customizer';

function Footer() {
  return (
    <footer id="about" className="w-full bg-[#0A0A10] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-xl font-semibold">Nebula Shoes</h3>
            <p className="mt-2 max-w-md text-sm text-white/70">Bold, vibrant footwear with interactive 3D experiences and color-morphing gradients. Designed for the future.</p>
          </div>
          <div className="text-sm text-white/60">© {new Date().getFullYear()} Nebula Shoes. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0A0A10] font-inter">
      <Navbar />
      <Hero />
      <Showcase />
      <Customizer />
      <Footer />
    </div>
  );
}
