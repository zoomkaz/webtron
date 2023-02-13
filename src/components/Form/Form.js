import React, { useState } from 'react'

import FormData from './FormData/FormData'

import './Form.css'
import { Link } from 'react-router-dom'

export default function Form() {

  const [status, setStatus] = useState(false)
  const [statusEmail, setStatusEmail] = useState(false)
  const [statusTel, setStatusTel] = useState(false)
  const [statusName, setStatusName] = useState(false)

  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')

  const [check, setCheck] = useState(false)



  const send = (e) => {
    e.preventDefault()

    let errors = document.querySelectorAll('.error')
    let errorName = errors[0]
    let errorTel = errors[1]
    let errorEmail = errors[2]

    let targetForm = e.target.form

    let nameInput = targetForm[0]
    let telInput = targetForm[1]
    let emailInput = targetForm[2]

    let nameValue = nameInput.value
    let telValue = telInput.value
    let emailValue = emailInput.value



    if (!nameValue && !telValue && !emailValue) {
      nameInput.style.background = 'rgba(255, 165, 165, 0.2)'
      nameInput.style.border = '1px solid #FD4646'
      errorName.innerHTML = 'Please, entry Name'

      telInput.style.background = 'rgba(255, 165, 165, 0.2)'
      telInput.style.border = '1px solid #FD4646'
      errorTel.innerHTML = 'Please, entry Phone number'

      emailInput.style.background = 'rgba(255, 165, 165, 0.2)'
      emailInput.style.border = '1px solid #FD4646'
      errorEmail.innerHTML = 'Please, entry E-mail'

    } else if (!nameValue && !telValue) {
      telInput.style.background = 'rgba(255, 165, 165, 0.2)'
      telInput.style.border = '1px solid #FD4646'
      errorTel.innerHTML = 'Please, entry Phone number'

      nameInput.style.background = 'rgba(255, 165, 165, 0.2)'
      nameInput.style.border = '1px solid #FD4646'
      errorName.innerHTML = 'Please, entry Name'

    } else if (!emailValue && !nameValue) {
      emailInput.style.background = 'rgba(255, 165, 165, 0.2)'
      emailInput.style.border = '1px solid #FD4646'
      errorEmail.innerHTML = 'Please, entry E-mail'

      nameInput.style.background = 'rgba(255, 165, 165, 0.2)'
      nameInput.style.border = '1px solid #FD4646'
      errorName.innerHTML = 'Please, entry Name'

    } else if (!emailValue && !telValue) {
      emailInput.style.background = 'rgba(255, 165, 165, 0.2)'
      emailInput.style.border = '1px solid #FD4646'
      errorEmail.innerHTML = 'Please, entry E-mail'

      telInput.style.background = 'rgba(255, 165, 165, 0.2)'
      telInput.style.border = '1px solid #FD4646'
      errorTel.innerHTML = 'Please, entry Phone number'

    } else if (!emailValue) {
      emailInput.style.background = 'rgba(255, 165, 165, 0.2)'
      emailInput.style.border = '1px solid #FD4646'
      errorEmail.innerHTML = 'Please, entry E-mail'

    } else if (!telValue) {
      telInput.style.background = 'rgba(255, 165, 165, 0.2)'
      telInput.style.border = '1px solid #FD4646'
      errorTel.innerHTML = 'Please, entry Phone number'

    } else if (!nameValue) {
      nameInput.style.background = 'rgba(255, 165, 165, 0.2)'
      nameInput.style.border = '1px solid #FD4646'
      errorName.innerHTML = 'Please, entry Name'

    }

    if (telValue) {
      let nums = []
      for (let i = 0; i < telValue.length; i++) {
        if (telValue[i] === '-' || telValue[i] === '(' || telValue[i] === ')' || telValue[i] === '+' || telValue[i] === ' ') {

        } else {
          nums.push(telValue[i])
        }
      }
      if (nums.length !== 11) {
        telInput.style.background = 'rgba(255, 165, 165, 0.2)'
        telInput.style.border = '1px solid #FD4646'
        errorTel.innerHTML = 'Invalid phone number'
        setStatusTel(false)
      } else {
        setStatusTel(true)
        setTel(telValue)
      }
    }

    if (emailValue) {
      if (!isEmailValid(emailValue)) {
        emailInput.style.background = 'rgba(255, 165, 165, 0.2)'
        emailInput.style.border = '1px solid #FD4646'
        errorEmail.innerHTML = 'Invalid E-mail'
        setStatusEmail(false)
      } else {
        setStatusEmail(true)
        setEmail(emailValue)
      }
    }

    if (nameValue) {
      setStatusName(true)
      setName(nameValue)
    } else {
      setStatusName(false)
    }

  }


  function isEmailValid(email) {
    const emailRegexp = new RegExp(
      /^(([^<>(/|)[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,3}))$/i
    )

    return emailRegexp.test(email)
  }


  const [count, setCount] = useState(4)

  const telCheck = (e) => {
    if (e.target.value === '+7 (---) ---------') {
      setCount(4)
    }
    if (e.target.value.length < 18) {
      e.target.value = '+7 (---) ---------'
      setCount(4)
    } else if (e.target.value.length > 18) {
      let num = e.target.value.slice(18, 19)

      let newCount = count
      if (!Number.isInteger(+num) || num === ' ') {
        num = '-'
      } else {
        e.target.value = e.target.value.slice(0, 18)
        e.target.value = e.target.value.slice(0, count) + num + e.target.value.slice(count + 1, 19)
        if (newCount === 6) {
          newCount = 9
        } else if (newCount === 11) {
          newCount = 13
        } else if (newCount === 14) {
          newCount = 16
        } else {
          newCount++
        }
        setCount(newCount)
      }
      e.target.value = e.target.value.slice(0, 18)
    }
  }

  const [countEmail, setCountEmail] = useState(0)
  const [flag, setFlag] = useState(false)

  const emailCheck = (e) => {
    let newCountEmail = countEmail
    if (e.nativeEvent.inputType === 'deleteContentBackward') {
      newCountEmail--
      if (newCountEmail < 0) {
        newCountEmail = 0
        setFlag(false)
      }
      setCountEmail(newCountEmail)

      if (!flag) {
        e.target.value = e.target.value.slice(0, countEmail) + '@example.com'
      } else {
        e.target.value = e.target.value.slice(0, countEmail - 1)
      }
      setFlag(false)
    } else {
      let char = e.target.value.slice(-1)

      if (char === '@') {
        setFlag(true)
        newCountEmail += 1;
        setCountEmail(newCountEmail)
        e.target.value = e.target.value.slice(0, countEmail) + char
      } else {
        if (!flag) {
          ++newCountEmail
          setCountEmail(newCountEmail)
          e.target.value = e.target.value.slice(0, countEmail) + char + '@example.com'
        } else {
          ++newCountEmail
          setCountEmail(newCountEmail)
          e.target.value = e.target.value.slice(0, countEmail) + char
        }
      }
    }
  }



  const refresh = (e) => {
    e.target.style.background = 'rgba(255, 255, 255, 0.05)'
    e.target.style.border = '2px solid rgba(156, 55, 253, 0.7)'
    e.target.nextSibling.innerHTML = ''
    if (e.target.type === 'tel') {
      autoNum(e)
    } else if (e.target.name === 'email') {
      autoEmail(e)
    }
  }

  const autoNum = (e) => {
    if (!e.target.value) {
      e.target.value = '+7 (---) ---------'
    }
  }

  const autoEmail = (e) => {
    if (!e.target.value) {
      e.target.value = '@example.com'
    }
  }

  let showData = ''

  setTimeout(() => {
    if (statusEmail && statusTel && statusName) {
      setStatus(true)
    } else {
      setStatus(false)
      setCheck(false)
    }

  }, 500);

  if (status) {
    localStorage.setItem('name', name)
    localStorage.setItem('tel', tel)
    localStorage.setItem('email', email)
    let inputs = document.querySelectorAll('input')
    let sendButton = document.querySelector('.send_button')

    let nameInput = inputs[0]
    let telInput = inputs[1]
    let emailInput = inputs[2]

    sendButton.style.background = 'linear-gradient(180deg, #1FF2FF 0%, #27F9E5 52.66%, #2FFFCD 100%)'
    sendButton.style.opacity = '0.4';
    sendButton.setAttribute('disabled', true)

    telInput.style.background = 'rgba(255, 255, 255, 0.05)';
    telInput.style.border = '1px solid #636363';
    telInput.style.color = '#636363';
    telInput.setAttribute('disabled', true)

    nameInput.style.background = 'rgba(255, 255, 255, 0.05)';
    nameInput.style.border = '1px solid #636363';
    nameInput.style.color = '#636363';
    nameInput.setAttribute('disabled', true)

    emailInput.style.background = 'rgba(255, 255, 255, 0.05)';
    emailInput.style.border = '1px solid #636363';
    emailInput.style.color = '#636363';
    emailInput.setAttribute('disabled', true)

    setTimeout(() => {

      sendButton.style.background = 'linear-gradient(180deg, #1FF2FF 0%, #27F9E5 52.66%, #2FFFCD 100%)';
      sendButton.style.opacity = '1';
      sendButton.removeAttribute('disabled')

      telInput.style.background = 'rgba(255, 255, 255, 0.05)';
      telInput.style.border = '2px solid rgba(156, 55, 253, 0.7)';
      telInput.style.color = '#A2CBFB';
      telInput.removeAttribute('disabled')

      nameInput.style.background = 'rgba(255, 255, 255, 0.05)';
      nameInput.style.border = '2px solid rgba(156, 55, 253, 0.7)';
      nameInput.style.color = '#A2CBFB';
      nameInput.removeAttribute('disabled')

      emailInput.style.background = 'rgba(255, 255, 255, 0.05)';
      emailInput.style.border = '2px solid rgba(156, 55, 253, 0.7)';
      emailInput.style.color = '#A2CBFB';
      emailInput.removeAttribute('disabled')
      setCheck(true)
    }, 100)

  }


  if (check) {
    showData = <span className='check_data'>You can <Link to={'/formdata'} className='check_link'>Check your data</Link>.</span>
  } else {
    showData = ''
  }



  return (
    <div className='form'>
      <div className="contact_container">
        <div className="contact_title">
          <h2>Contact  us</h2>
          <p>Do you have any kind of help please contact with us.</p>
        </div>
        <form action="">
          <input onClick={refresh} type="text" name='name' id='' placeholder='Name' />
          <span className="error name"></span>
          <input onClick={refresh} onChange={telCheck} type="tel" name="tel" id="" placeholder='Phone' />
          <span className="error tel"></span>
          <input onClick={refresh} onChange={emailCheck} type="text" name="email" id="" placeholder='E-mail' />
          <span className="error email"></span>
          <button onClick={send} className='send_button'>Send</button>
          {showData}
        </form>
      </div>
      <div className="form_data">
        <FormData className='form_data' />
      </div>
    </div>
  )
}