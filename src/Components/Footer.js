import React, { useEffect, useState } from 'react'
import logo from '../images/logo.svg'
import { ImWhatsapp } from 'react-icons/im'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer id='footer'>
            <div id='footer-top' className='mb-8'>
                <div class="container max-w-[1300px] px-[30px] py-[10px] md:mt-[6.25rem] mb-12 md:items-start md:mb-0">
                    <div className='sm:flex justify-between items-center'>
                        <div className='top-footer-left'>
                            <div class="footer-logo mb-7 max-h-[34px] max-w-[163px]">
                                <img src="https://userviral.b-cdn.net/assets/images/uvlogo1-768x150-1.png" />
                            </div>
                            <div class="border-b border-gray-100 md:items-start md:!mb-0 border-b-brand mb-4">
                                <div class="mb-2 text-left text-base paragraph_text"><strong>Contact the FameDaddy Team with any questions you have:</strong></div>
                                <div class="mb-2 text-left text-base paragraph_text"><strong>Support: </strong>24-7 (up to 24 hour response times).</div>
                                <div class="mb-2 text-left text-base paragraph_text"><strong>Email: </strong><a className='text-[#2a363d]' href="mailto:support@FameDaddy.com">support@FameDaddy.com</a></div>
                                <div class="mb-2 text-left text-base paragraph_text"><strong>Phone: </strong><a className='text-[#2a363d]' href="tel:+844-959-3380">+844-959-3380</a></div>
                                <div class="mb-2 text-left text-base paragraph_text"><strong>Head Office:</strong> 2918 Avenue I #1106. Brooklyn, NY 11210.</div>
                            </div>
                            <div class="flex !mb-4 justify-start max-w-[300px]">
                                <img src="https://userviral.b-cdn.net/assets/images/cre.png" class="footer_payment_img" />
                            </div>
                            <div class="flex mb-4 justify-start max-w-[100px]">
                                <a href="https://www.dmca.com/Protection/Status.aspx?ID=1d9a18d7-8247-4091-b4d7-73a8d42ea6fb&amp;refurl=https://FameDaddy.com/" title="DMCA.com Protection Status" class="dmca-badge"> <img src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=1d9a18d7-8247-4091-b4d7-73a8d42ea6fb" alt="DMCA.com Protection Status" /></a>
                            </div>
                        </div>
                        <div className='top-footer-right max-sm:mt-14'>
                            <div class="md:mb-0 justify-center items-center md:items-start">
                                <h3 class="text-[1.625rem] leading-[1.2rem] tracking-tight my-[32px] font-extrabold text-black">Helpful Links</h3>
                                <div class="footer_menu">
                                    <a href="/#services" class="py-1 text-base mb-0 table sm-block font-medium text-[#2a363d] " >Services</a>
                                    <Link to="/customer-reviews" className="py-1 max-sm:mt-5 text-base mb-0 table sm-block font-medium text-[#2a363d]" >Reviews</Link>
                                    <a href="/#FAQsection" className="py-1 max-sm:mt-5 text-base mb-0 table sm-block font-medium text-[#2a363d]" >Frequenty Asked Questions</a>
                                    <Link to="/terms-conditions" className="py-1 max-sm:mt-5 text-base mb-0 table sm-block font-medium text-[#2a363d] terms-c" >Terms &amp; Conditions</Link>
                                    <Link to="/privacy" className="py-1 max-sm:mt-5 text-base mb-0 table sm-block font-medium text-[#2a363d] terms-c" >Privacy Policy</Link>
                                    <Link to="/refund-policy" className="py-1 max-sm:mt-5 text-base mb-0 table sm-block font-medium text-[#2a363d] terms-c" >Refund Policy</Link>
                                    {/* <Link to="" className="py-1 max-sm:mt-5 text-base mb-0 table sm-block font-medium text-[#2a363d] terms-c" >Blog</Link> */}
                                    <Link to="/contact-us" className="py-1 max-sm:mt-5 text-base mb-0 table sm-block font-medium text-[#2a363d]" >Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id='footer-bottom'>
                <p className='text-center text-[#707070] mb-2 text-lg'>All Rights Reserved — © Copyright CompanyName 2023.</p>
            </div>
            <a href="https://wa.me/+972526866442" target="_blank"><ImWhatsapp size={40} className='whatsappICON' color="white" /></a>
        </footer>
    )
}

export default Footer