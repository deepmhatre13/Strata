import { LandingNav } from './landing/LandingNav'
import { HeroSection } from './landing/HeroSection'
import { PhilosophySection } from './landing/PhilosophySection'
import { HowItWorksSection } from './landing/HowItWorksSection'
import { FeaturesSection } from './landing/FeaturesSection'
import { DemoSection } from './landing/DemoSection'
import { CallToActionSection } from './landing/CallToActionSection'
import { LandingFooter } from './landing/LandingFooter'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2D3436] overflow-x-hidden antialiased">
      <LandingNav />
      <main>
        <HeroSection />
        <PhilosophySection />
        <HowItWorksSection />
        <FeaturesSection />
        <DemoSection />
        <CallToActionSection />
        <LandingFooter />
      </main>
    </div>
  )
}

