export default function Footer() {
    const currentYear = new Date().getFullYear();

    const links = {
        Bake: ['Breads', 'Pastries', 'Cakes', 'Seasonal'],
        Visit: ['Our Story', 'Locations', 'Wholesale', 'Careers'],
        Connect: ['Instagram', 'Facebook', 'Newsletter', 'Contact'],
    };

    return (
        <footer
            id="footer"
            style={{ background: 'linear-gradient(180deg, #4A3527 0%, #2E1F14 100%)' }}
        >
            {/* Top wave divider */}
            <div className="overflow-hidden leading-none" style={{ color: '#EDD5BC' }}>
                <svg viewBox="0 0 1440 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 md:h-14">
                    <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-8 pb-16">
                {/* Main footer grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="mb-5">
                            <div
                                className="text-3xl font-bold text-[#F5E6D3] mb-1"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                La Fournée
                            </div>
                            <div className="text-xs uppercase tracking-[0.25em] text-[#C9A66B]">
                                Artisan Bakery
                            </div>
                        </div>
                        <p className="text-[#D8A7B1]/70 text-sm leading-relaxed max-w-xs mb-6">
                            Baking with love and tradition since 1987. Every morning we fill 
                            our kitchen with the warmth of fresh bread and the joy of the craft.
                        </p>
                        {/* Social icons */}
                        <div className="flex items-center gap-4">
                            {['instagram', 'facebook', 'twitter'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    aria-label={`Follow us on ${social}`}
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-[#D8A7B1] hover:text-[#F5E6D3] transition-all duration-300 hover:scale-110"
                                    style={{ background: 'rgba(216,167,177,0.1)', border: '1px solid rgba(216,167,177,0.2)' }}
                                >
                                    <span className="text-xs font-bold uppercase">{social.charAt(0)}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(links).map(([title, items]) => (
                        <div key={title}>
                            <h3
                                className="text-[#F5E6D3] font-semibold text-sm uppercase tracking-[0.15em] mb-5"
                            >
                                {title}
                            </h3>
                            <ul className="flex flex-col gap-3">
                                {items.map((item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="text-[#D8A7B1]/60 text-sm hover:text-[#C9A66B] transition-colors duration-200"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter */}
                <div
                    className="p-8 rounded-3xl mb-12 flex flex-col md:flex-row items-center gap-6"
                    style={{ background: 'rgba(201,166,107,0.1)', border: '1px solid rgba(201,166,107,0.2)' }}
                >
                    <div className="flex-1">
                        <h3
                            className="text-[#F5E6D3] text-xl font-semibold mb-1"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Fresh from the oven
                        </h3>
                        <p className="text-[#D8A7B1]/60 text-sm">
                            Get weekly specials and baker's secrets delivered to your inbox.
                        </p>
                    </div>
                    <div className="flex w-full md:w-auto gap-3 flex-col sm:flex-row">
                        <input
                            id="newsletter-email"
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 md:w-64 px-5 py-3 rounded-full text-sm bg-white/10 border border-[#D8A7B1]/30 text-[#F5E6D3] placeholder:text-[#D8A7B1]/40 focus:outline-none focus:border-[#C9A66B] transition-colors"
                        />
                        <button
                            id="newsletter-subscribe-btn"
                            className="px-7 py-3 rounded-full text-sm font-semibold text-[#4A3527] transition-all duration-300 hover:shadow-lg hover:scale-105 whitespace-nowrap"
                            style={{ background: 'linear-gradient(135deg, #C9A66B, #F5E6D3)' }}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t"
                    style={{ borderColor: 'rgba(216,167,177,0.2)' }}
                >
                    <p className="text-[#D8A7B1]/40 text-xs">
                        © {currentYear} La Fournée Artisan Bakery. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-[#D8A7B1]/40 text-xs hover:text-[#C9A66B] transition-colors duration-200"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
