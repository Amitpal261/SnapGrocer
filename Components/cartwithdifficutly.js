import React from 'react'
const Cartwithdifficutly = (Card) => {
  console.log("Card :", Card);

  const CartwithdifficutlyLabel = (props) => {
    //console.log("cartswith", props);

    return (
      <div className='flex flex-col '>
        <label className='mt-5 bg-black/50 backdrop-blur-md rounded-lg border border-red-100 text-2xl font-bold text-white absolute z-10 px-5 ml-5' htmlFor=""> 
          {props.data?.difficulty}
        </label>
        <Card {...props} />
      </div>
    )
  }
  return CartwithdifficutlyLabel;
}

export default Cartwithdifficutly;
