import React from 'react'

export default function Foot() {
  return (
    <div>
      <nav className="fixed bottom-0 w-full my-2 text-xs">
        {/* <div className="flex justify-center content-center">
          <p>Created by</p>
          <a href="https://www.instagram.com/andretaiwx/" target="_blank" rel="noopener noreferrer"
            className="mx-1 text-indigo-500">Andre</a>
        </div> */}
        <p className="text-center">If there's any issue please contact <a className="text-indigo-500" href="https://www.instagram.com/andretaiwx/" target="_blank" rel="noopener noreferrer">me</a>.</p>
      </nav>
    </div>
  )
}
