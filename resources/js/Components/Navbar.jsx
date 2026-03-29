import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Home', href: '#hero' },
        { label: 'Our Breads', href: '#products' },
        { label: 'Our Story', href: '#about' },
        { label: 'Reviews', href: '#testimonials' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-[#FEFAF5]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(107,79,58,0.12)]'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a
                        href="#hero"
                        className="flex-shrink-0 group flex items-center gap-3"
                        aria-label="La Fournée - Home"
                    >
                        {/* Artisan Bread Icon (SVG) */}
                        <div className="relative">
                            <svg 
                                className="w-10 h-10 text-[#C9A66B] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1.5"
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <path d="M11 20L4 12V4H12L20 11L14 17L11 20Z" />
                                <path d="M7 8H10" />
                                <path d="M10 12H13" />
                                <path d="M14 16H17" />
                                <circle cx="12" cy="12" r="1.5" fill="currentColor" fillOpacity="0.2" />
                            </svg>
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#D8A7B1] rounded-full border-2 border-[#FEFAF5] transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        </div>

                        <div className="flex flex-col leading-none">
                            <span
                                className="text-2xl font-bold tracking-tight text-[#6B4F3A] group-hover:text-[#C9A66B] transition-colors duration-300"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                La Fournée
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A66B] mt-0.5 font-medium">
                                Artisan Bakery
                            </span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className={`hidden md:flex items-center gap-8 transition-all duration-700 ${
                        scrolled 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}>
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-[#6B4F3A] hover:text-[#C9A66B] transition-colors duration-300 tracking-wide relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A66B] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                        <a
                            href="#products"
                            id="nav-order-btn"
                            className="ml-2 px-6 py-2.5 rounded-full text-sm font-semibold text-[#FEFAF5] transition-all duration-300 hover:shadow-lg hover:scale-105"
                            style={{
                                background: 'linear-gradient(135deg, #C9A66B 0%, #6B4F3A 100%)',
                            }}
                        >
                            Order Now
                        </a>
                    </div>

                    {/* Hamburger */}
                    <button
                        id="hamburger-btn"
                        className={`md:hidden flex flex-col gap-1.5 p-2 z-50 transition-all duration-500 ${
                            scrolled || isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        <span
                            className={`block w-6 h-0.5 bg-[#6B4F3A] transition-all duration-300 ${
                                isOpen ? 'rotate-45 translate-y-2' : ''
                            }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-[#6B4F3A] transition-all duration-300 ${
                                isOpen ? 'opacity-0' : ''
                            }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-[#6B4F3A] transition-all duration-300 ${
                                isOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className={`md:hidden transition-all duration-400 overflow-hidden ${
                    isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                }`}
                style={{
                    background: 'linear-gradient(180deg, #FEFAF5 0%, #F5E6D3 100%)',
                }}
            >
                <div className="px-6 py-6 flex flex-col gap-5 border-t border-[#D8A7B1]/30">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-base font-medium text-[#6B4F3A] hover:text-[#C9A66B] transition-colors duration-200 tracking-wide"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#products"
                        onClick={() => setIsOpen(false)}
                        className="mt-2 px-6 py-3 rounded-full text-sm font-semibold text-[#FEFAF5] text-center"
                        style={{
                            background: 'linear-gradient(135deg, #C9A66B 0%, #6B4F3A 100%)',
                        }}
                    >
                        Order Now
                    </a>
                </div>
            </div>
        </nav>
    );
}
