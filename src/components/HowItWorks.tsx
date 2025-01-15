import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Camera, CheckCircle, Truck, Coins } from 'lucide-react'


const steps = [
  {
    title: "Report Waste",
    description: "Take a photo and upload it to report waste in your area.",
    icon: Camera,
    gif: "/uploadImage.mp4"
  },
  {
    title: "Verify Report",
    description: "Once the image is uploaded, our AI-powered verification system automatically assesses the report for accuracy.",
    icon: CheckCircle,
    gif: "/verifyImage.mp4"
  },
  {
    title: "Collect Waste",
    description: "Authorized collectors and regular users are notified to collect the waste. Both can take action to keep our environment clean.",
    icon: Truck,
    gif: "/collectGarbage.mp4"
  },
  {
    title: "Earn Rewards",
    description: "Earn exciting rewards for your efforts in creating a cleaner, greener world!",
    icon: Coins,
    gif: "/rewardImage.mp4"
  }
]

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50 rounded-3xl mb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">How SwachhKarma Works</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0 ">
                
                <div className='flex justify-center items-center'>
                    <video className="max-w-full rounded-md " autoPlay muted loop playsInline>
                        <source src={step.gif} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <step.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

