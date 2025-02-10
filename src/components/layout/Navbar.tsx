'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Blogs", path: "#" },
    { title: "Contact", path: "/contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#33c9b6]">Medisite</h1>
          </Link>
          
          {/* Мобильная кнопка меню */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#33c9b6] p-2"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Десктопное меню */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.path}
                  className="text-gray-600 hover:text-[#33c9b6] px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <Link 
              href="/appointment"
              className="bg-[#33c9b6] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Мобильное меню */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.path}
                  className="block text-gray-600 hover:text-[#33c9b6] px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Link 
                href="/appointment"
                className="block bg-[#33c9b6] text-white px-4 py-2 rounded-md text-base font-medium hover:bg-opacity-90 transition-colors mt-4"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 