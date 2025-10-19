import ProfileHeader from './ProfileHeader'
import ProfileStats from './ProfileStats'
import SkillBadge from './SkillBadge'
import ProductCard from '../../product_card/src/ProductCard'
import './App.css'

function App() {
  

  return (
    <div className='body'>
      <ProfileHeader
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZZzWC0mxI0meU3_n53mzCMQ2QTMRE-yI_A&s"
      name="Ibrahim Lukman"
      title="AI Developer"
      />
      
    </div>
  )
}

export default App
