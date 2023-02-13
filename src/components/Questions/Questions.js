import React, { useEffect, useState } from 'react'

import './Questions.css'

export default function Questions() {
  const [q1] = useState({
    title: 'What is the price?',
    desc: `Front-end engineers work closely with designers to make websites beautiful, functional, and fast. 
  This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.`
  })
  const [q2] = useState({
    title: 'What is the price?',
    desc: `Front-end engineers work closely with designers to make websites beautiful, functional, and fast. 
  This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.`
  })
  const [q3] = useState({
    title: 'What is the price?',
    desc: `Front-end engineers work closely with designers to make websites beautiful, functional, and fast. 
  This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.`
  })
  const [q4] = useState({
    title: 'What is the price?',
    desc: `Front-end engineers work closely with designers to make websites beautiful, functional, and fast. 
  This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.`
  })
  const [q5] = useState({
    title: 'What is the price?',
    desc: `Front-end engineers work closely with designers to make websites beautiful, functional, and fast. 
  This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.`
  })

  let list = [q1, q2, q3, q4, q5]

  useEffect(() => {
    document.querySelectorAll('.question_item')[0].setAttribute('class', 'question_item-target')
    document.querySelectorAll('.question_item-p')[0].setAttribute('class', 'question_item-p-target')
    document.querySelectorAll('.icon_plus')[0].setAttribute('class', 'icon_minus')
  }, [])

  let show = (e) => {
    let questionsList = document.querySelector('.questions_list')
    let questionsTargetList = document.querySelectorAll('.question_item-target')
    let pTargetList = document.querySelectorAll('.question_item-p-target')

    for (let i = 0; i < questionsTargetList.length; i++) {
      questionsTargetList[i].setAttribute('class', 'question_item')
      pTargetList[i].setAttribute('class', 'question_item-p')
    }
    let iconMinus = document.querySelector('.icon_minus')
    if (iconMinus) {
      iconMinus.setAttribute('class', 'icon_plus')
    }

    questionsList.attributes[0].ownerElement.childNodes[e.target.id].setAttribute('class', 'question_item-target')
    questionsList.attributes[0].ownerElement.childNodes[e.target.id].childNodes[2].setAttribute('class', 'question_item-p-target')
    e.target.setAttribute('class', 'icon_minus')
  }

  return (
    <div id='Questions' className='question'>
      <h2>Frequently Asked Questions</h2>
      <div className='questions_container'>
        <div className='question-left'>
          <p className='question_mark-p'>Do you have any kind of questions?<br />We are here to help.</p>
          <div className='question_mark'></div>
        </div>
        <div className='questions_list'>
          {list.map((item, index) => {
            return <div className='question_item' id={index} key={index.toString()}>
              <div className='icon_plus' id={index} onClick={show}></div>
              <h4>{item.title}</h4>
              <p className='question_item-p'>{item.desc}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}