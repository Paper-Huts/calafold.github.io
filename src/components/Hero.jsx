import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Calafold</h1>
        <p className="tagline">Transforming Ideas into Reality</p>
        <p className="description">
          Your trusted partner in software development. We create innovative solutions 
          that drive your business forward with cutting-edge technology and exceptional craftsmanship.
        </p>
        <div className="cta-buttons">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
}
