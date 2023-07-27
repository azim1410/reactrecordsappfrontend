import React, { useState } from 'react'

const WorkoutsForm = () => {
    const [title , SetTitle] = useState('')
    const [sets , SetSets] = useState('')
    const [reps , SetReps] = useState('')
    const [error , SetError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = { title , reps, sets}

        const response = await fetch('/api/workout' , {
            method : 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok){
            SetError(json.error)
        }
        if(response.ok){
            SetTitle('')
            SetReps('')
            SetSets('')
            SetError(null)
            console.log('data added to form')
        }
    }

  return (
    <div className="form">
        <h1>Enter Workout details</h1>
        <div className="exedet">
        <h3>Exercise Name: </h3>
        <input type="text" placeholder='exercise name' 
        onChange={(e) => SetTitle(e.target.value)}
        value={title}
        />
        </div>
        <div className="exedet">
        <h3>Exercise Sets: </h3>
        <input type="text" placeholder='Sets'
        onChange={(e) => SetSets(e.target.value)}
        value={sets}/>
        </div>
        <div className="exedet">
        <h3>Exercise Reps: </h3>
        <input type="text" placeholder='Reps'
        onChange={(e) => SetReps(e.target.value)}
        value={reps}/>
        </div>
        <button onClick={handleSubmit}>Add data</button>
        {error && <div className='err'>{error}</div>}
    </div>
  )
}

export default WorkoutsForm