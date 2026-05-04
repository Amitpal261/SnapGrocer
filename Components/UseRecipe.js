import React, { useEffect, useState } from 'react'

const UseRecipe = () => {
    const[ data1 , setData] = useState(null)
    console.log("dataaa:",data1);
    
     useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch("https://dummyjson.com/recipes");
            const data = await response.json();
            setData(data.recipes)
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
    
        fetchData();
      }, []);
   
  return data1
}

export default UseRecipe
