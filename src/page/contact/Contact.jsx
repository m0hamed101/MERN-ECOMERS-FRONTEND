import React from 'react'
import './contact.css'
import { Header } from '../../components/headers/Header'
import { Footer } from '../../components/Footer/Footer'
import undraw_contact from '../../Assets/undraw-contact.svg'
export const Contact = () => {
    return (
        <div>
            <Header />
            <div className='contact_contaner'>
                <div className='talk_about'>
                    <h1>Let's talk about everything!</h1>
                    <h7>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas debitis, fugit natus?</h7>
                    <img src={undraw_contact} alt="" />
                </div>
                <div className='w-100'>
                    <input type="text" placeholder='Your name' />
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Subject' />
                    <textarea name="" placeholder='Write YOur message' id="" cols="30" rows="10"></textarea>
                    <button >Send Message</button>
                </div>

            </div>
            <Footer />
        </div>
    )
}
