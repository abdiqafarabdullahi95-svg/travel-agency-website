import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Travel Enthusiast',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    text: '"Travelix Travel planned the most incredible trip to Japan for us. Every detail was perfect, from the boutique hotels to the private tea ceremony. We couldn\'t have asked for a better experience."',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Traveler',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    text: '"I travel frequently for work and Travelix Travel handles all my arrangements seamlessly. Their 24/7 support has saved me more times than I can count when flights get delayed or canceled."',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Honeymooner',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    text: '"Our honeymoon in the Amalfi Coast was an absolute dream. The itinerary was perfectly balanced between relaxation and adventure. Highly recommend their custom planning services!"',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 tracking-tight">
            What Our Clients Say
          </h3>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Read what our happy travelers have to say about their experiences with Travelix Travel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-indigo-100" />
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-indigo-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-indigo-600 font-medium">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed relative z-10">
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
