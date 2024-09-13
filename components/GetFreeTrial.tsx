'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Check } from 'lucide-react'

export default function GetFreeTrial() {
  return (
    <section id="get-free-trial" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 mb-10 lg:mb-0"
          >
            <h2 className="text-3xl font-bold mb-4">Start Your Free Trial Today</h2>
            <p className="text-xl text-gray-600 mb-6">
              Experience the power of SaaSify risk-free for 14 days. No credit card required.
            </p>
            <ul className="space-y-2 mb-8">
              {['Full access to all features', 'Personalized onboarding', '24/7 customer support'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md"
          >
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <Input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                <Input type="email" id="email" placeholder="john@company.com" required />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <Input type="text" id="company" placeholder="Acme Inc." required />
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Start Your Free Trial <ArrowRight className="ml-2" size={16} />
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-4 text-center">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}