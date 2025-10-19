
import './App.css'
import GreetingCard from './GreetingCard'

function App() {

  return (
    <div className='body'>
      <GreetingCard 
       name="Ibrahim Lukman"
       message="It's nice to meet you all"
       color={"rgb(0, 50, 99)"}
      />

      <GreetingCard 
       name="Developers"
       message="Welcome to my React projects"
       color={"rgba(38, 103, 1, 1)"}
      />

      <GreetingCard 
       name="Designers"
       message="Design says it all"
       color={"rgba(49, 0, 99, 1)"}
      />

      
        
    </div>
  )
}

export default App
