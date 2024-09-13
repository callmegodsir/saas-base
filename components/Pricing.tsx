'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { CheckCircle2, HelpCircle } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      billing: "per month",
      features: [
        "5 Team Members",
        "10GB Cloud Storage",
        "Basic Email Support",
        "2 Projects",
        "1 Team Workspace"
      ],
      cta: "Start Basic Plan"
    },
    {
      name: "Pro",
      price: "$79",
      billing: "per month",
      features: [
        "25 Team Members",
        "100GB Cloud Storage",
        "Priority Email & Chat Support",
        "10 Projects",
        "5 Team Workspaces",
        "Advanced Analytics"
      ],
      cta: "Start Pro Plan",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      billing: "contact for pricing",
      features: [
        "Unlimited Team Members",
        "Unlimited Cloud Storage",
        "24/7 Phone, Email & Chat Support",
        "Unlimited Projects",
        "Unlimited Team Workspaces",
        "Advanced Analytics & Reporting",
        "API Access",
        "Dedicated Account Manager"
      ],
      cta: "Contact Sales"
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Choose the Right Plan for Your Business</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're just starting out or scaling up, we have a plan that fits your needs.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white p-8 rounded-lg shadow-md text-center ${plan.popular ? 'border-2 border-orange-500' : ''}`}
            >
              {plan.popular && (
                <span className="bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 inline-block">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-orange-500 mb-2">{plan.price}</p>
              <p className="text-gray-600 mb-6">{plan.billing}</p>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center">
                    <CheckCircle2 className="text-green-500 mr-2" size={20} />
                    {feature}
                    {i === plan.features.length - 1 && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="text-gray-400 ml-2" size={16} />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Additional features available</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </li>
                ))}
              </ul>
              <Button className={`w-full ${plan.popular ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-800 hover:bg-gray-900'} text-white`}>
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}