import React from 'react'
import Radium, { StyleRoot } from 'radium'
import { FiMail } from 'react-icons/fi'
import { FaGithubAlt } from 'react-icons/fa'
import { rhythm, scale } from '../../utils/typography'
import './../../styles/global.css'

const header = (
  <h1
    style={{
      ...scale(1.25),
      letterSpacing: '-2px',
      marginBottom: rhythm(-0.25),
      marginTop: rhythm(-0.25),
    }}
  >
    Karsha
  </h1>
)

const LinkIcons = props => (
  <li
    style={{
      display: `inline-block`,
      marginBottom: 0,
    }}
  >
    <a
      href={props.to}
      rel="noopener"
      target={props.ariaLabel !== 'Mail' && '_blank'}
      className="icons"
      aria-label={props.ariaLabel}
    >
      <span style={{ marginRight: `1rem` }}>{props.children} </span>
    </a>
  </li>
)

let RootHeader = () => {
  return (
    <div>
      {header}
      <StyleRoot>
        <ul
          style={{
            listStyle: `none`,
            float: `right`,
            display: 'block',
            fontFamily: 'PT Sans',
            margin: '10px 0px 0 5px',
            '@media (max-width: 800px)': {
              float: `left`,
              margin: '10px 300px 0 5px',
            },
            '@media (max-width: 512px)': {
              float: `left`,
              margin: '10px 0px 0 5px',
            },
            '@media (max-width: 480px)': {
              float: `left`,
              margin: '10px 200px 0 5px',
            },
            '@media (max-width: 440px)': {
              float: `left`,
              margin: '10px 0px 0 5px',
            },
          }}
        >
          {' '}
          <LinkIcons to="mailto:tharindup@opensource.lk" ariaLabel="Mail">
            <FiMail key="mail" />
          </LinkIcons>
          <LinkIcons to="https://github.com/santhoshsoundar" ariaLabel="Github">
            <FaGithubAlt key="git" />
          </LinkIcons>
        </ul>
      </StyleRoot>
      <p
        style={{
          display: 'inline-block',
          marginLeft: `0.2rem`,
          fontSize: rhythm(0.6),
          fontStyle: 'italic',
          color: '#777',
        }}
      >
        Financial Data Analytics
      </p>
    </div>
  )
}

RootHeader = Radium(RootHeader)

export default RootHeader
