import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Sidebar from '../components/sidebar.jsx'

export default function HomePage() {
  const [message, setMessage] = React.useState('No message found')

  React.useEffect(() => {
    window.ipc.on('message', (message) => {
      setMessage(message)
    })
  }, [])

  return (
    <>
      <Sidebar className="bg-background"></Sidebar>
    </>
  )
}
