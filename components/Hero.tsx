'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import dashboard from '@/public/dashboard.png'
import Modal from '@/components/Modals' // Assurez-vous que le chemin est correct

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà vu le pop-up
    const hasSeenPopup = localStorage.getItem('hasSeenPopup')
    if (!hasSeenPopup) {
      setIsModalOpen(true)
      localStorage.setItem('hasSeenPopup', 'true')
    }
  }, [])

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
          >
            <h1 className="text-5xl font-bold mb-6">Stack Smarter, Code Better</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              Ne perdez plus de temps à configurer vos projets. Choisissez une stack SaaS, codez ce qui compte, et déployez facilement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3">
                Start Free Trial <ChevronRight className="ml-2" />
              </Button>
              <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-50 text-lg px-8 py-3">
                Watch Demo <ArrowRight className="ml-2" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <Image
              src={dashboard}
              alt="Background"
              width={600}
              height={400}
              className="rounded-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-2xl font-bold mb-4">Bienvenue sur Smart Stack !</h2>
        <p className="mb-4">Découvrez nos dernières fonctionnalités en avant-première.</p>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
          onClick={handleCloseModal}
        >
          Commencer
        </button>
      </Modal>
    </section>
  )
}
