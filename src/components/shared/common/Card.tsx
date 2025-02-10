interface CardProps {
  title: string
  description: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  iconBgColor?: string
  className?: string
}

export default function Card({ 
  title, 
  description, 
  icon: Icon, 
  iconBgColor = "bg-[#e6f7fc]",
  className = '' 
}: CardProps) {
  return (
    <div className={`p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {Icon && (
        <div className={`w-14 h-14 ${iconBgColor} rounded-lg flex items-center justify-center mb-6`}>
          <Icon className="w-7 h-7 text-[#33c9b6]" />
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
} 