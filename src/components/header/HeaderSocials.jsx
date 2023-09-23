import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a className='links' href="https://www.linkedin.com/in/mauricio-guerrero-827582220/" target="_blank" rel='noopener noreferrer'><BsLinkedin/></a>
        <a className='links' href="https://github.com/Mauricio-Guerrero-Arciniegas" target="_blank" rel='noopener noreferrer'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials