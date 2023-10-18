import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDateRange } from 'react-icons/md'
import { BiSolidPencil, BiSearch } from 'react-icons/bi'
import { HiOutlineSearch } from 'react-icons/hi'

const Home = () => {
  return (
    <div id='homePage'>

      <header id='serviceSec' className='bg-[#f7f7fb] duration-300 pb-[225px]'>
        <div className='flex justify-center heading'>
          <h1 className=" w-max pt-24 text-center relative text-4xl tracking-tight font-extrabold text-black sm:text-5xl md:text-[4.75rem] !leading[1.25]"> Useviral <br />Your Social Media <br />Super Power
            <img className="light absolute bottom-[-14px] right-[-13px]" src="https://userviral.b-cdn.net/assets/images/light.png" width="100" />
          </h1>
        </div>
        <p className='text-center mx-auto  mt-14 text-[26px] md:max-w-[42rem] leading-[33.8px]'>UseViral is the best place to boost your Social Media. We have the highest quality and latest technology, our service is unmatched. We are the best. So Try Useviral now</p>
        <div className=" mt-4 pt-2 mx-auto sm:flex md:mt-8 flex hero-ctas sm:px-6 max-w-[700px] justify-center">
          <a href="#services" className="py-[1rem] px-[1.75rem] text-white rounded-md bg-brand text-center text-lg font-bold">Get Started</a>
        </div>
        <div className="flex justify-center mt-3 flex-wrap gap-[15px]" >
          <span className="text-brand flex align-center gap-[10px]" >
            <img src="https://userviral.b-cdn.net/assets/images/icon-4.png" width="30" alt="" />
            <span className="mt-1"> 100% Confidential </span>
          </span>
          <span className="text-brand flex align-center gap-[10px]" >
            <img src="https://userviral.b-cdn.net/assets/images/icon-2.png" width="30" alt="" />
            <span className="mt-1"> Trusted Provider </span>
          </span>
          <span className="text-brand flex align-center gap-[10px]" >
            <img src="https://userviral.b-cdn.net/assets/images/icon-6.png" width="30" alt="" />
            <span className="mt-1"> USA Support </span>
          </span>
        </div>
      </header>
      <div id="services" class="bg-white py-10 services-section">
        <div class="container py-2 bg-white px-4 max-w-[1140px] mt-[-170px] mb-[35px] rounded-[7px] desktop_only ">
          <div class="flex px-4 items-center">
            <div class="services-heading services-heading-col-1">SERVICE</div>
            <div class="services-heading services-heading-col-2">PRICE FROM</div>
            <div class="services-heading services-heading-col-3">DELIVERY SPEED</div>
            <div class="services-heading services-heading-col-4">ORDER</div>
          </div>
          <div class="flex px-4 items-center">
            <div class="services-heading services-col-1">
              <img src="https://userviral.b-cdn.net/assets/images/instagram.png " />
            </div>
            <div class="services-heading services-col-2">
              <p class="text-xl text-black leading-8 tracking-[0.3px] my-[25px]">Instagram</p>
            </div>
            <div class="services-heading services-col-3">
              <p class="text-xl text-black leading-8">
                $1
              </p>
            </div>
            <div class="services-heading services-col-4">
              <p class="text-xl text-[#6cd410] leading-8">Delivering fast</p>
            </div>
            <div class="services-heading services-col-4">
              <a href="https://useviral.com/instagram" class="brand-bordered-btn full-width">Get Started</a>
            </div>
          </div>
          <div class="flex px-4 items-center">
            <div class="services-heading services-col-1">
              <img src="https://userviral.b-cdn.net/assets/images/youtube.png" />
            </div>
            <div class="services-heading services-col-2">
              <p class="text-xl text-black leading-8 tracking-[0.3px] my-[25px]">YouTube</p>
            </div>
            <div class="services-heading services-col-3">
              <p class="text-xl text-black leading-8">
                $0
              </p>
            </div>
            <div class="services-heading services-col-4">
              <p class="text-xl text-[#6cd410] leading-8">Delivering fast</p>
            </div>
            <div class="services-heading services-col-4">
              <a href="https://useviral.com/youtube" class="brand-bordered-btn full-width">Get Started</a>
            </div>
          </div>
          <div class="flex px-4 items-center">
            <div class="services-heading services-col-1">
              <img src="https://userviral.b-cdn.net/assets/images/facebook.png" />
            </div>
            <div class="services-heading services-col-2">
              <p class="text-xl text-black leading-8 tracking-[0.3px] my-[25px]">Facebook</p>
            </div>
            <div class="services-heading services-col-3">
              <p class="text-xl text-black leading-8">
                $1.99
              </p>
            </div>
            <div class="services-heading services-col-4">
              <p class="text-xl text-[#6cd410] leading-8">Delivering fast</p>
            </div>
            <div class="services-heading services-col-4">
              <a href="https://useviral.com/facebook" class="brand-bordered-btn full-width">Get Started</a>
            </div>
          </div>
          <div class="flex px-4 items-center">
            <div class="services-heading services-col-1">
              <img src="https://userviral.b-cdn.net/assets/images/telegram.png" />
            </div>
            <div class="services-heading services-col-2">
              <p class="text-xl text-black leading-8 tracking-[0.3px] my-[25px]">Telegram</p>
            </div>
            <div class="services-heading services-col-3">
              <p class="text-xl text-black leading-8">
                $2
              </p>
            </div>
            <div class="services-heading services-col-4">
              <p class="text-xl text-[#6cd410] leading-8">Delivering fast</p>
            </div>
            <div class="services-heading services-col-4">
              <a href="https://useviral.com/reviews" class="brand-bordered-btn full-width">Get Started</a>
            </div>
          </div>
          <div class="flex px-4 items-center">
            <div class="services-heading services-col-1">
              <img src="https://userviral.b-cdn.net/assets/images/discord.png" />
            </div>
            <div class="services-heading services-col-2">
              <p class="text-xl text-black leading-8 tracking-[0.3px] my-[25px]">Discord</p>
            </div>
            <div class="services-heading services-col-3">
              <p class="text-xl text-black leading-8">
                $63
              </p>
            </div>
            <div class="services-heading services-col-4">
              <p class="text-xl text-[#6cd410] leading-8">Delivering fast</p>
            </div>
            <div class="services-heading services-col-4">
              <a href="https://useviral.com/linkedin" class="brand-bordered-btn full-width">Get Started</a>
            </div>
          </div>
          <div class="flex px-4 items-center">
            <div class="services-heading services-col-1">
              <img src="https://userviral.b-cdn.net/assets/images/twitch.png" />
            </div>
            <div class="services-heading services-col-2">
              <p class="text-xl text-black leading-8 tracking-[0.3px] my-[25px]">Twitch</p>
            </div>
            <div class="services-heading services-col-3">
              <p class="text-xl text-black leading-8">
                $3
              </p>
            </div>
            <div class="services-heading services-col-4">
              <p class="text-xl text-[#6cd410] leading-8">Delivering fast</p>
            </div>
            <div class="services-heading services-col-4">
              <a href="https://useviral.com/spotify" class="brand-bordered-btn full-width">Get Started</a>
            </div>
          </div>



        </div>
      </div>
      <div id='followersSec'>
        <div className='container md:mb-[6.25rem] max-w-[1300px] flex'>
          <div className='col'>
            <h5 class="text-[rgba(188,204,220,1)] lato text-[1.625rem] leading-1-2 font-extrabold mb-4 mt-0">How it works</h5>
            <h2 class="text-black !leading[1.25] font-extrabold text-[3rem] sm:text-4xl md:text-5xl lato">Grow organically on Social Media</h2>
            <p class="text-black leading-[2rem] my-7 tracking-[0.3px] text-xl">Have more followers and engagement is a proven way to get more real social media followers. Our services are high quality and our support team is here to help you. This way, it's risk free.</p>
          </div>
          <div className='col'>
            <object type="image/svg+xml" data="https://userviral.b-cdn.net/assets/images/home_image_1_new.svg"></object>
          </div>
        </div>
      </div>
      <div class="icon-section">
        <div class="container flex full-width flex-col md:flex-row py-[10px] px-[30px]">
          <div class="md:w-1/3 text-center">
            <HiOutlineSearch size={100} className='p-3 mx-auto text-white bg-brand rounded-full' />
            <div>
              <h3 class="text-black font-bold my-[22px]">Choose a service</h3>
            </div>
            <div>
              <p class="text-source-sans-pro text-xl leading-8 text-black">Make a selection from our followers, likes, views and comment services.</p>
            </div>
          </div>
          <div class="md:w-1/3 text-center">
            <BiSolidPencil size={100} className='p-3 mx-auto text-white bg-brand rounded-full' />
            <div>
              <h3 class="text-black font-bold my-[22px]">Enter your details</h3>
            </div>
            <div>
              <p class="text-source-sans-pro text-xl leading-8 text-black">Enter your profile details or select a post while placing your order.</p>
            </div>
          </div>
          <div class="md:w-1/3 text-center">
            <MdOutlineDateRange size={100} className='p-3 mx-auto text-white bg-brand rounded-full' />
            <div>
              <h3 class="text-black font-bold my-[22px]">Grow your Social Media</h3>
            </div>
            <div>
              <p class="text-source-sans-pro text-xl leading-8 text-black">Once your payment has been completed we'll get started right away.</p>
            </div>
          </div>
        </div>
      </div>
      <div id='SvgSec' className='pt-16 md:pt-24 pb-8 md:pb-16"'>
        <div className='container py-[10px] md:mb-[6.25rem] max-w-[1300px] flex'>
          <div className='col'>
            <h5 class="text-[rgba(188,204,220,1)] lato text-[1.625rem] leading-1-2 font-extrabold mb-4 mt-0">More info</h5>
            <h2 class="text-black !leading[1.25] font-extrabold text-[3rem] sm:text-4xl md:text-5xl lato">Why Buy Followers On Social Media</h2>
            <p class="text-black leading-[2rem] my-7 tracking-[0.3px] text-xl">Have you ever wanted a bigger following to attract that social proof you need for maximum growth? We get it, becoming an influencer is hard. That's why our services are here to make it easier for you to get real and organic social media followers and engagement.</p>
          </div>
          <div className='col'>
            <object type="image/svg+xml" data="https://userviral.b-cdn.net/assets/images/home_image_2.svg"></object>
          </div>
        </div>
      </div>

      <div id='FAQsec'>
        <h2 class="text-[1.625rem] leading-loose tracking-tight font-extrabold text-black text-center"> Frequently asked questions </h2>
        <p class="text-black mt-[20px] mb-[30px]  leading-7 text-xl text-center">Frequently asked questions about our services and UseViral</p>
        <div className='container'>

        </div>
      </div>

      <div id='getStartedSec' className=''>
        <div class="container bg-brand get-started-container max-w-[1300px] px-[30px] py-[10px]">
          <div class="md:w-1/1 text-center">
            <h2 class="text-white font-extrabold">Get Started</h2>
            <p class="text-white mb-0">Choose your package and start growing your social media</p>
            <a href="#services" class="white-bordered-btn mx-auto" role="button" id="hp-cta">
              <span class="button-text">Choose a service</span>
            </a>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home