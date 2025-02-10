import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#33c9b6] to-[#28a999] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Health Is Our
              <span className="block">Top Priority</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl opacity-90 max-w-lg mx-auto md:mx-0">
              We provide the most comprehensive medical services. Our professional staff will take care of your health.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link href="/appointment">
                <button className="w-full sm:w-auto bg-white text-[#33c9b6] px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
                  Book Appointment
                </button>
              </Link>
              <button className="w-full sm:w-auto border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-[#33c9b6] transition-all">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:block relative">
            <Image
              src="/images/doctor.png"
              alt="Doctor"
              width={600}
              height={600}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
} 