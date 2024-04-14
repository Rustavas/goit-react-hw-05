import { useEffect } from "react"
import { useState } from "react"
import { Link, Navigate } from "react-router-dom"

import css from "./NotFoundPage.module.css"

const NotFoundPage = () => {
  const [timer, setTaimer] = useState(0)
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTaimer(prevTimer => prevTimer + 1);
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])
  
  if (timer === 5){
    return <Navigate to="/" replace />
  }

  return (
    <div>
      <h1 className={css.title}>Sorry, this page was not found!</h1>
      <h2>You will be redirected to Home in {5 - timer} seconds</h2>
      <Link to="/">Home</Link>
    </div>
  )
}

export default NotFoundPage