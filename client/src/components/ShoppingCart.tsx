import ShoppingCartIcon from '@/icons/ShoppingCartIcon'

export default function ShoppingCart({ numberItems }: {numberItems?: number}) {
  return (
    <button className='flex items-center gap-4 relative'>
      <ShoppingCartIcon strokeWidth={1} className='size-6'/>
      {numberItems && <span className='text-white text-[10px] absolute -top-1 -right-1 bg-black rounded-full w-4 h-4 flex justify-center items-center'>{numberItems}</span>}
    </button>
  )
}
