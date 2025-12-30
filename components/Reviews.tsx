
import React from 'react';
import Reveal from './Reveal';

const reviews = [
  {
    name: "Jesca",
    role: "Dancer, Biology Major",
    text: "Coming from dance and a biology background, NAPMI helped me connect movement with science in a way that finally made sense. The intensive training gave me confidence, structure, and a clear direction to move into teaching and working with more diverse bodies.",
    image: "https://i.postimg.cc/WzzCD62w/608290420_1437421631378909_4686068109627684827_n.jpg"
  },
  {
    name: "Samantha",
    role: "Physiotherapy Background (Non-Licensed)",
    text: "Even without a PT license, NAPMI gave me a real path forward. The training sharpened my understanding of movement, programming, and cueing, and helped me grow into a more confident and credible Pilates instructor.",
    image: "https://i.postimg.cc/j22mWQsX/598311674_1404406844550879_2907063848411741035_n.jpg"
  },
  {
    name: "Blanca",
    role: "Licensed Physical Therapist",
    text: "NAPMI added so much depth to my work as a physio. The intensive training improved how I assess, cue, and design programs, and helped me integrate Pilates more seamlessly into my rehab practice.",
    image: "https://i.postimg.cc/yxxtJXVh/605193658_856365407197646_755724456891787022_n.jpg"
  }
];

const Reviews: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.5em] text-stone-400 mb-12">Global Perspectives</h2>
          <p className="text-3xl md:text-5xl font-serif text-stone-900 mb-20 tracking-tight">Our Students' Success</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {reviews.map((review, idx) => (
            <Reveal key={review.name} delay={idx * 200}>
              <div className="flex flex-col items-center group">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border border-stone-100 shadow-sm transition-all duration-700">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-stone-600 font-serif italic text-lg leading-relaxed mb-8">"{review.text}"</p>
                <h4 className="font-bold text-stone-900 text-xs uppercase tracking-widest mb-1">{review.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">{review.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
