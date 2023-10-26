import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDateRange } from 'react-icons/md'
import { BiSolidPencil, BiSearch } from 'react-icons/bi'
import { HiOutlineSearch } from 'react-icons/hi'
import bigfbIcon from '../images/socialIcons/bigFB.webp'
import biginstaIcon from '../images/socialIcons/bigInsta.webp'
import bigdiscordIcon from '../images/socialIcons/bigDC.webp'
import bigtelegramIcon from '../images/socialIcons/bigTG.webp'
import bigutubeIcon from '../images/socialIcons/bigYT.webp'
import bigspotifyIcon from '../images/socialIcons/bigSpotify.webp'
import bigtiktokIcon from '../images/socialIcons/bigTiktok.webp'
import bigscIcon from '../images/socialIcons/bigSC.webp'
import bigtwitchIcon from '../images/socialIcons/bigTwitch.webp'
const Home = () => {

  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    const element = document.getElementById(href);
    console.log("element", element);
    setTimeout(() => {
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, []);

  return (
    <div id='homePage'>

      <header id='serviceSec' className='bg-[#f7f7fb] duration-300 pb-[225px] px-4 '>
        <div className='flex justify-center heading'>
          <h1 className=" w-max pt-24 text-center relative text-5xl tracking-tight font-extrabold text-black sm:text-5xl md:text-[4.75rem] !leading-[1.2]"> Useviral <br />Your Social Media <br />Super Power
            <img className="light absolute bottom-[-14px] right-[-13px] max-md:bottom-[3px] max-md:right-[4px] max-md:w-[50px]" src="https://userviral.b-cdn.net/assets/images/light.png" width="100" />
          </h1>
        </div>
        <p className='text-center mx-auto  mt-14 text-[26px] md:max-w-[42rem] leading-[33.8px]'>UseViral is the best place to boost your Social Media. We have the highest quality and latest technology, our service is unmatched. We are the best. So Try Useviral now</p>
        <div className=" mt-4 pt-2 mx-auto sm:flex md:mt-8 flex hero-ctas sm:px-6 max-w-[700px] justify-center">
          <a href="#services" className="py-[1rem] px-[1.75rem] text-white rounded-md bg-brand text-center text-lg font-bold max-sm:w-full">Get Started</a>
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
      <div id="services" className="bg-white py-10 services-section">
        <div className="container py-2 bg-white px-4 max-w-[1140px] mt-[-170px] mb-[35px] max-sm:!pt-[35px] rounded-[7px] desktop_only ">
          <div className="flex px-4 items-center max-sm:hidden">
            <div className="services-heading col-lg-6 col">SERVICE</div>
            <div className="services-heading text-center col">PRICE FROM</div>
            <div className="services-heading text-center col">DELIVERY SPEED</div>
            <div className="services-heading text-center col">ORDER</div>
          </div>
          <div className="flex px-4 max-sm:!px-0 items-center max-sm:mb-7">
            <div className="services-heading services-col-1 max-md:w-10 max-md:mr-2 max-sm:mr-4 max-sm:w-16 ">
              <img src={biginstaIcon} />
            </div>
            <div className="services-heading col-lg-6 col">
              <p className="text-xl text-black leading-8 tracking-[0.3px] my-[25px] max-sm:my-0">Instagram</p>
              <p className="text-xl text-black leading-8  hidden max-sm:block max-sm:text-lg">
                &euro;1.99
              </p>
            </div>
            <div className="services-heading col max-sm:hidden">
              <p className="text-xl text-black leading-8">
                &euro;1.99
              </p>
            </div>
            <div className="services-heading max-sm:hidden col">
              <p className="text-xl text-[#6cd410] leading-8">Delivering fast</p>
            </div>
            <div className="services-heading col">
              <Link to="/services-instagram" className="brand-bordered-btn full-width">Get Started</Link>
            </div>
          </div>
          <div className="flex px-4 max-sm:!px-0 items-center max-sm:mb-7">
            <div className="services-heading services-col-1 max-md:w-10 max-md:mr-2 max-sm:mr-4 max-sm:w-16 ">
              <img src={bigutubeIcon} />
            </div>
            <div className="services-heading col-lg-6 col">
              <p className="text-xl text-black leading-8 tracking-[0.3px] my-[25px] max-sm:my-0">YouTube</p>
              <p className="text-xl text-black leading-8 hidden max-sm:block max-sm:text-lg">
                &euro;3.99
              </p>
            </div>
            <div className="services-heading col  max-sm:hidden">
              <p className="text-xl text-black leading-8">
                &euro;3.99
              </p>
            </div>
            <div className="services-heading max-sm:hidden col">
              <p className="text-xl text-[#6cd410] leading-8">Delivering fast</p>
            </div>
            <div className="services-heading col">
              <Link to="/services-youtube" className="brand-bordered-btn full-width">Get Started</Link>
            </div>
          </div>
          <div className="flex px-4 max-sm:!px-0 items-center max-sm:mb-7">
            <div className="services-heading services-col-1 max-md:w-10 max-md:mr-2 max-sm:mr-4 max-sm:w-16 ">
              <img src={bigfbIcon} />
            </div>
            <div className="services-heading col-lg-6 col">
              <p className="text-xl text-black leading-8 tracking-[0.3px] my-[25px] max-sm:my-0">Facebook</p>
              <p className="text-xl text-black leading-8 hidden max-sm:block max-sm:text-lg">
                &euro;3.99
              </p>
            </div>
            <div className="services-heading col max-sm:hidden">
              <p className="text-xl text-black leading-8">
                &euro;3.99
              </p>
            </div>
            <div className="services-heading max-sm:hidden col">
              <p className="text-xl text-[#6cd410] leading-8">Delivering fast</p>
            </div>
            <div className="services-heading col">
              <Link to="/services-facebook" className="brand-bordered-btn full-width">Get Started</Link>
            </div>
          </div>
          <div className="flex px-4 max-sm:!px-0 items-center max-sm:mb-7">
            <div className="services-heading services-col-1 max-md:w-10 max-md:mr-2 max-sm:mr-4 max-sm:w-16 ">
              <img src={bigtiktokIcon} />
            </div>
            <div className="services-heading col-lg-6 col">
              <p className="text-xl text-black leading-8 tracking-[0.3px] my-[25px] max-sm:my-0">Tiktok</p>
              <p className="text-xl text-black leading-8 hidden max-sm:block max-sm:text-lg">
                &euro;0.99
              </p>
            </div>
            <div className="services-heading col max-sm:hidden">
              <p className="text-xl text-black leading-8">
                &euro;0.99
              </p>
            </div>
            <div className="services-heading max-sm:hidden col">
              <p className="text-xl text-[#6cd410] leading-8">Delivering fast</p>
            </div>
            <div className="services-heading col">
              <Link to="/services-tiktok" className="brand-bordered-btn full-width">Get Started</Link>
            </div>
          </div>
          <div className="flex px-4 max-sm:!px-0 items-center max-sm:mb-7">
            <div className="services-heading services-col-1 max-md:w-10 max-md:mr-2 max-sm:mr-4 max-sm:w-16 ">
              <img src={bigscIcon} />
            </div>
            <div className="services-heading col-lg-6 col">
              <p className="text-xl text-black leading-8 tracking-[0.3px] my-[25px] max-sm:my-0">Snapchat</p>
              <p className="text-xl text-black leading-8 hidden max-sm:block max-sm:text-lg">
                &euro;9.99
              </p>
            </div>
            <div className="services-heading col max-sm:hidden">
              <p className="text-xl text-black leading-8">
                &euro;9.99
              </p>
            </div>
            <div className="services-heading max-sm:hidden col">
              <p className="text-xl text-[#6cd410] leading-8">Delivering fast</p>
            </div>
            <div className="services-heading col">
              <Link to="/services-snapchat" className="brand-bordered-btn full-width">Get Started</Link>
            </div>
          </div>

          <div className="flex px-4 max-sm:!px-0 items-center max-sm:mb-7">
            <div className="services-heading services-col-1 max-md:w-10 max-md:mr-2 max-sm:mr-4 max-sm:w-16 ">
              <img src={bigtwitchIcon} />
            </div>
            <div className="services-heading col-lg-6 col">
              <p className="text-xl text-black leading-8 tracking-[0.3px] my-[25px] max-sm:my-0">Twitch</p>
              <p className="text-xl text-black leading-8 hidden max-sm:block max-sm:text-lg">
                &euro;2.99
              </p>
            </div>
            <div className="services-heading col max-sm:hidden">
              <p className="text-xl text-black leading-8">
                &euro;2.99
              </p>
            </div>
            <div className="services-heading max-sm:hidden col">
              <p className="text-xl text-[#6cd410] leading-8">Delivering fast</p>
            </div>
            <div className="services-heading col">
              <Link to="/services-twitch" className="brand-bordered-btn full-width">Get Started</Link>
            </div>
          </div>
          <div className="flex px-4 max-sm:!px-0 items-center max-sm:mb-7">
            <div className="services-heading services-col-1 max-md:w-10 max-md:mr-2 max-sm:mr-4 max-sm:w-16 ">
              <img src={bigdiscordIcon} />
            </div>
            <div className="services-heading col-lg-6 col">
              <p className="text-xl text-black leading-8 tracking-[0.3px] my-[25px] max-sm:my-0">Discord</p>
              <p className="text-xl text-black leading-8 hidden max-sm:block max-sm:text-lg">
                &euro;22.99
              </p>
            </div>
            <div className="services-heading col max-sm:hidden">
              <p className="text-xl text-black leading-8">
                &euro;22.99
              </p>
            </div>
            <div className="services-heading max-sm:hidden col">
              <p className="text-xl text-[#6cd410] leading-8">Delivering fast</p>
            </div>
            <div className="services-heading col">
              <Link to="/services-discord" className="brand-bordered-btn full-width">Get Started</Link>
            </div>
          </div>
          <div className="flex px-4 max-sm:!px-0 items-center max-sm:mb-7">
            <div className="services-heading services-col-1 max-md:w-10 max-md:mr-2 max-sm:mr-4 max-sm:w-16 ">
              <img src={bigtelegramIcon} />
            </div>
            <div className="services-heading col-lg-6 col">
              <p className="text-xl text-black leading-8 tracking-[0.3px] my-[25px] max-sm:my-0">Telegram</p>
              <p className="text-xl text-black leading-8 hidden max-sm:block max-sm:text-lg">
                &euro;2.49
              </p>
            </div>
            <div className="services-heading col max-sm:hidden">
              <p className="text-xl text-black leading-8">
                &euro;2.49
              </p>
            </div>
            <div className="services-heading max-sm:hidden col">
              <p className="text-xl text-[#6cd410] leading-8">Delivering fast</p>
            </div>
            <div className="services-heading col">
              <Link to="/services-telegram" className="brand-bordered-btn full-width">Get Started</Link>
            </div>
          </div>
          <div className="flex px-4 max-sm:!px-0 items-center max-sm:mb-7">
            <div className="services-heading services-col-1 max-md:w-10 max-md:mr-2 max-sm:mr-4 max-sm:w-16 ">
              <img src={bigspotifyIcon} />
            </div>
            <div className="services-heading col-lg-6 col">
              <p className="text-xl text-black leading-8 tracking-[0.3px] my-[25px] max-sm:my-0">Spotify</p>
              <p className="text-xl text-black leading-8 hidden max-sm:block max-sm:text-lg">
                &euro;3.99
              </p>
            </div>
            <div className="services-heading col max-sm:hidden">
              <p className="text-xl text-black leading-8">
                &euro;3.99
              </p>
            </div>
            <div className="services-heading max-sm:hidden col">
              <p className="text-xl text-[#6cd410] leading-8">Delivering fast</p>
            </div>
            <div className="services-heading col">
              <Link to="/services-spotify" className="brand-bordered-btn full-width">Get Started</Link>
            </div>
          </div>



        </div>
      </div>
      <div id='followersSec'>
        <div className='container md:mb-[6.25rem] max-w-[1300px] sm:flex max-sm:px-7 '>
          <div className='col'>
            <h5 className="text-[rgba(188,204,220,1)] lato text-[1.625rem] leading-1-2 font-extrabold !mb-4 mt-0">How it works</h5>
            <h2 className="text-black !leading[1.25] font-extrabold text-[1.875rem] sm:text-4xl md:text-5xl lato">Grow organically on Social Media</h2>
            <p className="text-black leading-[2rem] my-7 tracking-[0.3px] text-xl max-sm:text-[1.1rem]">Have more followers and engagement is a proven way to get more real social media followers. Our services are high quality and our support team is here to help you. This way, it's risk free.</p>
          </div>
          <div className='col'>
            <object type="image/svg+xml" data="https://userviral.b-cdn.net/assets/images/home_image_1_new.svg"></object>
          </div>
        </div>
      </div>
      <div className="icon-section">
        <div className="container flex full-width flex-col md:flex-row py-[10px] px-[30px]">
          <div className="md:w-1/3 text-center">
            <HiOutlineSearch size={100} className='p-3 mx-auto text-white bg-brand rounded-full' />
            <div>
              <h3 className="text-black font-bold my-[22px]">Choose a service</h3>
            </div>
            <div>
              <p className="text-source-sans-pro text-xl leading-8 text-black">Make a selection from our followers, likes, views and comment services.</p>
            </div>
          </div>
          <div className="md:w-1/3 text-center">
            <BiSolidPencil size={100} className='p-3 mx-auto text-white bg-brand rounded-full' />
            <div>
              <h3 className="text-black font-bold my-[22px]">Enter your details</h3>
            </div>
            <div>
              <p className="text-source-sans-pro text-xl leading-8 text-black">Enter your profile details or select a post while placing your order.</p>
            </div>
          </div>
          <div className="md:w-1/3 text-center">
            <MdOutlineDateRange size={100} className='p-3 mx-auto text-white bg-brand rounded-full' />
            <div>
              <h3 className="text-black font-bold my-[22px]">Grow your Social Media</h3>
            </div>
            <div>
              <p className="text-source-sans-pro text-xl leading-8 text-black">Once your payment has been completed we'll get started right away.</p>
            </div>
          </div>
        </div>
      </div>
      <div id='SvgSec' className='pt-16 md:pt-24 pb-8 md:pb-16"'>
        <div className='container py-[10px] md:mb-[6.25rem] max-w-[1300px] md:flex max-md:px-7'>
          <div className='col'>
            <h5 className="text-[rgba(188,204,220,1)] lato text-[1.625rem] leading-1-2 font-extrabold !mb-4 mt-0">More info</h5>
            <h2 className="text-black !leading[1.25] font-extrabold text-[1.875rem] md:text-4xl  lato">Why Buy Followers On Social Media</h2>
            <p className="text-black leading-[2rem] my-7 tracking-[0.3px] text-xl max-md:text-[1.1rem]">Have you ever wanted a bigger following to attract that social proof you need for maximum growth? We get it, becoming an influencer is hard. That's why our services are here to make it easier for you to get real and organic social media followers and engagement.</p>
          </div>
          <div className='col'>
            <object type="image/svg+xml" data="https://userviral.b-cdn.net/assets/images/home_image_2.svg"></object>
          </div>
        </div>
      </div>

      <div id='FAQsection' className='max-sm:px-7'>
        <h2 className="text-[1.625rem] sm:leading-loose tracking-tight font-extrabold text-black text-center"> Frequently asked questions </h2>
        <p className="text-black mt-[20px] mb-[30px]  leading-7 text-xl max-sm:text-[1.1rem] text-center">Frequently asked questions about our services and UseViral</p>
        <div className='container max-sm:mb-[50px] mb-[170px] max-w-[1300px]'>
          <div className="box py-[50px]">
            <div className="accordion  sm:grid sm:grid-cols-2 gap-[20px] justify-between" id="accordionExample">
              <div>
                <div className="accordion-item !rounded-none  duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button !rounded-none bg-[#eee] hover:bg-[#444] !px-[30px] !py-[20px] collapsed" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                      aria-controls="collapseOne">
                      <img src="./assets/child_logos/Thinking.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0 h5  font-extrabold text-[#444] max-sm:text-sm ">Why Should I Buy Followers?</h5>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show">
                        <p>There are many different reasons why you may want to <Link to="/buy-instagram-followers" className='text-[#36f]'>buy Instagram followers</Link>, but there are two main ones that people tend to come back to again and again.</p><p>The first one is that followers can equal more profit. When a big brand is on YouTube looking for the right person to collaborate with, they’re looking for two things – a large following and good engagement rates.</p><p>If you don’t have a very big following, they are going to look right past you. However, if you’ve boosted your followers with a company like UseViral, that big brand is much more likely to look your way and consider you for a brand deal. Without followers, there’s no way that you can make your brand succeed and become profitable on YouTube.</p><p>While you can engage with your community over a long period of time, this is going to take you many hours every day for weeks on end just to get even close to where you want to be. When you buy followers, your engagement speeds up, and you become that much closer to being a well-known brand or influencer on YouTube.</p><p>There’s no point having random people looking at it who aren’t interested in your niche, because they’re not going to want to join your community. With sophisticated, targeted engagement, you can get your content in front of the right people, at the right time.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item !rounded-none  duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button bg-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  collapsed" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                      aria-controls="collapseThree">
                      <img src="./assets/child_logos/stctr.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0 h5  font-extrabold text-[#444] max-sm:text-sm ">Does Having Many Followers Help Me?</h5>
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show">
                        <p>Having followers, as we mentioned previously, can help you in a big way. Think of it like this: you see a musician or an artist, and you really like the look of their posts.</p><p>They haven’t got a big following, though. Wouldn’t you be wondering ‘why would I follow them, if nobody else is?’. Now think of a musician or artist that you’ve come across that has a large following. Wouldn’t you be asking yourself the question ‘why aren’t I following them, when everyone else is?’.</p><p>The more followers you have, the more likely you are to be attractive to new followers who come across your page. It’s a bit of a chicken and egg situation because of course, you need followers in the first place to get more of them. But with that being said, don't forget your engagement rate, but you're in luck because you can <Link to="/buy-instagram-likes/">Buy Instagram likes</Link> and other engagement services for all platforms directly from Useviral.</p><p>This is why it’s a good idea to use a company like UseViral to buy your followers – you can get that headstart that you need to start being noticed by people in your target audience.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item !rounded-none  duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button bg-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  collapsed" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                      aria-controls="collapseFive">
                      <img src="./assets/child_logos/user-plus-bottom.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0 h5  font-extrabold text-[#444] max-sm:text-sm ">Are Your Followers High Quality</h5>
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show">
                        <p>Yes – UseViral sells high-quality followers. You’ll know this when you see the kind of followers that they deliver to your page. If they weren’t high quality, they would only follow you for a short time before unfollowing you again.</p>
                        <p>Because the followers that UseViral delivers are quality, you know that they’re going to make your account look popular for a long time. This is why UseViral has built itself an upstanding reputation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="accordion-item !rounded-none  duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button bg-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  collapsed" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                      aria-controls="collapseTwo">
                      <img src="./assets/child_logos//brain.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0 h5  font-extrabold text-[#444] max-sm:text-sm ">Can I Get My Account Banned?</h5>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel">
                        <p><strong>No – you can only get your account banned</strong> if you have suspicious activity on your account. Suspicious activity includes engaging too much in a small timeframe.&nbsp;</p><p>UseViral, like other reputable social media marketing service unlike other companies out there, know when enough is enough and stagger their engagement so that it doesn’t look spammy.&nbsp;</p><p>If your engagement is natural looking, then your profile is going to be safe, which they are going to look past you, and you don’t have to worry about being banned. This also means that<strong> UseViral is safe to use</strong> – they’re not going to bring up ‘blocked action’ notifications or anything like that.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item !rounded-none  duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button bg-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  collapsed" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                      aria-controls="collapseFour">
                      <img src="./assets/child_logos/creative.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0 h5  font-extrabold text-[#444] max-sm:text-sm ">What are social media marketing services?</h5>
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show">
                        <p>Well, you may remember not that long ago when it was a lot easier to execute your engagement. It was easier to find people who would like your content and easier to get them to stick around.</p>
                        <p>These days, competition is fierce, and there’s a lot of content out there for people to look at. This means that not only do you have to have the kind of content that’s going to stand out from the crowd, but you also need to make sure that people are engaging with this content.</p>
                        <p>It’s all very well having good content, but if it’s not getting a lot of likes and comments, why should anyone else like and comment on it? This is where social media marketing comes in. It’s a great way to set your engagement on autopilot and have a supportive team of experts do it for you.</p>
                        <p>They know what it takes to bring people to your account and to grow your page so that people start to take notice. Simply put, it’s the only way to get ahead in the YouTube game these days – otherwise, you could quickly start to fall behind. Plus, you don’t have hours on end every day to sit around and do your own engagement – <strong>this just isn’t realistic.</strong></p>
                        <p>UseViral is widely respected as one of the best social media tools in the market. They have been endorsed by major networks such as Deccan Herald, JeffBullas, Startup Info, Outlookindia, Earthweb and the New York Times.</p>
                        <p>Companies like UseViral have the services to make your YouTube engagement happen, and make it happen in a big way. No longer do you have to worry about who is seeing your content, because, with a social media marketing service, only the right people will.</p>
                        <p>Useviral specialises in offering services for; <a className='text-[#36f]' href="../../../../youtube/">YouTube</a>, <a className='text-[#36f]' href="../../../../tiktok/">TikTok</a>, <a className='text-[#36f]' href="../../../../twitter/">Twitter</a>, <a className='text-[#36f]' href="../../../../instagram/">Instagram</a> and <a className='text-[#36f]' href="../../../../facebook/">Facebook</a>. While constantly expanding our services we are experts in these platforms, you can <a className='text-[#36f]' href="../../../../buy-youtube-subscribers/">Buy YouTube Subscribers</a> with the highest quality guaranteed.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item !rounded-none  duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button bg-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  collapsed" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                      aria-controls="collapseSix">
                      <img src="./assets/child_logos/solve.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0 h5  font-extrabold text-[#444] max-sm:text-sm">Is UseViral Safe?</h5>
                    </button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show">
                        <p>At Useviral, we take providing our users with a safe and reliable experience very seriously. We understand the importance of protecting our users’ data and accounts, and that’s why we’ve taken measures to ensure that our service is secure and trustworthy.&nbsp;<br /><br />We use a variety of security measures to protect our users’ data and accounts, including the use of encrypted data transmission, two-factor authentication, and secure server storage.&nbsp;</p>
                        <p>Useviral is widely accepted as one of the most reputable industry leaders and endorsed by news sites such as: <a className='text-[#36f]' href="https://www.outlookindia.com/business-spotlight/how-to-buy-youtube-subscribers-in-2023-15-best-sites--news-269146">Outlookindia</a>, <a className='text-[#36f]' href="https://www.jeffbullas.com/buy-instagram-followers/">JeffBullas</a>, <a className='text-[#36f]' href="https://business-review.eu/tech/buy-youtube-subscribers-234019">Business-Review</a>, Startup Info and even <a className='text-[#36f]' href="https://washingtoncitypaper.com/article/609998/buy-tiktok-followers/">Washgintoncitypost for buying tiktok followers</a></p>
                        <p>We also have a dedicated team of professionals monitoring our system for any suspicious activity and taking action as needed. Our team is also constantly working on new ways to keep our users secure and protected.&nbsp;<br /><br />In addition, we take careful measures to ensure that our services are completely legitimate and adhere to all applicable laws and regulations. We have a strict policy against fraud and use a variety of methods to detect and prevent any suspicious activity.&nbsp;<br /><br />At Useviral, we strive to provide our users with the best and most secure experience possible. We understand that your trust is the most important thing, and that’s why we’ve taken extra steps to ensure that our services are safe, reliable, and trustworthy.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div id='getStartedSec' className='max-sm:px-3'>
        <div className="container bg-brand get-started-container max-w-[1300px] px-[30px] py-[10px]">
          <div className="md:w-1/1 text-center">
            <h2 className="text-white font-extrabold">Get Started</h2>
            <p className="text-white mb-0">Choose your package and start growing your social media</p>
            <a href="#services" className="white-bordered-btn mx-auto" role="button" id="hp-cta">
              <span className="button-text">Choose a service</span>
            </a>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home