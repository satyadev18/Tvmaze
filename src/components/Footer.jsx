import React from 'react'

const Footer = () => {
  return (
    <div>
         <footer className="flex flex-col items-center justify-center space-y-2 bg-slate-800 py-6">
            <a href="/">
              <h1 className=" text-3xl font-bold uppercase"><span className="text-yellow-400">TvMaze</span><span className="text-gray-300">.com</span></h1></a>
            <div className="flex flex-col items-center justify-center space-y-4 text-gray-400 sm:flex-row sm:space-y-0 sm:space-x-14">
              <a href="#">Contact</a><a href="#">FAQ</a><a href="#">Terms and Conditions</a><a href="#">Privacy Policy</a>
            </div>
            <p className="pt-2 text-gray-400"> © 2023 TvMaze.com</p>
          </footer>
    </div>
  )
}

export default Footer