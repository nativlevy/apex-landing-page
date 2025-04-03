import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Globe, Zap, Users, Shield, Mountain, Clock, Train, Coffee } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import {
  HeroSection,
  AboutSection,
  FeaturesSection,
  LocationSection,
  PartnersSection,
  TracksSection,
  PricingSection,
  CTASection
} from "@/components/sections"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar activePage="home" />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PartnersSection />
        <FeaturesSection />
        <TracksSection />
        <LocationSection />
        <PricingSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}

