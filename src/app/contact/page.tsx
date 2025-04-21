'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { louize } from '@/app/fonts'; // Commented out font
// import { Work_Sans } from 'next/font/google'; // Commented out font
import ClientOnly from '../components/ClientOnly';

// const workSans = Work_Sans({ 
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   display: 'swap'
// });

export default function ContactPage() {
  return (
    <ClientOnly
      fallback={
        <div className="w-full h-screen flex items-center justify-center">
          <div className="animate-pulse text-xl text-gray-600">Loading...</div>
        </div>
      }
    >
      <ContactContent /> 
    </ClientOnly>
  );
}

function ContactContent() {
  const [loaded, setLoaded] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // Here you would normally send the form data to a server
    alert('Thank you for your message! I will get back to you soon.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-16 max-w-[1120px] mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : -20 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have a project in mind or just want to chat? Feel free to reach out.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/3"
        >
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">Email</h3>
              <p className="text-gray-600">hello@vamsibatchu.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Based in</h3>
              <p className="text-gray-600">San Francisco, California</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Social</h3>
              <div className="flex space-x-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">Twitter</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">LinkedIn</a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">Dribbble</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:w-2/3"
        >
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
} 