import React from 'react'
import Banner from '../components/Banner'
import About from '../components/AboutComponent'
import Details from '../components/Details'
import CounterSection from '../components/Counter'
import ContactUs from '../components/ContactUs'
import ServicesCards from '../components/ServicesCards'

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <ServicesCards />
            <Details />
            <CounterSection />
            <ContactUs />
        </div>
    )
}

export default Home