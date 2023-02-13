import React, { useState } from 'react'
import './Programs.css'
import angularImg from '../../img/programs/Angular.png'
import vueImg from '../../img/programs/Vue.png'
import reactImg from '../../img/programs/React.png'
import javaScriptImg from '../../img/programs/JavaScript.png'

export default function Programs() {
  const [angular] = useState({ img: angularImg, name: 'Angular' })
  const [vue] = useState({ img: vueImg, name: 'Vue' })
  const [react] = useState({ img: reactImg, name: 'React' })
  const [javaScript] = useState({ img: javaScriptImg, name: 'JavaScript' })

  let list = [angular, vue, react, javaScript]

  return (
    <div id='Programs' className='programs'>
      <div className='programs_title-container'>
        <h2>Programming technologies</h2>
        <p> By the end, you’ll have the portfolio and interview skills you need to start your new career.</p>
      </div>
      <div className='programs_container'>
        {list.map((item, index) => {
          return <div key={index.toString()} className="program">
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
          </div>
        })}

      </div>
    </div>
  )
}