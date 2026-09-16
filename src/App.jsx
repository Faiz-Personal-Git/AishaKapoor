import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Heart,
  Mail,
  Menu,
  Play,
  Sparkles,
  Star,
  X,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import "./App.css";

/* =========================================================
   CREATOR DATA
   Replace this information with the real influencer details.
========================================================= */

const profile = {
  name: "Aisha Kapoor",
  firstName: "Aisha",
  lastName: "Kapoor",
  handle: "@aishakapoor",

  location: "Mumbai, India",

  followers: "1.8M",
  youtubeFollowers: "420K",
  tiktokFollowers: "650K",
  engagement: "6.8%",
  monthlyReach: "2.4M+",

  email: "hello@aishakapoor.demo",

  bio:
    "Beauty creator, storyteller and digital personality creating elevated beauty, skincare, fashion and lifestyle content for a highly engaged community.",

  instagram: "https://instagram.com/",
  youtube: "https://youtube.com/",
  tiktok: "https://tiktok.com/",
  facebook: "https://facebook.com/",
};

/* =========================================================
   IMAGES
========================================================= */

const images = {
  hero:
    "https://images.pexels.com/photos/38004206/pexels-photo-38004206.jpeg?auto=compress&cs=tinysrgb&w=1800",

  portrait:
    "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1400",

  beauty:
    "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=1400",

  skincare:
    "https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=1400",

  makeup:
    "https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=1400",

  fashion:
    "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1400",

  editorial:
    "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1400",

  lifestyle:
    "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1400",

  skincare2:
    "https://images.pexels.com/photos/5938378/pexels-photo-5938378.jpeg?auto=compress&cs=tinysrgb&w=1400",

  campaign:
    "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=1400",
};

/* =========================================================
   DATA
========================================================= */

const expertise = [
  {
    number: "01",
    title: "BEAUTY",
    text: "Makeup looks, beauty discoveries, tutorials and creator-led storytelling.",
    image: images.beauty,
  },
  {
    number: "02",
    title: "SKINCARE",
    text: "Skincare routines, product education and everyday beauty rituals.",
    image: images.skincare,
  },
  {
    number: "03",
    title: "FASHION",
    text: "Editorial styling, fashion moments and visual storytelling.",
    image: images.fashion,
  },
  {
    number: "04",
    title: "LIFESTYLE",
    text: "Travel, wellness, routines and personal stories beyond beauty.",
    image: images.lifestyle,
  },
];

const collaborations = [
  {
    number: "01",
    category: "MAKEUP",
    title: "BEAUTY CAMPAIGN",
    text: "Hero campaign concept, short-form video and social storytelling.",
    image: images.makeup,
  },
  {
    number: "02",
    category: "SKINCARE",
    title: "SKIN FIRST",
    text: "Product education combined with authentic creator storytelling.",
    image: images.skincare2,
  },
  {
    number: "03",
    category: "FASHION",
    title: "EDITORIAL",
    text: "Premium visual content created for digital beauty campaigns.",
    image: images.editorial,
  },
];

const services = [
  {
    number: "01",
    title: "REELS",
    text: "High-retention short-form videos designed around the brand story.",
  },
  {
    number: "02",
    title: "STORIES",
    text: "Personal and conversational product integrations.",
  },
  {
    number: "03",
    title: "UGC",
    text: "Native creator content for paid and organic campaigns.",
  },
  {
    number: "04",
    title: "CAMPAIGNS",
    text: "Complete creative concepts from idea to final delivery.",
  },
];

const testimonials = [
  {
    text: "Aisha brought an incredibly natural energy to the campaign. The content felt premium without losing authenticity.",
    name: "Brand Marketing Team",
    role: "Beauty Campaign",
  },
  {
    text: "The storytelling was exactly what we needed. Beautiful visuals, clear product communication and strong audience response.",
    name: "Creative Director",
    role: "Skincare Launch",
  },
  {
    text: "Professional from concept to delivery. Every piece of content felt intentional and completely on-brand.",
    name: "Social Lead",
    role: "Fashion Collaboration",
  },
];

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <p>{children}</p>
    </div>
  );
}

/* =========================================================
   NAV
========================================================= */

function Header({ menuOpen, setMenuOpen }) {
  const navigate = (id) => {
    setMenuOpen(false);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <>
      <header className="nav">
        <button
          className="nav-logo"
          onClick={() => navigate("home")}
        >
          AK<span>.</span>
        </button>

        <div className="nav-center">
          <span>BEAUTY CREATOR</span>
          <span>EST. 2026</span>
        </div>

        <div className="nav-actions">
          <a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
            className="nav-instagram"
          >
            <FaInstagram />
            <span>INSTAGRAM</span>
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="menu-label">
            MENU / 00
            <Sparkles size={16} />
          </div>

          <div className="menu-items">
            {[
              ["01", "HOME", "home"],
              ["02", "ABOUT", "about"],
              ["03", "EXPERTISE", "expertise"],
              ["04", "WORK", "work"],
              ["05", "SERVICES", "services"],
              ["06", "SOCIAL", "social"],
              ["07", "CONTACT", "contact"],
            ].map(([num, title, id]) => (
              <button
                key={id}
                onClick={() => navigate(id)}
              >
                <small>{num}</small>
                <strong>{title}</strong>
                <ArrowUpRight />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="site">

      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* =====================================================
          NEW HERO
      ===================================================== */}

      <section className="hero" id="home">

        <div className="hero-grid-lines" />

        <div className="hero-top">

          <div className="hero-category">
            CREATOR / BEAUTY / LIFESTYLE
          </div>

          <div className="hero-location">
            <span>BASED IN</span>
            <strong>{profile.location}</strong>
          </div>

        </div>

        {/* Desktop side number */}

        <div className="hero-side-label">
          <span>01</span>
          <span>THE DIGITAL</span>
          <span>BEAUTY JOURNAL</span>
        </div>

        {/* Main portrait */}

        <div className="hero-portrait">

          <div className="portrait-frame">

            <img
              src={images.hero}
              alt={profile.name}
            />

            <div className="portrait-gradient" />

            <div className="portrait-meta">
              <span>PORTRAIT / 001</span>
              <span>BEAUTY EDITORIAL</span>
            </div>

          </div>

          <div className="portrait-circle-text">
            <span>BEAUTY</span>
            <span>CREATOR</span>
            <span>✦</span>
          </div>

        </div>

        {/* Main heading */}

        <div className="hero-heading">

          <div className="hero-eyebrow">
            <Sparkles size={14} />
            <span>THE DIGITAL BEAUTY JOURNAL</span>
          </div>

          <h1>
            <span>Beauty</span>
            <em>with</em>
            <span>purpose.</span>
          </h1>

          <p>
            Beauty creator, storyteller & digital personality
            connecting brands with culture and community.
          </p>

        </div>

        {/* Desktop profile card */}

        <div className="hero-profile-card">

          <div className="profile-card-top">
            <span>CREATOR PROFILE</span>
            <span className="live">
              ● LIVE
            </span>
          </div>

          <div className="profile-avatar">
            <img src={images.portrait} alt="" />
          </div>

          <h3>{profile.name}</h3>

          <span className="profile-handle">
            {profile.handle}
          </span>

          <div className="profile-card-stats">

            <div>
              <strong>{profile.followers}</strong>
              <span>FOLLOWERS</span>
            </div>

            <div>
              <strong>{profile.engagement}</strong>
              <span>ENGAGEMENT</span>
            </div>

          </div>

          <a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
          >
            FOLLOW
            <ArrowUpRight size={14} />
          </a>

        </div>

        {/* Mobile profile information */}

        <div className="hero-mobile-profile">

          <div className="mobile-profile-heading">

            <div>
              <span>CREATOR PROFILE</span>
              <h2>{profile.name}</h2>
              <p>{profile.handle}</p>
            </div>

            <div className="mobile-live">
              <i />
              AVAILABLE
            </div>

          </div>

          <div className="mobile-profile-stats">

            <div>
              <strong>{profile.followers}</strong>
              <span>FOLLOWERS</span>
            </div>

            <div>
              <strong>{profile.engagement}</strong>
              <span>ENGAGEMENT</span>
            </div>

            <div>
              <strong>{profile.monthlyReach}</strong>
              <span>MONTHLY REACH</span>
            </div>

          </div>

        </div>

        {/* Hero CTA */}

        <div className="hero-actions">

          <a
            href="#work"
            className="hero-primary"
          >
            EXPLORE MY WORK
            <ArrowUpRight size={16} />
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="hero-secondary"
          >
            WORK WITH ME
            <ArrowRight size={16} />
          </a>

        </div>

        <div className="hero-bottom">

          <div className="scroll-indicator">
            <ArrowDown size={14} />
            SCROLL TO DISCOVER
          </div>

          <div className="hero-socials">

            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href={profile.youtube}
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>

            <a
              href={profile.tiktok}
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok />
            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="stats-strip">

        <div>
          <strong>{profile.followers}</strong>
          <span>INSTAGRAM COMMUNITY</span>
        </div>

        <div>
          <strong>{profile.youtubeFollowers}</strong>
          <span>YOUTUBE COMMUNITY</span>
        </div>

        <div>
          <strong>{profile.engagement}</strong>
          <span>AVG. ENGAGEMENT</span>
        </div>

        <div>
          <strong>{profile.monthlyReach}</strong>
          <span>MONTHLY REACH</span>
        </div>

      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="about" id="about">

        <div className="section-header">

          <SectionLabel number="01">
            ABOUT THE CREATOR
          </SectionLabel>

          <span>PROFILE / 2026</span>

        </div>

        <div className="about-grid">

          <div className="about-heading">

            <span>HELLO, I'M</span>

            <h2>
              {profile.firstName}
              <i>{profile.lastName}.</i>
            </h2>

            <div className="signature">
              Beauty • Fashion • Lifestyle
            </div>

          </div>

          <div className="about-copy">

            <p className="about-large">
              I create beauty content that feels personal,
              looks beautiful and gives people a reason
              to stop scrolling.
            </p>

            <p>
              {profile.bio}
            </p>

            <p>
              From makeup and skincare to fashion,
              lifestyle and everyday rituals, every piece
              of content is created to feel inspiring,
              relatable and real.
            </p>

            <a href="#contact" className="text-link">
              WORK WITH ME
              <ArrowUpRight size={15} />
            </a>

          </div>

        </div>

        <div className="about-images">

          <div className="about-image-large">
            <img src={images.beauty} alt="Beauty" />
            <span>01 / BEAUTY PORTRAIT</span>
          </div>

          <div className="about-image-small">
            <img src={images.makeup} alt="Makeup" />
          </div>

          <div className="about-note">
            <Sparkles size={17} />
            <p>
              Creating content where
              <strong>beauty meets personality.</strong>
            </p>
          </div>

        </div>

      </section>

      {/* =====================================================
          EXPERTISE
      ===================================================== */}

      <section className="expertise" id="expertise">

        <div className="section-header dark">

          <SectionLabel number="02">
            WHAT I CREATE
          </SectionLabel>

          <span>
            BEAUTY / FASHION / LIFESTYLE
          </span>

        </div>

        <div className="expertise-heading">

          <h2>
            My <i>world</i>
            <br />
            of beauty.
          </h2>

          <p>
            A multi-category creator with a strong focus
            on beauty, visual storytelling and culture.
          </p>

        </div>

        <div className="expertise-grid">

          {expertise.map((item) => (

            <article
              className="expertise-card"
              key={item.number}
            >

              <div className="expertise-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <span>{item.number}</span>

              </div>

              <div className="expertise-content">

                <div className="expertise-title-row">
                  <h3>{item.title}</h3>
                  <ArrowUpRight size={17} />
                </div>

                <p>{item.text}</p>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="philosophy">

        <div className="philosophy-image">
          <img src={images.portrait} alt="" />
        </div>

        <div className="philosophy-content">

          <SectionLabel number="03">
            BEAUTY PHILOSOPHY
          </SectionLabel>

          <div className="philosophy-quote">

            <span>01</span>

            <h2>
              “The best beauty
              <br />
              <i>is the one</i>
              <br />
              that feels like you.”
            </h2>

          </div>

          <div className="philosophy-bottom">

            <p>
              No overcomplication. No pretending.
              Just thoughtful beauty, honest recommendations
              and content that makes people feel confident.
            </p>

            <span>
              <Heart size={16} />
              BEAUTY / CONFIDENCE / COMMUNITY
            </span>

          </div>

        </div>

      </section>

      {/* =====================================================
          AUDIENCE
      ===================================================== */}

      <section className="audience">

        <div className="section-header">

          <SectionLabel number="04">
            AUDIENCE & INSIGHTS
          </SectionLabel>

          <span>COMMUNITY / 2026</span>

        </div>

        <div className="audience-heading">

          <h2>
            Numbers
            <br />
            <i>with meaning.</i>
          </h2>

          <p>
            A growing beauty-first community built around
            trust, discovery and conversations.
          </p>

        </div>

        <div className="audience-grid">

          <div className="audience-main">

            <span>TOTAL COMMUNITY</span>

            <strong>2.2M+</strong>

            <div>
              Instagram + YouTube + TikTok
              <ArrowUpRight size={14} />
            </div>

          </div>

          <div className="audience-chart">

            <div className="chart-heading">
              <span>TOP AUDIENCE</span>
              <span>SHARE</span>
            </div>

            {[
              ["India", "58%"],
              ["USA", "14%"],
              ["UAE", "8%"],
              ["UK", "6%"],
            ].map(([country, value]) => (

              <div className="chart-row" key={country}>

                <div className="chart-name">
                  <span>{country}</span>
                  <strong>{value}</strong>
                </div>

                <div className="chart-bar">
                  <i style={{ width: value }} />
                </div>

              </div>

            ))}

          </div>

          <div className="demographics">

            <div>
              <span>PRIMARY AGE</span>
              <strong>18–34</strong>
            </div>

            <div>
              <span>WOMEN</span>
              <strong>72%</strong>
            </div>

            <div>
              <span>ENGAGEMENT</span>
              <strong>{profile.engagement}</strong>
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          COLLABORATIONS
      ===================================================== */}

      <section className="work" id="work">

        <div className="section-header dark">

          <SectionLabel number="05">
            SELECTED COLLABORATIONS
          </SectionLabel>

          <span>BRANDS / STORIES / CAMPAIGNS</span>

        </div>

        <div className="work-heading">

          <h2>
            Work that
            <br />
            <i>connects.</i>
          </h2>

          <p>
            From product launches to full-scale campaigns,
            every collaboration starts with a story.
          </p>

        </div>

        <div className="collaboration-list">

          {collaborations.map((item) => (

            <article
              className="collaboration"
              key={item.number}
            >

              <span className="collab-number">
                {item.number}
              </span>

              <div className="collab-image">
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className="collab-content">

                <span>{item.category}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

              <ArrowUpRight className="collab-arrow" />

            </article>

          ))}

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="services" id="services">

        <div className="section-label">
          <span>06</span>
          <p>COLLABORATION MENU</p>
        </div>

        <h2>
          Let's make
          <br />
          <i>something beautiful.</i>
        </h2>

        <div className="services-list">

          {services.map((service) => (

            <div
              className="service"
              key={service.number}
            >

              <span>{service.number}</span>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <ArrowUpRight size={18} />

            </div>

          ))}

        </div>

        <div className="service-tags">

          {[
            "BRAND CAMPAIGNS",
            "PRODUCT LAUNCHES",
            "EVENT COVERAGE",
            "LONG-TERM PARTNERSHIPS",
          ].map((item) => (

            <div key={item}>
              <Check size={14} />
              {item}
            </div>

          ))}

        </div>

      </section>

      {/* =====================================================
          JOURNAL
      ===================================================== */}

      <section className="journal">

        <div className="section-header">

          <SectionLabel number="07">
            VISUAL JOURNAL
          </SectionLabel>

          <span>BEAUTY / LIFE / MOMENTS</span>

        </div>

        <div className="journal-heading">

          <h2>
            Behind
            <br />
            <i>the glow.</i>
          </h2>

          <p>
            A collection of beauty moments, campaign frames
            and everyday details.
          </p>

        </div>

        <div className="journal-grid">

          <div className="journal-item tall">
            <img src={images.skincare} alt="" />
            <span>SKINCARE RITUAL</span>
          </div>

          <div className="journal-item">
            <img src={images.makeup} alt="" />
            <span>MAKEUP</span>
          </div>

          <div className="journal-item">
            <img src={images.fashion} alt="" />
            <span>FASHION</span>
          </div>

          <div className="journal-item wide">
            <img src={images.campaign} alt="" />
            <span>CAMPAIGN DAY</span>
          </div>

          <div className="journal-item">
            <img src={images.lifestyle} alt="" />
            <span>LIFESTYLE</span>
          </div>

        </div>

      </section>

      {/* =====================================================
          SOCIAL
      ===================================================== */}

      <section className="social" id="social">

        <div className="section-label">
          <span>08</span>
          <p>FOLLOW THE JOURNEY</p>
        </div>

        <h2>
          Find me
          <br />
          <i>online.</i>
        </h2>

        <div className="social-grid">

          <a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
            className="social-card instagram"
          >
            <FaInstagram />

            <div>
              <span>INSTAGRAM</span>
              <strong>1.8M</strong>
              <small>{profile.handle}</small>
            </div>

            <ArrowUpRight />

          </a>

          <a
            href={profile.youtube}
            target="_blank"
            rel="noreferrer"
            className="social-card youtube"
          >
            <FaYoutube />

            <div>
              <span>YOUTUBE</span>
              <strong>420K</strong>
              <small>{profile.name}</small>
            </div>

            <ArrowUpRight />

          </a>

          <a
            href={profile.tiktok}
            target="_blank"
            rel="noreferrer"
            className="social-card tiktok"
          >
            <FaTiktok />

            <div>
              <span>TIKTOK</span>
              <strong>650K</strong>
              <small>{profile.handle}</small>
            </div>

            <ArrowUpRight />

          </a>

        </div>

      </section>

      {/* =====================================================
          FEATURED VIDEO
      ===================================================== */}

      <section className="featured-video">

        <div className="video-image">

          <img
            src={images.editorial}
            alt="Featured beauty film"
          />

          <div className="video-meta">
            <span>FEATURED</span>
            <span>00:48</span>
          </div>

          <button className="play-button">
            <span>
              <Play size={15} fill="currentColor" />
            </span>
            WATCH FEATURED FILM
          </button>

        </div>

        <div className="video-copy">

          <SectionLabel number="09">
            FEATURED VIDEO
          </SectionLabel>

          <span className="video-kicker">
            BEAUTY FILM / 001
          </span>

          <h2>
            Beauty
            <br />
            in <i>motion.</i>
          </h2>

          <p>
            Creator-led films, product stories, beauty tutorials
            and campaign content designed to live beyond a single post.
          </p>

          <button className="circle-arrow">
            <ArrowUpRight size={19} />
          </button>

        </div>

      </section>

      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <section className="testimonials">

        <div className="section-header">

          <SectionLabel number="10">
            KIND WORDS
          </SectionLabel>

          <span>PARTNERS / CLIENTS</span>

        </div>

        <h2>
          Trusted by
          <br />
          <i>creative teams.</i>
        </h2>

        <div className="testimonial-grid">

          {testimonials.map((item) => (

            <article
              className="testimonial"
              key={item.name}
            >

              <div className="stars">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={12}
                    fill="currentColor"
                  />
                ))}

              </div>

              <p>
                “{item.text}”
              </p>

              <div className="testimonial-author">
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>

            </article>

          ))}

        </div>

      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section className="contact" id="contact">

        <div className="contact-image">
          <img src={images.hero} alt="" />
        </div>

        <div className="contact-overlay" />

        <div className="contact-content">

          <SectionLabel number="11">
            WORK WITH {profile.firstName.toUpperCase()}
          </SectionLabel>

          <span className="contact-kicker">
            BRAND COLLABORATIONS / CAMPAIGNS / UGC
          </span>

          <h2>
            Have a
            <br />
            <i>beautiful</i>
            <br />
            idea?
          </h2>

          <p>
            Tell me what you're building, launching or
            dreaming up. Let's create something your audience
            will remember.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="contact-button"
          >
            <Mail size={16} />
            {profile.email}
            <ArrowUpRight size={18} />
          </a>

        </div>

        <footer>

          <div className="footer-brand">

            <strong>
              AISHA <i>KAPOOR</i>
            </strong>

            <span>
              BEAUTY CREATOR / DIGITAL PERSONALITY
            </span>

          </div>

          <div className="footer-social">

            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href={profile.youtube}
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>

            <a
              href={profile.tiktok}
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok />
            </a>

            <a
              href={profile.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>

          </div>

          <span>
            © 2026 AISHA KAPOOR
          </span>

        </footer>

      </section>

    </main>
  );
}