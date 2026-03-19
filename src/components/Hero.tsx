import { motion } from 'motion/react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Beautiful mountain landscape"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gray-900/40 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mt-16 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
            Discover Your Next <span className="text-indigo-400">Adventure</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 font-light">
            Explore the world's most beautiful destinations with our curated travel experiences.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-4 md:p-6 rounded-2xl md:rounded-full shadow-2xl max-w-4xl mx-auto backdrop-blur-sm bg-white/95"
        >
          <form className="flex flex-col md:flex-row items-center gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            
            {/* Location */}
            <div className="flex-1 w-full flex items-center gap-3 px-4 py-2">
              <MapPin className="text-indigo-600 h-6 w-6 shrink-0" />
              <div className="flex flex-col text-left w-full">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</label>
                <input 
                  type="text" 
                  placeholder="Where are you going?" 
                  className="w-full outline-none text-gray-900 font-medium placeholder-gray-400 bg-transparent"
                />
              </div>
            </div>

            {/* Date */}
            <div className="flex-1 w-full flex items-center gap-3 px-4 py-2">
              <Calendar className="text-indigo-600 h-6 w-6 shrink-0" />
              <div className="flex flex-col text-left w-full">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</label>
                <input 
                  type="text" 
                  placeholder="When?" 
                  className="w-full outline-none text-gray-900 font-medium placeholder-gray-400 bg-transparent"
                  onFocus={(e) => e.target.type = 'date'}
                  onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                />
              </div>
            </div>

            {/* Guests */}
            <div className="flex-1 w-full flex items-center gap-3 px-4 py-2">
              <Users className="text-indigo-600 h-6 w-6 shrink-0" />
              <div className="flex flex-col text-left w-full">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Guests</label>
                <select className="w-full outline-none text-gray-900 font-medium bg-transparent cursor-pointer appearance-none">
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4+ Guests</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="w-full md:w-auto px-4 pt-4 md:pt-0">
              <button 
                type="button" 
                className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-xl md:rounded-full transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-indigo-500/30"
              >
                <Search className="h-5 w-5" />
                <span className="md:hidden font-medium">Search Flights</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
