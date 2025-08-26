import React, { useEffect, useRef } from 'react';
import './Homepage.css'

const Homepage = () => {
    const phone1Ref = useRef(null);
    const phone2Ref = useRef(null);

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
                            <img
                                src="https://res.cloudinary.com/drrzinr9v/image/upload/v1756178197/CIVILIAN_LOGO_wwg5cm.png"
                                alt="Civilian Logo"
                                width="40"
                                height="40"
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <h1 className="logo-text">CIVILIAN</h1>
                    </div>
                    <p className="tagline">Smart Urban Disaster Resilience Platform</p>
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
                                <h3 className="section-subtitle">DOWNLOAD THE CIVILIAN APP</h3>

                                <p className="description">
                                    Take control of your safety with CIVILIAN's smart disaster resilience platform.
                                    Get real-time alerts, evacuation routes, and emergency coordination tools right
                                    on your mobile device. Stay connected even during network failures with our
                                    decentralized mesh network technology.
                                </p>

                                <div className="download-buttons">
                                    <div className="store-buttons">
                                        <button className="store-btn">Download for iOS</button>
                                        <button className="store-btn">Download for Android</button>
                                    </div>
                                    <div className="qr-section">
                                        <div className="qr-code" style={{ width: '180px', height: '180px' }}>
                                            <img
                                                src="https://res.cloudinary.com/drrzinr9v/image/upload/v1756178248/GRIP_PROTOTYPE_ciaije.png"
                                                alt="QR Code for App Download"
                                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

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
                                                                <path d="M15 3C10 3 7 6 7 11C7 13 7.5 14.8 8.5 16.3C6.8 17.5 5.5 19.5 5.5 21.8C5.5 25.5 8.5 28.5 12.2 28.5H17.8C21.5 28.5 24.5 25.5 24.5 21.8C24.5 19.5 23.2 17.5 21.5 16.3C22.5 14.8 23 13 23 11C23 6 19 3 15 3Z" fill="white"/>
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
                                                                <path d="M15 3C10 3 7 6 7 11C7 13 7.5 14.8 8.5 16.3C6.8 17.5 5.5 19.5 5.5 21.8C5.5 25.5 8.5 28.5 12.2 28.5H17.8C21.5 28.5 24.5 25.5 24.5 21.8C24.5 19.5 23.2 17.5 21.5 16.3C22.5 14.8 23 13 23 11C23 6 19 3 15 3Z" fill="#0ea5e9"/>
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
                        </div>
                    </section>

                    {/* About the App Section */}
                    <section className="about-app-section">
                        <div className="about-content">
                            <div className="about-text">
                                <h2 className="section-title">ABOUT THE APP</h2>

                                <div className="about-description">
                                    <p>
                                        CIVILIAN is a comprehensive smart urban disaster resilience platform that acts as
                                        a virtual brain for cities. Our system collects environmental, structural, and
                                        behavioral data through IoT sensors, analyzes risks with AI, and provides real-time
                                        guidance through mobile apps and dashboards.
                                    </p>
                                    <p>
                                        The platform supports both governments and citizens before, during, and after
                                        disasters using a self-adaptive mesh network that works even during blackouts
                                        or network failures.
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
                                            <h3>IoT Mesh Disaster Grid</h3>
                                            <p>Self-adaptive mesh network with structural health monitoring, flood detection, and emergency resource routing that works during network failures</p>
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
                                            <h3>AI Risk Forecasting</h3>
                                            <p>Advanced artificial intelligence analyzes environmental data to predict disasters, generate evacuation routes, and coordinate emergency responses</p>
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
                                            <h3>Real-time Emergency Alerts</h3>
                                            <p>Decentralized alert system delivers critical information, evacuation plans, and safety updates directly to citizens and emergency responders</p>
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
                                            <div className="device-note">IoT Sensor Device - ₱3,000 per unit</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="info-cards">
                                    <div className="info-card">
                                        <div className="card-header">
                                            <div className="civilian-logo-small">
                                                <span>CIVILIAN</span>
                                            </div>
                                            <h3>CIVILIAN PLATFORM</h3>
                                        </div>
                                        <p className="card-description">
                                            Complete disaster resilience solution with IoT monitoring, AI forecasting,
                                            and emergency coordination tools for smart cities and communities
                                        </p>
                                    </div>

                                    <div className="info-card">
                                        <h4 className="card-title">SUBSCRIPTION MODEL</h4>
                                        <p>Monthly subscription: ₱50 per device for cloud services, AI analytics, and real-time monitoring</p>
                                    </div>

                                    <div className="info-card flexible">
                                        <div className="flexible-content">
                                            <span>10 KEY FEATURES: IoT Mesh Grid • Structural Monitoring • Flood Detection • AI Forecasting • Mobile Alerts</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Foundation Section */}
                    <section className="foundation-section">
                        <h2 className="section-title">DISASTER RESILIENCE FOUNDATION</h2>

                        <div className="foundation-grid">
                            <div className="disaster-card">
                                <div className="disaster-image">
                                    <span>FLOOD MONITORING</span>
                                    <p>Smart sensors detect water levels and predict flood patterns for early warning systems</p>
                                </div>
                            </div>

                            <div className="disaster-card">
                                <div className="disaster-image">
                                    <span>EARTHQUAKE DETECTION</span>
                                    <p>Structural health monitoring with vibration sensors and gyroscopes for seismic activity</p>
                                </div>
                            </div>

                            <div className="disaster-card">
                                <div className="disaster-image">
                                    <span>FIRE PREVENTION</span>
                                    <p>Temperature and flame sensors provide rapid fire detection and automated emergency responses</p>
                                </div>
                            </div>
                        </div>

                        <div className="foundation-banner">
                            <h3>CIVILIAN FOUNDATION</h3>
                        </div>

                        <div className="foundation-content">
                            <div className="content-card">
                                <h4>OUR MISSION</h4>
                                <p>To democratize disaster resilience technology and empower cities to become smarter,
                                    safer, and more self-reliant in crisis events through innovative IoT solutions</p>
                            </div>

                            <div className="content-card">
                                <h4>IMPACT GOALS</h4>
                                <p>Prevent loss of life and infrastructure damage • Accelerate disaster recovery
                                    • Enable real-time emergency coordination • Build resilient smart communities</p>
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
                                <h3>CIVILIAN DEVELOPMENT TEAM</h3>
                            </div>
                        </div>

                        <div className="team-info">
                            <div className="logo-section-small">
                                <div className="logo-placeholder">
                                    <span>NEXT CS INNOVATION TEAM - Expert developers and engineers dedicated to creating cutting-edge disaster resilience solutions</span>
                                </div>
                            </div>

                            <div className="team-members">
                                <div className="members-grid">
                                    <div className="member-item">
                                        <span>Core Development Team:</span>
                                    </div>
                                    <div className="member-item">
                                        <span>Project Lead - System Architecture</span>
                                    </div>
                                    <div className="member-item">
                                        <span>IoT Engineer - Hardware Integration</span>
                                    </div>
                                    <div className="member-item">
                                        <span>AI Specialist - Machine Learning</span>
                                    </div>
                                    <div className="member-item">
                                        <span>Mobile Developer - App Development</span>
                                    </div>
                                    <div className="member-item">
                                        <span>UX Designer - Interface Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="team-description">
                            <p>
                                Our multidisciplinary team combines expertise in IoT development, artificial intelligence,
                                mobile app development, and disaster management. We're committed to building innovative
                                solutions that protect communities and save lives through smart technology. Our mission
                                is to make disaster resilience accessible to cities worldwide.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Homepage;