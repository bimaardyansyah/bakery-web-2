import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function StarRating({ rating = 5 }) {
    return (
        <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${i < rating ? 'text-[#C9A66B]' : 'text-[#D8A7B1]/40'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials({ testimonials }) {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 85%',
                },
            }
        );

        gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);

    return (
        <section
            id="testimonials"
            ref={sectionRef}
            className="py-24 lg:py-32 px-6"
            style={{ background: 'linear-gradient(180deg, #F5E6D3 0%, #EDD5BC 100%)' }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div ref={headingRef} className="text-center mb-16">
                    <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#C9A66B] font-medium mb-3">
                        Love Notes
                    </span>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A3527] mb-5"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        What Our Guests Say
                    </h2>
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-px w-12 bg-[#D8A7B1]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C9A66B]" />
                        <div className="h-px w-12 bg-[#D8A7B1]" />
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="relative flex flex-col gap-5 p-8 rounded-3xl transition-all duration-400 hover:shadow-[0_20px_50px_rgba(107,79,58,0.12)] hover:-translate-y-1"
                            style={{
                                background: 'rgba(254,250,245,0.85)',
                                backdropFilter: 'blur(8px)',
                                border: '1px solid rgba(216,167,177,0.3)',
                                boxShadow: '0 4px 24px rgba(107,79,58,0.07)',
                            }}
                        >
                            {/* Quote Mark */}
                            <div
                                className="text-5xl leading-none font-bold text-[#D8A7B1]/60 select-none"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                                aria-hidden="true"
                            >
                                "
                            </div>

                            {/* Stars */}
                            <StarRating rating={testimonial.rating} />

                            {/* Text */}
                            <p className="text-[#6B4F3A] text-base leading-relaxed flex-1 italic">
                                {testimonial.text}
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-4 border-t border-[#D8A7B1]/30">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center text-[#FEFAF5] text-base font-bold flex-shrink-0"
                                    style={{ background: 'linear-gradient(135deg, #D8A7B1, #C9A66B)' }}
                                >
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <div
                                        className="font-semibold text-[#4A3527] text-sm"
                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                    >
                                        {testimonial.name}
                                    </div>
                                    <div className="text-[#8A7A72] text-xs">
                                        {testimonial.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
