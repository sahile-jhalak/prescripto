import React from 'react'
import Header from '../components/Header'
import Speciality from '../components/Speciality'
import TopDoctor from '../components/TopDoctor'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div className='m-5'>
      <Header />
      <Speciality />
      <TopDoctor/>
      <Banner />
    </div>
  )
}

export default Home