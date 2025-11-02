'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-cyan-800/50"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-cyan-400">
          Ephron George
        </Link>
        
        <div className="flex space-x-8">
          <Link href="/" className="text-cyan-300 hover:text-cyan-100 transition">AI Profile</Link>
          <Link href="/projects" className="text-cyan-300 hover:text-cyan-100 transition">Data Showcase</Link>
          <Link href="/chat" className="text-cyan-300 hover:text-cyan-100 transition">AI Agent</Link>
          <Link href="/growth" className="text-cyan-300 hover:text-cyan-100 transition">Growth</Link>
          <Link href="/contact" className="text-cyan-300 hover:text-cyan-100 transition">Connect</Link>
        </div>

        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded transition">
          Engage AI Agent
        </button>
      </nav>
    </motion.header>
  )
}