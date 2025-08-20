/* eslint-disable @next/next/no-img-element */
import { CheckCircle } from "lucide-react";

import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Manufacturing facility" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                About Stepping Stone
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in Rwanda, Stepping Stone has become the region&apos;s leading packaging company, 
                specializing in custom boxes, industrial containers, and comprehensive packaging solutions. 
                We combine traditional craftsmanship with modern technology to deliver exceptional results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to quality, sustainability, and customer satisfaction has made us the 
                preferred choice for businesses across various industries. We understand that great 
                packaging is more than protection—it&apos;s your brand&apos;s first impression.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Eco-friendly materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Custom designs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Quality guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Fast delivery</span>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>
  )
}

export default About