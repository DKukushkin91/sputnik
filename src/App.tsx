import { getProducts } from '#utils/getProducts'
import ProductCard from './components/ProductCard'

const products = getProducts()

const App = () => {
  return (
    <div className="flex flex-col mx-auto min-h-screen">
      <header className="text-center p-16">
        <h1>Демонстрация компонента ProductCard</h1>
      </header>

      <main className="flex-1">
        <div className="px-16 grid grid-cols-1 mx-auto gap-12 xs:grid-cols-2 lg:grid-cols-3 lg:max-w-7xl">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </main>

      <footer className="text-center p-16">
        Footer
      </footer>
    </div>
  )
}

export default App
