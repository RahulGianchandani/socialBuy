import React, { useEffect, useState } from 'react'
import fbIcon from '../images/socialIcons/facebook.webp'
import instaIcon from '../images/socialIcons/instagram.webp'
import discordIcon from '../images/socialIcons/discord.webp'
import telegramIcon from '../images/socialIcons/telegram.webp'
import utubeIcon from '../images/socialIcons/youtube.webp'
import spotifyIcon from '../images/socialIcons/spotify.webp'
import tiktokIcon from '../images/socialIcons/tiktok.webp'
import scIcon from '../images/socialIcons/snapchat.webp'
import twitchIcon from '../images/socialIcons/twitch.webp'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
const Header = () => {
  const token = localStorage.getItem('token');
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 20 || document.body.clientWidth < 978 ? setNavBg(true) : setNavBg(false);
  }

  useEffect(() => {
    window.addEventListener('resize', changeNavBg);
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    }


  }, [])

  const location = useLocation();
  const logout = () => {
    localStorage.removeItem('token');
  }
  return (
    <nav class={`navbar navbar-expand-lg header max-lg:py-0 `}>
      <div class="container px-0 lg:px-[60px] xl:px-[120px] lg:py-[25px]">
        <div id='imgDiv' className='navbar-brand py-0  max-h-[40px] max-w-[210px] lg:max-w-[186px] max-lg:ml-10 max-lg:py-6'>
          <NavLink
            to="/"
            className={" text-decoration-none "}
          >
            <img src={"https://userviral.b-cdn.net/assets/images/uvlogo1-768x150-1.png"} className='inline rounded-full  h-full w-full' />
          </NavLink>

        </div>
        <button class="navbar-toggler  max-lg:mr-10 max-lg:py-6" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <RxHamburgerMenu size={30} color={"black"} />
        </button>
        <div class="collapse navbar-collapse justify-end " id="navbarSupportedContent">
          <ul class="navbar-nav  mb-0 mb-lg-0">
            <span
              className={`cursor-pointer serviceNav text-decoration-none  fw-bold lg:px-[20px] max-lg:border-t max-lg:border-b max-lg:px-5 max-lg:border-[#eee] py-[13px] relative  max-lg:flex max-lg:justify-between`}
            >
              Services  <MdKeyboardArrowUp className='inline arrowUpIcon duration-300' size={20} />
              <ul class="sub-menu absolute  max-lg:!top-[50px]">
                <li id="menu-item-0" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-59 py-[5px]">
                  <Link to="/services-instagram" class=" ">
                    <img width="24" height="24" src={instaIcon} class="menu-image  inline " alt="" loading="eager" />
                    <span class=" pl-[20px] menu-image-title font-normal text-black">Instagram</span>
                  </Link>
                </li> <li id="menu-item-1" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-59 py-[5px]">
                  <Link to="/services-youtube" class=" ">
                    <img width="24" height="24" src={utubeIcon} class="menu-image  inline " alt="" loading="eager" />
                    <span class=" pl-[20px] menu-image-title font-normal text-black">YouTube</span>
                  </Link>
                </li> <li id="menu-item-4" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-59 py-[5px]">
                  <Link to="/services-facebook" class=" ">
                    <img width="24" height="24" src={fbIcon} class="menu-image  inline " alt="" loading="eager" />
                    <span class=" pl-[20px] menu-image-title font-normal text-black">Facebook</span>
                  </Link>
                </li>
                <li id="menu-item-23" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-59 py-[5px]">
                  <Link to="/services-tiktok" class=" ">
                    <img width="24" height="24" src={tiktokIcon} class="menu-image  inline " alt="" loading="eager" />
                    <span class=" pl-[20px] menu-image-title font-normal text-black">Tiktok</span>
                  </Link>
                </li>
                <li id="menu-item-23" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-59 py-[5px]">
                  <Link to="/services-snapchat" class=" ">
                    <img width="24" height="24" src={scIcon} class="menu-image  inline " alt="" loading="eager" />
                    <span class=" pl-[20px] menu-image-title font-normal text-black">Snapchat</span>
                  </Link>
                </li>
                <li id="menu-item-8" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-59 py-[5px]">
                  <Link to="/services-twitch" class=" ">
                    <img width="24" height="24" src={twitchIcon} class="menu-image  inline " alt="" loading="eager" />
                    <span class=" pl-[20px] menu-image-title font-normal text-black">Twitch</span>
                  </Link>
                </li> <li id="menu-item-10" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-59 py-[5px]">
                  <Link to="/services-discord" class=" ">
                    <img width="24" height="24" src={discordIcon} class="menu-image  inline " alt="" loading="eager" />
                    <span class=" pl-[20px] menu-image-title font-normal text-black">Discord</span>
                  </Link>
                </li>
                <li id="menu-item-23" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-59 py-[5px]">
                  <Link to="/services-telegram" class=" ">
                    <img width="24" height="24" src={telegramIcon} class="menu-image  inline " alt="" loading="eager" />
                    <span class=" pl-[20px] menu-image-title font-normal text-black">Telegram</span>
                  </Link>
                </li>
                <li id="menu-item-23" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-59 py-[5px]">
                  <Link to="/services-spotify" class=" ">
                    <img width="24" height="24" src={spotifyIcon} class="menu-image  inline " alt="" loading="eager" />
                    <span class=" pl-[20px] menu-image-title font-normal text-black">Spotify</span>
                  </Link>
                </li>

              </ul>
            </span>
            <NavLink
              to="customer-reviews"
              className={` text-decoration-none  fw-bold lg:px-[20px]  max-lg:border-b max-lg:px-5 max-lg:border-[#eee] py-[13px] `}
            >
              Customer Reviews
            </NavLink>
            {/* <NavLink
                            to="-"
                            className={` text-decoration-none  fw-bold lg:px-[20px]  max-lg:border-b max-lg:px-5 max-lg:border-[#eee] py-[13px] `}
                        >
                            Check Order
                        </NavLink> */}
            <NavLink
              to="/contact-us"
              className={` text-decoration-none  fw-bold lg:px-[20px]  max-lg:border-b max-lg:px-5 max-lg:border-[#eee] py-[13px] `}
            >
              Contact Us
            </NavLink>
            <span
              onClick={() => window.location.replace("/#services")}
              className={`cursor-pointer text-decoration-none  fw-bold lg:px-[20px]  max-lg:border-b max-lg:px-5 max-lg:border-[#eee] py-[13px] `}
            >
              Get Started
            </span>

            {/* {!token === "admin" && */}
            {/* <NavLink
                                to="/admin-login"
                                className={" text-decoration-none text-white ms-lg-5 fw-bold"}
                            >
                                Admin
                            </NavLink> */}
            {/* } */}
            {/* {token === "admin" && */}
            {/* <NavLink
                                to="/admin-dashboard"
                                className={" text-decoration-none text-white ms-lg-5 fw-bold"}
                            >
                                Dashboard
                            </NavLink> */}
            {/* } */}
            {/* {token === "admin" &&
                            <span className='text-sm cursor-pointer ms-lg-5 fw-bold text-white' onClick={logout}> Logout</span>
                        } */}

          </ul>
        </div>

      </div>
    </nav>

  )
}

export default Header