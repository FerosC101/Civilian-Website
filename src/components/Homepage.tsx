import React, { useEffect, useRef } from 'react';
import './Homepage.css';

const Homepage = () => {
    const phone1Ref = useRef<HTMLDivElement>(null);
    const phone2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollFactor = scrollY * 0.5;

            if (phone1Ref.current) {
                phone1Ref.current.style.transform = `translateY(${scrollFactor * 0.3}px) rotateY(${-15 + scrollFactor * 0.1}deg) rotateX(${scrollFactor * 0.05}deg)`;
            }

            if (phone2Ref.current) {
                phone2Ref.current.style.transform = `translateY(${scrollFactor * -0.2}px) rotateY(${15 - scrollFactor * 0.1}deg) rotateX(${scrollFactor * 0.05}deg)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="homepage">
            {/* Header Section */}
            <header className="header">
                <div className="container">
                    <div className="logo-section">
                        <div className="brain-icon">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M20 5C15 5 11 9 11 14C11 16 11.5 17.8 12.5 19.3C10.8 20.5 9.5 22.5 9.5 24.8C9.5 28.5 12.5 31.5 16.2 31.5H23.8C27.5 31.5 30.5 28.5 30.5 24.8C30.5 22.5 29.2 20.5 27.5 19.3C28.5 17.8 29 16 29 14C29 9 25 5 20 5Z" fill="#0ea5e9"/>
                                <circle cx="16" cy="16" r="2" fill="#1e293b"/>
                                <circle cx="24" cy="16" r="2" fill="#1e293b"/>
                                <path d="M15 22C15 22 17 24 20 24C23 24 25 22 25 22" stroke="#1e293b" strokeWidth="2" fill="none"/>
                            </svg>
                        </div>
                        <h1 className="logo-text">CIVILIAN</h1>
                    </div>
                    <p className="tagline">Smart IoT Security & Monitoring Platform</p>
                </div>
            </header>

            {/* Main Content */}
            <main className="main-content">
                <div className="container">
                    {/* Device Mockup Section - Full Width */}
                    <section className="device-mockup-section">
                        <div className="mockup-content">
                            <div className="phone-showcase">
                                <div className="phone-container">
                                    <div ref={phone1Ref} className="phone-3d phone-left">
                                        <div className="phone-frame">
                                            <div className="phone-screen">
                                                <div className="screen-content">
                                                    <div className="status-bar"></div>
                                                    <div className="app-preview">
                                                        <div className="app-icon">
                                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                                <path d="M15 4C11.25 4 8.25 6.75 8.25 10.5C8.25 12 8.625 13.35 9.375 14.475C8.1 15.375 7.125 16.875 7.125 18.6C7.125 21.375 9.375 23.625 12.15 23.625H17.85C20.625 23.625 22.875 21.375 22.875 18.6C22.875 16.875 21.9 15.375 20.625 14.475C21.375 13.35 21.75 12 21.75 10.5C21.75 6.75 18.75 4 15 4Z" fill="white"/>
                                                            </svg>
                                                        </div>
                                                        <div className="preview-bars">
                                                            <div className="bar"></div>
                                                            <div className="bar"></div>
                                                            <div className="bar"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div ref={phone2Ref} className="phone-3d phone-right">
                                        <div className="phone-frame">
                                            <div className="phone-screen">
                                                <div className="screen-content">
                                                    <div className="status-bar"></div>
                                                    <div className="app-preview">
                                                        <div className="app-icon secondary">
                                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                                <path d="M15 4C11.25 4 8.25 6.75 8.25 10.5C8.25 12 8.625 13.35 9.375 14.475C8.1 15.375 7.125 16.875 7.125 18.6C7.125 21.375 9.375 23.625 12.15 23.625H17.85C20.625 23.625 22.875 21.375 22.875 18.6C22.875 16.875 21.9 15.375 20.625 14.475C21.375 13.35 21.75 12 21.75 10.5C21.75 6.75 18.75 4 15 4Z" fill="white"/>
                                                            </svg>
                                                        </div>
                                                        <div className="preview-bars">
                                                            <div className="bar"></div>
                                                            <div className="bar"></div>
                                                            <div className="bar"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="download-section">
                                <h2 className="section-title">DEVICE MOCKUP</h2>
                                <h3 className="section-subtitle">DOWNLOAD THIS APP</h3>

                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>

                                <div className="download-buttons">
                                    <div className="store-buttons">
                                        <button className="store-btn apple-btn">
                                            <span>Lorem ipsum</span>
                                        </button>
                                        <button className="store-btn google-btn">
                                            <span>Lorem ipsum</span>
                                        </button>
                                    </div>
                                    <div className="qr-section">
                                        <div className="qr-code">
                                            <div className="qr-pattern"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Homepage;