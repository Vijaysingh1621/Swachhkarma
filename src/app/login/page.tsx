'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { ArrowRight, Coins, Recycle } from 'lucide-react'
import Image from 'next/image'
import logo from "../../../public/swachlogoo.png";
import { SignInButton } from '@clerk/nextjs'

const poppins = Poppins({ 
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export default function LoginPage() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={`${poppins.className} min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex flex-col items-center justify-center p-4`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Image 
          src={logo || "/placeholder.svg"}
          width={150}
          height={150}
          alt="SwachhKarma Logo"
          className="mx-auto mb-8 animate-float"
        />
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Welcome to SwachhKarma
        </motion.h1>
        <motion.p 
          className="text-xl mb-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Please login to start your eco-friendly journey
        </motion.p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <FeatureCard
          icon={Recycle}
          title="Report Waste"
          description="Help keep our environment clean by reporting waste."
        />
        <FeatureCard
          icon={Coins}
          title="Earn Coins"
          description="Get rewarded for your eco-friendly actions."
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <SignInButton>
        <Button 
          className="bg-green-600 hover:bg-green-700 text-white text-lg py-6 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Sign In
          <motion.div
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight className="ml-2 h-6 w-6" />
          </motion.div>
        </Button>
        </SignInButton>
      </motion.div>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center w-full sm:w-64"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
        <Icon className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  )
}


