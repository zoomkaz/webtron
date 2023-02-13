import React from 'react'

import './About.css'
import wade from '../../img/mentors/Wade Warren.png'
import kristin from '../../img/mentors/Kristin Watson.png'
import robert from '../../img/mentors/Robert Fox.png'

export default class About extends React.Component {
  constructor() {
    super()
    this.state = {
      persons: [
        {
          name: 'Wade Warren',
          desc: 'Front-end engineers work closely with designers',
          photo: wade
        },
        {
          name: 'Kristin Watson',
          desc: 'Front-end engineers work closely with designers',
          photo: kristin
        },
        {
          name: 'Robert Fox',
          desc: 'Front-end engineers work closely with designers',
          photo: robert
        }
      ]
    }
  }
  render() {
    return (
      <div id='About' className='about'>
        <h2 className='title'>About us</h2>
        <div className='about_container'>
          <div className='mentors'>
            <div className='mentors__title-line'>
              <h3 className='mentors_title'>Mentors</h3>
              <div className='lines'></div>
              <div className='cards'>
                {(this.state.persons).map((item, index) => {
                  return <div key={index.toString()} className='card'>
                    <div className='ellipse'>
                      <img src={item.photo} alt='mentor' />
                    </div>
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                  </div>
                })}
              </div>
            </div>
          </div>
          <div className='mentors_disc'>
            <p>
              Front-end engineers work closely with designers to make websites beautiful, functional, and fast.
              This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.
            </p>
            <div className='front-back'>

            </div>
          </div>
        </div>
      </div>
    )
  }
}