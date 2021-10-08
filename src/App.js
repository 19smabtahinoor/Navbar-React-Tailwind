import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />

      <div className="pt-6">
        <h1 className="text-4xl text-center text-gray-800 font-semibold select-none">Get the source code of this navbar</h1>
        <p className="text-center text-lg pt-3 font-semibold select-none" >Source Code : <a href="https://github.com/19smabtahinoor/Navbar-React-Tailwind" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">Click here</a></p>
        <p className="text-center text-lg pt-3 font-semibold select-none">Live Site Link : <a href="https://navbar-react-tailwind.vercel.app" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">Click here</a></p>
      </div>
    </>
  )
}

export default App
