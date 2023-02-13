import React, { useState, useEffect } from 'react'

import './Review.css'

import p1Img from '../../img/review/p1Img.png'
import p1SmallImg from '../../img/review/p1SmallImg.png'
import p2Img from '../../img/review/p2Img.png'
import p2SmallImg from '../../img/review/p2SmallImg.png'
import p3Img from '../../img/review/p3Img.png'
import p3SmallImg from '../../img/review/p3SmallImg.png'

export default function Review() {
  const [num, setNum] = useState(0)
  const [number, setNumber] = useState(1)
  const [title, setTitle] = useState('Best courses ever')
  const [text, setText] = useState(`Good course, up to this point, still ongoing.
  The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like,
  he is lost, and takes up quite a time, to correct himself, and check back etc.`)

  const [p1] = useState({
    id: 1,
    img: p1Img,
    SmallImg: p1SmallImg,
    title: 'Best courses ever',
    text: `Good course, up to this point, still ongoing.
    The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like,
    he is lost, and takes up quite a time, to correct himself, and check back etc.`,
  })
  const [p2] = useState({
    id: 2,
    img: p2Img,
    SmallImg: p2SmallImg,
    title: 'Amazing teaching',
    text: `The explanation is crazy it really doesn't have a structure to go from point A to point B. 
    He starts to explain something then he change his mind and start with another thing an so on. 
    If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.`,
  })
  const [p3] = useState({
    id: 3,
    img: p3Img,
    SmallImg: p3SmallImg,
    title: 'Simple and easy',
    text: `I am really enjoying the experience of learning a new skill 
    I used to believe that web design was way too complicated for me to learn 
    but so far in this course I have been keeping up and having fun.`,
  })

  let list = [p1, p2, p3]

  useEffect(() => {
    document.querySelectorAll('.slider_img')[0].classList.add('active')
    document.querySelectorAll('.slider_img')[0].style.backgroundImage = `url(${p1Img})`
  }, [])

  let left = () => {
    let slides = document.querySelectorAll('.slider_img')

    let currentNum = num
    currentNum--
    setNum(currentNum)

    if (num <= 0) {
      setNum(2)
    }

    setNumber(list[num].id)
    setTitle(list[num].title)
    setText(list[num].text)

    clearActiveClasses()

    slides[num].classList.add('active')
    slides[num].style.backgroundImage = `url(${list[num].img})`

    function clearActiveClasses() {
      slides.forEach((slide, index) => {
        slide.classList.remove('active')
        slide.style.backgroundImage = `url(${list[index].SmallImg})`
      })
    }
  }


  let right = () => {
    let slides = document.querySelectorAll('.slider_img')

    let currentNum = num
    currentNum++
    setNum(currentNum)

    if (num >= 2) {
      setNum(0)
    }

    setNumber(list[num].id)
    setTitle(list[num].title)
    setText(list[num].text)

    clearActiveClasses()

    slides[num].classList.add('active')
    slides[num].style.backgroundImage = `url(${list[num].img})`

    function clearActiveClasses() {
      slides.forEach((slide, index) => {
        slide.classList.remove('active')
        slide.style.backgroundImage = `url(${list[index].SmallImg})`
      })
    }
  }

  return (
    <div id='Review' className='review'>
      <h2>Review</h2>
      <div className='review_container'>
        <div className='review_left'>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
        <div className='review_slider-container'>
          <div className='slider_top'>
            <div className='first_num'>{number}/<span className='second_num'>3</span></div>
            <div className="arrows">
              <div onClick={left} className='arrows_left'></div>
              <div onClick={right} className='arrows_right'></div>
            </div>
          </div>
          <div className='slider_bottom'>
            <div className="slider_img" style={{ backgroundImage: `url(${p1SmallImg})` }}></div>
            <div className="slider_img" style={{ backgroundImage: `url(${p2SmallImg})` }}></div>
            <div className="slider_img" style={{ backgroundImage: `url(${p3SmallImg})` }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}