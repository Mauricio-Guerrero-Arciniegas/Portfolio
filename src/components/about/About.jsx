import './about.css'
import ME from '../../assets/images/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = ({theme}) => {
  return (
    <section className={theme} id='about'>
      <h5 className='comment'>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Knowledge</h5>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Teamwork</h5>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
            </article>
          </div>

          <p align="center">
            I am systems Engenier Frontend and Backend developer, camping lover and outdoor sports. 
            With the desire to learn
            every day and put it into practice in the workplace, I have been studying
            new technologies
            in order to update my knowledge and be able to continue my path as an Engineer.
            I have always been someone who has both a creative and a logical side.
            When I discovered web design in college, I realized that
            would fit perfectly. I could use my creative side to design
            and my logical side to program. As a bonus, being a designer
            and developer allows me to make sure that no detail is lost
            in the production.
          </p>
          <a href="#contact" className='btn btn-primary'>Let´s Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About