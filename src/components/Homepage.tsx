import React, { useEffect, useRef } from 'react';
import './Homepage.css';

const Homepage = () => {
    const phone1Ref = useRef<HTMLDivElement>(null);
    const phone2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const rotationFactor = scrollY * 0.1;

            if (phone1Ref.current) {
                phone1Ref.current.style.transform = `translateX(-40px) rotateY(${-15 + rotationFactor}deg)`;
            }

            if (phone2Ref.current) {
                phone2Ref.current.style.transform = `translateX(40px) rotateY(${10 - rotationFactor}deg)`;
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
                    {/* Device Mockup Section */}
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
                                        <div className="qr-code">
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
                                                            <svg width="20" height="20" viewBox="0 0 30 30" fill="none">
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
                                                            <svg width="20" height="20" viewBox="0 0 30 30" fill="none">
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

                    {/* About the App Section - Fixed Layout */}
                    <section className="about-app-section">
                        {/* Top Row - IoT Device and About Text */}
                        <div className="about-header">
                            <div className="device-showcase">
                                <img
                                    src="https://res.cloudinary.com/drrzinr9v/image/upload/v1756217560/CivilianIoT_lsauwh.png"
                                    alt="CIVILIAN IoT Device"
                                    className="iot-device-image"
                                />
                            </div>

                            <div className="about-text-content">
                                <h2>ABOUT THE APP</h2>
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
                        </div>

                        {/* Features Row - 3 Cards */}
                        <div className="features-row">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#0ea5e9" strokeWidth="2" strokeLinejoin="round"/>
                                        <path d="M2 17L12 22L22 17" stroke="#0ea5e9" strokeWidth="2" strokeLinejoin="round"/>
                                        <path d="M2 12L12 17L22 12" stroke="#0ea5e9" strokeWidth="2" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <h3>IoT Mesh Disaster Grid</h3>
                                <p>Self-adaptive mesh network with structural health monitoring, flood detection, and emergency resource routing that works during network failures</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
                                        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <h3>AI Risk Forecasting</h3>
                                <p>Advanced artificial intelligence analyzes environmental data to predict disasters, generate evacuation routes, and coordinate emergency responses</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <h3>Real-time Emergency Alerts</h3>
                                <p>Decentralized alert system delivers critical information, evacuation plans, and safety updates directly to citizens and emergency responders</p>
                            </div>
                        </div>

                        {/* Dashboard Row - Info and Large Phone */}
                        <div className="dashboard-row">
                            <div className="dashboard-info">
                                <h3>Mobile Dashboard</h3>
                                <p>
                                    Monitor your city's safety status with our comprehensive mobile dashboard.
                                    Get real-time data from IoT sensors, receive instant emergency alerts,
                                    and access evacuation routes with offline functionality.
                                </p>
                                <div className="dashboard-features">
                                    <div className="dashboard-feature">
                                        <div className="feature-bullet"></div>
                                        <span>Real-time environmental monitoring</span>
                                    </div>
                                    <div className="dashboard-feature">
                                        <div className="feature-bullet"></div>
                                        <span>Instant emergency notifications</span>
                                    </div>
                                    <div className="dashboard-feature">
                                        <div className="feature-bullet"></div>
                                        <span>Offline evacuation maps</span>
                                    </div>
                                    <div className="dashboard-feature">
                                        <div className="feature-bullet"></div>
                                        <span>Community safety network</span>
                                    </div>
                                    <div className="dashboard-feature">
                                        <div className="feature-bullet"></div>
                                        <span>Emergency resource locator</span>
                                    </div>
                                </div>
                            </div>

                            <div className="phone-showcase-large">
                                <div className="large-phone-frame">
                                    <div className="large-phone-screen">
                                        <img
                                            src="https://res.cloudinary.com/drrzinr9v/image/upload/v1756217891/Dashboard_Page_-_Dark_Mode_pqhcoe.png"
                                            alt="CIVILIAN Mobile Dashboard"
                                            className="dashboard-screen"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Foundation Section */}
                    <section className="foundation-section">
                        <h2 className="section-title">DISASTER RESILIENCE FOUNDATION</h2>

                        <div className="foundation-grid">
                            <div className="disaster-card flood-card">
                                <div className="disaster-image">
                                    <img
                                        src="https://res.cloudinary.com/drrzinr9v/image/upload/v1756260519/Flood_lxfdi0.jpg"
                                        alt="Flood monitoring"
                                        className="disaster-bg"
                                    />
                                    <div className="disaster-overlay"></div>
                                </div>
                                <div className="disaster-content">
                                    <span>FLOOD MONITORING</span>
                                    <p>Smart sensors detect water levels and predict flood patterns for early warning systems</p>
                                </div>
                            </div>

                            <div className="disaster-card earthquake-card">
                                <div className="disaster-image">
                                    <img
                                        src="https://res.cloudinary.com/drrzinr9v/image/upload/v1756260519/Earthquake_lp01qj.jpg"
                                        alt="Earthquake detection"
                                        className="disaster-bg"
                                    />
                                    <div className="disaster-overlay"></div>
                                </div>
                                <div className="disaster-content">
                                    <span>EARTHQUAKE DETECTION</span>
                                    <p>Structural health monitoring with vibration sensors and gyroscopes for seismic activity</p>
                                </div>
                            </div>

                            <div className="disaster-card fire-card">
                                <div className="disaster-image">
                                    <img
                                        src="https://res.cloudinary.com/drrzinr9v/image/upload/v1756260517/Fire_mvdgfw.jpg"
                                        alt="Fire prevention"
                                        className="disaster-bg"
                                    />
                                    <div className="disaster-overlay"></div>
                                </div>
                                <div className="disaster-content">
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

                        {/* Research Articles Section */}
                        <div className="research-section">
                            <h3 className="research-title">RESEARCH FOUNDATION</h3>
                            <p className="research-subtitle">Scientific evidence supporting smart city disaster resilience initiatives</p>

                            {/* Main Article */}
                            <div className="main-article">
                                <div className="article-badge">FEATURED RESEARCH</div>
                                <h4 className="article-title">Smart cities and disaster risk reduction in South Korea by 2022: The case of Daegu</h4>
                                <p className="article-summary">
                                    This comprehensive study examines how Daegu Metropolitan City implements smart city technologies
                                    for disaster risk reduction, achieving up to 20% reduction in property damage and casualties.
                                    The research demonstrates the effectiveness of integrated IoT sensor networks, data hubs,
                                    and AI-driven platforms in managing flood, earthquake, and fire disasters.
                                </p>
                                <div className="article-meta">
                                    <span className="article-source">Source: ScienceDirect - Heliyon Journal</span>
                                    <a href="https://www.sciencedirect.com/science/article/pii/S2405844023060024"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="article-link">
                                        Read Full Study →
                                    </a>
                                </div>
                            </div>

                            {/* Sub Articles Grid */}
                            <div className="sub-articles-grid">
                                <div className="sub-article">
                                    <div className="sub-article-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#0ea5e9" strokeWidth="2" strokeLinejoin="round"/>
                                            <path d="M2 17L12 22L22 17" stroke="#0ea5e9" strokeWidth="2" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <h5>IoT Sensors for Urban Disaster Management</h5>
                                    <p>Systematic review demonstrating how IoT sensors facilitate disaster management in resilient cities</p>
                                    <span className="sub-article-source">PMC - Sensors Journal</span>
                                    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10490738/"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="sub-article-link">View Study</a>
                                </div>

                                <div className="sub-article">
                                    <div className="sub-article-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                    <h5>Disruptive Technologies in Smart Cities</h5>
                                    <p>Comprehensive review of AI, IoT, and big data applications in urban disaster risk management</p>
                                    <span className="sub-article-source">ScienceDirect</span>
                                    <a href="https://www.sciencedirect.com/science/article/pii/S2212096325000178"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="sub-article-link">View Study</a>
                                </div>

                                <div className="sub-article">
                                    <div className="sub-article-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round"/>
                                            <path d="M3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                    <h5>Smart City Integration & Emergency Response</h5>
                                    <p>Analysis of how IoT integration reduces emergency response times and saves lives during disasters</p>
                                    <span className="sub-article-source">IEEE Public Safety</span>
                                    <a href="https://publicsafety.ieee.org/topics/smart-city-integration-how-iot-is-reducing-emergency-response-times-and-saving-lives/"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="sub-article-link">View Study</a>
                                </div>

                                <div className="sub-article">
                                    <div className="sub-article-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="3" stroke="#0ea5e9" strokeWidth="2"/>
                                            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33" stroke="#0ea5e9" strokeWidth="2"/>
                                        </svg>
                                    </div>
                                    <h5>IoT-Based Early Warning Systems</h5>
                                    <p>Framework for IoT-enabled disaster management through interconnected smart device networks</p>
                                    <span className="sub-article-source">Mathematical Problems in Engineering</span>
                                    <a href="https://www.hindawi.com/journals/mpe/2021/9916440/"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="sub-article-link">View Study</a>
                                </div>
                            </div>

                            <div className="research-footer">
                                <p>All research articles support the scientific foundation and technological approach implemented in the CIVILIAN platform</p>
                            </div>
                        </div>
                    </section>

                    {/* Meet the Team Section */}
                    <section className="team-section">
                        <h2 className="section-title">MEET THE TEAM</h2>

                        <div className="team-photo">
                            <div className="team-image">
                                <div className="team-placeholder">
                                    <svg width="80" height="80" viewBox="0 0 60 60" fill="none">
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