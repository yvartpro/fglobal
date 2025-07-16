import { useState } from "react";

export const Header = () => {
    const navLinks = [
        { name: "Home", href: "/", desc: "Welcome to Ferdinand Global" },
        { name: "About", href: "/about", desc: "Our story & vision" },
        { name: "Products", href: "/products", desc: "Wellness & packages" },
        { name: "Testimonials", href: "/testimonials", desc: "Success stories" },
        { name: "Contact", href: "/contact", desc: "Get in touch" },
    ];

        const [open, setOpen] = useState(false);
        const [hovered, setHovered] = useState(null);

        return (
            <header className="bg-primary-light dark:secondary-light shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
                    <a href="/" className="flex items-center gap-2">
                        <span className="text-xl font-bold text-white dark:text-primary-light tracking-tight">
                            Ferdinand Global
                        </span>
                    </a>
                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-6 items-center">
                        {navLinks.map((link, idx) => (
                            <div
                                key={link.name}
                                className="relative flex flex-col items-center"
                                onMouseEnter={() => setHovered(idx)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <a
                                    href={link.href}
                                    className="text-white dark:text-orange-300 font-medium px-2 py-1 rounded hover:bg-orange-100 dark:hover:bg-gray-700 transition"
                                >
                                    {link.name}
                                </a>
                                {hovered === idx && (
                                    <div
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 z-50 transition-all duration-300 ease-in-out pointer-events-none"
                                        style={{
                                            opacity: 1,
                                            top: '40px',
                                            transform: 'translate(-50%, 0)',
                                            transitionDelay: '300ms',
                                        }}
                                    >
                                        <div className="bg-white dark:bg-gray-900 shadow-lg rounded p-4 text-sm text-gray-700 dark:text-gray-200">
                                            {link.desc}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden p-2 rounded text-white dark:text-primary-light focus:outline-none"
                        onClick={() => setOpen(true)}
                        aria-label="Open menu"
                    >
                        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 7h20M4 14h20M4 21h20" />
                        </svg>
                    </button>
                </div>
                {/* Offcanvas Mobile Nav */}
                <div
                    className={`fixed inset-0 bg-black bg-opacity-40 z-50 transition-opacity duration-300 ease-in-out ${
                        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                    onClick={() => setOpen(false)}
                />
                <aside
                    className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
                        open ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <div className="flex items-center justify-between px-4 h-16 border-b border-gray-200 dark:border-gray-700">
                        <span className="text-xl font-bold text-gray-900 dark:text-primary-light">Menu</span>
                        <button
                            className="p-2 rounded text-gray-900 dark:text-primary-light"
                            onClick={() => setOpen(false)}
                            aria-label="Close menu"
                        >
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 6l12 12M6 18L18 6" />
                            </svg>
                        </button>
                    </div>
                    <nav className="flex flex-col gap-2 mt-4 px-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-900 dark:text-orange-300 font-medium px-2 py-2 rounded hover:bg-orange-100 dark:hover:bg-gray-700 transition"
                                onClick={() => setOpen(false)}
                            >
                                {link.name}
                                <div className="text-xs text-gray-500 dark:text-gray-400">{link.desc}</div>
                            </a>
                        ))}
                    </nav>
                </aside>
            </header>
        );
    };
