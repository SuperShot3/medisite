import React from 'react'
import Image from 'next/image'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { Container, Section, Card } from '../../components/shared/common'
import { 
  BeakerIcon, HeartIcon, UserGroupIcon, ClockIcon,
  ShieldCheckIcon, BuildingOfficeIcon, CpuChipIcon, UserIcon 
} from '@heroicons/react/24/outline'

const services = [
  {
    title: "Laboratory Services",
    description: "Comprehensive diagnostic testing and laboratory services with state-of-the-art equipment.",
    icon: BeakerIcon,
    color: "bg-blue-50"
  },
  {
    title: "Emergency Care",
    description: "24/7 emergency medical services with rapid response and expert care when you need it most.",
    icon: HeartIcon,
    color: "bg-red-50"
  },
  {
    title: "Expert Doctors",
    description: "Highly qualified medical professionals specializing in various fields of medicine.",
    icon: UserGroupIcon,
    color: "bg-green-50"
  },
  {
    title: "24/7 Service",
    description: "Round-the-clock medical assistance and support for all your healthcare needs.",
    icon: ClockIcon,
    color: "bg-purple-50"
  },
  {
    title: "Health Insurance",
    description: "Flexible insurance options and coverage plans for comprehensive healthcare.",
    icon: ShieldCheckIcon,
    color: "bg-yellow-50"
  },
  {
    title: "Modern Equipment",
    description: "Latest medical technology and equipment for accurate diagnosis and treatment.",
    icon: CpuChipIcon,
    color: "bg-indigo-50"
  },
  {
    title: "Medical Facilities",
    description: "Modern, comfortable facilities designed for optimal patient care and recovery.",
    icon: BuildingOfficeIcon,
    color: "bg-pink-50"
  },
  {
    title: "Qualified Staff",
    description: "Dedicated medical staff committed to providing exceptional patient care.",
    icon: UserIcon,
    color: "bg-orange-50"
  }
]

export default function Services() {
  return (
    <main>
      <Navbar />
      <Section className="pt-28">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Medical Services
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive healthcare services with state-of-the-art 
              facilities and experienced medical professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                iconBgColor={service.color}
              />
            ))}
          </div>

          <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Choose Our Medical Services?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-[#33c9b6] font-bold">•</span>
                    <span>Advanced Medical Technology</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#33c9b6] font-bold">•</span>
                    <span>Experienced Healthcare Professionals</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#33c9b6] font-bold">•</span>
                    <span>Patient-Centered Approach</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#33c9b6] font-bold">•</span>
                    <span>Comprehensive Care Solutions</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/images/servicesdoctor.png"
                  alt="Medical Services"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Footer />
    </main>
  )
} 