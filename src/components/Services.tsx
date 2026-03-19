import { motion } from 'motion/react';
import { Plane, Hotel, Map, Shield, CreditCard, Headphones } from 'lucide-react';

const services = [
  {
    icon: <Plane className="h-8 w-8 text-indigo-600" />,
    title: 'Flight Booking',
    description: 'We find the best flight deals and routes tailored to your schedule and budget.',
  },
  {
    icon: <Hotel className="h-8 w-8 text-indigo-600" />,
    title: 'Hotel Reservations',
    description: 'Handpicked accommodations ranging from luxury resorts to cozy boutique hotels.',
  },
  {
    icon: <Map className="h-8 w-8 text-indigo-600" />,
    title: 'Custom Itineraries',
    description: 'Personalized travel plans designed around your interests and preferences.',
  },
  {
    icon: <Shield className="h-8 w-8 text-indigo-600" />,
    title: 'Travel Insurance',
    description: 'Comprehensive coverage options to ensure peace of mind during your journey.',
  },
  {
    icon: <CreditCard className="h-8 w-8 text-indigo-600" />,
    title: 'Flexible Payments',
    description: 'Secure and flexible payment options including installment plans for your trips.',
  },
  {
    icon: <Headphones className="h-8 w-8 text-indigo-600" />,
    title: '24/7 Support',
    description: 'Round-the-clock assistance from our dedicated travel experts wherever you are.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 tracking-tight">
            We Offer Best Services
          </h3>
          <p className="text-lg text-gray-600">
            From booking flights to creating custom itineraries, we handle all the details so you can focus on enjoying your trip.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
