import HeroSection from '../components/HeroSection'
import QuantitativeBarChart from '../components/QuantitativeBarChart'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <HeroSection />
      
      {/* Data Showcase Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
            Quantitative Impact Showcase
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <QuantitativeBarChart />
            
            {/* Project Metrics Card */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-cyan-800/30">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">Key Performance Indicators</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cash Flow Accuracy</span>
                  <span className="text-green-400 font-bold">+28%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">GL Rework Rate</span>
                  <span className="text-green-400 font-bold">-40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Ledger Accuracy</span>
                  <span className="text-green-400 font-bold">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}