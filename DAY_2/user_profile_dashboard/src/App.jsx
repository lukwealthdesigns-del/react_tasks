import ProfileHeader from './ProfileHeader'
import ProfileStats from './ProfileStats'
import SkillBadge from './SkillBadge'
import ProfileCard from './ProfileCard'
import './App.css'

function App() {
  

  return (
    <div className='body'>
      <ProfileHeader
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZZzWC0mxI0meU3_n53mzCMQ2QTMRE-yI_A&s"
      name="Ibrahim Lukman"
      title="AI Developer"
      />

      <ProfileStats
      projects="100"
      followers="10.7M"
      following="1.7K"
      />

      <div className='skillBadgeCont'>
        <SkillBadge
        skill="HTML & CSS"
        level="Expert"
        />

        <SkillBadge
        skill="Javascript"
        level="Intermediate"
        />

        <SkillBadge
        skill="React"
        level="Beginner"
        />
  
      </div>

      <ProfileCard 
      
      />
      
      
    </div>
  )
}

export default App
