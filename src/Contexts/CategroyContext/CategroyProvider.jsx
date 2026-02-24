import { createContext, useContext } from "react";
import { useEffect, useState } from "react"

const categroyContext = createContext()
const BASE_URL="https://dummyjson.com/products"
// https://dummyjson.com/products/category/
export function useCategroyContext(){
    const context= useContext(categroyContext)
    if (context==undefined) throw new Error("categries was used outside the CitiesProvider")
    return context
}
export default function CategroyProvider({children}) {
      const [categroy,setCategroy]=useState([])
      const [isLoading,setIsLoading]=useState(false)
      const [error ,setError]=useState(null)
    
    useEffect(() => {
      async function getCategroy() {
        setIsLoading(true)
        setError(null)
        try {
          const res = await fetch(`${BASE_URL}/categories`)
          if (!res.ok) throw new Error("Failed to fetch categories");
          const data = await res.json()
          setCategroy(data)
    
        } catch (err) {
          setError(err.message)
        } finally {
          setIsLoading(false)
        }
      }
    
      getCategroy();
    }, []);

  return (
    <categroyContext.Provider
    value={{
       categroy, 
       isLoading,
       error ,
       BASE_URL
      }}
    >
      {children}

    </categroyContext.Provider>
  )
}
