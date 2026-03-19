import { motion } from 'motion/react';
import { Menu, X, Plane } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Plane className="h-6 w-6 text-white" />
            </div>
            <span className="font-serif font-bold text-2xl text-gray-900 tracking-tight">Travelix Travel</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Home</a>
            <a href="#destinations" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Destinations</a>
            <a href="#services" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Services</a>
            <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Reviews</a>
            <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
            <a href="#home" className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md">Home</a>
            <a href="#destinations" className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md">Destinations</a>
            <a href="#services" className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md">Services</a>
            <a href="#testimonials" className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md">Reviews</a>
            <div className="pt-2">
              <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
