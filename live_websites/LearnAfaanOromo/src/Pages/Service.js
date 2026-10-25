import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Service.css';
import { YOUTUBE_URL } from '../siteConfig';
import usePageTitle from '../usePageTitle';
import PageHeader from '../Components/PageHeader';
import CtaBanner from '../Components/CtaBanner';

const Service = () => {
  usePageTitle('Services');

  const services = [
    {
      level: "Level 01",
      title: "Beginner Courses",
      description: "Perfect for those who are new to the Oromo language. Learn the basics of pronunciation, common phrases, and fundamental grammar.",
      icon: "fas fa-graduation-cap"
    },
    {
      level: "Level 02",
      title: "Intermediate Learning",
      description: "Build on your foundation with more complex sentence structures, expanded vocabulary, and conversational practice.",
      icon: "fas fa-comments"
    },
    {
      level: "Level 03",
      title: "Advanced Mastery",
      description: "Refine your skills with advanced grammar, idiomatic expressions, and cultural nuances to achieve near-native fluency.",
      icon: "fas fa-award"
    }
  ];

  const learningTopics = [
    {
      title: "Alphabet & Pronunciation",
      description: "Master the Oromo alphabet (Qubee) and pronunciation with interactive YouTube guides.",
      icon: "fas fa-font"
    },
    {
      title: "Vocabulary Building",
      description: "Expand your Oromo vocabulary with thematic word lists and memory techniques.",
      icon: "fas fa-book-open"
    },
    {
      title: "Grammar Fundamentals",
      description: "Learn essential grammar rules through clear explanations and practical examples.",
      icon: "fas fa-pencil-alt"
    },
    {
      title: "Conversation Practice",
      description: "Develop speaking confidence with guided dialogues and real-life scenarios.",
      icon: "fas fa-comments"
    },
    {
      title: "Cultural Insights",
      description: "Understand Oromo traditions, customs, and cultural context to enhance your language skills.",
      icon: "fas fa-globe-africa"
    },
    {
      title: "Reading & Writing",
      description: "Develop literacy skills with progressive reading materials and writing exercises.",
      icon: "fas fa-pen-fancy"
    },
    {
      title: "Listening Comprehension",
      description: "Improve your ability to understand spoken Oromo through audio exercises and native speaker recordings.",
      icon: "fas fa-headphones"
    },
    {
      title: "Idioms & Expressions",
      description: "Learn common Oromo idioms and expressions to sound more natural in your conversations.",
      icon: "fas fa-comment-dots"
    },
    {
      title: "Practical Applications",
      description: "Apply your Oromo language skills in real-world situations through role-playing and practical exercises.",
      icon: "fas fa-briefcase"
    }
  ];

  const methods = [
    {
      title: "Online Self-Study",
      description: "Learn at your own pace with free YouTube lessons you can pause, rewind and revisit whenever you like.",
      icon: "fas fa-laptop"
    },
    {
      title: "Virtual Classrooms",
      description: "Join scheduled live sessions with Abdullah for guided learning, real-time feedback and group interaction.",
      icon: "fas fa-video"
    },
    {
      title: "One-on-One Tutoring",
      description: "Get personalised attention and a learning plan tailored to your goals. Get in touch to arrange a session.",
      icon: "fas fa-user-friends"
    }
  ];

  return (
    <div className="services-page">
      <PageHeader
        eyebrow="Services"
        title="Learn Oromo your way"
        subtitle="Comprehensive Oromo language learning for every level, from your first word to fluent conversation."
      />

      {/* Learning Pathways */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Pathways</span>
            <h2>Choose your starting point</h2>
            <p>Pick the journey that fits your goals</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div className="card pathway-card" key={service.title}>
                <div className="pathway-top">
                  <span className="icon-chip"><i className={service.icon} aria-hidden="true"></i></span>
                  <span className="level-tag">{service.level}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="link-arrow">
                  Start learning <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Topics */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Curriculum</span>
            <h2>What you'll learn</h2>
            <p>A complete curriculum covering every aspect of the Oromo language</p>
          </div>
          <div className="topics-grid">
            {learningTopics.map((topic) => (
              <div className="card topic-card" key={topic.title}>
                <span className="icon-chip"><i className={topic.icon} aria-hidden="true"></i></span>
                <div>
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Methods */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Formats</span>
            <h2>Ways to learn</h2>
            <p>Effective approaches to language acquisition</p>
          </div>
          <div className="services-grid">
            {methods.map((method) => (
              <div className="card" key={method.title}>
                <span className="icon-chip"><i className={method.icon} aria-hidden="true"></i></span>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to start learning Oromo?"
        text="Start with the free YouTube lessons, or get in touch about live classes and one-on-one tutoring."
      >
        <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
          <i className="fab fa-youtube" aria-hidden="true"></i> Watch Free Lessons
        </a>
        <Link to="/contact" className="btn-secondary">Ask About Tutoring</Link>
      </CtaBanner>
    </div>
  );
};

export default Service;
