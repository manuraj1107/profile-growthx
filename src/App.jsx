import { useEffect, useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
   const [data, setData] = useState([])
  console.log(data)

  useEffect(() => {
  
  fetch('https://mock-backend-for-interns.rahulyadav45.repl.co/users').then(res=> res.json()).then(data => setData(data.users))  
  

  }, [])


  return (
    <div className="App">
    
     {data.length > 0 ? data.map((profile,i) => <Card key={profile._id + i+1} profiles={profile} />
     ) : <></> }
     
     {/* <Card />
     <Card />
     <Card /> */}
          </div>
  )
}

export default App
