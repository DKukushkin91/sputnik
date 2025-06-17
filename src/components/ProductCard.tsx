import { formatPrice } from '#utils/formatPrice'

interface IProps {
  product: IProduct
}

const ProductCard = ({
  product,
}: IProps) => {
  return (
    <a
      href="#"
      className="flex flex-col gap-16 p-20 border-1 rounded-xl border-gray-200 bg-white shadow-2xs cursor-pointer transition-all hover:shadow-2xl"
    >
      <img
        src={product.imageUrl}
        alt={product.title}
        width={200}
        height={200}
        className="rounded-lg w-full"
      />
      <div className="flex-1 flex flex-col h-full justify-between">
        <h3 className="mb-12 text-2xl hyphens-auto font-bold text-zinc-700">
          {product.title}
        </h3>
        <p className="mb-16 text-xl text-zinc-400">
          Страна:
          {' '}
          {product.origin}
        </p>
        <div className="mt-auto text-2xl font-semibold text-blue-400">
          {formatPrice(product.price, product.currency)}
        </div>
      </div>
    </a>
  )
}

export default ProductCard
