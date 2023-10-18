import React, { useEffect, useState } from 'react'
import logo from '../images/logo.svg'
import { NavLink, useLocation } from 'react-router-dom'
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
        <nav class={`navbar navbar-expand-lg header `}>
            <div class="container px-[120px] py-[25px]">
                <div id='imgDiv' className='navbar-brand py-0  max-h-[40px] max-w-[186px]'>
                    <NavLink
                        to="/"
                        className={" text-decoration-none "}
                    >
                        <img src={"https://userviral.b-cdn.net/assets/images/uvlogo1-768x150-1.png"} className='inline rounded-full  h-full w-full' />
                    </NavLink>

                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <RxHamburgerMenu color='#3385d7' />
                </button>
                <div class="collapse navbar-collapse justify-end " id="navbarSupportedContent">
                    <ul class="navbar-nav  mb-2 mb-lg-0 ">
                        <NavLink
                            to="/serviced"
                            className={`serviceNav text-decoration-none fw-bold px-[20px] py-[5px] relative `}
                        >
                            Services  <MdKeyboardArrowUp className='inline arrowUpIcon' size={20} />
                            <ul class="sub-menu ">
                                <li id="menu-item-0" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-59 py-[5px]">
                                    <a href="https://useviral.com/instagram" class=" ">
                                        <img width="24" height="24" src="https://userviral.b-cdn.net/assets/images/small/instagram.png" class="menu-image  inline " alt="" loading="eager" />
                                        <span class=" pl-[20px] menu-image-title font-normal text-black">Instagram</span>
                                    </a>
                                </li> <li id="menu-item-1" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-59 py-[5px]">
                                    <a href="https://useviral.com/youtube" class=" ">
                                        <img width="24" height="24" src="https://userviral.b-cdn.net/assets/images/small/youtube.png" class="menu-image  inline " alt="" loading="eager" />
                                        <span class=" pl-[20px] menu-image-title font-normal text-black">YouTube</span>
                                    </a>
                                </li> <li id="menu-item-4" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-59 py-[5px]">
                                    <a href="https://useviral.com/facebook" class=" ">
                                        <img width="24" height="24" src="https://userviral.b-cdn.net/assets/images/small/facebook.png" class="menu-image  inline " alt="" loading="eager" />
                                        <span class=" pl-[20px] menu-image-title font-normal text-black">Facebook</span>
                                    </a>
                                </li>  <li id="menu-item-8" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-59 py-[5px]">
                                    <a href="https://useviral.com/twitch" class=" ">
                                        <img width="24" height="24" src="https://userviral.b-cdn.net/assets/images/small/twitch.png" class="menu-image  inline " alt="" loading="eager" />
                                        <span class=" pl-[20px] menu-image-title font-normal text-black">Twitch</span>
                                    </a>
                                </li> <li id="menu-item-10" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-59 py-[5px]">
                                    <a href="https://useviral.com/discord" class=" ">
                                        <img width="24" height="24" src="https://userviral.b-cdn.net/assets/images/small/discord.png" class="menu-image  inline " alt="" loading="eager" />
                                        <span class=" pl-[20px] menu-image-title font-normal text-black">Discord</span>
                                    </a>
                                </li> <li id="menu-item-23" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-59 py-[5px]">
                                    <a href="https://useviral.com/telegram" class=" ">
                                        <img width="24" height="24" src="https://userviral.b-cdn.net/assets/images/small/telegram.png" class="menu-image  inline " alt="" loading="eager" />
                                        <span class=" pl-[20px] menu-image-title font-normal text-black">Telegram</span>
                                    </a>
                                </li> </ul>
                        </NavLink>
                        <NavLink
                            to="-"
                            className={` text-decoration-none fw-bold px-[20px] py-[5px] `}
                        >
                            Customer Reviews
                        </NavLink>
                        <NavLink
                            to="-"
                            className={` text-decoration-none fw-bold px-[20px] py-[5px] `}
                        >
                            Check Order
                        </NavLink>
                        <NavLink
                            to="-"
                            className={` text-decoration-none fw-bold px-[20px] py-[5px] `}
                        >
                            Support
                        </NavLink>
                        <NavLink
                            to="-"
                            className={` text-decoration-none fw-bold px-[20px] py-[5px] `}
                        >
                            Get Started
                        </NavLink>

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