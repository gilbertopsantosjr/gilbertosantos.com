'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRocket,
  faCode,
  faCloud,
  faBolt,
  faShieldAlt,
  faChartLine,
  faCheckCircle,
  faAward,
  faUsers,
  faLightbulb,
  faCogs,
  faServer,
  faLayerGroup,
  faBars,
  faTimes,
  faEnvelope,
  faArrowRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  return (
    <main className="overflow-x-hidden">
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-white dark:focus:bg-neutral-charcoal focus:text-royal focus:px-4 focus:py-2 focus:rounded-button focus:shadow-elevated"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Hero Section */}
      <HeroSection heroRef={heroRef} heroOpacity={heroOpacity} heroScale={heroScale} />

      {/* Why Work With Me Section */}
      <WhyWorkWithMeSection />

      {/* What You Get Section */}
      <WhatYouGetSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Why Different Section */}
      <WhyDifferentSection />

      {/* Proof & Credibility Section */}
      <ProofSection />

      {/* Portfolio Showcase */}
      <PortfolioSection />

      {/* Who This Is For Section */}
      <WhoThisIsForSection />

      {/* Why Not Cheap Section */}
      <WhyNotCheapSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Final CTA Section */}
      <FinalCTASection />

      {/* Footer */}
      <Footer />
    </main>
  )
}

// Navigation Component
function Navigation({ mobileMenuOpen, setMobileMenuOpen }: { mobileMenuOpen: boolean; setMobileMenuOpen: (open: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#how-it-works', label: 'Process' },
    { href: '#portfolio', label: 'Work' },
    { href: '#pricing', label: 'Pricing' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 dark:bg-neutral-navy-dark/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#"
            className="text-2xl font-display font-bold text-neutral-navy-dark dark:text-white"
            whileHover={{ scale: 1.05 }}
          >
            Gilberto Santos
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-neutral-charcoal dark:text-neutral-light-gray hover:text-royal transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary">
              Book Free Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-charcoal dark:text-neutral-light-gray p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden py-4 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-neutral-charcoal dark:text-neutral-light-gray hover:text-royal transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary block text-center" onClick={() => setMobileMenuOpen(false)}>
              Book Free Call
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

// Hero Section
function HeroSection({ heroRef, heroOpacity, heroScale }: any) {
  return (
    <section ref={heroRef} id="main-content" className="relative min-h-screen flex items-center justify-center pt-20 section overflow-hidden">
      {/* Subtle mesh — confident restraint */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />

      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="container-custom relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge mb-6">20+ Years Experience</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-hero-h1 font-bold text-neutral-navy-dark dark:text-white mb-6"
          >
            Turn Your <span className="text-gradient">Million-Dollar Idea</span> Into a Real Micro-SaaS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-medium-gray dark:text-neutral-cool-gray mb-8 leading-relaxed max-w-[55ch] mx-auto lg:mx-0"
          >
            I&apos;m <span className="font-semibold text-neutral-charcoal dark:text-neutral-light-gray">Gilberto Santos</span>, a Principal Software
            Engineer with 20+ years helping founders turn ambitious ideas into fast, scalable cloud products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 space-y-3"
          >
            {[
              'From idea → MVP → scalable SaaS',
              'Built using the same architectures used by companies like Citi',
              'No bloated agencies. No junior teams. Just one senior engineer who owns the outcome',
            ].map((point, index) => (
              <div key={index} className="flex items-center justify-center lg:justify-start gap-3 text-neutral-charcoal dark:text-neutral-light-gray">
                <FontAwesomeIcon icon={faCheckCircle} className="text-royal w-5 h-5" />
                <span className="text-lg">{point}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
          >
            <a href="#contact" className="btn-primary text-lg px-12 py-5 w-full sm:w-auto text-center shadow-button">
              Book a Free Strategy Call
            </a>
            <a href="#how-it-works" className="group text-lg text-royal font-medium w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 py-5 transition-colors hover:text-royal-dark">
              See How It Works <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-neutral-medium-gray dark:text-neutral-cool-gray"
          >
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faAward} className="text-royal" />
              <span>AWS Certified Solutions Architect</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faAward} className="text-royal" />
              <span>Oracle Certified Professional</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faUsers} className="text-royal" />
              <span>Principal Engineer & Tech Lead</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Professional Photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <div className="relative">
            {/* Main photo */}
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden shadow-elevated border-4 border-white dark:border-neutral-charcoal">
                <Image
                  src="/images/me/P-22.jpg"
                  alt="Gilberto Santos - Principal Software Engineer"
                  width={4104}
                  height={2736}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white dark:bg-neutral-charcoal rounded-2xl shadow-elevated p-6 border border-neutral-cool-gray/20 dark:border-neutral-charcoal">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-royal rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faCode} className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-royal">20+</div>
                    <div className="text-sm text-neutral-medium-gray dark:text-neutral-cool-gray">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      </motion.div>
    </section>
  )
}

// Why Work With Me Section
function WhyWorkWithMeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section section-alt relative" id="about">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-h2 font-bold text-neutral-navy-dark dark:text-white mb-6">
            You Don&apos;t Just Need a Developer.{' '}
            <span className="text-royal">You Need a Product Architect.</span>
          </h2>
          <p className="text-lg text-neutral-medium-gray dark:text-neutral-cool-gray leading-relaxed">
            Most SaaS projects fail not because of bad ideas — but because of wrong tech decisions, systems that
            don&apos;t scale, slow delivery, or teams that don&apos;t understand the business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-neutral-light-gray mb-6 pl-5 border-l-[3px] border-royal">
              20+ Years Building Real-World Systems
            </h3>
            <ul className="space-y-4">
              {[
                'Microservices architecture',
                'Event-driven systems',
                'Serverless platforms',
                'Enterprise-grade software',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-royal w-5 h-5 mt-1" />
                  <span className="text-lg text-neutral-charcoal dark:text-neutral-light-gray">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-lg text-neutral-medium-gray dark:text-neutral-cool-gray">
              This means your Micro-SaaS is built <span className="font-semibold text-royal">right from day one</span>,
              not patched later.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <Image
                src="/images/me/P-11.jpg"
                alt="Gilberto Santos coding"
                width={2593}
                height={1729}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-neutral-charcoal/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-royal rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCode} className="text-white w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-neutral-navy-dark dark:text-white text-sm">Building Real Solutions</p>
                    <p className="text-xs text-neutral-medium-gray dark:text-neutral-cool-gray">Every day, for 20+ years</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// What You Get Section
function WhatYouGetSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: faLayerGroup,
      title: 'SaaS Architecture & System Design',
      description: 'Scalable, cloud-native architecture designed to grow with your business',
      color: 'bg-accent-soft-purple',
    },
    {
      icon: faRocket,
      title: 'MVP Development',
      description: 'Full-stack development from backend APIs to frontend interfaces',
      color: 'bg-accent-soft-peach',
    },
    {
      icon: faCloud,
      title: 'Cloud & AWS Setup',
      description: 'Production-ready infrastructure that scales when you grow',
      color: 'bg-accent-soft-green',
    },
    {
      icon: faCogs,
      title: 'Microservices & Event-Driven',
      description: 'Modern architecture patterns for complex business logic',
      color: 'bg-accent-soft-yellow',
    },
    {
      icon: faServer,
      title: 'CI/CD & Automation',
      description: 'Automated deployment pipelines for rapid iteration',
      color: 'bg-accent-soft-purple',
    },
    {
      icon: faBolt,
      title: 'Production-Ready Systems',
      description: 'Monitoring, logging, and performance optimization from day one',
      color: 'bg-accent-soft-peach',
    },
  ]

  return (
    <section ref={ref} className="section relative" id="services">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold text-neutral-navy-dark dark:text-white mb-6">
            What I Build For Founders
          </h2>
          <p className="text-lg text-neutral-medium-gray dark:text-neutral-cool-gray leading-relaxed max-w-[60ch] mx-auto">
            You&apos;re not getting a freelancer. You&apos;re getting a CTO-level partner who owns the outcome.
          </p>
        </motion.div>

        {/* Featured services */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {services.slice(0, 2).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
            >
              <div className={`${service.color} dark:bg-royal/15 w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                <FontAwesomeIcon icon={service.icon} className="text-royal w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-neutral-charcoal dark:text-neutral-light-gray mb-3">{service.title}</h3>
              <p className="text-neutral-medium-gray dark:text-neutral-cool-gray leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Supporting capabilities — compact, no cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
          {services.slice(2).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
              className="flex gap-4 items-start"
            >
              <FontAwesomeIcon icon={service.icon} className="text-royal w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-charcoal dark:text-neutral-light-gray mb-1">{service.title}</h3>
                <p className="text-sm text-neutral-medium-gray dark:text-neutral-cool-gray leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="card-elevated overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:divide-x divide-neutral-cool-gray">
              <div className="p-8 space-y-6">
                <h4 className="text-lg font-bold text-neutral-medium-gray dark:text-neutral-cool-gray mb-4">You Want</h4>
                {['An idea', 'A landing page', 'A prototype', 'A dev'].map((item, i) => (
                  <p key={i} className="text-neutral-charcoal dark:text-neutral-light-gray">{item}</p>
                ))}
              </div>
              <div className="p-8 space-y-6 bg-gradient-to-br from-accent-soft-purple to-accent-soft-peach dark:from-royal/15 dark:to-accent-soft-peach/10">
                <h4 className="text-lg font-bold text-royal mb-4">You Get</h4>
                {['A real SaaS product', 'A revenue-ready funnel', 'A cloud-native system', 'A CTO-level partner'].map((item, i) => (
                  <p key={i} className="font-semibold text-neutral-navy-dark dark:text-white">{item}</p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// How It Works Section
function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      icon: faLightbulb,
      number: '01',
      title: 'Strategy Call',
      description: 'We map your idea, business model, and technical risks.',
    },
    {
      icon: faCode,
      number: '02',
      title: 'Architecture Design',
      description: 'I design your system using patterns used by large tech companies.',
    },
    {
      icon: faRocket,
      number: '03',
      title: 'Build the MVP',
      description: 'We ship a real, usable product — not a demo.',
    },
    {
      icon: faChartLine,
      number: '04',
      title: 'Launch & Scale',
      description: 'Your SaaS is ready to take users, payments, and growth.',
    },
  ]

  return (
    <section ref={ref} className="section section-alt bg-gradient-royal relative" id="how-it-works">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 max-w-6xl mx-auto items-start">
          {/* Left — Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <h2 className="text-h2 font-bold text-neutral-navy-dark dark:text-white mb-4">
              From Idea to Live Micro-SaaS
            </h2>
            <p className="text-lg text-neutral-medium-gray dark:text-neutral-cool-gray leading-relaxed">
              A proven 4-step process that takes you from concept to market-ready product.
            </p>
          </motion.div>

          {/* Right — Steps timeline */}
          <div className="space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="flex gap-5"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-royal text-white flex items-center justify-center font-display font-bold text-lg">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-royal/40 to-transparent mt-3" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="text-xl font-bold text-neutral-charcoal dark:text-neutral-light-gray mb-2">{step.title}</h3>
                  <p className="text-neutral-medium-gray dark:text-neutral-cool-gray leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Why Different Section
function WhyDifferentSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section relative">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-h2 font-bold text-neutral-navy-dark dark:text-white mb-6">
            Most Developers Write Code.{' '}
            <span className="text-royal">I Design Businesses.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              'Led teams building microservices & serverless systems',
              'Built high-performance cloud applications',
              'Introduced clean code, testing, and scalable architecture',
              'Mentored engineers and ran technical academies',
              'Delivered enterprise-grade systems for companies like Citi',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-royal w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-white w-4 h-4" />
                </div>
                <p className="text-lg text-neutral-charcoal dark:text-neutral-light-gray">{item}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-elevated p-10 bg-gradient-to-br from-royal to-royal-light text-white"
          >
            <div className="w-8 h-1 bg-white/40 rounded-full mb-8" />
            <p className="text-2xl font-display font-semibold leading-relaxed mb-6">
              You get the thinking of a CTO — without hiring one.
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-white/20">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <FontAwesomeIcon icon={faAward} className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">20+ Years Experience</p>
                <p className="text-sm text-white/80">Enterprise & Startup Systems</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Proof Section
function ProofSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    {
      company: 'Citi – Data Analytics Team',
      text: 'Gilberto migrated a huge Java system from Maven to Gradle, cutting build times from 5 minutes to 1 minute — improving the entire team\'s productivity.',
      author: 'Tech Lead',
      role: 'Enterprise Banking',
      rating: 5,
    },
    {
      company: 'Suntico',
      text: 'He mastered a complex system fast, delivered results quickly, and naturally took ownership.',
      author: 'Engineering Manager',
      role: 'SaaS Platform',
      rating: 5,
    },
    {
      company: 'Tech Education',
      text: 'Students credit his teaching for launching their software careers in real government and enterprise roles.',
      author: 'Educational Institution',
      role: 'Software Training',
      rating: 5,
    },
  ]

  return (
    <section ref={ref} className="section section-alt bg-gradient-soft-purple relative">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold text-neutral-navy-dark dark:text-white mb-6">
            People Trust Me with{' '}
            Critical Systems
          </h2>
          <p className="text-lg text-neutral-medium-gray dark:text-neutral-cool-gray leading-relaxed max-w-[55ch] mx-auto">
            From enterprise giants to fast-growing startups
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 w-5 h-5" aria-hidden="true" />
                ))}
              </div>

              {/* Company Badge */}
              <span className="badge-tag mb-4">{testimonial.company}</span>

              {/* Testimonial Text */}
              <p className="text-neutral-charcoal dark:text-neutral-light-gray leading-relaxed mb-6 italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-neutral-cool-gray">
                <p className="font-semibold text-neutral-charcoal dark:text-neutral-light-gray">{testimonial.author}</p>
                <p className="text-sm text-neutral-medium-gray dark:text-neutral-cool-gray">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credentials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {[
            '20+ years experience',
            '50+ projects delivered',
            'Enterprise & startup systems',
          ].map((item, index) => (
            <span key={index} className="px-4 py-2 text-sm font-medium text-royal bg-accent-soft-purple dark:bg-royal/15 dark:text-royal-light rounded-full">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Portfolio Section
function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'Enterprise Microservices Platform',
      category: 'Enterprise Architecture',
      description: 'Scalable microservices platform handling millions of transactions',
      image: '/images/project-1.svg',
      tech: ['AWS', 'Kubernetes', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'SaaS Analytics Dashboard',
      category: 'Product Development',
      description: 'Real-time analytics platform for growing SaaS companies',
      image: '/images/project-2.svg',
      tech: ['React', 'Python', 'Redis', 'AWS Lambda'],
    },
    {
      title: 'Event-Driven Payment System',
      category: 'Financial Technology',
      description: 'Secure, scalable payment processing with event sourcing',
      image: '/images/project-3.svg',
      tech: ['Java', 'Kafka', 'PostgreSQL', 'Docker'],
    },
    {
      title: 'Cloud Migration Project',
      category: 'Cloud Infrastructure',
      description: 'Migrated legacy monolith to cloud-native architecture',
      image: '/images/project-4.svg',
      tech: ['AWS', 'Terraform', 'Jenkins', 'Monitoring'],
    },
    {
      title: 'Real-Time Collaboration Tool',
      category: 'SaaS Product',
      description: 'Collaborative workspace with real-time synchronization',
      image: '/images/project-5.svg',
      tech: ['Next.js', 'WebSockets', 'Redis', 'PostgreSQL'],
    },
  ]

  return (
    <section ref={ref} className="section relative" id="portfolio">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold text-neutral-navy-dark dark:text-white mb-6">
            Selected Work
          </h2>
          <p className="text-lg text-neutral-medium-gray dark:text-neutral-cool-gray leading-relaxed max-w-[55ch] mx-auto">
            Real systems, real impact, real results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`card overflow-hidden p-0 ${index === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className={`relative overflow-hidden bg-neutral-light-gray dark:bg-neutral-navy-dark ${index === 0 ? 'h-56 sm:h-72' : 'h-48 sm:h-56'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={256}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="badge-tag mb-3">{project.category}</span>
                <h3 className="text-xl font-bold text-neutral-charcoal dark:text-neutral-light-gray mb-3">{project.title}</h3>
                <p className="text-neutral-medium-gray dark:text-neutral-cool-gray mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-neutral-light-gray dark:bg-neutral-navy-dark text-neutral-charcoal dark:text-neutral-light-gray rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Who This Is For Section
function WhoThisIsForSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section section-alt relative">
      <div className="container-custom max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold text-neutral-navy-dark dark:text-white mb-6">
            Perfect If You Are...
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Perfect For */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-elevated p-8"
          >
            <div className="w-12 h-12 bg-accent-soft-green dark:bg-royal/20 rounded-xl flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faCheckCircle} className="text-royal w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-neutral-light-gray mb-6">Perfect For:</h3>
            <ul className="space-y-4">
              {[
                'A founder with a SaaS idea',
                'A non-technical entrepreneur',
                'A startup that needs a real system, not a prototype',
                'A business wanting to productize an idea',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-royal w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-lg text-neutral-charcoal dark:text-neutral-light-gray">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not For */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card p-8 border-2 border-neutral-cool-gray dark:border-neutral-navy-dark"
          >
            <div className="w-12 h-12 bg-neutral-light-gray dark:bg-neutral-navy-dark rounded-xl flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faTimes} className="text-neutral-medium-gray dark:text-neutral-cool-gray w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-neutral-light-gray mb-6">Not For:</h3>
            <ul className="space-y-4">
              {[
                'People looking for the cheapest dev',
                'One-page websites',
                'Fiverr-style gigs',
                'Those not serious about building a business',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faTimes} className="text-neutral-medium-gray dark:text-neutral-cool-gray w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-lg text-neutral-medium-gray dark:text-neutral-cool-gray line-through">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Why Not Cheap Section
function WhyNotCheapSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-h2 font-bold text-neutral-navy-dark dark:text-white mb-6">
            Why I&apos;m Not Cheap
            </h2>
            <p className="text-lg text-neutral-charcoal dark:text-neutral-light-gray font-semibold leading-relaxed">
              Because cheap SaaS is the most expensive mistake you can make
            </p>
          </div>

          <div className="card-elevated p-10 mb-12">
            <p className="text-lg text-neutral-charcoal dark:text-neutral-light-gray leading-relaxed mb-8">
              Most people think they&apos;re paying for code. They&apos;re not.
            </p>
            <p className="text-neutral-medium-gray dark:text-neutral-cool-gray leading-relaxed mb-6">
              They&apos;re paying for:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {['Decisions', 'Architecture', 'Scalability', 'Security', 'Speed', 'Ability to grow without rewriting'].map(
                (item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-royal rounded-full" />
                    <span className="text-neutral-charcoal dark:text-neutral-light-gray font-medium">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            {/* What Cheap Devs Sell */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card border-2 border-accent-coral/30"
            >
              <h3 className="text-xl font-bold text-accent-coral mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faTimes} />
                What &quot;Cheap Developers&quot; Sell
              </h3>
              <ul className="space-y-3 text-neutral-medium-gray dark:text-neutral-cool-gray">
                {[
                  'A system that breaks at 100 users',
                  'A database that can\'t scale',
                  'Code no one else understands',
                  'Fragile infrastructure',
                  'An MVP that has to be thrown away',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent-coral mt-1">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-semibold text-neutral-charcoal dark:text-neutral-light-gray">
                You don&apos;t pay less. You just pay twice.
              </p>
            </motion.div>

            {/* What You Get With Gilberto */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card bg-gradient-to-br from-accent-soft-green to-accent-soft-yellow dark:from-royal/10 dark:to-accent-soft-green/10"
            >
              <h3 className="text-xl font-bold text-royal mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faCheckCircle} />
                What You Get With Gilberto
              </h3>
              <ul className="space-y-3 text-neutral-charcoal dark:text-neutral-light-gray">
                {[
                  'Designed microservices & serverless systems',
                  'Built event-driven platforms',
                  'Worked on enterprise systems at Citi',
                  'Led engineering teams',
                  'Set up CI/CD & cloud infrastructure',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-royal mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-semibold text-neutral-navy-dark dark:text-white">
                Built like a real company from day one.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="card-elevated p-10 text-center bg-gradient-to-br from-royal to-royal-light text-white"
          >
            <FontAwesomeIcon icon={faLightbulb} className="w-12 h-12 mb-6 mx-auto opacity-80" />
            <h3 className="text-2xl font-bold mb-3">You&apos;re Not Buying Code</h3>
            <p className="text-lg font-semibold mb-4">You&apos;re buying 20 years of mistakes</p>
            <p className="leading-relaxed text-white/90">
              Every architecture decision I make prevents rewrites, downtime, lost customers, and investor red flags.
              That&apos;s where the real ROI is.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Pricing Section
function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const tiers = [
    {
      name: 'Blueprint',
      subtitle: 'Idea to Blueprint',
      price: '€1,500',
      description: 'Is this SaaS worth building?',
      features: [
        '90-minute deep strategy call',
        'Business & technical feasibility analysis',
        'SaaS architecture blueprint',
        'Tech stack & cloud design',
        'MVP feature list',
        'Development roadmap (cost + timeline)',
      ],
      cta: 'Start with Blueprint',
      highlight: false,
      icon: faLightbulb,
    },
    {
      name: 'MVP Launch',
      subtitle: 'Get Real SaaS Live',
      price: '€12k–€25k',
      description: 'Get a real SaaS into the hands of users',
      features: [
        'Everything from Tier 1',
        'Fully working SaaS MVP',
        'Frontend + backend',
        'Cloud hosting on AWS',
        'Authentication & user accounts',
        'Core product features',
        'CI/CD & production deployment',
        'Basic analytics & monitoring',
        '6–10 weeks timeline',
      ],
      cta: 'Launch My SaaS',
      highlight: true,
      icon: faRocket,
    },
    {
      name: 'Scale & Grow',
      subtitle: 'Turn MVP into a Company',
      price: '€3,500/mo',
      description: 'Turn your MVP into a real company',
      features: [
        'System optimization & scaling',
        'New feature development',
        'Performance tuning',
        'Security & reliability upgrades',
        'Cloud cost optimization',
        'Architecture evolution',
        'CTO-level guidance',
      ],
      cta: 'Scale My Product',
      highlight: false,
      icon: faChartLine,
    },
  ]

  return (
    <section ref={ref} className="section section-alt relative overflow-hidden" id="pricing">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold text-neutral-navy-dark dark:text-white mb-6">
            Choose How Far You Want to Go
          </h2>
          <p className="text-lg text-neutral-medium-gray dark:text-neutral-cool-gray leading-relaxed max-w-[60ch] mx-auto">
            Simple, transparent pricing built around outcomes — not hours
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`card relative flex flex-col ${
                tier.highlight ? 'ring-2 ring-royal shadow-elevated sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="badge">Most Popular</span>
                </div>
              )}

              <div className="mb-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  tier.highlight ? 'bg-royal' : 'bg-accent-soft-purple'
                }`}>
                  <FontAwesomeIcon icon={tier.icon} className={`w-7 h-7 ${
                    tier.highlight ? 'text-white' : 'text-royal'
                  }`} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-charcoal dark:text-neutral-light-gray mb-1">{tier.name}</h3>
                <p className="text-neutral-medium-gray dark:text-neutral-cool-gray text-sm mb-4">{tier.subtitle}</p>
                <div className="mb-4">
                  <span className="text-4xl font-display font-bold text-royal">{tier.price}</span>
                </div>
                <p className="text-neutral-medium-gray dark:text-neutral-cool-gray">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-royal w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-charcoal dark:text-neutral-light-gray">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 px-6 rounded-button font-medium transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-royal text-white hover:bg-royal-light hover:shadow-button'
                    : 'bg-transparent text-royal border-2 border-royal hover:bg-royal hover:text-white'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-accent-soft-green dark:bg-royal/20 rounded-full">
            <FontAwesomeIcon icon={faShieldAlt} className="text-royal w-6 h-6" />
            <span className="text-neutral-charcoal dark:text-neutral-light-gray font-semibold">
              Your success is guaranteed. No results? No payment.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Final CTA Section
function FinalCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section relative overflow-hidden" id="contact">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal to-royal-dark" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container-custom relative z-10 text-center"
      >
        <div className="max-w-3xl mx-auto text-white">
          {/* Professional photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/images/me/P-22.jpg"
                alt="Gilberto Santos"
                width={256}
                height={256}
                sizes="128px"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <h2 className="text-h2 font-bold mb-6">
            Let&apos;s Turn Your Idea Into a Real Business
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-white/90">
            Book a free call. I&apos;ll tell you if your idea is technically viable, what it would take to build,
            and what mistakes to avoid.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="mailto:chat@gilbertosantos.com"
              className="bg-white text-royal px-10 py-4 rounded-button font-semibold text-lg hover:bg-neutral-cool-gray transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl w-full sm:w-auto text-center"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Book Your Free Strategy Call
            </a>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            <p className="text-lg">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <a href="mailto:chat@gilbertosantos.com" className="hover:underline">
                chat@gilbertosantos.com
              </a>
            </p>
            <p className="text-lg">
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
              <a
                href="https://linkedin.com/in/gilbertopsantosjr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @gilbertopsantosjr
              </a>
            </p>
          </div>

          <p className="text-sm text-white/75">
            No sales pitch. Just honest technical advice from someone who&apos;s built this a hundred times.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

// Footer
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-navy-dark dark:bg-[#0D0F18] text-white section">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-4">Gilberto Santos</h3>
            <p className="text-neutral-light-gray leading-relaxed mb-6">
              Principal Software Engineer helping founders turn ambitious ideas into scalable cloud products.
              20+ years of enterprise and startup experience.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/gilbertopsantosjr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center hover:bg-royal transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/gilbertosantos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center hover:bg-royal transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/gilbertosantos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center hover:bg-royal transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-neutral-light-gray">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  SaaS Architecture
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  MVP Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Cloud & AWS
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Microservices
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-neutral-light-gray">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-light-gray text-sm">
              © {currentYear} Gilberto Santos. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-neutral-light-gray">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
