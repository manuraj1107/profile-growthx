import React, {useState} from 'react'
import './card.css'

const Card = ({profiles}) => {
    const [detail, setDetail] = useState({})
  console.log(profiles._id)

  function profilePop(){
    fetch(`https://mock-backend-for-interns.rahulyadav45.repl.co/users/${profiles._id}`).then(res => res.json()).then(data => setDetail(data))
  }

  return (
    <>
    <div className='card'>
        <div className='img'>
            <img src={profiles.profile_picture} alt='user-img' />
        </div>
        <div className='info'>
         <h2>{`${profiles.name.first} ${profiles.name.last}`}</h2>
         <p>{profiles.location}</p>
         <p>{profiles.about}</p>
         <p>{profiles.profession
}</p>
        </div>
        <button onClick={profilePop} >More</button>
    </div>
     <div className='details'>
        <div className='info-card'>
        <img className='card-img' />
        <div className='card-details'>
          
          <p></p>
        </div>

        </div>
     </div>
    </>
  )
}

export default Card