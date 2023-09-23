import './services.css'
import {BsCheck2} from 'react-icons/bs'

const Services = ({theme}) => {
  return (
    <section className={theme} id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Ux/Ui Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Solve a digital procedure in your community by applying Design.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Run the app on a digital product through Design.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Create experiences that meet customer needs.</p>
            </li>
            
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Product development and innovation.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Communication with the client or Company.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Inclusion of colors and styles of text, images.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Web development of applications and pages.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Code update and adaptation to needs.</p>
            </li>
            
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Social Media.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>E-commerce.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Layout.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Websites.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>App Design.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services