import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: 'Nebula Runner',
    colors: ['#7C3AED', '#22D3EE', '#F472B6'],
    price: '$189',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Aurora Glide',
    colors: ['#4F46E5', '#06B6D4', '#A78BFA'],
    price: '$209',
    image: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Quantum Sprint',
    colors: ['#9333EA', '#0EA5E9', '#EC4899'],
    price: '$229',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Showcase() {
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        scale: 0.98,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        delay: i * 0.1,
      });
    });
  }, []);

  return (
    <section id="collection" className="relative w-full bg-[#0B0B12] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Featured Collection</h2>
            <p className="mt-2 text-white/70">Crafted silhouettes with bold gradients and future-ready comfort.</p>
          </div>
          <button className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur hover:bg-white/10">View all</button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article ref={addToRefs} key={p.id} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 transition">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-black/20">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <div className="mt-2 flex items-center gap-2">
                    {p.colors.map((c) => (
                      <span key={c} className="h-3 w-3 rounded-full" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                </div>
                <span className="text-white/80">{p.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
