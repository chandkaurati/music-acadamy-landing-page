"use client"
import React from "react";
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Logo and About Section */}
          <div>
            <h2 className="text-xl font-bold">Your Music Academy</h2>
            <p className="mt-4 text-sm">
              Empowering students with music education. Learn instruments, vocal, and theory from professionals.
            </p>
          </div>
  
          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">Courses</a></li>
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-bold">Contact Us</h2>
            <ul className="mt-4 space-y-2">
              <li>Email: info@yourmusicacademy.com</li>
              <li>Phone: +123-456-7890</li>
              <li>Location: 123 Music St., City, Country</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
  
        {/* Bottom Footer */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>Developed by <a href="https://www.linkedin.com/in/chand-kaurati-669082256/" target="_blank">Chand</a> </p>
          <p>&copy; 2024 Your Music Academy. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  