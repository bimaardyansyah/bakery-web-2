import { Head } from '@inertiajs/react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import Products from '@/Components/Products';
import About from '@/Components/About';
import Testimonials from '@/Components/Testimonials';
import Footer from '@/Components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home({ products, testimonials }) {
    useEffect(() => {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <>
            <Head title="Home" />
            <div className="min-h-screen">
                <Navbar />
                <Hero heroImage="/images/hero.jpg" />
                <Products products={products} />
                <About aboutImage="/images/about.jpg" />
                <Testimonials testimonials={testimonials} />
                <Footer />
            </div>
        </>
    );
}
