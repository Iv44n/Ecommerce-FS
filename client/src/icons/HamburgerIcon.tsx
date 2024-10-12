export default function HamburgerIcon({ className = 'size-6', strokeWidth = 2 }: { className?: string, strokeWidth?: number }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={strokeWidth}
        d='M4 6h16M4 12h16M4 18h16'
      />
    </svg>
  )
}
