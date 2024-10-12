'use client'

export default function ProductCard({ product }: { product: { id: number; name: string; price: number; image_url: string } }) {
  return (
    <div
      className='w-full md:w-56 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow'
    >
      <div className='relative'>
        <img
          src={product.image_url}
          alt={`Image of ${product.name}`}
          className='w-full h-48 md:h-56 object-cover rounded-t-lg'
        />
        <button
          className='absolute top-0 right-0 p-3'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={1}
              d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
            />
          </svg>
        </button>
      </div>
      <div className='p-3 flex justify-between gap-2 flex-col'>
        <div>
          <p className='text-black font-bold'>$ {product.price}</p>
          <p className='text-gray-500 text-xs'>
            <span className='line-through'>$ 800</span>
            <span className='text-red-600'> -45%</span> off
          </p>
        </div>
        <h2 className='text-black truncate'>{product.name}</h2>
      </div>
    </div>
  )
}
