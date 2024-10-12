import SearchIcon from '@/icons/SearchIcon'

export default function SearchBar() {
  return (
    <div className='flex flex-1 items-center mx-2 md:flex-none md:mx-0 py-2 px-3 bg-gray-100 rounded-md min-w-[150px] md:min-w-[300px] text-sm'>
      <input
        type='text'
        className='rounded-md w-full border border-none focus:outline-none focus:ring-0 bg-inherit'
        placeholder='Search'
      />
      <button>
        <SearchIcon strokeWidth={1} className='size-5' />
      </button>
    </div>
  )
}
