import React, { useEffect, useState } from 'react'
import logo from '../images/logo.svg'
import { ImWhatsapp } from 'react-icons/im'


const Footer = () => {
    return (
        <footer id='footer'>
          

            <div id='footer-bottom'>
                <p>All Rights Reserved — © Copyright CompanyName 2023.</p>
            </div>
            <a href="https://wa.me/+972526866442" target="_blank"><ImWhatsapp size={40} className='whatsappICON' color="white" /></a>
        </footer>
    )
}

export default Footer