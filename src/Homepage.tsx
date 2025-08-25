import React from 'react';
import './Homepage.css';

const Homepage = () => {
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
                    <p className="tagline">LONG SHIT ASS DESCRIPTION</p>
                </div>
            </header>

            {/* Main Content */}
            <main className="main-content">
                <div className="container">
                    <div className="content-grid">
                        {/* Device Mockup Section */}
                        <section className="mockup-section">
                            <h2>DEVICE MOCKUP</h2>
                            <h3>DOWNLOAD THIS APP</h3>
                            <div className="phone-mockup">
                                <div className="phone">
                                    <div className="phone-screen"></div>
                                </div>
                                <div className="phone">
                                    <div className="phone-screen"></div>
                                </div>
                            </div>
                            <p className="mockup-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="download-links">
                                <div className="app-store-btn">App Store</div>
                                <div className="google-play-btn">Google Play</div>
                                <div className="qr-code"></div>
                            </div>
                        </section>

                        {/* To Do Section */}
                        <section className="todo-section">
                            <h2>TO DO :</h2>
                            <div className="todo-content">
                                <p>pagawa parang blog style na article web page about us.</p>
                                <ul>
                                    <li>about the IoT</li>
                                    <li>civilian foundation</li>
                                    <li>about the team</li>
                                </ul>
                                <p>like ganan</p>
                                <p>yung isang page sa giled → is sample reference</p>
                            </div>
                        </section>

                        {/* About the App Section */}
                        <section className="about-section">
                            <h2>about_the_app</h2>
                            <div className="app-preview">
                                <div className="device-frame">
                                    <div className="device-screen">
                                        <div className="app-icon">
                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                                <rect width="60" height="60" rx="12" fill="#1e293b"/>
                                                <path d="M30 15C22.5 15 16.5 21 16.5 28.5C16.5 31.5 17.25 34.2 18.75 36.45C16.2 38.25 14.25 41.25 14.25 44.7C14.25 50.25 18.75 54.75 24.3 54.75H35.7C41.25 54.75 45.75 50.25 45.75 44.7C45.75 41.25 43.8 38.25 41.25 36.45C42.75 34.2 43.5 31.5 43.5 28.5C43.5 21 37.5 15 30 15Z" fill="#0ea5e9"/>
                                            </svg>
                                        </div>
                                        <p className="change-note">*change to actual pic</p>
                                    </div>
                                </div>
                            </div>
                            <div className="info-section">
                                <h3>ANOTHER HEADER</h3>
                                <div className="info-item">
                                    <span>more information</span>
                                    <div className="info-details">
                                        <p>ANOTHER PICTURE FLEXIBLE</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Bottom Section */}
                    <section className="bottom-section">
                        <div className="page-sections">
                            <div className="section-item">
                                <h3>HEADER (civilian logo + "CIVILIAN" Title font)</h3>
                                <p>DESCRIPTION (NOT LESS THAN 1 PARAGRAPH, LAGAY MO DITO MOTTO, HASTAQS AND SHITS)</p>
                                <div className="mockup-preview">
                                    <div className="mockup-card">
                                        <div className="mockup-placeholder"></div>
                                        <div className="mockup-text">
                                            <div className="text-line"></div>
                                            <div className="text-line"></div>
                                            <div className="text-line"></div>
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