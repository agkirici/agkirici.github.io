'use client';

import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          overflow-x: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 40px;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
          color: #e0e0e0;
          line-height: 1.6;
          min-height: 100vh;
        }

        /* Hero Section */
        .hero {
          min-height: 65vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-bottom: 60px;
        }

        .heroTitle {
          font-size: 3.8rem;
          font-weight: 700;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #00d4ff 0%, #7b2cbf 50%, #ff006e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -1px;
        }

        .tagline {
          font-size: 1.9rem;
          color: #b0b0b0;
          margin-bottom: 15px;
          font-weight: 400;
        }

        .subtitle {
          font-size: 1.3rem;
          color: #888;
          margin-bottom: 35px;
          font-weight: 300;
        }

        .description {
          font-size: 1.15rem;
          color: #999;
          max-width: 850px;
          line-height: 1.8;
        }

        /* About Section */
        .aboutSection {
          margin-bottom: 80px;
        }

        .sectionTitle {
          font-size: 2.5rem;
          margin-bottom: 40px;
          color: #fff;
          position: relative;
          padding-bottom: 15px;
          font-weight: 600;
        }

        .sectionTitle::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #00d4ff, #7b2cbf);
          border-radius: 2px;
        }

        .aboutContent {
          font-size: 1.1rem;
          color: #b5b5b5;
          line-height: 1.9;
          max-width: 950px;
        }

        .aboutContent p {
          margin-bottom: 24px;
        }

        .aboutContent strong {
          color: #00d4ff;
          font-weight: 600;
        }

        .openToWork {
          margin-top: 25px;
          color: #00d4ff !important;
          font-weight: 500;
        }

        /* Expertise Cards */
        .expertiseSection {
          margin-bottom: 80px;
        }

        .expertiseGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .expertiseCard {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 35px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .expertiseCard::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.12) 0%, rgba(123, 44, 191, 0.12) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .expertiseCard:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 212, 255, 0.4);
          box-shadow: 0 12px 45px rgba(0, 212, 255, 0.25);
        }

        .expertiseCard:hover::before {
          opacity: 1;
        }

        .cardIcon {
          font-size: 2.8rem;
          margin-bottom: 20px;
          display: block;
          filter: grayscale(0.3);
        }

        .cardTitle {
          font-size: 1.4rem;
          color: #fff;
          margin-bottom: 15px;
          font-weight: 600;
          position: relative;
          z-index: 1;
        }

        .cardDescription {
          color: #999;
          font-size: 1.02rem;
          line-height: 1.7;
          position: relative;
          z-index: 1;
        }

        /* Expandable Sections */
        .detailsSection {
          margin-top: 80px;
        }

        .expandableSection {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          margin-bottom: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .expandableSection:hover {
          border-color: rgba(255, 255, 255, 0.15);
        }

        .expandableHeader {
          padding: 28px 35px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.35rem;
          font-weight: 600;
          color: #fff;
          transition: background 0.3s ease;
        }

        .expandableHeader:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .expandableIcon {
          font-size: 1.6rem;
          transition: transform 0.3s ease;
          color: #00d4ff;
        }

        .expandableSection.active .expandableIcon {
          transform: rotate(45deg);
        }

        .expandableContent {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
          padding: 0 35px;
        }

        .expandableSection.active .expandableContent {
          max-height: 1500px;
          padding: 0 35px 30px;
        }

        .expandableContent p {
          color: #b0b0b0;
          line-height: 1.85;
          margin-bottom: 18px;
          font-size: 1.05rem;
        }

        .expandableContent ul {
          list-style: none;
          margin-top: 18px;
        }

        .expandableContent li {
          color: #999;
          padding-left: 28px;
          position: relative;
          margin-bottom: 12px;
          line-height: 1.7;
          font-size: 1.02rem;
        }

        .expandableContent li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #00d4ff;
          font-weight: bold;
        }

        /* CTA Section */
        .ctaSection {
          text-align: center;
          padding: 65px 40px;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, rgba(123, 44, 191, 0.05) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          margin-top: 80px;
        }

        .ctaText {
          font-size: 1.35rem;
          color: #b5b5b5;
          margin-bottom: 35px;
          line-height: 1.7;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .contactLink {
          display: inline-block;
          padding: 16px 45px;
          background: linear-gradient(135deg, #00d4ff, #7b2cbf);
          color: #fff;
          text-decoration: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 1.15rem;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(0, 212, 255, 0.35);
        }

        .contactLink:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0, 212, 255, 0.5);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .container {
            padding: 40px 20px;
          }

          .heroTitle {
            font-size: 2.5rem;
          }

          .tagline {
            font-size: 1.4rem;
          }

          .subtitle {
            font-size: 1.1rem;
          }

          .description {
            font-size: 1rem;
          }

          .sectionTitle {
            font-size: 2rem;
          }

          .expertiseGrid {
            grid-template-columns: 1fr;
          }

          .expandableHeader {
            font-size: 1.15rem;
            padding: 22px 25px;
          }

          .expandableContent {
            padding: 0 25px;
          }

          .expandableSection.active .expandableContent {
            padding: 0 25px 25px;
          }
        }
      `}} />

      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="heroTitle">Arzu Kirici, MSc</h1>
          <div className="tagline">Project Manager | Software Developer</div>
          <div className="subtitle">Healthcare, Biotech & Software | Agile | Cross-Functional Team Leadership</div>
          <div className="description">
            I bridge technical and non-technical teams in healthcare, biotechnology, and software, translating 
            complex requirements into working solutions. With a background in molecular biology, 5+ years of project 
            management experience, and hands-on development in TypeScript, React, and Node.js, I work across the 
            full project lifecycle, from the first conversation to the finished product.
          </div>
        </section>

        {/* About Section */}
        <section className="aboutSection">
          <h2 className="sectionTitle">About</h2>
          <div className="aboutContent">
            <p>
              My background started in molecular biology, and it shaped how I approach every problem since. In the lab, 
              catching an error early meant catching it before it became a wrong diagnosis. That same instinct now drives 
              how I build software and manage projects: verify everything, and don&apos;t trust a system until you understand 
              exactly how it fails.
            </p>
            <p>
              As a project manager, most of my requirements never arrived in writing. They came from a conversation, changed 
              halfway through, or came from someone with no technical background who just needed a problem solved. I&apos;ve 
              learned to ask the right questions early, scope work honestly, and explain a plan clearly enough that both a 
              scientist and an engineer would trust it.
            </p>
            <p>
              Over the past few years I&apos;ve added hands-on development to that, building with <strong>TypeScript, React, and Node.js</strong>. 
              I develop tracking systems and dashboards for executive decision-making, and I&apos;m as comfortable writing the 
              code as I am managing the team that ships it.
            </p>
            <p>
              With a background spanning <strong>molecular biology, project management, and software development</strong>, I bridge 
              the gap between researchers, engineers, and business stakeholders, translating between all three so that 
              nothing gets lost in the handoff.
            </p>
            <p className="openToWork">
              Open to Software Engineer, Project Manager, and Business Analyst opportunities at the intersection of healthcare, technology, and business.
            </p>
          </div>
        </section>

        {/* Expertise Cards */}
        <section className="expertiseSection">
          <h2 className="sectionTitle">Core Expertise</h2>
          <div className="expertiseGrid">
            <div className="expertiseCard">
              <span className="cardIcon">🎯</span>
              <h3 className="cardTitle">Strategic Project Management</h3>
              <p className="cardDescription">
                Leading complex spatial biology projects, managing timelines, dependencies, and resource allocation 
                across interdisciplinary teams. Expertise in Agile ceremonies, sprint planning, retrospectives, and 
                cross-functional stakeholder communication to deliver research milestones and software development sprints.
              </p>
            </div>
            <div className="expertiseCard">
              <span className="cardIcon">📊</span>
              <h3 className="cardTitle">Business Analysis & Process Optimization</h3>
              <p className="cardDescription">
                Developing tracking systems and dashboards for monitoring project KPIs, enabling data-driven decision-making. 
                Conducting gap analyses, identifying process improvements to reduce bottlenecks, and optimizing cross-functional 
                workflows to reduce project delivery timelines.
              </p>
            </div>
            <div className="expertiseCard">
              <span className="cardIcon">🧬</span>
              <h3 className="cardTitle">Scientific & Technical Translation</h3>
              <p className="cardDescription">
                Acting as primary liaison between software developers and executive leadership, translating technical requirements 
                across disciplines. Deep understanding of molecular biology, spatial transcriptomics, NGS workflows, and bioinformatics 
                enables effective communication across scientific and business domains.
              </p>
            </div>
            <div className="expertiseCard">
              <span className="cardIcon">💻</span>
              <h3 className="cardTitle">Technical Implementation & Automation</h3>
              <p className="cardDescription">
                Developing Python automation pipelines for spatial biology data processing, implementing quality control workflows, 
                and creating automated reporting systems. Experience with GitHub version control, standardized documentation workflows, 
                and metadata management protocols for improved data traceability.
              </p>
            </div>
          </div>
        </section>

        {/* Expandable Sections */}
        <section className="detailsSection">
          <div className={`expandableSection ${activeSection === 'heading' ? 'active' : ''}`}>
            <div className="expandableHeader" onClick={() => toggleSection('heading')}>
              <span>Where I&apos;m Heading</span>
              <span className="expandableIcon">+</span>
            </div>
            <div className="expandableContent">
              <p>
                I&apos;m looking for <strong>Software Engineer, Project Manager</strong> roles where I can put my background in biology, project management, and software development to use together.
              </p>
              <p>
                My goal is to work at the intersection of supply chain, healthcare, data, and technology, building software and leading projects that actually solve the problem in front of people, not just the one written in a spec. I&apos;ve spent the last few years adding hands-on development with <strong>TypeScript, React, and Node.js</strong> to a background that started in the lab and grew through years of managing cross-functional teams.
              </p>
              <p>
                I do my best work where technical depth and business context both matter, and where someone has to be the person who understands both sides well enough to translate between them.
              </p>
            </div>
          </div>

          <div className={`expandableSection ${activeSection === 'website' ? 'active' : ''}`}>
            <div className="expandableHeader" onClick={() => toggleSection('website')}>
              <span>What This Website Is For</span>
              <span className="expandableIcon">+</span>
            </div>
            <div className="expandableContent">
              <p>
                This site shows my work and how I think, across software development, project management, and the science background that shaped both.
              </p>
              <p>
                Whether you&apos;re looking for an engineer who understands the business side without needing everything spelled out or a project manager who can also read and write code or someone who&apos;s spent years verifying data before trusting it, this is where you&apos;d start.
              </p>
              <p>
                I built this site the way I approach most things: figure out what&apos;s actually needed, then build it.
              </p>
            </div>
          </div>

          <div className={`expandableSection ${activeSection === 'work-with' ? 'active' : ''}`}>
            <div className="expandableHeader" onClick={() => toggleSection('work-with')}>
              <span>Who I Work With</span>
              <span className="expandableIcon">+</span>
            </div>
            <div className="expandableContent">
              <p>
                I work between engineers, researchers, and the people running the business side, whether that&apos;s leadership, operations, or clients who don&apos;t care how the code works as long as it does. I&apos;ve done this in supply chain, healthcare and biotech, and I&apos;m applying the same skill set to software teams now.
              </p>
              <p>
                Whether it&apos;s a fast-moving team that needs someone who can pick up context quickly, or an organization that needs project work and technical work handled by the same person, I translate requirements, manage expectations, and make sure what gets built is actually what was needed.
              </p>
            </div>
          </div>

          <div className={`expandableSection ${activeSection === 'help' ? 'active' : ''}`}>
            <div className="expandableHeader" onClick={() => toggleSection('help')}>
              <span>How I Can Help</span>
              <span className="expandableIcon">+</span>
            </div>
            <div className="expandableContent">
              <ul>
                <li>Building and shipping software, mainly with TypeScript, React, and Node.js</li>
                <li>Translating technical requirements into project plans people can actually execute</li>
                <li>Coordinating cross-functional teams across engineering, science, and business</li>
                <li>Running Agile/Scrum practices in teams that don&apos;t already have them figured out</li>
                <li>Building dashboards and tracking tools for decision-making</li>
                <li>Managing stakeholders and keeping technical work and business goals aligned</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="ctaSection">
          <p className="ctaText">
            If you work in healthcare, pharma or biotech and need a tool that doesn&apos;t exist yet, you can reach me through the 
            <a href="/contact" style={{ color: '#00d4ff', textDecoration: 'none', fontWeight: 600 }}> contact page</a>.
          </p>
          <a href="/contact" className="contactLink">Get in Touch</a>
        </section>
      </div>
    </>
  );
}
