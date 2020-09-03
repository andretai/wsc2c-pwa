import React from 'react';

export default function Nav(props) {
  return (
    <div>
      <nav className="flex justify-between content-center m-6">
        <div className="flex">
          <img className="w-10 h-10" src="whatsapp.png" alt="WhatsApp logo"></img>
          <p className="mx-1 font-mono font-semibold text-xs">Klik2Chat</p>
        </div>
        <div className=" text-indigo-800 text-sm">
          <button onClick={() => props.toggleShowPolicy()}>Privacy Policy</button>
        </div>
      </nav>
    </div>
  )
}
