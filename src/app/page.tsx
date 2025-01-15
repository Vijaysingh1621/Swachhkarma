// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, Leaf, Recycle, Users, Coins, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { SignedOut, SignedIn,SignInButton } from '@clerk/nextjs'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import logo from "../../public/swachlogoo.png"
import HowItWorks from '@/components/HowItWorks'

const poppins = Poppins({ 
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  display: 'swap',
})

function AnimatedLogo() {
  return (
    <div className="relative w-64 h-64 mx-auto mb-8">
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-pulse"></div>
      <div className="absolute inset-4 rounded-full bg-green-400 opacity-20 animate-spin-slow"></div>
      <div className="absolute inset-8 rounded-full bg-green-300 opacity-60 animate-bounce-slow"></div>
      <Image 
        src={logo || "/placeholder.svg"} 
        layout="fill" 
        objectFit="contain" 
        className="p-2 animate-float" 
        alt="logo"
      />
    </div>
  )
}

function TypingEffect({ mainText, tagline }: { mainText: string; tagline: string }) {
  const [displayText, setDisplayText] = useState('');
  const [displayTagline, setDisplayTagline] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && displayText === mainText) {
        setShowTagline(true);
      } else if (!isDeleting && displayText !== mainText) {
        setDisplayText(mainText.substring(0, displayText.length + 1));
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
      } else {
        setDisplayText(mainText.substring(0, displayText.length - 1));
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, mainText]);

  useEffect(() => {
    if (showTagline) {
      const taglineTimer = setTimeout(() => {
        if (displayTagline.length < tagline.length) {
          setDisplayTagline(tagline.substring(0, displayTagline.length + 1));
        }
      }, 50);

      return () => clearTimeout(taglineTimer);
    }
  }, [showTagline, displayTagline, tagline]);

  return (
    <div className="text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-[65px] font-bold  mb-4 text-gray-800 tracking-tight">
        <span>{displayText}</span>
        <span className="animate-blink">|</span>
      </h1>
      {showTagline && (
        <p className="text-base sm:text-lg lg:text-[20px] max-w-2xl mx-auto leading-relaxed mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent font-semibold animate-reveal">
          {displayTagline}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [impactData, setImpactData] = useState({
    wasteCollected: 0,
    reportsSubmitted: 0,
    tokensEarned: 0,
    co2Offset: 0
  });

  useEffect(() => {
    async function fetchImpactData() {
      // Simulate fetching data
      setImpactData({
        wasteCollected: 120,
        reportsSubmitted: 45,
        tokensEarned: 250,
        co2Offset: 60
      });
    }

    fetchImpactData();
  }, []);

  return (
    <div className={`${poppins.className}`} >
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8">
        <section className="text-center flex justify-center items-center flex-col mb-16">
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
          <AnimatedLogo />
          </motion.div>

          <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
          <TypingEffect mainText="SwachhKarma" tagline="Report. Collect. Redeem." />
          </motion.div>
          <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
          <p className="text-base sm:text-lg lg:text-[20px] text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Join our community in making waste management more efficient and rewarding! Together, we transform waste into opportunity, fostering sustainability while rewarding responsible action.
            </p>
            </motion.div>
          <SignedOut>
          <SignInButton>
          <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y:10}}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
            <Button className="bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg py-3 px-6 sm:px-10 rounded-full w-full sm:w-auto">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </motion.div>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Link href="/report">
              <Button className="bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg py-3 px-6 sm:px-10 rounded-full w-full sm:w-auto">
                Report Waste
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </SignedIn>
        </section>
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="flex justify-center items-center m-4 sm:m-10 p-4 sm:p-[50px] rounded-lg shadow-md">
          <video className="max-w-full rounded-md" autoPlay muted loop playsInline>
            <source src="GarbageSorting.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <FeatureCard 
            icon={Leaf}
            title="Eco-Friendly"
            description="Contribute to a cleaner environment by reporting and collecting waste. Your actions help reduce pollution and promote recycling efforts."
          />
          <FeatureCard
            icon={Coins}
            title="Earn Rewards"
            description="Get tokens for your contributions to waste management efforts. These tokens can be redeemed for exciting benefits and gifts."
          />
          <FeatureCard
            icon={Users}
            title="Community-Driven"
            description="Be part of a growing community committed to sustainable practices. Collaborate with others who share your vision for a greener future."
          />
        </section>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <HowItWorks/>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <section className="bg-white p-6 sm:p-10 rounded-3xl shadow-lg mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-800">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <ImpactCard title="Waste Collected" value={`${impactData.wasteCollected} kg`} icon={Recycle} />
            <ImpactCard title="Reports Submitted" value={impactData.reportsSubmitted} icon={MapPin} />
            <ImpactCard title="Tokens Earned" value={impactData.tokensEarned} icon={Coins} />
            <ImpactCard title="CO2 Offset" value={`${impactData.co2Offset} kg`} icon={Leaf} />
          </div>
        </section>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Testimonials />
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <FAQ />
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

function ImpactCard({ title, value, icon: Icon }: { title: string; value: string | number; icon: React.ElementType }) {
  return (
    <div className="p-4 sm:p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300">
      <Icon className="h-8 w-8 text-green-500 mb-2 sm:mb-4" />
      <p className="text-lg sm:text-2xl font-bold mb-2 text-gray-800">{value}</p>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
      <div className="bg-green-100 p-3 sm:p-4 rounded-full mb-4">
        <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
      </div>
      <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-gray-800">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
    </div>
  )
}

