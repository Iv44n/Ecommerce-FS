import HamburgerIcon from '@/icons/HamburgerIcon'
import LinkStyled from './LinkStyled'
import SearchBar from './SearchBar'
import ShoppingCart from './ShoppingCart'
import UserIcon from '@/icons/UserIcon'

export default function Header() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' },
    { name: 'About', href: '/about' },
    { name: 'Sign Up', href: '/auth/signup' }
  ]

  return (
    <header className='flex justify-between items-center py-4 md:py-6 px-2 gap-2 md:gap-4 border-b border-gray-500 mb-10 sticky top-0 z-10 backdrop-blur'>

      <button aria-label='Open menu' className='md:hidden'>
        <HamburgerIcon strokeWidth={1.25} className='size-7'/>
      </button>

      <h1 className='text-2xl md:text-3xl font-bold'>Shop</h1>

      <nav className='hidden md:flex'>
        <ul className='flex gap-6 md:gap-10 items-center'>
          {navItems.map(item => (
            <li key={item.name}>
              <LinkStyled href={item.href}>{item.name}</LinkStyled>
            </li>
          ))}
        </ul>
      </nav>

      <div className='flex items-center gap-3 md:gap-4 flex-1 justify-end md:flex-none'>
        <SearchBar />
        <ShoppingCart/>
        <button aria-label='User profile'>
          <UserIcon strokeWidth={1} className='h-6 w-6'/>
        </button>
      </div>
    </header>
  )
}
