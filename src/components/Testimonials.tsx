import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Leaf } from 'lucide-react'
import logo from "../../public/swachlogoo.png"
import Image from "next/image"

const testimonials = [
  {
    name: "Prabal verma",
    role: "Environmental Activist",
    content: "SwachhKarma has revolutionized how we approach waste management in our community. It's not just about cleaning up; it's about creating a sustainable future.",
    avatar: "/prbalbirthday1.jpg"
  },
  {
    name: "Ankita",
    role: "College Student",
    content: "As a student, I love how SwachhKarma makes it easy and rewarding to contribute to a cleaner environment. The tokens I earn are a great bonus!",
    avatar: "/ankita.jpg"
  },
  {
    name: "Vijay",
    role: "Local Business Owner",
    content: "Implementing SwachhKarma in our business has not only improved our waste management but also inspired our employees to be more environmentally conscious.",
    avatar: "/vijay.jpg"
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl mb-20 relative overflow-hidden">
      <div className="absolute flex justify-center items-center inset-0 opacity-5">
      <Image src={logo} height={800} width={800} className="p-2 " alt="logo"/>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-6 text-center">
                  <Avatar className="h-24 w-24 mb-4 ring-4 ring-green-200">
                    <Image src={testimonial.avatar} alt={testimonial.name}  height={200} width={200}/>
                    
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-green-600 font-medium">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic text-center">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

