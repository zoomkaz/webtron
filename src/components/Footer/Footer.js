import './Footer.css'
import {
  SlSocialGithub, SlSocialInstagram, SlSocialTwitter, SlSocialFacebook,
  SlSocialVkontakte, SlSocialYoutube, SlSocialLinkedin, SlSocialReddit
} from 'react-icons/sl'

export default function Footer() {
  const nav = ['About', 'Steps', 'FAQs', 'Review', 'Gallery']
  return (
    <footer>
      <div className="content">
        <div className="footer_continer">
          <div className="logo_continer">
            <div className="footer_logo"></div>
            <div className="adress">
              <p>Wisconsin Ave, Suite 700<br />Chevy Chase, Maryland 20815</p>
            </div>
          </div>
          <div className="company_container">
            <h4>Company</h4>
            <div className="nav">
              {nav.map((item, index) => <li key={index.toString()}><a href={`/#${item}`}>{item}</a></li>)}
            </div>
          </div>
          <div className="social_continer">
            <h4>Social media</h4>
            <div className="social_icons">
              <a href='/#'><SlSocialGithub className='icon' /></a>
              <a href='/#'><SlSocialInstagram className='icon' /></a>
              <a href='/#'><SlSocialTwitter className='icon' /></a>
              <a href='/#'><SlSocialFacebook className='icon' /></a>
              <br />
              <a href='/#'><SlSocialVkontakte className='icon' /></a>
              <a href='/#'><SlSocialLinkedin className='icon' /></a>
              <a href='/#'><SlSocialReddit className='icon' /></a>
              <a href='/#'><SlSocialYoutube className='icon' /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}