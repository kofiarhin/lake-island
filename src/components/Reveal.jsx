import { useScrollReveal } from '../hooks/useScrollReveal'

const variants = {
  'fade-up': {
    hidden: { opacity: 0, transform: 'translateY(28px)' },
    visible: { opacity: 1, transform: 'translateY(0px)' },
  },
  'fade-in': {
    hidden: { opacity: 0, transform: 'translateY(0px)' },
    visible: { opacity: 1, transform: 'translateY(0px)' },
  },
  'fade-left': {
    hidden: { opacity: 0, transform: 'translateX(-24px)' },
    visible: { opacity: 1, transform: 'translateX(0px)' },
  },
  'fade-right': {
    hidden: { opacity: 0, transform: 'translateX(24px)' },
    visible: { opacity: 1, transform: 'translateX(0px)' },
  },
}

function Reveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.12,
  className = '',
  as: Tag = 'div',
}) {
  const { ref, isVisible } = useScrollReveal({ threshold })
  const { hidden, visible } = variants[variant] ?? variants['fade-up']

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...(isVisible ? visible : hidden),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  )
}

export default Reveal
