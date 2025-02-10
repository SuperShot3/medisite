import React from 'react'
import Image from 'next/image'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { Container, Section } from '../../components/shared/common'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

export default function About() {
  return (
    <main>
      <Navbar />
      <Section className="pt-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/about-doctor.png"
                alt="Medical Team"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-[#33c9b6]">15+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-900">
                We Are Committed To Providing Best Medical Care
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated medical team combines expertise with compassion to deliver 
                exceptional healthcare services. We believe in a patient-first approach 
                and continuous innovation in medical practices.
              </p>
              
              <div className="space-y-4">
                {[
                  'Advanced Medical Technology',
                  'Experienced Medical Professionals',
                  'Comfortable Environment',
                  'Emergency Care Services'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#33c9b6]" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button className="bg-[#33c9b6] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              { number: '100+', text: 'Medical Specialists' },
              { number: '1000+', text: 'Happy Patients' },
              { number: '15+', text: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-lg shadow-sm">
                <h3 className="text-4xl font-bold text-[#33c9b6] mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Footer />
    </main>
  )
} 