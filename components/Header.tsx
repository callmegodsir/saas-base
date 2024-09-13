'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useAnimation } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const controls = useAnimation()

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      if (latest > 50) {
        setIsSticky(true)
        controls.start({ opacity: 1, y: 0 })
      } else {
        setIsSticky(false)
        controls.start({ opacity: 0, y: -50 })
      }
    })

    return () => unsubscribe()
  }, [scrollY, controls])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-orange-500">SaaSify</Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="#features" className="hover:text-orange-500 transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-orange-500 transition-colors">Pricing</Link></li>
              <li><Link href="#roadmap" className="hover:text-orange-500 transition-colors">Roadmap</Link></li>
              <li><Link href="#contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </nav>
          <div className="hidden md:block">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
          </div>
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li><Link href="#features" className="block hover:text-orange-500 transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="block hover:text-orange-500 transition-colors">Pricing</Link></li>
              <li><Link href="#roadmap" className="block hover:text-orange-500 transition-colors">Roadmap</Link></li>
              <li><Link href="#contact" className="block hover:text-orange-500 transition-colors">Contact</Link></li>
              <li><Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button></li>
            </ul>
          </nav>
        </div>
      )}
    </motion.header>
  )
}