import './FormData.css'

export default function FormData() {

  let name = localStorage.getItem('name')
  let tel = localStorage.getItem('tel')
  let email = localStorage.getItem('email')

  const clearData = () => {
    localStorage.clear()
  }

  return (
    <div className='data'>
      <div className='data_container'>
        <h2>Your data:</h2>
        <h4>Name: {name}</h4>
        <h4>Phone nubmer: {tel}</h4>
        <h4>E-mail adress: {email}</h4>
      </div>
      <a href='/' onClick={clearData} className='home-link'>{ }</a>
    </div>
  )
}