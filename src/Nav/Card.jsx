import React from 'react'

const Card = () => {
  return (
	<div className="max-w-xs rounded overflow-hidden shadow-lg">
      
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{Name}</div>
        <div className="font-bold text-xl mb-2">{email}</div>
		<div className="font-bold text-xl mb-2">{contact}</div>
      </div>
      
    </div>
  )
}

export default Card