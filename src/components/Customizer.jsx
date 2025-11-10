import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';

export default function Customizer() {
  const [hue, setHue] = useState(270);
  const [sat, setSat] = useState(90);
  const [light, setLight] = useState(55);
  const wrapRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      wrapRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  const gradient = `linear-gradient(135deg, hsl(${hue} ${sat}% ${light}%) 0%, hsl(${(hue + 60) % 360} ${sat}% ${Math.min(light + 10, 100)}%) 50%, hsl(${(hue + 120) % 360} ${sat}% ${light}%) 100%)`;

  return (
    <section id="customize" ref={wrapRef} className="relative w-full bg-[#0B0B12] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Play with colors</h2>
            <p className="mt-2 text-white/70">Realtime gradient and material tint preview.</p>
          </div>
          <SlidersHorizontal className="h-6 w-6 text-white/70" />
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <div className="relative overflow-hidden rounded-2xl p-0.5">
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-70" style={{ background: gradient }} />
              <motion.div
                initial={{ scale: 0.98 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                className="relative rounded-2xl bg-[#0F0F17] p-6 ring-1 ring-white/10"
              >
                <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-white/5 to-white/[0.03]" />
                <p className="mt-4 text-sm text-white/70">
                  Drag the sliders to morph the gradient. Apply this palette to product cards, backgrounds, and materials.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="space-y-6">
            <Control label="Hue" value={hue} setValue={setHue} min={0} max={360} />
            <Control label="Saturation" value={sat} setValue={setSat} min={0} max={100} />
            <Control label="Lightness" value={light} setValue={setLight} min={0} max={100} />
            <div className="rounded-xl bg-white/5 p-4 text-sm text-white/70 ring-1 ring-white/10">
              <div className="mb-1 font-medium text-white">CSS gradient</div>
              <code className="block break-all text-xs">{gradient}</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Control({ label, value, setValue, min, max }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-white/80">{label}</span>
        <span className="text-xs text-white/60">{Math.round(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(parseFloat(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-indigo-500"
      />
    </div>
  );
}
