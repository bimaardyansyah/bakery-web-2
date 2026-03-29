import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ProductCard({ product, index }) {
    const cardRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            cardRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 88%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, [index]);

    return (
        <article
            ref={cardRef}
            className="group relative bg-[#FEFAF5] rounded-3xl overflow-hidden transition-all duration-400 hover:shadow-[0_20px_60px_rgba(107,79,58,0.15)] hover:-translate-y-2"
            style={{
                border: '1px solid rgba(216,167,177,0.3)',
                boxShadow: '0 4px 20px rgba(107,79,58,0.06)',
            }}
        >
            {/* Image */}
            <div className="relative overflow-hidden h-56 bg-[#F5E6D3]">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge */}
                {product.badge && (
                    <div
                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-[#4A3527]"
                        style={{ background: 'linear-gradient(135deg, #C9A66B, #F5E6D3)' }}
                    >
                        {product.badge}
                    </div>
                )}
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A3527]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                {/* Quick Add */}
                <div className="absolute inset-0 flex items-end justify-center pb-5 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-4 group-hover:translate-y-0">
                    <button
                        className="px-6 py-2 rounded-full text-sm font-semibold text-[#4A3527] bg-[#F5E6D3] hover:bg-[#C9A66B] hover:text-[#FEFAF5] transition-all duration-200"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-[0.15em] text-[#C9A66B] font-medium">
                        {product.category}
                    </span>
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className={`w-3 h-3 ${i < product.rating ? 'text-[#C9A66B]' : 'text-[#D8A7B1]/40'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                </div>
                <h3
                    className="text-lg font-semibold text-[#4A3527] mb-2 group-hover:text-[#6B4F3A] transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    {product.name}
                </h3>
                <p className="text-sm text-[#8A7A72] leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                </p>
                <div className="flex items-center justify-between">
                    <span
                        className="text-xl font-bold text-[#6B4F3A]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        ${product.price}
                    </span>
                    <button
                        id={`add-${product.id}`}
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md"
                        style={{ background: 'linear-gradient(135deg, #C9A66B, #6B4F3A)' }}
                        aria-label={`Add ${product.name} to cart`}
                    >
                        <svg className="w-4 h-4 text-[#FEFAF5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </div>
            </div>
        </article>
    );
}

export default function Products({ products }) {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);

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
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);

    return (
        <section
            id="products"
            ref={sectionRef}
            className="py-24 lg:py-32 px-6"
            style={{ background: 'linear-gradient(180deg, #FEFAF5 0%, #F5E6D3 100%)' }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div ref={headingRef} className="text-center mb-16">
                    <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#C9A66B] font-medium mb-3">
                        Fresh Daily
                    </span>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A3527] mb-5"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Today's Selection
                    </h2>
                    <p className="text-[#8A7A72] text-lg max-w-xl mx-auto leading-relaxed">
                        Baked fresh every morning before dawn. Order by 10am for same-day pickup.
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-3">
                        <div className="h-px w-12 bg-[#D8A7B1]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C9A66B]" />
                        <div className="h-px w-12 bg-[#D8A7B1]" />
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-14">
                    <a
                        href="#"
                        id="view-all-btn"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-[#6B4F3A] border-2 border-[#C9A66B] hover:bg-[#C9A66B] hover:text-[#FEFAF5] transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                        View Full Menu
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
