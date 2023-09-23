import './portfolio.css'
import IMG1 from '../../assets/images/portfolio1.png'
import IMG2 from '../../assets/images/portfolio2.jpg'
import IMG3 from '../../assets/images/ChatApp.jpeg'
import IMG4 from '../../assets/images/portfolio4.jpg'
import IMG5 from '../../assets/images/FriendsApp.jpg'
import IMG6 from '../../assets/images/portfolio6.jpg'
import IMG7 from '../../assets/images/portfolio7.jpg'
import IMG8 from '../../assets/images/portfolio8.jpg'
import IMG9 from '../../assets/images/portfolio9.jpg'
import IMG10 from '../../assets/images/portfolio10.webp'
import IMG11 from '../../assets/images/portfolio11.jpeg'
import IMG12 from '../../assets/images//Madlife.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'React Native - E-Commerce - Redux - cart - NodeJs - Atlas',
    github: 'https://github.com/Mauricio-Guerrero-Arciniegas/Nike-Fullstack-App-React-Native-NodeJS',
  },
  {
    id: 2,
    image: IMG2,
    title: 'ReactJS - E-Commerce - operational cart.',
    github: 'https://github.com/Mauricio-Guerrero-Arciniegas/Ecommerce',
    demo: 'https://e-comerce-reactjs.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'ChatApp React-native - GraphQl - AWS - Amplify',
    github: 'https://github.com/Mauricio-Guerrero-Arciniegas/Whatsapp-React-native',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Functional calculator with Claymorphism - Javascript - CSS.',
    github: 'https://github.com/Mauricio-Guerrero-Arciniegas/Calculator',
    demo: 'https://calculator-javascript-css.netlify.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Friends App React-native',
    github: 'https://github.com/Mauricio-Guerrero-Arciniegas/Friends-App-React-native',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Weather App - Api - HTML - CSS - JavaScript.',
    github: 'https://github.com/Mauricio-Guerrero-Arciniegas/WeatherApp',
    demo: 'https://weather-api-consumption.netlify.app/'
  },
  {
    id: 7,
    image: IMG7,
    title: 'E-Commerce HTML - CSS - JavaScript - ReactJS - Bootstrap',
    github: 'https://github.com/Mauricio-Guerrero-Arciniegas/e-commerce-react',
    demo: 'https://chipper-buttercream-177dd1.netlify.app/#/'
  },
  {
    id: 8,
    image: IMG8,
    title: 'The Game Awards HTML - Swift CSS - JavaScript - ReactJS - Vite',
    github: 'https://github.com/Mauricio-Guerrero-Arciniegas/The_Game_Awards',
    demo: 'https://the-game-awards.netlify.app/'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Homeopathy-webpage - HTML - CSS',
    github: 'https://github.com/Mauricio-Guerrero-Arciniegas/homeophatics-webpage',
    demo: 'https://homeopathy-webpage.netlify.app/'
  },
  {
    id: 10,
    image: IMG10,
    title: 'Tinder-clone - HTML - CSS',
    github: 'https://github.com/Mauricio-Guerrero-Arciniegas/Tinder-clone',
    demo: 'https://tinder-copy.netlify.app/'
  },
  {
    id: 11,
    image: IMG11,
    title: 'Avatar - The way of Wather - Vite - ReactJs - HTML - SCSS - BEM',
    github: 'https://github.com/Mauricio-Guerrero-Arciniegas/Avatar-The-way-of-Water',
    demo: 'https://avatar-the-way-of-water.netlify.app/'
  },
  {
    id: 12,
    image: IMG12,
    title: 'Madlife - Vite - ReactJs - HTML - SCSS - BEM',
    github: 'https://github.com/Mauricio-Guerrero-Arciniegas/madlife',
    demo: 'https://darling-puffpuff-aa70cb.netlify.app/'
  },
]

const Portfolio = ({theme}) => {
  return (
    <section className={theme} id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio