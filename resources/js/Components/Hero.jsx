import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero({ heroImage }) {
    const heroRef = useRef(null);
    const headingRef = useRef(null);
    const subRef = useRef(null);
    const ctaRef = useRef(null);
    const overlayRef = useRef(null);
    const scrollIndicatorRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(
            overlayRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.2 }
        )
        .fromTo(
            headingRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.1 },
            '-=0.5'
        )
        .fromTo(
            subRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.9 },
            '-=0.7'
        )
        .fromTo(
            ctaRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8 },
            '-=0.6'
        )
        .fromTo(
            scrollIndicatorRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.6 },
            '-=0.3'
        );

        // Floating scroll indicator
        gsap.to(scrollIndicatorRef.current, {
            y: 10,
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: 'sine.inOut',
        });
    }, []);

    return (
        <section
            id="hero"
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="Warm artisan bakery interior"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div
                    ref={overlayRef}
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(135deg, rgba(74,53,39,0.75) 0%, rgba(107,79,58,0.55) 50%, rgba(201,166,107,0.3) 100%)',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                {/* Badge */}
                <div
                    ref={subRef}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 border border-[#C9A66B]/50 text-[#F5E6D3] text-xs uppercase tracking-[0.2em] font-medium"
                    style={{ background: 'rgba(201,166,107,0.15)', backdropFilter: 'blur(8px)' }}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A66B] inline-block" />
                    Handcrafted with Love since 1987
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A66B] inline-block" />
                </div>

                {/* Main Heading */}
                <h1
                    ref={headingRef}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5E6D3] mb-6 leading-none"
                    style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}
                >
                    Baked with
                    <br />
                    <em className="text-[#C9A66B] not-italic">Soul &amp; Flour</em>
                </h1>

                {/* Subheading */}
                <p
                    className="text-lg md:text-xl text-[#F5E6D3]/85 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
                >
                    Every loaf, every pastry, every cake — crafted by hand each morning
                    using time-honored recipes and the finest seasonal ingredients.
                </p>

                {/* CTAs */}
                <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        id="hero-order-btn"
                        href="#products"
                        className="group relative px-9 py-4 rounded-full text-base font-semibold text-[#4A3527] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(201,166,107,0.5)] hover:scale-105"
                        style={{ background: 'linear-gradient(135deg, #F5E6D3 0%, #C9A66B 100%)' }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Shop Our Breads
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </a>
                    <a
                        id="hero-story-btn"
                        href="#about"
                        className="px-9 py-4 rounded-full text-base font-medium text-[#F5E6D3] border border-[#F5E6D3]/40 hover:border-[#F5E6D3]/80 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                        Our Story
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                ref={scrollIndicatorRef}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[#F5E6D3]/50 text-xs uppercase tracking-[0.15em]">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-[#C9A66B]/60 to-transparent" />
            </div>
        </section>
    );
}
