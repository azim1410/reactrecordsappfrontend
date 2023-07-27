import React from 'react'

const Workoutdetails = ({workout}) => {

  const handleclick = async( ) =>{
    const response = await fetch('/api/workout/'+workout._id, {
      method:'DELETE',
      
    })

    const json = await response.json()
    

  }

  return (
    <div className="workoutcard">
  
        <h2>{workout.title}</h2>
        <hr />
        <p>Sets = {workout.sets}</p>
        <p>Reps = {workout.reps}</p>
        
        <button onClick={handleclick} className='delbtn'>Delete</button>
    </div>
  )
}

export default Workoutdetails