import React from 'react'
import { useState , useEffect} from 'react'
import Header from '../comoponents/Header'
import Footer from '../comoponents/Footer'
import Workoutdetails from '../comoponents/Workoutdetails'
import WorkoutsForm from '../comoponents/WorkoutsForm'

const Home = () => {
  const [workout , setWorkout] = useState(null)
  useEffect ( () => {
    const fetchworkouts =  async () => {
      const response  = await fetch('/api/workout/')
      const json = await response.json()

      if(response.ok){
        setWorkout(json)
      }
    }

    fetchworkouts()
  } , [])

  return (
    <div className="homepage">
        <Header />
      
        <div className="workouts">
        <div className="right">
          <WorkoutsForm />
        </div>
          {workout && workout.map((workout) =>(
            <Workoutdetails key={workout._id} workout={workout}/>
          )) }
          
        </div>
        
        <Footer />
       
    </div>
  )
}

export default Home