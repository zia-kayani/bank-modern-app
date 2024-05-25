import React from 'react';
import styles from './style'
import {NavBar, Hero, Billing, Business, Button, CTA, CardDeal, Clients,FeedbackCard,Footer,GetStarted,States,
  Testimonials} from './components';



export default function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      {/* Navbar section */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
              <NavBar />
        </div>
      </div>

      {/* Hero section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* below hero */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <States />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients/>
            <CTA />
            <Footer/>
        </div>
      </div>

    </div>
  )
}
