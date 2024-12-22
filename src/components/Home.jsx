import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, TrendingUp } from 'lucide-react';
import Search from './Search';
import Map from './Map';

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-2">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 text-blue-600">Welcome to IETP Route</h1>
          <p className="text-xl text-gray-600">Your one-stop solution for intelligent transit planning and routes.</p>
        </motion.div>
        
        <Search />
        <Map />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          <FeatureCard
            icon={<MapPin className="w-8 h-8 text-blue-500" />}
            title="Smart Routing"
            description="Optimize your transit routes with us."
          />
          <FeatureCard
            icon={<Clock className="w-8 h-8 text-green-500" />}
            title="Real-Time Updates"
            description="Stay informed with updates on transit schedules and delays."
          />
          <FeatureCard
            icon={<TrendingUp className="w-8 h-8 text-purple-500" />}
            title="Data Analytics"
            description="Gain insights into transit patterns and improve efficiency."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-semibold mb-4">Ready to revolutionize your transit planning?</h2>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;

