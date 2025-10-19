import ProductCard from './ProductCard'
import './App.css'

function App() {
  

  return (
    <div className='body'>
      <ProductCard
        name="Nike Air Max"
        price="600,000"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7ZbQ92u1JD-JgD4Kkhkju83p_uvKelP5jw&s"
        inStock={true}
      />

      <ProductCard
        name="Nike Dunk High"
        price="900,000"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk4ED8cUwMCB3-RslZWD0TYdg1UM7XNIjQDw&s"
        inStock={true}
      />

      <ProductCard
        name="Nike By You"
        price="700,000"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSecIiFeYHH3MG6W-1sb8IoFFNyBXuOExhhSg&s"
        inStock={false}
      />
      
    </div>
  )
}

export default App
