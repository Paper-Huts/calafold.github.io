import React from 'react';

export default function Features() {
  const features = [
    {
      title: "Custom Software Development",
      description: "Tailored solutions built to meet your specific business requirements and goals.",
      icon: "💻"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and applications that grow with your business.",
      icon: "☁️"
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent systems that automate processes and provide valuable insights.",
      icon: "🤖"
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      icon: "📱"
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2>Why Choose Calafold?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
