import ProductCard from '@/components/ProductCard'

export default async function ShopPage() {
  const res = await fetch('http://localhost:3001/api/products')
  const data = await res.json()

  return (
    <div className='p-4'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
          data.map((product: { id: number; name: string; price: number; image_url: string }) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  )
}
