const experts = [
  {
    name: "Patrik Cortez",
    title: "Doctor",
    image: "/images/doctor-1.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      google: "#",
    },
  },
  {
    name: "Patrik Cortez",
    title: "Doctor",
    image: "/images/doctor-2.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      google: "#",
    },
  },
  {
    name: "Patrik Cortez",
    title: "Doctor",
    image: "/images/doctor-3.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      google: "#",
    },
  },
  {
    name: "Patrik Cortez",
    title: "Doctor",
    image: "/images/doctor-4.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      google: "#",
    },
  },
];

export default function ExpertTeam() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Expert Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
            in a piece of classical Latin literature from 45 BC, making it over 2000 years
            old. Richard McClintock,
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">{expert.name}</h3>
                <p className="text-[#33c9b6] mb-4">{expert.title}</p>
                <div className="flex justify-center space-x-4">
                  {Object.entries(expert.socials).map(([platform, link]) => (
                    <a
                      key={platform}
                      href={link}
                      className="text-gray-400 hover:text-[#33c9b6]"
                    >
                      <span className="sr-only">{platform}</span>
                      <i className={`fab fa-${platform}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 