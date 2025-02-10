interface ButtonProps {
  variant?: 'primary' | 'outline'
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({ variant = 'primary', children, onClick }: ButtonProps) {
  return (
    <button 
      className={variant === 'primary' ? 'btn-primary' : 'btn-outline'}
      onClick={onClick}
    >
      {children}
    </button>
  )
} 