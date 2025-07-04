'use client'
import { useEffect } from "react"

export default function Navbar() {
    useEffect(() => {
        const addBot = document.createElement('script');
        addBot.src = "link.js"
        document.body.appendChild(addBot)
    })
  return (
    <div>this is nav bar</div>
  )
}

