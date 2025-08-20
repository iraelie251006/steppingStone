/* eslint-disable @next/next/no-img-element */
import { Package } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="text-slate-800 bg-[#B8C665]/40">
                  Your Rwanda&apos;s Trusted Packaging Partner
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Premium Packaging Solutions for Your Business
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  From custom boxes to industrial containers, we deliver high-quality packaging solutions 
                  that protect your products and enhance your brand presence across Rwanda.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 primary-gradient">
                  Learn More
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#B8C665] to-[#9ba65a]/20 rounded-3xl p-8 relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Packaging boxes and containers" 
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg">
                  <Package className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero