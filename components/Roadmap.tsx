'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Clock, ArrowRight } from 'lucide-react'

export default function Roadmap() {
  const roadmapItems = [
    {
      title: "Enhanced Analytics Dashboard",
      description: "Dive deeper into your data with our new analytics features.",
      status: "completed",
      date: "Q2 2023"
    },
    {
      title: "Mobile App Launch",
      description: "Access your workspace on-the-go with our new mobile app.",
      status: "in-progress",
      date: "Q3 2023"
    },
    {
      title: "AI-Powered Recommendations",
      description: "Get smart suggestions to optimize your workflow.",
      status: "planned",
      date: "Q4 2023"
    },
    {
      title: "Advanced Collaboration Tools",
      description: "Work seamlessly with your team using our new collaboration features.",
      status: "planned",
      date: "Q1 2024"
    }
  ]

  return (
    <section id="roadmap" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Product Roadmap</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what we're working on and what's coming next to make your experience even better.
          </p>
        </motion.div>
        <div className="space-y-8">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 mt-1">
                {item.status === 'completed' && <CheckCircle2 className="text-green-500" size={24} />}
                {item.status === 'in-progress' && <Clock className="text-orange-500" size={24} />}
                {item.status === 'planned' && <ArrowRight className="text-blue-500" size={24} />}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-sm text-gray-500">
                  {item.status === 'completed' && 'Completed'}
                  {item.status === 'in-progress' && 'In Progress'}
                  {item.status === 'planned' && 'Planned'}
                  {' - '}
                  {item.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}