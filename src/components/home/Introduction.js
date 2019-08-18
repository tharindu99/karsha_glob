import React from 'react'
import Radium, { StyleRoot } from 'radium'
import './../../styles/global.css'
import { FaChess, FaGraduationCap } from 'react-icons/fa'
import { GoWatch } from 'react-icons/go'
import { IoMdStopwatch } from 'react-icons/io'
import { rhythm } from '../../utils/typography'
import CircularFlow from '../charts/bio-circular-flow/CircularFlow'

var styles = {
  marginLeft: rhythm(2 / 3),
  lineHeight: 0.7,

  '@media (max-width: 800px)': {
    lineHeight: 1.2,
  },
}

let Introduction = () => {
  return (
    <section>
      <h2
        style={{ fontWeight: 300, letterSpacing: '-1px', marginTop: '1.5rem' }}
      >
        {' '}
        About {' '}
      </h2>

      <div
        style={{
          marginBottom: '10px',
          lineHeight: 1.5,
        }}
      >
        {' '}
        <p>
          {' '}
          “Karsha” is a word derived from Sanskrit which means cash.
          The Karsha project aims to develop next generation financial 
          cyberinfrastructure tools to support data science for finance. 
          At the movement Karsha is a project that has been on going in 
          Lsf since 2011 September. In the financial data analysis context 
          Karsha facilitates financial researchers to analyse different kind of 
          complex financial data. This project is supported by the Smith School 
          of Business at the University of Maryland, the Lanka Software Foundation 
          and the US National Science Foundation.
        </p>
        {/* chart drawing here.. */}
        {/* <CircularFlow /> */}
        <br />
        
      </div>
    </section>
  )
}
Introduction = Radium(Introduction)

export default Introduction
