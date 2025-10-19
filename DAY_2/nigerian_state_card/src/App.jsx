import StateCard from './StateCard'
import './App.css'

function App() {

  return (
    <div className='body'>
      <StateCard 
      state="Ogun"
      capital="Abeokuta"
      region="West"
      population="500,000"
      children="Olumo Rock"
      />
     
      <StateCard 
      state="Lagos"
      capital="Ikeja"
      region="South"
      population="4,000,000"
      children="National Theatre"
      />
      
      
      <StateCard 
      state="Kano"
      capital="Kano"
      region="North"
      population="900,000"
      children="Gidan Makama"
      />
      
      <StateCard 
      state="Enugu"
      capital="Enugu"
      region="East"
      population="700,000"
      children="Ngwo Pine Forest"
      />
     
    </div>
  )
}

export default App
