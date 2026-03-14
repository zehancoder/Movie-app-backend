import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Footer from '../../components/Footer'

function Mainpage() {


  return (
    <div id='main_page' className='h-full px-4'>
      <Section1 />
      <Section2 />
      <Section3/>
      <Section4/>
      <Section5/>
    </div>
  )
}

export default Mainpage