import React from 'react'
import Banner from '../components/Banner'
import About from '../components/About'
import Details from '../components/Details'
import HomeServices from '../components/HomeServices'
import CounterSection from '../components/Counter'
import ContactUs from '../components/ContactUs'

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <HomeServices />
            <Details />
            <CounterSection />
            <ContactUs />
        </div>
    )
}

export default Home