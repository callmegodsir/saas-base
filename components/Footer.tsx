import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">SaaSify</h3>
            <p className="mb-4">Simplifying your workflow, one task at a time.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="hover:text-orange-500 transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-orange-500 transition-colors">Pricing</Link></li>
              <li><Link href="#roadmap" className="hover:text-orange-500 transition-colors">Roadmap</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Changelog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">API Reference</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Community</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Careers</Link></li>
              <li><Link href="#contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 SaaSify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}