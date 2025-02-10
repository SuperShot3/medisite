import React from 'react'
import { ClockIcon, UserGroupIcon, HeartIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'
import { Card, Section, Container } from './shared/common'

const services = [
  {
    title: "24/7 Medical Care",
    description: "Round-the-clock medical assistance with our dedicated team of healthcare professionals.",
    icon: ClockIcon,
    color: "bg-blue-50",
  },
  {
    title: "Expert Doctors",
    description: "Highly qualified and experienced medical specialists across various fields.",
    icon: UserGroupIcon,
    color: "bg-green-50",
  },
  {
    title: "Emergency Care",
    description: "Immediate medical attention for urgent health concerns and emergencies.",
    icon: HeartIcon,
    color: "bg-red-50",
  },
  {
    title: "Modern Facilities",
    description: "State-of-the-art medical equipment and comfortable treatment environments.",
    icon: BuildingOfficeIcon,
    color: "bg-purple-50",
  },
]

export default function Services() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Medical Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive healthcare services to ensure your well-being
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </Container>
    </Section>
  )
} 