import { motion } from 'motion/react';
import { MapPin, Star } from 'lucide-react';

const destinations = [
  {
    id: 1,
    title: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: '$1,200',
    rating: 4.9,
    reviews: 124,
    days: '7 Days',
  },
  {
    id: 2,
    title: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: '$850',
    rating: 4.8,
    reviews: 356,
    days: '10 Days',
  },
  {
    id: 3,
    title: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: '$1,500',
    rating: 4.9,
    reviews: 210,
    days: '14 Days',
  },
  {
    id: 4,
    title: 'Amalfi Coast, Italy',
    image: 'https://images.unsplash.com/photo-1618143058994-5231b14241e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: '$1,800',
    rating: 4.7,
    reviews: 89,
    days: '5 Days',
  },
  {
    id: 5,
    title: 'Machu Picchu, Peru',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: '$950',
    rating: 4.8,
    reviews: 420,
    days: '8 Days',
  },
  {
    id: 6,
    title: 'Banff, Canada',
    image: 'https://images.unsplash.com/photo-1513569143478-b38b2c0ef97f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: '$1,100',
    rating: 4.9,
    reviews: 156,
    days: '6 Days',
  }
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">Top Destinations</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 tracking-tight">
            Explore Top Destinations
          </h3>
          <p className="text-lg text-gray-600">
            Discover the most breathtaking places around the globe. Handpicked experiences for your next unforgettable journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900 shadow-sm">
                  {dest.days}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{dest.title}</h4>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="h-4 w-4 mr-1 text-indigo-500" />
                      <span>{dest.title.split(', ')[1]}</span>
                    </div>
                  </div>
                  <div className="flex items-center bg-indigo-50 px-2 py-1 rounded-md">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="font-semibold text-indigo-900">{dest.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                  <div>
                    <span className="text-gray-500 text-sm">Starting from</span>
                    <p className="text-2xl font-bold text-indigo-600">{dest.price}</p>
                  </div>
                  <button className="bg-gray-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
