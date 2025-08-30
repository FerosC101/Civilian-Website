import React, { useEffect, useRef, useState } from 'react';
import './Homepage.css';

const Homepage = () => {
    const phone1Ref = useRef<HTMLDivElement>(null);
    const phone2Ref = useRef<HTMLDivElement>(null);
    const [darkMode, setDarkMode] = useState(true);

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

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
        document.body.classList.toggle('light-mode', !darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="homepage">
            {/* Header Section */}
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo-section">
                            <img
                                src="https://res.cloudinary.com/drrzinr9v/image/upload/v1756178197/CIVILIAN_LOGO_wwg5cm.png"
                                alt="Civilian Logo"
                                className="logo-image"
                            />
                            <div className="brand-text">
                                <h1 className="logo-text">CIVILIAN</h1>
                                <p className="tagline">Smart Urban Disaster Resilience Platform</p>
                            </div>
                        </div>

                        <div className="header-controls">
                            <button
                                className="theme-toggle"
                                onClick={toggleDarkMode}
                                aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
                            >
                                <div className="toggle-track">
                                    <div className="toggle-thumb">
                                        <svg className="toggle-icon sun-icon" width="12" height="12" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                                            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2"/>
                                        </svg>
                                        <svg className="toggle-icon moon-icon" width="12" height="12" viewBox="0 0 24 24" fill="none">
                                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="2"/>
                                        </svg>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="main-content">
                <div className="container">
                    {/* Hero Section with Video */}
                    <section className="hero-section">
                        <div className="hero-content">
                            <div className="hero-text">
                                <h2 className="hero-title">DEVICE MOCKUP</h2>
                                <h3 className="hero-subtitle">DOWNLOAD THE CIVILIAN APP</h3>

                                <p className="hero-description">
                                    Take control of your safety with CIVILIAN's smart disaster resilience platform.
                                    Get real-time alerts, evacuation routes, and emergency coordination tools right
                                    on your mobile device. Stay connected even during network failures with our
                                    decentralized mesh network technology.
                                </p>

                                <div className="download-actions">
                                    <div className="store-buttons">
                                        <button className="store-btn">Download for iOS</button>
                                        <button className="store-btn">Download for Android</button>
                                    </div>
                                    <div className="qr-section">
                                        <div className="qr-code">
                                            <img
                                                src="https://res.cloudinary.com/drrzinr9v/image/upload/v1756530575/Civilian-Web-QR_mnfvcw.png"
                                                alt="QR Code for App Download"
                                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hero-visual">
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

                    {/* Team Video Section */}
                    <section className="video-section">
                        <div className="video-header">
                            <h2 className="video-title">CIVILIAN</h2>
                            <p className="video-subtitle">Smart Dias</p>
                        </div>

                        <div className="video-container">
                            <div className="video-wrapper">
                                <video
                                    className="team-video"
                                    controls
                                    poster="https://res.cloudinary.com/drrzinr9v/video/upload/v1756566002/Civilian_cafvo3.mp4"
                                    preload="metadata"
                                >
                                    <source src="https://res.cloudinary.com/drrzinr9v/video/upload/v1756566002/Civilian_cafvo3.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="video-overlay">
                                    <div className="play-button">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                                            <path d="M8 5v14l11-7z" fill="currentColor"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="video-info">
                                <h3 className="video-info-title">Building Tomorrow's Smart Cities</h3>
                                <p className="video-info-text">
                                    Watch our team demonstrate how CIVILIAN's IoT mesh network and AI-powered
                                    disaster prediction system creates safer, more resilient urban environments.
                                    From concept to implementation, see the technology that's revolutionizing
                                    emergency response and community safety.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* About Section */}
                    <section className="about-section">
                        <div className="about-layout">
                            <div className="iot-showcase">
                                <img
                                    src="https://res.cloudinary.com/drrzinr9v/image/upload/v1756217560/CivilianIoT_lsauwh.png"
                                    alt="CIVILIAN IoT Device"
                                    className="iot-device"
                                />
                            </div>

                            <div className="about-content">
                                <h2 className="about-title">ABOUT THE APP</h2>
                                <p className="about-text">
                                    CIVILIAN is a comprehensive smart urban disaster resilience platform that acts as
                                    a virtual brain for cities. Our system collects environmental, structural, and
                                    behavioral data through IoT sensors, analyzes risks with AI, and provides real-time
                                    guidance through mobile apps and dashboards.
                                </p>
                                <p className="about-text">
                                    The platform supports both governments and citizens before, during, and after
                                    disasters using a self-adaptive mesh network that works even during blackouts
                                    or network failures.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="features-section">
                        <div className="features-grid">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#0ea5e9" strokeWidth="2" strokeLinejoin="round"/>
                                        <path d="M2 17L12 22L22 17" stroke="#0ea5e9" strokeWidth="2" strokeLinejoin="round"/>
                                        <path d="M2 12L12 17L22 12" stroke="#0ea5e9" strokeWidth="2" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <h3 className="feature-title">IoT Mesh Disaster Grid</h3>
                                <p className="feature-text">Self-adaptive mesh network with structural health monitoring, flood detection, and emergency resource routing that works during network failures</p>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <h3 className="feature-title">AI Risk Forecasting</h3>
                                <p className="feature-text">Advanced artificial intelligence analyzes environmental data to predict disasters, generate evacuation routes, and coordinate emergency responses</p>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <h3 className="feature-title">Real-time Emergency Alerts</h3>
                                <p className="feature-text">Decentralized alert system delivers critical information, evacuation plans, and safety updates directly to citizens and emergency responders</p>
                            </div>
                        </div>
                    </section>

                    {/* Dashboard Section */}
                    <section className="dashboard-section">
                        <div className="dashboard-layout">
                            <div className="dashboard-info">
                                <h3 className="dashboard-title">Mobile Dashboard</h3>
                                <p className="dashboard-description">
                                    Monitor your city's safety status with our comprehensive mobile dashboard.
                                    Get real-time data from IoT sensors, receive instant emergency alerts,
                                    and access evacuation routes with offline functionality.
                                </p>
                                <div className="dashboard-features">
                                    <div className="dashboard-feature">
                                        <div className="feature-dot"></div>
                                        <span>Real-time environmental monitoring</span>
                                    </div>
                                    <div className="dashboard-feature">
                                        <div className="feature-dot"></div>
                                        <span>Instant emergency notifications</span>
                                    </div>
                                    <div className="dashboard-feature">
                                        <div className="feature-dot"></div>
                                        <span>Offline evacuation maps</span>
                                    </div>
                                    <div className="dashboard-feature">
                                        <div className="feature-dot"></div>
                                        <span>Community safety network</span>
                                    </div>
                                    <div className="dashboard-feature">
                                        <div className="feature-dot"></div>
                                        <span>Emergency resource locator</span>
                                    </div>
                                </div>
                            </div>

                            <div className="dashboard-visual">
                                <div className="dashboard-phone">
                                    <div className="dashboard-screen">
                                        <img
                                            src="https://res.cloudinary.com/drrzinr9v/image/upload/v1756217891/Dashboard_Page_-_Dark_Mode_pqhcoe.png"
                                            alt="CIVILIAN Mobile Dashboard"
                                            className="screen-image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Foundation Section */}
                    <section className="foundation-section">
                        <div className="foundation-header">
                            <h2 className="foundation-title">DISASTER RESILIENCE FOUNDATION</h2>
                        </div>

                        <div className="disaster-grid">
                            <div className="disaster-item flood-item">
                                <div className="disaster-visual">
                                    <img
                                        src="https://res.cloudinary.com/drrzinr9v/image/upload/v1756260519/Flood_lxfdi0.jpg"
                                        alt="Flood monitoring"
                                        className="disaster-image"
                                    />
                                </div>
                                <div className="disaster-info">
                                    <span className="disaster-label">FLOOD MONITORING</span>
                                    <p className="disaster-desc">Smart sensors detect water levels and predict flood patterns for early warning systems</p>
                                </div>
                            </div>

                            <div className="disaster-item earthquake-item">
                                <div className="disaster-visual">
                                    <img
                                        src="https://res.cloudinary.com/drrzinr9v/image/upload/v1756260519/Earthquake_lp01qj.jpg"
                                        alt="Earthquake detection"
                                        className="disaster-image"
                                    />
                                </div>
                                <div className="disaster-info">
                                    <span className="disaster-label">EARTHQUAKE DETECTION</span>
                                    <p className="disaster-desc">Structural health monitoring with vibration sensors and gyroscopes for seismic activity</p>
                                </div>
                            </div>

                            <div className="disaster-item fire-item">
                                <div className="disaster-visual">
                                    <img
                                        src="https://res.cloudinary.com/drrzinr9v/image/upload/v1756260517/Fire_mvdgfw.jpg"
                                        alt="Fire prevention"
                                        className="disaster-image"
                                    />
                                </div>
                                <div className="disaster-info">
                                    <span className="disaster-label">FIRE PREVENTION</span>
                                    <p className="disaster-desc">Temperature and flame sensors provide rapid fire detection and automated emergency responses</p>
                                </div>
                            </div>
                        </div>

                        <div className="foundation-mission">
                            <div className="mission-header">
                                <h3 className="mission-title">CIVILIAN FOUNDATION</h3>
                            </div>

                            <div className="mission-content">
                                <div className="mission-item">
                                    <h4 className="mission-label">OUR MISSION</h4>
                                    <p className="mission-text">To democratize disaster resilience technology and empower cities to become smarter,
                                        safer, and more self-reliant in crisis events through innovative IoT solutions</p>
                                </div>

                                <div className="mission-item">
                                    <h4 className="mission-label">IMPACT GOALS</h4>
                                    <p className="mission-text">Prevent loss of life and infrastructure damage • Accelerate disaster recovery
                                        • Enable real-time emergency coordination • Build resilient smart communities</p>
                                </div>
                            </div>
                        </div>

                        {/* Research Section */}
                        <div className="research-area">
                            <div className="research-header">
                                <h3 className="research-title">RESEARCH FOUNDATION</h3>
                                <p className="research-subtitle">Scientific evidence supporting smart city disaster resilience initiatives</p>
                            </div>

                            <div className="featured-research">
                                <div className="research-badge">FEATURED RESEARCH</div>
                                <h4 className="research-paper-title">Smart cities and disaster risk reduction in South Korea by 2022: The case of Daegu</h4>
                                <p className="research-summary">
                                    This comprehensive study examines how Daegu Metropolitan City implements smart city technologies
                                    for disaster risk reduction, achieving up to 20% reduction in property damage and casualties.
                                    The research demonstrates the effectiveness of integrated IoT sensor networks, data hubs,
                                    and AI-driven platforms in managing flood, earthquake, and fire disasters.
                                </p>
                                <div className="research-meta">
                                    <span className="research-source">Source: ScienceDirect - Heliyon Journal</span>
                                    <a href="https://www.sciencedirect.com/science/article/pii/S2405844023060024"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="research-link">
                                        Read Full Study →
                                    </a>
                                </div>
                            </div>

                            <div className="supporting-research">
                                <div className="research-grid">
                                    <div className="research-item">
                                        <div className="research-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#0ea5e9" strokeWidth="2" strokeLinejoin="round"/>
                                                <path d="M2 17L12 22L22 17" stroke="#0ea5e9" strokeWidth="2" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <h5 className="research-item-title">IoT Sensors for Urban Disaster Management</h5>
                                        <p className="research-item-desc">Systematic review demonstrating how IoT sensors facilitate disaster management in resilient cities</p>
                                        <span className="research-item-source">PMC - Sensors Journal</span>
                                        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10490738/"
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="research-item-link">View Study</a>
                                    </div>

                                    <div className="research-item">
                                        <div className="research-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round"/>
                                            </svg>
                                        </div>
                                        <h5 className="research-item-title">Disruptive Technologies in Smart Cities</h5>
                                        <p className="research-item-desc">Comprehensive review of AI, IoT, and big data applications in urban disaster risk management</p>
                                        <span className="research-item-source">ScienceDirect</span>
                                        <a href="https://www.sciencedirect.com/science/article/pii/S2212096325000178"
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="research-item-link">View Study</a>
                                    </div>

                                    <div className="research-item">
                                        <div className="research-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round"/>
                                                <path d="M3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round"/>
                                            </svg>
                                        </div>
                                        <h5 className="research-item-title">Smart City Integration & Emergency Response</h5>
                                        <p className="research-item-desc">Analysis of how IoT integration reduces emergency response times and saves lives during disasters</p>
                                        <span className="research-item-source">IEEE Public Safety</span>
                                        <a href="https://publicsafety.ieee.org/topics/smart-city-integration-how-iot-is-reducing-emergency-response-times-and-saving-lives/"
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="research-item-link">View Study</a>
                                    </div>

                                    <div className="research-item">
                                        <div className="research-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <circle cx="12" cy="12" r="3" stroke="#0ea5e9" strokeWidth="2"/>
                                                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33" stroke="#0ea5e9" strokeWidth="2"/>
                                            </svg>
                                        </div>
                                        <h5 className="research-item-title">IoT-Based Early Warning Systems</h5>
                                        <p className="research-item-desc">Framework for IoT-enabled disaster management through interconnected smart device networks</p>
                                        <span className="research-item-source">Mathematical Problems in Engineering</span>
                                        <a href="https://www.hindawi.com/journals/mpe/2021/9916440/"
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="research-item-link">View Study</a>
                                    </div>
                                </div>

                                <div className="research-note">
                                    <p>All research articles support the scientific foundation and technological approach implemented in the CIVILIAN platform</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Team Section */}
                    <section className="team-section">
                        <div className="team-header">
                            <h2 className="team-title">MEET THE TEAM</h2>
                        </div>

                        <div className="team-showcase">
                            <div className="team-photo-container">
                                <img
                                    src="https://res.cloudinary.com/drrzinr9v/image/upload/v1756346552/IMG_4708_ksg7sb.jpg"
                                    alt="CIVILIAN Development Team"
                                    className="team-image"
                                />
                                <div className="photo-overlay">
                                    <div className="team-info">
                                        <h3 className="team-name">CIVILIAN DEVELOPMENT TEAM</h3>
                                        <p className="team-desc">Building the future of urban disaster resilience</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="team-intro">
                            <h3 className="intro-title">NEXT CS INNOVATION TEAM</h3>
                            <p className="intro-text">
                                Our multidisciplinary team combines expertise in IoT development, artificial intelligence,
                                mobile app development, and disaster management. We're committed to building innovative
                                solutions that protect communities and save lives through smart technology.
                            </p>
                        </div>

                        <div className="members-grid">
                            <div className="member-item project-lead">
                                <div className="member-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                                        <polyline points="17,11 19,13 23,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="member-details">
                                    <h4 className="member-name">Vince Anjo Villar</h4>
                                    <p className="member-role">Project Lead</p>
                                    <span className="member-specialty">System Architecture & Team Leadership</span>
                                </div>
                            </div>

                            <div className="member-item iot-engineer">
                                <div className="member-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
                                        <circle cx="7" cy="8" r="1" fill="currentColor"/>
                                        <circle cx="12" cy="8" r="1" fill="currentColor"/>
                                        <circle cx="17" cy="8" r="1" fill="currentColor"/>
                                    </svg>
                                </div>
                                <div className="member-details">
                                    <h4 className="member-name">Noel Zyrence Saludo</h4>
                                    <p className="member-role">IoT Engineer</p>
                                    <span className="member-specialty">Hardware Integration & Sensor Networks</span>
                                </div>
                            </div>

                            <div className="member-item mobile-dev">
                                <div className="member-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="member-details">
                                    <h4 className="member-name">Albert Soriano Jr</h4>
                                    <p className="member-role">Mobile Developer</p>
                                    <span className="member-specialty">iOS & Android App Development</span>
                                </div>
                            </div>

                            <div className="member-item ai-specialist">
                                <div className="member-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="member-details">
                                    <h4 className="member-name">Aila Roshiele Donayre</h4>
                                    <p className="member-role">AI Specialist</p>
                                    <span className="member-specialty">Machine Learning & Risk Prediction</span>
                                </div>
                            </div>

                            <div className="member-item ux-designer">
                                <div className="member-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 19l7-7 3 3-7 7-3-3z" stroke="currentColor" strokeWidth="2"/>
                                        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" stroke="currentColor" strokeWidth="2"/>
                                        <path d="M2 2l7.586 7.586" stroke="currentColor" strokeWidth="2"/>
                                        <circle cx="11" cy="11" r="2" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                </div>
                                <div className="member-details">
                                    <h4 className="member-name">Jan Mayen Mallen</h4>
                                    <p className="member-role">UX Designer</p>
                                    <span className="member-specialty">User Experience & Interface Design</span>
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