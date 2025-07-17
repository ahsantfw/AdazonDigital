"use client"

import { useState } from "react"
import emailjs from '@emailjs/browser'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, ArrowRight, ArrowDown, CheckCircle, Play, Database, Eye, Target, TrendingUp, Shield, Users, BarChart3, Zap, Car, CreditCard, Building2, ShoppingBag, Monitor, Video, Smartphone, Star, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

// ContactForm component
function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    const formData = new FormData(e.currentTarget)
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      company: formData.get('company'),
      budget: formData.get('budget'),
      message: formData.get('message'),
    }

    try {
      emailjs.init("5-8ru7u7CHS1Z2pcE")
      const templateParams = {
        to_email: 'support@adcertify.com,GinaMegas@gmail.com',
        from_name: data.fullName,
        from_email: data.email,
        company: data.company,
        budget: data.budget,
        message: data.message,
        reply_to: data.email,
      }
      await emailjs.send(
        'service_ey9tvz7',
        'template_9v5ifh6',
        templateParams
      )
      setSubmitStatus('success')
      const form = e.currentTarget as HTMLFormElement
      if (form) {
        form.reset()
      }
    } catch (error) {
      console.error('Email send failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-xl">
      <Card className="border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Send Us a Message</CardTitle>
          <CardDescription className="text-base">
            Tell us about your advertising goals and we'll get back to you within 24 hours
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium">
                Full Name *
              </label>
              <Input id="fullName" name="fullName" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address *
              </label>
              <Input id="email" name="email" type="email" placeholder="john@company.com" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium">
                Company Name *
              </label>
              <Input id="company" name="company" placeholder="Your Company" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="budget" className="text-sm font-medium">
                Monthly Advertising Budget
              </label>
              <select name="budget" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option value="">Select budget range</option>
                <option value="1k-10k">$1K - $10K</option>
                <option value="10k-30k">$10K - $30K</option>
                <option value="30k-50k">$30K - $50K</option>
                <option value="50k-100k">$50K - $100K</option>
                <option value="100k-250k">$100K - $250K</option>
                <option value="250k+">$250K+</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message (Optional)
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your advertising goals and challenges..."
                className="min-h-[120px]"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-center">
                  Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-center">
                  Sorry, there was an error sending your message. Please try again or contact us directly.
                </p>
              </div>
            )}
          </form>
        </CardContent>
        <div className="mt-0 text-center">
          <span className="text-sm text-gray-500">Or Call directly: </span>
          <a href="tel:5629009203" className="text-base font-semibold text-blue-600 hover:underline inline-block align-middle">562-900-9203</a>
          <span className="text-sm text-gray-500"> (Gina Megas)</span>
        </div>
        <div className="mt-0 text-center">&nbsp;</div>
      </Card>
    </div>
  )
}

export default function AdazonDigitalHome() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto max-w-screen-xl flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-3">
          {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg">
              AD
            </div> */}
            <Image
              src="/logo.png"
              alt="Adazon Digital Logo"
              width={56}
              height={56}
              className="rounded-full shadow-md"
            />
            <span className="text-xl font-bold text-gray-900">Adazon Digital</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
              Home
            </Link>
            {/*
            <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            */}
            <Link href="#services" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </Link>
            {/*
            <Link
              href="#industries"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Industries
            </Link>
            */}
            {/*
            <Link
              href="#case-studies"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Case Studies
            </Link>
            */}
            <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              asChild
              size="lg"
              className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all"
            >
              <Link href="#contact">
                Book a Consultation
              </Link>
            </Button>
            {/*
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
            */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-10 md:py-16 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-digital-marketing.jpg"
              alt="Digital marketing team collaborating in a modern office with data visualizations"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-blue-800/90"></div>
          </div>

          {/* Floating Animation Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-400/20 rounded-full animate-pulse"></div>
          </div>

          <div className="container mx-auto max-w-screen-xl px-4 md:px-6 relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center justify-center">
              <div className="space-y-8 animate-fade-in-up">
                <div className="space-y-6">
                  <Badge variant="secondary" className="bg-blue-50/90 text-blue-700 border-blue-200">
                    🚀 The Future of Digital Advertising
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
                    Future-Proof Your Advertising in a
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                      {" "}
                      Cookie-less World
                    </span>
                  </h1>
                  <p className="text-xl text-blue-100 max-w-[600px]">
                    Unlock the power of Amazon's first-party data and advanced targeting. Drive measurable results for
                    enterprise brands with budgets that demand performance.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-6"
                  >
                    <Link href="#contact" className="flex items-center">
                      Book a Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  {/* <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button> */}
                </div>
                <div className="flex items-center space-x-8 text-sm text-blue-200">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-cyan-400" />
                    <span>Enterprise-focused</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-cyan-400" />
                    <span>$30K+ monthly budgets</span>
                  </div>
                </div>
              </div>
              <div className="relative animate-fade-in-right flex items-center justify-center h-full self-center mt-0">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-3xl blur-3xl opacity-30"></div>
                <div className="relative bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center max-w-md mx-auto">
                  <h3 className="text-3xl font-bold text-blue-700 mb-2 text-center">Advertising Agency</h3>
                  <Image
                    src="/images/digital_marketing_croped.jpg"
                    alt="Modern advertising agency marketing illustration"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg mb-4 w-full h-auto object-contain"
                    priority
                  />
                  <p className="text-gray-700 text-center max-w-md mb-4">
                    Expert Amazon campaign management—privacy-safe, cookie-less results.
                  </p>
                  <div className="flex flex-row justify-center items-end gap-6 w-full max-w-xl mt-1">
                    <div className="flex flex-col items-center text-center">
                      <Database className="h-7 w-7 text-blue-600 mb-1" />
                      <span className="text-xs font-medium text-gray-700 leading-tight">First-Party<br />Data</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Eye className="h-7 w-7 text-purple-600 mb-1" />
                      <span className="text-xs font-medium text-gray-700 leading-tight">Cross-Device<br />Reach</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Target className="h-7 w-7 text-cyan-600 mb-1" />
                      <span className="text-xs font-medium text-gray-700 leading-tight">Campaign<br />Precision</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <CheckCircle className="h-7 w-7 text-green-600 mb-1" />
                      <span className="text-xs font-medium text-gray-700 leading-tight">Enterprise<br />Result</span>
                    </div>
                  </div>
                </div>
                {/*
                <div className="relative bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <Target className="h-8 w-8 text-blue-600" />
                      <span className="text-lg font-semibold">Amazon DSP Dashboard</span>
                    </div>
                    <Image
                      src="/images/dashboard-analytics.png"
                      alt="Amazon DSP dashboard analytics preview"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <Database className="h-6 w-6 text-blue-600 mb-2" />
                        <div className="text-sm font-medium">First-Party Data</div>
                        <div className="text-xs text-gray-600">300M+ customers</div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <Eye className="h-6 w-6 text-purple-600 mb-2" />
                        <div className="text-sm font-medium">Cross-Device Reach</div>
                        <div className="text-xs text-gray-600">Real-time targeting</div>
                      </div>
                    </div>
                  </div>
                </div>
                */}
              </div>
            </div>
          </div>
        </section>

        {/* The Cookie-less Revolution */}
        <section className="py-20 bg-gray-50 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="text-center space-y-4 mb-16 animate-fade-in-up">
              <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200">
                Industry Transformation
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                The Cookie-less Revolution is Here
              </h2>
              <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
                Google's phase-out of third-party cookies by 2025 is reshaping digital advertising forever
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
              <div className="relative animate-fade-in-left">
                <Image
                  src="/images/cookie-deprecation-timeline.jpg"
                  alt="Cookie Deprecation Timeline"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>

              <div className="animate-fade-in-right">
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                  <div className="space-y-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                        1
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">2024: Chrome Begins Cookie Deprecation</h3>
                        <p className="text-gray-600">
                          Google starts removing third-party cookies for 1% of Chrome users
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-6">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white font-bold text-sm">
                        2
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">2025: Full Cookie Elimination</h3>
                        <p className="text-gray-600">
                          Complete removal of third-party cookies across all Chrome browsers
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-6">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white font-bold text-sm">
                        3
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">The New Reality</h3>
                        <p className="text-gray-600">
                          Brands must pivot to first-party data and walled garden platforms
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="mt-12 border-l-4 border-l-blue-600 bg-blue-50">
                  <CardContent className="pt-6">
                    <blockquote className="text-lg italic text-gray-700 mb-4">
                      "The deprecation of third-party cookies represents the biggest shift in digital advertising since
                      the introduction of programmatic buying. Brands that adapt to first-party data strategies will
                      dominate the next decade."
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <Image
                        src="/images/industry-expert.jpg"
                        alt="Industry Expert"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="text-sm text-gray-600">— Digital Marketing Institute, 2024</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Amazon */}
        <section className="py-12 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="text-center space-y-4 mb-8 animate-fade-in-up">
              <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                The Amazon Advantage
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                Why Amazon's Data Ecosystem Wins
              </h2>
              <p className="text-lg text-gray-600 max-w-[800px] mx-auto">
                Amazon's first-party data and behavioral targeting capabilities set it apart in the post-cookie world
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group animate-fade-in-up">
                <CardHeader>
                  <div className="relative mb-4">
                    <Image
                      src="/images/deterministic-data.png"
                      alt="Deterministic Data Visualization"
                      width={200}
                      height={200}
                      className="rounded-lg mx-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-lg"></div>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Database className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Deterministic Data</CardTitle>
                  <CardDescription className="text-base">
                    Real purchase behavior and shopping intent from 300+ million active customers
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group animate-fade-in-up">
                <CardHeader>
                  <div className="relative mb-4">
                    <Image
                      src="/images/probabilistic-insights.png"
                      alt="Probabilistic Insights Analytics"
                      width={200}
                      height={150}
                      className="rounded-lg mx-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-lg"></div>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Probabilistic Insights</CardTitle>
                  <CardDescription className="text-base">
                    Advanced machine learning models predict customer behavior and lifetime value
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group animate-fade-in-up">
                <CardHeader>
                  <div className="relative mb-4">
                    <Image
                      src="/images/real-time-signals.jpg"
                      alt="Real-Time Signals Dashboard"
                      width={200}
                      height={150}
                      className="rounded-lg mx-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent rounded-lg"></div>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">Real-Time Signals</CardTitle>
                  <CardDescription className="text-base">
                    Live shopping signals and contextual targeting across Amazon's ecosystem
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits of Amazon DSP */}
        <section id="services" className="py-12 bg-gray-50 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="text-center space-y-4 mb-8 animate-fade-in-up">
              <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200">
                Amazon DSP Benefits
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                Unlock Amazon DSP's Full Potential
              </h2>
              <p className="text-lg text-gray-600 max-w-[800px] mx-auto">
                Access premium inventory and advanced targeting capabilities across Amazon's advertising ecosystem
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in-up">
                <CardHeader className="text-center">
                  <div className="relative mb-4 h-[150px] flex items-center justify-center">
                    <Image
                      src="/images/first-party-data.jpg"
                      alt="First-Party Data Access"
                      width={250}
                      height={150}
                      className="rounded-lg mx-auto object-contain"
                    />
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Database className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">First-Party Data Access</CardTitle>
                  <CardDescription>
                    Leverage Amazon's rich customer data for precise targeting and personalization
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in-up">
                <CardHeader className="text-center">
                  <div className="relative mb-4 h-[150px] flex items-center justify-center">
                    <Image
                      src="/images/cross-device-reach.jpg"
                      alt="Cross-Device Reach"
                      width={250}
                      height={150}
                      className="rounded-lg mx-auto object-contain"
                    />
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Smartphone className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Cross-Device Reach</CardTitle>
                  <CardDescription>
                    Connect with customers across all devices and touchpoints in their journey
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in-up">
                <CardHeader className="text-center">
                  <div className="relative mb-4">
                    <Image
                      src="/images/advanced-reporting.png"
                      alt="Advanced Reporting"
                      width={200}
                      height={100}
                      className="rounded-lg mx-auto"
                    />
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <BarChart3 className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Advanced Reporting</CardTitle>
                  <CardDescription>
                    Comprehensive analytics and attribution modeling for campaign optimization
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in-up">
                <CardHeader className="text-center">
                  <div className="relative mb-4">
                    <Image
                      src="/images/customer-segmentation.png"
                      alt="Custom Audience Segmentation"
                      width={250}
                      height={150}
                      className="rounded-lg mx-auto"
                    />
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Custom Audience Segmentation</CardTitle>
                  <CardDescription>
                    Build sophisticated audience segments based on purchase behavior and intent
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        {/*
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="text-center space-y-4 mb-16 animate-fade-in-up">
              <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                Our Process
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">How We Drive Results</h2>
              <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
                Our proven 4-step process delivers measurable ROI for enterprise brands
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              <div className="text-center space-y-4 animate-fade-in-up">
                <div className="relative mb-6">
                  <Image
                    src="/images/consultation-process.webp"
                    alt="Consultation Process"
                    width={250}
                    height={200}
                    className="rounded-lg mx-auto shadow-lg"
                  />
                  <div className="absolute -top-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl">
                    1
                  </div>
                </div>
                <div className="space-y-2">
                  <Users className="h-8 w-8 text-blue-600 mx-auto" />
                  <h3 className="text-lg font-semibold">Consultation</h3>
                  <p className="text-gray-600 text-sm">
                    Deep-dive analysis of your current advertising strategy and goals
                  </p>
                </div>
              </div>

              <div className="text-center space-y-4 animate-fade-in-up">
                <div className="relative mb-6">
                  <Image
                    src="/images/strategy-development.jpg"
                    alt="Strategy Development"
                    width={250}
                    height={200}
                    className="rounded-lg mx-auto shadow-lg"
                  />
                  <div className="absolute -top-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl">
                    2
                  </div>
                </div>
                <div className="space-y-2">
                  <Target className="h-8 w-8 text-purple-600 mx-auto" />
                  <h3 className="text-lg font-semibold">Strategy</h3>
                  <p className="text-gray-600 text-sm">
                    Custom Amazon DSP strategy tailored to your industry and objectives
                  </p>
                </div>
              </div>

              <div className="text-center space-y-4 animate-fade-in-up">
                <div className="relative mb-6">
                  <Image
                    src="/images/campaign-launch.jpg"
                    alt="Campaign Launch"
                    width={250}
                    height={200}
                    className="rounded-lg mx-auto shadow-lg"
                  />
                  <div className="absolute -top-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-orange-600 text-white font-bold text-xl">
                    3
                  </div>
                </div>
                <div className="space-y-2">
                  <Zap className="h-8 w-8 text-pink-600 mx-auto" />
                  <h3 className="text-lg font-semibold">Campaign Launch</h3>
                  <p className="text-gray-600 text-sm">
                    Execute campaigns with precision targeting and creative optimization
                  </p>
                </div>
              </div>

              <div className="text-center space-y-4 animate-fade-in-up">
                <div className="relative mb-6">
                  <Image
                    src="/images/reporting-analytics.jpg"
                    alt="Reporting & Analytics"
                    width={250}
                    height={200}
                    className="rounded-lg mx-auto shadow-lg"
                  />
                  <div className="absolute -top-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-600 to-green-600 text-white font-bold text-xl">
                    4
                  </div>
                </div>
                <div className="space-y-2">
                  <BarChart3 className="h-8 w-8 text-orange-600 mx-auto" />
                  <h3 className="text-lg font-semibold">Reporting</h3>
                  <p className="text-gray-600 text-sm">
                    Comprehensive performance analysis and continuous optimization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        */}

        {/* Industries We Serve */}
        {/*
        <section id="industries" className="py-20 bg-gray-50 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="text-center space-y-4 mb-16 animate-fade-in-up">
              <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                Industries
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Industries We Serve</h2>
              <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
                We help large companies maximize ROI with Amazon Ads across diverse industries
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center p-6 group animate-fade-in-up">
                <div className="relative mb-6">
                  <Image
                    src="/images/automotive.webp"
                    alt="Automotive Industry"
                    width={200}
                    height={150}
                    className="rounded-lg mx-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-lg"></div>
                </div>
                <Car className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Automotive</h3>
                <p className="text-sm text-gray-600">Drive consideration and sales for auto brands</p>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center p-6 group animate-fade-in-up">
                <div className="relative mb-6">
                  <Image
                    src="/images/finance.webp"
                    alt="Finance Industry"
                    width={200}
                    height={150}
                    className="rounded-lg mx-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-lg"></div>
                </div>
                <CreditCard className="h-12 w-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Finance</h3>
                <p className="text-sm text-gray-600">Reach high-value financial services prospects</p>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center p-6 group animate-fade-in-up">
                <div className="relative mb-6">
                  <Image
                    src="/images/enterprise.webp"
                    alt="Enterprise Industry"
                    width={200}
                    height={150}
                    className="rounded-lg mx-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-lg"></div>
                </div>
                <Building2 className="h-12 w-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Enterprise</h3>
                <p className="text-sm text-gray-600">B2B solutions for enterprise software and services</p>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center p-6 group animate-fade-in-up">
                <div className="relative mb-6">
                  <Image
                    src="/images/retail.jpg"
                    alt="Retail Industry"
                    width={200}
                    height={150}
                    className="rounded-lg mx-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent rounded-lg"></div>
                </div>
                <ShoppingBag className="h-12 w-12 text-orange-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Retail</h3>
                <p className="text-sm text-gray-600">Boost brand awareness and drive store traffic</p>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center p-6 group animate-fade-in-up">
                <div className="relative mb-6">
                  <Image
                    src="/images/healthcare.jpg"
                    alt="Healthcare Industry"
                    width={200}
                    height={150}
                    className="rounded-lg mx-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-lg"></div>
                </div>
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Healthcare</h3>
                <p className="text-sm text-gray-600">Compliant advertising for healthcare brands</p>
              </Card>
            </div>
          </div>
        </section>
        */}

        {/* Case Studies */}
        {/*
        <section id="case-studies" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="text-center space-y-4 mb-16 animate-fade-in-up">
              <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                Success Stories
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Proven Results for Enterprise Brands
              </h2>
              <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
                See how we've helped major brands achieve exceptional ROI with Amazon DSP
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in-up">
                <CardHeader>
                  <div className="relative mb-6">
                    <Image
                      src="/images/automotive.webp"
                      alt="Automotive Campaign Results"
                      width={350}
                      height={200}
                      className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm font-medium">Campaign Dashboard</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Car className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Automotive Brand X</CardTitle>
                      <CardDescription>Premium Vehicle Launch</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Increased brand awareness by 65% and drove 40% more qualified leads using Amazon DSP's automotive
                      audience segments.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">40%</div>
                        <div className="text-sm text-gray-600">ROI Increase</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">65%</div>
                        <div className="text-sm text-gray-600">Brand Lift</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in-up">
                <CardHeader>
                  <div className="relative mb-6">
                    <Image
                      src="/images/fintech-campaign.jpg"
                      alt="FinTech Campaign Results"
                      width={350}
                      height={200}
                      className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm font-medium">Performance Metrics</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">FinTech Company Y</CardTitle>
                      <CardDescription>Credit Card Acquisition</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Achieved 3.2x ROAS and reduced cost per acquisition by 45% through strategic first-party data
                      targeting.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-600">3.2x</div>
                        <div className="text-sm text-gray-600">ROAS</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">45%</div>
                        <div className="text-sm text-gray-600">CPA Reduction</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in-up">
                <CardHeader>
                  <div className="relative mb-6">
                    <Image
                      src="/images/enterprise-software.jpg"
                      alt="Enterprise Software Campaign Results"
                      width={350}
                      height={200}
                      className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm font-medium">Lead Generation</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Enterprise Software Z</CardTitle>
                      <CardDescription>B2B Lead Generation</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Generated 250% more qualified B2B leads and improved sales pipeline quality using Amazon's
                      business audience data.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-purple-600">250%</div>
                        <div className="text-sm text-gray-600">Lead Increase</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-600">85%</div>
                        <div className="text-sm text-gray-600">Quality Score</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        */}

        {/* Team Section */}
        {/*
        <section id="about" className="py-20 bg-gray-50 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="text-center space-y-4 mb-16 animate-fade-in-up">
              <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                Our Team
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Meet Our Amazon Advertising Experts
              </h2>
              <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
                Our certified team brings decades of combined experience in Amazon DSP and programmatic advertising
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group animate-fade-in-up">
                <CardContent className="pt-6">
                  <div className="relative mb-6">
                    <Image
                      src="/images/sarah-johnson.jpg"
                      alt="Sarah Johnson - CEO & Founder"
                      width={200}
                      height={200}
                      className="rounded-full mx-auto shadow-lg group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
                  <p className="text-blue-600 font-medium mb-3">CEO & Founder</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Former Amazon DSP Product Manager with 12+ years in programmatic advertising. Led $500M+ in ad spend
                    optimization.
                  </p>
                  <div className="flex justify-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      Amazon DSP Certified
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Ex-Amazon
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group animate-fade-in-up">
                <CardContent className="pt-6">
                  <div className="relative mb-6">
                    <Image
                      src="/images/michael-chen.jpg"
                      alt="Michael Chen - Head of Strategy"
                      width={200}
                      height={200}
                      className="rounded-full mx-auto shadow-lg group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
                  <p className="text-purple-600 font-medium mb-3">Head of Strategy</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Data scientist turned advertising strategist. Specializes in first-party data activation and
                    audience modeling.
                  </p>
                  <div className="flex justify-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      Data Science PhD
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      ML Expert
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group animate-fade-in-up">
                <CardContent className="pt-6">
                  <div className="relative mb-6">
                    <Image
                      src="/images/emily-rodriguez.jpg"
                      alt="Emily Rodriguez - Campaign Director"
                      width={200}
                      height={200}
                      className="rounded-full mx-auto shadow-lg group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Emily Rodriguez</h3>
                  <p className="text-green-600 font-medium mb-3">Campaign Director</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Enterprise campaign specialist with expertise in automotive and finance verticals. Managed $100M+ in
                    annual ad spend.
                  </p>
                  <div className="flex justify-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      Enterprise Focus
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      8+ Years
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        */}

        {/* The Power of First-Party Data */}
        <section className="py-12 bg-gradient-to-br from-blue-50 to-purple-50 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400/10 rounded-full animate-bounce"></div>
          </div>
          <div className="container px-4 md:px-6 relative">
            <div className="text-center space-y-4 mb-8 animate-fade-in-up">
              <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                First-Party Data
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                The Power of First-Party Data
              </h2>
              <p className="text-lg text-gray-600 max-w-[800px] mx-auto">
                First-party data enables better targeting, personalization, and compliance in the post-cookie era
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center max-w-6xl mx-auto">
              <div className="space-y-8 animate-fade-in-left">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <Target className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Precision Targeting</h3>
                      <p className="text-gray-600">
                        Reach customers based on actual purchase behavior and shopping intent, not assumptions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                      <Eye className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Enhanced Personalization</h3>
                      <p className="text-gray-600">
                        Deliver relevant messages and offers based on individual customer preferences and history
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Privacy Compliance</h3>
                      <p className="text-gray-600">
                        Stay ahead of privacy regulations with consent-based, first-party data strategies
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src="/images/first-party-data-visualization.webp"
                    alt="First-Party Data Visualization"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>

              <div className="relative animate-fade-in-right">
                <Card className="border-0 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="text-center">
                        <h4 className="text-xl font-semibold mb-4">Amazon's Data Advantage</h4>
                        <Image
                          src="/images/amazon-data-ecosystem.svg"
                          alt="Amazon Data Ecosystem"
                          width={400}
                          height={200}
                          className="rounded-lg mx-auto mb-6"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">300M+</div>
                          <div className="text-sm text-gray-600">Active Customers</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">12B+</div>
                          <div className="text-sm text-gray-600">Products Viewed</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">2B+</div>
                          <div className="text-sm text-gray-600">Purchases Tracked</div>
                        </div>
                        <div className="text-center p-4 bg-orange-50 rounded-lg">
                          <div className="text-2xl font-bold text-orange-600">24/7</div>
                          <div className="text-sm text-gray-600">Real-Time Signals</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Formats */}
        {/*
        <section className="py-20 bg-gray-50 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="text-center space-y-4 mb-16 animate-fade-in-up">
              <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200">
                Ad Formats
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Engaging Ad Formats That Convert
              </h2>
              <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
                Leverage Amazon's premium ad inventory across display, video, and dynamic e-commerce formats
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group animate-fade-in-up">
                <CardHeader>
                  <div className="relative mb-6">
                    <Image
                      src="/images/display-ads.jpg"
                      alt="Display Ad Examples"
                      width={300}
                      height={200}
                      className="rounded-lg mx-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-lg"></div>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Monitor className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Display Ads</CardTitle>
                  <CardDescription className="text-base">
                    Rich display formats across Amazon properties and premium third-party sites
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group animate-fade-in-up">
                <CardHeader>
                  <div className="relative mb-6">
                    <Image
                      src="/images/video-ads.jpg"
                      alt="Video Ad Examples"
                      width={300}
                      height={200}
                      className="rounded-lg mx-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-lg"></div>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Video className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Video Ads</CardTitle>
                  <CardDescription className="text-base">
                    Streaming TV, online video, and interactive video formats for maximum engagement
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group animate-fade-in-up">
                <CardHeader>
                  <div className="relative mb-6">
                    <Image
                      src="/images/dynamic-ecommerce.jpg"
                      alt="Dynamic E-commerce Ad Examples"
                      width={300}
                      height={200}
                      className="rounded-lg mx-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-lg"></div>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <ShoppingBag className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Dynamic E-commerce</CardTitle>
                  <CardDescription className="text-base">
                    Product-focused ads that showcase your catalog with real-time pricing and availability
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
        */}

        {/* Testimonials */}
        {/*
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="text-center space-y-4 mb-16 animate-fade-in-up">
              <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                Client Testimonials
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
                Trusted by enterprise brands to deliver exceptional Amazon advertising results
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in-up">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4">
                    "Adazon Digital transformed our Amazon advertising strategy. Their expertise in first-party data
                    targeting helped us achieve our best ROAS ever."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/images/jennifer-martinez.jpg"
                      alt="Jennifer Martinez"
                      width={50}
                      height={50}
                      className="rounded-full group-hover:scale-110 transition-transform"
                    />
                    <div>
                      <div className="font-semibold">Jennifer Martinez</div>
                      <div className="text-sm text-gray-600">CMO, Global Automotive Corp</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in-up">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4">
                    "The team's deep understanding of Amazon DSP and cookie-less advertising strategies gave us a
                    competitive edge in our industry."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/images/david-chen.jpg"
                      alt="David Chen"
                      width={50}
                      height={50}
                      className="rounded-full group-hover:scale-110 transition-transform"
                    />
                    <div>
                      <div className="font-semibold">David Chen</div>
                      <div className="text-sm text-gray-600">VP Marketing, FinTech Solutions</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in-up">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4">
                    "We saw a 250% increase in qualified leads and a dramatic improvement in our sales pipeline quality
                    after partnering with Adazon Digital."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/images/sarah-thompson.jpg"
                      alt="Sarah Thompson"
                      width={50}
                      height={50}
                      className="rounded-full group-hover:scale-110 transition-transform"
                    />
                    <div>
                      <div className="font-semibold">Sarah Thompson</div>
                      <div className="text-sm text-gray-600">Director of Growth, Enterprise Software</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        */}

        {/* Final CTA */}
        <section className="pt-20 pb-6 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full animate-pulse"></div>
          </div>

          <div className="container px-4 md:px-6 text-center relative z-10">
            <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-white">
                Ready to Future-Proof Your Advertising strategy?
              </h2>
              <p className="text-xl text-blue-100">
                Join enterprise brands who are already winning in the cookie-less world with Amazon's first-party data
                advantage.
              </p>
              {/*
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-6">
                  <Link href="#contact" className="flex items-center">
                    Send Us a Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 bg-transparent"
                >
                  Download Case Study
                </Button>
              </div>
              */}
              {/*
              <div className="flex items-center justify-center space-x-8 text-sm text-blue-100">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Enterprise-focused</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>$30K+ budgets</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Proven results</span>
                </div>
              </div>
              */}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="pt-6 pb-20 bg-gradient-to-r from-blue-600 to-purple-600 scroll-mt-20">
          <div className="container px-4 md:px-6 flex justify-center">
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative">
        {/*
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg">
                  AD
                </div>
                <span className="text-xl font-bold">Adazon Digital</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Future-proof your advertising with Amazon's first-party data and advanced targeting capabilities.
              </p>
              <div className="flex space-x-4">
                // Social icons commented out for easy reversion
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Amazon DSP
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    First-Party Data Strategy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Programmatic Advertising
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Campaign Optimization
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Automotive
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Finance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Retail
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Adazon Digital. All rights reserved.</p>
          </div>
        </div>
        // End of commented-out footer content
        */}
        <div className="text-center text-gray-400">
          <p>© 2025 Adazon Digital. All rights reserved.</p>
          <div className="mt-4">
            <Dialog open={isPrivacyModalOpen} onOpenChange={setIsPrivacyModalOpen}>
              <DialogTrigger asChild>
                <button className="text-blue-400 hover:text-blue-300 transition-colors underline">
                  Privacy Policy
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Privacy Policy</DialogTitle>
                  <DialogDescription>
                    Last updated: January 2025
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 text-sm text-gray-600">
                  <p>
                    At Adazon Digital, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                  
                  <h3 className="font-semibold text-gray-900">Information We Collect</h3>
                  <p>
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Fill out contact forms on our website</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Request a consultation or quote</li>
                    <li>Apply for employment opportunities</li>
                  </ul>
                  
                  <h3 className="font-semibold text-gray-900">How We Use Your Information</h3>
                  <p>
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Provide and improve our services</li>
                    <li>Communicate with you about our services</li>
                    <li>Send you marketing materials (with your consent)</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                  
                  <h3 className="font-semibold text-gray-900">Information Sharing</h3>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
                  </p>
                  
                  <h3 className="font-semibold text-gray-900">Data Security</h3>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  
                  <h3 className="font-semibold text-gray-900">Your Rights</h3>
                  <p>
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                  
                  <h3 className="font-semibold text-gray-900">Contact Us</h3>
                  <p>
                    If you have any questions about this Privacy Policy or our data practices, please contact us at privacy@adazondigital.com.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </footer>
    </div>
  )
}
