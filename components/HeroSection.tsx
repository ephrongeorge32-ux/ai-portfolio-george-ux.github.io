'use client'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[80vh] bg-gray-950 text-white pt-24 flex items-center"
    >
      <div className="container mx-auto px-6 z-10">
        {/* The Central AI Core Card with Glow Effect */}
        <div className="mx-auto w-full md:w-3/4 p-8 rounded-xl border border-cyan-700/50 shadow-2xl bg-gray-900/70 backdrop-blur-sm animate-glow hover:shadow-cyan-500/50 transition-shadow duration-500">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Ephron George: Financial Intelligence Architect
          </h1>
          <p className="mt-4 text-cyan-400 text-lg">
            MBA Finance & BCA Graduate. Optimizing financial processes with SAP FI, QuickBooks, and Data Analytics.
          </p>

          {/* Primary Metric Highlight */}
          <div className="mt-8 text-center">
            <h3 className="text-5xl font-bold text-green-400">40%</h3>
            <p className="text-gray-400 mt-2">Reduction in GL Rework Rate via S/4HANA Configuration</p>
          </div>
        </div>

        {/* Secondary Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gray-800/50 p-6 rounded-lg border border-cyan-800/30">
            <h4 className="text-3xl font-bold text-cyan-300">28%</h4>
            <p className="text-gray-300">Improved Cash Flow Accuracy</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-cyan-800/30">
            <h4 className="text-3xl font-bold text-cyan-300">100%</h4>
            <p className="text-gray-300">Ledger Accuracy Rate</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-cyan-800/30">
            <h4 className="text-3xl font-bold text-cyan-300">12%</h4>
            <p className="text-gray-300">Alpha in ELSS Fund Analysis</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}