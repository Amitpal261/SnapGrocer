import React from 'react'

const Instruction = ({ step, index, activeInstruction, setActiveInstruction }) => {
    
  return (
    <div>
      <li key={index} className="border rounded-lg p-3 shadow-sm  bg-orange-100">
          
          <button
            className="bg-orange-400 text-white px-3 py-1 rounded-md hover:bg-orange-500 transition"
            onClick={() =>
              setActiveInstruction(activeInstruction === index ? null : index)
            }
          >
            Step {index + 1}
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeInstruction === index ? "max-h-40 mt-2" : "max-h-0"
            }`}
          >
            <p className="text-gray-600">{step}</p>
          </div>

        </li>
    </div>
  )
}

export default Instruction
