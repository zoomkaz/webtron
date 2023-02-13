import './Nav.css'

export default function Nav() {
  const nav = ['About', 'Programs', 'Steps', 'Questions', 'Get in touch']

  const overflowToggle = () => {
    document.querySelector('#root').style.overflow = 'visible'
  }
  return (
    <ul className='list'>

      {nav.map((item, index) => <li onClick={overflowToggle} key={index.toString()}><a href={`#${item}`}>{item}</a></li>)}

    </ul>
  );
}