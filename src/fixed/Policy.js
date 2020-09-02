import React from 'react'

export default function Policy(props) {
  const list_items = "my-3";
  const list_items_ans = "italic text-sm";
  return (
    <div>
      <button onClick={() => props.toggleShowPolicy()} className="z-40 fixed inset-0 w-full h-full bg-black opacity-50">
      </button>
      <div className="z-50 fixed top-0 left-0 right-0 m-6 p-6 bg-white rounded-sm font-hairline">
        <p className="font-semibold text-center text-xl">Privacy Policy</p>
        <ol className="list-decimal mx-3">
          <li className={list_items}>
            <p>Information that we collect.</p>
            <p className={list_items_ans}>None.</p>
          </li>
          <li className={list_items}>
            <p>Information you provide to us.</p>
            <p className={list_items_ans}>None.</p>
          </li>
          <li className={list_items}>
            <p>How do we collect information?</p>
            <p className={list_items_ans}>We don't.</p>
          </li>
          <li className={list_items}>
            <p>Use of your personal information?</p>
            <p className={list_items_ans}>We don't use any.</p>
          </li>
        </ol>
        <div className="w-1/2 mx-auto mt-8">
          <button onClick={() => props.toggleShowPolicy()} className="w-full bg-blue-500 rounded-lg text-white focus:outline-none">Okay</button>
        </div>
      </div>
    </div>
  )
}
