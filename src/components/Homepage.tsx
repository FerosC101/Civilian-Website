import React, { useEffect, useRef } from 'react';
import './Homepage.css';

const Homepage = () => {
    const phone1Ref = useRef<HTMLDivElement>(null);
    const phone2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const rotationFactor = scrollY * 0.2;

            if (phone1Ref.current) {
                phone1Ref.current.style.transform = `rotateY(${rotationFactor}deg)`;
            }

            if (phone2Ref.current) {
                phone2Ref.current.style.transform = `rotateY(${-rotationFactor}deg)`;
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
                            <div className="download-section">
                                <h2 className="section-title">DEVICE MOCKUP</h2>
                                <h3 className="section-subtitle">DOWNLOAD THIS APP</h3>

                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                                <div className="download-buttons">
                                    <button className="store-btn">Lorem ipsum</button>
                                    <button className="store-btn">Lorem ipsum</button>
                                    <div className="qr-code">
                                        <div className="qr-pattern"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="phone-showcase">
                                <div className="phone-container">
                                    <div ref={phone1Ref} className="phone-3d">
                                        <div className="phone-frame">
                                            <div className="phone-screen"></div>
                                        </div>
                                    </div>

                                    <div ref={phone2Ref} className="phone-3d">
                                        <div className="phone-frame">
                                            <div className="phone-screen"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* About the App Section */}
                    <section className="about-app-section">
                        <div className="about-content">
                            <div className="about-text">
                                <h2 className="section-title">ABOUT THE APP</h2>

                                <div className="about-description">
                                    <p>
                                        Pagawa parang blog style na article web page about us,
                                        like ganan yung isang page sa giled → is sample reference
                                    </p>
                                </div>

                                <div className="about-topics">
                                    <div className="topic-item">
                                        <div className="topic-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#0ea5e9" strokeWidth="2" strokeLinejoin="round"/>
                                                <path d="M2 17L12 22L22 17" stroke="#0ea5e9" strokeWidth="2" strokeLinejoin="round"/>
                                                <path d="M2 12L12 17L22 12" stroke="#0ea5e9" strokeWidth="2" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3>About the IoT</h3>
                                            <p>Comprehensive IoT security monitoring and management platform</p>
                                        </div>
                                    </div>

                                    <div className="topic-item">
                                        <div className="topic-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M17 21V19C17 17.9 16.1 17 15 17H9C7.9 17 7 17.9 7 19V21" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <circle cx="12" cy="7" r="4" stroke="#0ea5e9" strokeWidth="2"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3>Civilian Foundation</h3>
                                            <p>Our mission to democratize security technology for everyone</p>
                                        </div>
                                    </div>

                                    <div className="topic-item">
                                        <div className="topic-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M16 21V19C16 16.79 14.21 15 12 15S8 16.79 8 19V21" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <circle cx="12" cy="7" r="4" stroke="#0ea5e9" strokeWidth="2"/>
                                                <path d="M22 21V19C22 17.13 20.63 15.57 18.83 15.17" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M16 3.13C17.37 3.53 18.4 4.77 18.4 6.24S17.37 8.95 16 9.35" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3>About the Team</h3>
                                            <p>Meet the experts behind the innovative security solutions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="about-visual">
                                <div className="device-showcase">
                                    <div className="device-container">
                                        <div className="device-image">
                                            <div className="device-frame">
                                                <div className="device-body">
                                                    <div className="device-logo">
                                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                            <circle cx="20" cy="20" r="18" fill="#0ea5e9"/>
                                                            <path d="M20 8C15 8 11 12 11 17C11 19 11.5 20.8 12.5 22.3C10.8 23.5 9.5 25.5 9.5 27.8C9.5 31.5 12.5 34.5 16.2 34.5H23.8C27.5 34.5 30.5 31.5 30.5 27.8C30.5 25.5 29.2 23.5 27.5 22.3C28.5 20.8 29 19 29 17C29 12 25 8 20 8Z" fill="#fff"/>
                                                        </svg>
                                                    </div>
                                                    <div className="device-ports">
                                                        <div className="port"></div>
                                                        <div className="port"></div>
                                                        <div className="port"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="device-note">*change to actual pic</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="info-cards">
                                    <div className="info-card">
                                        <div className="card-header">
                                            <div className="civilian-logo-small">
                                                <span>civilian logo</span>
                                            </div>
                                            <h3>CIVILIAN</h3>
                                        </div>
                                        <p className="card-description">LONG SHIT ASS DESCRIPTION</p>
                                    </div>

                                    <div className="info-card">
                                        <h4 className="card-title">ANOTHER HEADER</h4>
                                        <p>more information</p>
                                    </div>

                                    <div className="info-card flexible">
                                        <div className="flexible-content">
                                            <span>ANOTHER PICTURE FLEXIBLE</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Foundation Section */}
                    <section className="foundation-section">
                        <h2 className="section-title">FOUNDATION</h2>

                        <div className="foundation-grid">
                            <div className="disaster-card">
                                <div className="disaster-image">
                                    <span>PICTURE NG DISASTERS</span>
                                    <p>or picture ng mga nasalanta</p>
                                </div>
                            </div>

                            <div className="disaster-card">
                                <div className="disaster-image">
                                    <span>floods</span>
                                </div>
                            </div>

                            <div className="disaster-card">
                                <div className="disaster-image">
                                    <span>EARTHQUAKES</span>
                                </div>
                            </div>
                        </div>

                        <div className="foundation-banner">
                            <h3>FOUNDATION</h3>
                        </div>

                        <div className="foundation-content">
                            <div className="content-card">
                                <h4>ARTICLE DESCRIPTION</h4>
                            </div>

                            <div className="content-card">
                                <h4>SUB ARTICLES</h4>
                            </div>
                        </div>
                    </section>

                    {/* Meet the Team Section */}
                    <section className="team-section">
                        <h2 className="section-title">MEET THE TEAM</h2>

                        <div className="team-photo">
                            <div className="team-image">
                                <div className="team-placeholder">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <circle cx="30" cy="20" r="8" fill="#64748b"/>
                                        <path d="M15 45c0-8.284 6.716-15 15-15s15 6.716 15 15" fill="#64748b"/>
                                        <circle cx="45" cy="18" r="6" fill="#94a3b8"/>
                                        <path d="M35 40c0-5.523 4.477-10 10-10s10 4.477 10 10" fill="#94a3b8"/>
                                        <circle cx="15" cy="18" r="6" fill="#94a3b8"/>
                                        <path d="M5 40c0-5.523 4.477-10 10-10s10 4.477 10 10" fill="#94a3b8"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="team-banner">
                                <h3>MEET THE TEAM</h3>
                            </div>
                        </div>

                        <div className="team-info">
                            <div className="logo-section-small">
                                <div className="logo-placeholder">
                                    <span>NEXT CS LOGO (SI JR BAHALA DITO), pero yung ratio nung placeholder is rectangle</span>
                                </div>
                            </div>

                            <div className="team-members">
                                <div className="members-grid">
                                    <div className="member-item">
                                        <span>members :</span>
                                    </div>
                                    <div className="member-item">
                                        <span>name - role</span>
                                    </div>
                                    <div className="member-item">
                                        <span>name - role</span>
                                    </div>
                                    <div className="member-item">
                                        <span>name - role</span>
                                    </div>
                                    <div className="member-item">
                                        <span>name - role</span>
                                    </div>
                                    <div className="member-item">
                                        <span>name - role</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="team-description">
                            <p>description about us, and other Faqs</p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Homepage;