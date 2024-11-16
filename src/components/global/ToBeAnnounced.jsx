import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'

const ToBeAnnounced = () => {
  return (
    <div>
        <Container>
            <div className="flex flex-col space-y-6 justify-center items-center h-screen">
                <h1 className="text-4xl font-primaryBold text-center">Event details will be announced soon!</h1>
                <Link to="/" className="text-blue-500 font-primaryRegular hover:underline">Go back to home</Link>
            </div>
        </Container>
    </div>
  )
}

export default ToBeAnnounced