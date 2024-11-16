"use client"
import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send to a server or email)
    alert('Thank you for reaching out!');
  };

  return (
    <div className="min-h-screen bg-gray-900 mt-12 text-gray-100 flex flex-col items-center justify-center px-4 py-16 space-y-10">
      {/* Title Section */}
      <h1 className="text-5xl font-extrabold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-600 mb-8">
        Contact Us
      </h1>

      {/* Contact Form Section */}
      <div className="bg-gray-800 border border-gray-700 shadow-xl rounded-2xl p-8 w-full max-w-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name Input */}
          <div>
            <label className="block text-lg text-gray-400 mb-2">Full Name</label>
            <input 
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-lg text-gray-400 mb-2">Email Address</label>
            <input 
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label className="block text-lg text-gray-400 mb-2">Your Message</label>
            <textarea 
              rows={6}
              placeholder="Tell us how we can help you!"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button 
              type="submit" 
              className="w-full py-3 px-6 font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-700 focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 transform transition-transform hover:scale-105 duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-semibold text-gray-200">Reach Out to Us</h2>
        <p className="text-lg text-gray-400">Email: info@yourmusicacademy.com</p>
        <p className="text-lg text-gray-400">Phone: +123-456-7890</p>
        <p className="text-lg text-gray-400">Location: 123 Music St., City, Country</p>
      </div>
    </div>
  );
}
