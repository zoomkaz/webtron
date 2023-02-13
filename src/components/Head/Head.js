import './Head.css'
import logo from '../../img/logo.png'
import Nav from './Nav/Nav';

export default function Head() {


  const overflowToggle = () => {
    document.querySelector('#root').style.overflow = 'hidden'
  }

  return (
    <>
      <header>
        <div className='logo'>
          <img src={logo} alt="logo webtronics" />
        </div>
        <input onClick={overflowToggle} id="menu-toggle" type="checkbox" />
        <label className='menu-button-container' htmlFor="menu-toggle">
          <div className='menu-button'></div>
        </label>
        <Nav />
      </header>
      <div className="titles">
        <div>
          <h1 className='titles_head'>Front-End</h1>
          <div className='titles_hidden'>
            <h1>Developer</h1>
            <h1>Courses</h1>
          </div>

          <p className='titles_par'>Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more). </p>
        </div>
        <div className='sec'>
          <button>Start my career change</button>
          <h1>Developer</h1>
        </div>
        <h3>Courses</h3>
      </div>
    </>
  );
}