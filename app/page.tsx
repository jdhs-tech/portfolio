"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, ChevronDown, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import "./styles/animations.css"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-2xl font-bold">
              Madison
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">AI Solutions</div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Comprehensive AI services from strategy to implementation
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </div>
                      <NavigationMenuLink asChild>
                        <a
                          href="/"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Custom Software</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Tailored solutions for your business needs
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a
                          href="/"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Cloud Solutions</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Scalable and secure cloud infrastructure
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/case-studies" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Case Studies
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button>Contact Us</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <motion.div style={{ opacity, scale }} className="container mx-auto px-4 pt-32 pb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Empowering Business Through Technology
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              We specialize in AI consulting, custom software development, and comprehensive technology solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                View Case Studies
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Technology Team Collaboration"
              width={1200}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
          <ChevronDown className="w-6 h-6 text-white animate-bounce mx-auto" />
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gradient-to-b from-background via-background/50 to-[#020817]/50 relative overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-center text-lg font-medium text-muted-foreground mb-12 px-4">
            Trusted by Leading Nigerian Companies
          </h2>
          <div className="relative w-full overflow-hidden gradient-mask">
            <div className="flex space-x-16 animate-scroll">
              {/* First set of logos */}
              {[...companies, ...companies].map((company, index) => (
                <div key={`${company.name}-${index}`} className="flex items-center justify-center min-w-[160px] group">
                  <div className="relative w-32 h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-[#020817] via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive technology solutions tailored to drive your business forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-lg bg-card hover:bg-card/80 transition-all border"
              >
                <div className="mb-6">
                  <service.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="group-hover:translate-x-2 transition-transform">
                  Learn More
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-b from-background via-[#020817] to-[#020817] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20at%209.40.27%E2%80%AFAM-373LVsiWeCMUoIp1mD84gCtt4nlzTn.png')] opacity-5 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white bg-clip-text">Industries We Serve</h2>
            <p className="text-lg text-gray-400">Delivering innovative solutions across various sectors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl bg-[#0a101f]/40 border border-gray-800/50 backdrop-blur-sm hover:bg-[#0a101f]/60 transition-all duration-300">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 rounded-full bg-[#1a1f2e] flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all duration-300" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <industry.icon className="w-8 h-8 text-primary relative z-10" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-to-b from-[#020817] via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-lg text-muted-foreground">See how we've helped businesses transform with technology</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Card>
                  <CardContent className="p-0">
                    <div className="relative h-64 mb-6">
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {study.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{study.description}</p>
                      <Button variant="ghost" className="group-hover:translate-x-2 transition-transform">
                        Read Case Study
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-background via-[#020817] to-[#020817] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20at%209.55.08%E2%80%AFAM-ypTTp4IoNpltt8VmBpSgg192rU6zFx.png')] opacity-5 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">What people say</h2>
            <p className="text-lg text-gray-400">
              Discover what our satisfied customers have to say about their experiences with our solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl bg-[#0a101f]/40 border border-gray-800/50 backdrop-blur-sm hover:bg-[#0a101f]/60 transition-all duration-300">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-800/50">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">{testimonial.title}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-300 leading-relaxed">"{testimonial.quote}"</blockquote>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#020817] via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our technology solutions can help you achieve your business goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Madison</h3>
              <p className="text-sm text-muted-foreground">
                Empowering businesses with innovative technology solutions
              </p>
              <div className="flex space-x-4">{/* Social Media Icons */}</div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    AI Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Custom Software
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Cybersecurity
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">Lagos, Nigeria</li>
                <li>
                  <Link href="mailto:contact@madison.com" className="text-sm text-muted-foreground hover:text-primary">
                    contact@madison.com
                  </Link>
                </li>
                <li>
                  <Link href="tel:+2341234567890" className="text-sm text-muted-foreground hover:text-primary">
                    +234 123 456 7890
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Madison. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const companies = [
  { name: "Afrinvest", logo: "/logos/afrinvest.svg" },
  { name: "GTBank", logo: "/logos/gtbank.svg" },
  { name: "Access Bank", logo: "/logos/access-bank.svg" },
  { name: "Dangote", logo: "/logos/dangote.svg" },
  { name: "Paystack", logo: "/logos/paystack.svg" },
  { name: "PiggyVest", logo: "/logos/piggyvest.svg" },
]

const services = [
  {
    title: "AI Strategy & Consulting",
    description: "Transform your business with cutting-edge AI solutions tailored to your needs.",
    features: ["AI Readiness Assessment", "Custom AI Strategy Development", "Implementation Roadmap", "ROI Analysis"],
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
        <path d="M12 12 2.5 2.5" />
        <path d="m2 2 20 20" />
      </svg>
    ),
  },
  {
    title: "Custom Software Development",
    description: "Build scalable and efficient software solutions that drive your business forward.",
    features: ["Web & Mobile Applications", "Enterprise Software", "API Development", "Legacy System Modernization"],
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="m7 8-4 4 4 4" />
        <path d="m17 8 4 4-4 4" />
        <path d="m14 4-4 16" />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    description: "Leverage the power of cloud computing for enhanced scalability and performance.",
    features: ["Cloud Migration", "Infrastructure Optimization", "Cloud Security", "24/7 Monitoring"],
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
]

const industries = [
  {
    name: "Financial Services",
    description: "Empowering banks, fintech, and insurance companies with secure, scalable solutions",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M2 17a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V8.32a5 5 0 0 0-2.64-4.4L12 0 4.64 3.92A5 5 0 0 0 2 8.32Z" />
        <path d="m6 12 6-3 6 3" />
        <path d="M12 9v8" />
      </svg>
    ),
  },
  {
    name: "Healthcare",
    description: "Advancing patient care with AI-powered diagnostics and secure health information systems",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    name: "E-commerce",
    description: "Building seamless shopping experiences with scalable platforms and smart inventory systems",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
  },
]

const caseStudies = [
  {
    title: "AI-Powered Customer Service Transformation",
    description:
      "How we helped a leading Nigerian bank reduce response time by 70% and improve customer satisfaction scores by 35% using AI chatbots.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    tags: ["AI", "Banking", "Customer Service"],
  },
  {
    title: "Cloud Migration Success Story",
    description:
      "Modernizing legacy systems for a major telecommunications provider, resulting in 40% cost reduction and 99.99% uptime.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    tags: ["Cloud", "Telecom", "Digital Transformation"],
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Small Business Owner",
    quote:
      "Since integrating this solution into our workflow, we've experienced a significant improvement in efficiency and collaboration.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "David Patel",
    title: "Project Manager",
    quote:
      "I've tested numerous options in this category, but one stands out for its intuitive design and comprehensive functionality.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Emily Carter",
    title: "Operations Manager",
    quote:
      "The tool we've adopted has surpassed our expectations, providing invaluable insights and support as our business continues to grow.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q80",
  },
]
