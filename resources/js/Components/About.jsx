import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About({ aboutImage }) {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
                toggleActions: 'play none none none',
            },
        });

        tl.fromTo(
            imageRef.current,
            { opacity: 0, x: -60 },
            { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
        ).fromTo(
            contentRef.current.children,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' },
            '-=0.6'
        );
    }, []);

    const stats = [
        { value: '38+', label: 'Years Baking' },
        { value: '120+', label: 'Recipes' },
        { value: '2,400', label: 'Happy Customers' },
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-24 lg:py-32 px-6 overflow-hidden"
            style={{ background: '#FEFAF5' }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <div ref={imageRef} className="relative">
                        <div
                            className="absolute -inset-3 rounded-[2.5rem] blur-xl opacity-30"
                            style={{ background: 'linear-gradient(135deg, #D8A7B1, #C9A66B)' }}
                        />
                        <div className="relative rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(107,79,58,0.2)]" style={{ aspectRatio: '4/5' }}>
                            <img
                                src={aboutImage}
                                alt="Our baker crafting pastries by hand"
                                className="w-full h-full object-cover"
                            />
                            {/* Floating quote card */}
                            <div
                                className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl"
                                style={{
                                    background: 'rgba(254,250,245,0.92)',
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid rgba(201,166,107,0.3)',
                                    boxShadow: '0 8px 32px rgba(107,79,58,0.15)',
                                }}
                            >
                                <p
                                    className="text-[#4A3527] text-sm leading-relaxed italic"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    "We don't cut corners. Every dough is mixed by hand, every oven watched with care."
                                </p>
                                <p className="text-[#C9A66B] text-xs mt-2 font-semibold tracking-wide">— Marie, Head Baker</p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div ref={contentRef} className="flex flex-col gap-6">
                        <span className="text-xs uppercase tracking-[0.25em] text-[#C9A66B] font-medium">
                            Our Story
                        </span>
                        <h2
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A3527] leading-tight"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Kneaded by hand,
                            <br />
                            <em className="text-[#C9A66B] not-italic">baked with heart</em>
                        </h2>
                        <p className="text-[#8A7A72] text-base leading-relaxed">
                            La Fournée was born in 1987 from a small stone kitchen in Provence.
                            Our founder Marie-Claire believed that bread should be more than sustenance —
                            it should carry warmth, memory, and the smell of morning.
                        </p>
                        <p className="text-[#8A7A72] text-base leading-relaxed">
                            Three decades later, we still wake before dawn, still use the same 
                            sourdough starter from 1987, and still believe the best ingredients
                            come from within 100 miles of our kitchen.
                        </p>

                        {/* Stats */}
                        <div
                            className="grid grid-cols-3 gap-6 py-6 mt-2 border-y"
                            style={{ borderColor: 'rgba(216,167,177,0.4)' }}
                        >
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div
                                        className="text-3xl font-bold text-[#6B4F3A] mb-1"
                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-[#8A7A72] uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            id="about-cta-btn"
                            href="#"
                            className="inline-flex items-center gap-2 text-[#6B4F3A] font-semibold text-sm hover:text-[#C9A66B] transition-colors duration-300 group mt-2"
                        >
                            Read our full story
                            <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
