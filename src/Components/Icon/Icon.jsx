import React from 'react'
import { Link } from 'react-router-dom'

export default function Icon({children, Url,onClick}) {
  return (
  <Link to={Url} className="icon-box" onClick={onClick}>
    {children}
  </Link>
    )
}
