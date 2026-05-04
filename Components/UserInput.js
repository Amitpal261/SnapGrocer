import React from 'react'

const UserInput = ({ Username, setUsername }) => {
  return (
    
      <input className="bg-white mx-40 p-4 rounded-lg" type="text" value={Username} onChange={(e) => setUsername(e.target.value)} />

  )
}

export default UserInput
