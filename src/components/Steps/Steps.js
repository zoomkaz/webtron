import React, { useState } from 'react'

import './Steps.css'

export default function Steps() {

  const [step1] = useState({ number: 'Step 1', title: 'Introduction to Front-End', text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ' })
  const [step2] = useState({ number: 'Step 2', title: 'Introduction to Front-End', text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ' })
  const [step3] = useState({ number: 'Step 3', title: 'Overview of Development', text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ' })
  const [step4] = useState({ number: 'Step 4', title: 'Overview of Development', text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ' })
  const [step5] = useState({ number: 'Step 5', title: 'Introduction to Front-End', text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ' })
  const [step6] = useState({ number: 'Step 6', title: 'Introduction to Front-End', text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ' })

  let list1 = [step1, step3, step5]
  let list2 = [step2, step4, step6]

  let list3 = [step1, step2, step3, step4, step5, step6]

  return (
    <div id='Steps' className='steps'>
      <h2 className='steps_title'>Steps</h2>
      <div className='steps_container'>
        <div className="steps_left">
          <div className='left-step_container'>
            {list1.map((item, index) => {
              return <div key={index.toString()} className='step-left_box'>
                <div className='left-step'>
                  <h4>{item.number}</h4>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <div className='arrow-left'></div>
              </div>
            })}
          </div>
        </div>
        <div className='steps_line'></div>
        <div className="steps_right">
          <div className="right-step_container">
            {list2.map((item, index) => {
              return <div key={index.toString()} className='step-right_box'>
                <div className='arrow-right'></div>
                <div className='right-step'>
                  <h4>{item.number}</h4>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            })}
          </div>
        </div>
        <div className='steps_both'>
          {list3.map((item, index) => {
            return <div key={index.toString()}>
              <div className='right-step'>
                <h4>{item.number}</h4>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}