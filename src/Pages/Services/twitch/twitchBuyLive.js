import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiCheckMark } from 'react-icons/gi'
import twitchIcon from '../../../images/socialIcons/twitch.webp'
import keyIcon from '../../../images/key-icon.webp'
import lockIcon from '../../../images/lock-icon.webp'
import userIcon from '../../../images/user-icon.webp'
import gauranteeIcon from '../../../images/gaurentee-icon.webp'
import customerIcon from '../../../images/benefit/customer.webp'
import heartIcon from '../../../images/benefit/heart.webp'
import HQIcon from '../../../images/benefit/highQuality.webp'
import MBIcon from '../../../images/benefit/moneyBack.webp'
import safeIcon from '../../../images/benefit/safe.webp'
import servicesIcon from '../../../images/benefit/services.webp'
import multipleSocial from '../../../images/multipleSocial.webp'
const TwitchBuyLive = () => {

  const [priceSelected, setPriceSelected] = useState(0)
  console.log("priceSelected", priceSelected);
  return (
    <div id='insta' className='servicePage'>
      <div className='mb-16'>
        <div className="text-center pt-24">
          <h1 className="px-4 py-2  bg-gray-200 inline rounded-full text-sm font-bold mb-6">BUY TWITCH LIVE</h1>
          <h2 className="text-2xl tracking-tight leading-10 font-semibold  sm:text-4xl md:text-3xl mt-4 pt-2 text-[#4c4c4c] px-3"> Buy Twitch Live with <br className="xl:hidden" />
            <span className="text-brand">Fast Delivery</span>
          </h2>
          <p className="mt-4 mx-auto text-sm text-gray-800 sm:text-md md:mt-5 md:text-[1.4rem] px-3  "> UseViral offers only the highest quality services. Buy safely and securely below:</p>
        </div>
        <div className='flex justify-center my-10 px-3'>
          <div className='flex-col flex items-center sm:px-3'>
            <div className='pricesSelect'>
              <select className="border !border-[#ed1c25] outline-none p-2 rounded-md youtube_channel" name="selectedPackageId" id="packageSelectBox" onChange={(e) => setPriceSelected(e.target.value)}>
                <option value="4.99€">50 Live - 4.99€</option>
                <option value="9.99€">100 Live - 9.99€</option>
                <option value="18.99€">200 Live - 18.99€</option>
                <option value="35.99€">500 Live - 35.99€</option>
                <option value="56.99€">1000 Live - 56.99€</option>
                <option value="99.99€">2500 Live - 99.99€</option>
              </select>
            </div>
            <div className="monet_wrap w-96 !pt-8 !pb-4 max-sm:px-5 max-sm:!mx-[15px] ">
              <ul className="monet_ul max-sm:text-center">
                <li className='flex mb-3'>
                  <img src={keyIcon} />
                  <span>Guaranteed Delivery</span>
                </li>
                <li className='flex mb-3'>
                  <img src={lockIcon} />
                  <span>High Quality Live</span>
                </li>
                <li className='flex mb-3'>
                  <img src={userIcon} />
                  <span>100% Safe &amp; Private</span>
                </li>
                <li className='flex mb-3'>
                  <img src={gauranteeIcon} />
                  <span>24/7 Support</span>
                </li>
              </ul>
            </div>
            <button className='bg-brand text-white text-center py-3  w-full  rounded-md'>BUY NOW FOR {priceSelected}</button>


          </div>

        </div>
        <div className='flex justify-center mb-5 mx-5'>
          <ul className='border !border-[#ed1c25] rounded-xl p-3'>
            <li className='text-sm text-[#4c4c4c]  font-bold max-md:text-center'>
              Includes:
            </li>
            <li className='text-sm'>
              <GiCheckMark className='text-green-600 inline align-middle  mr-5' />
              <strong>Real High-Quality </strong>
              Live
            </li>
            <li className='text-sm'>
              <GiCheckMark className='text-green-600 inline align-middle  mr-5' />
              <strong>30 days </strong>
              refills
            </li>
            <li className='text-sm'>
              <GiCheckMark className='text-green-600 inline align-middle  mr-5' />
              Guaranteed
              <strong> Safe and Secure Delivery</strong>
            </li>
          </ul>
        </div>

        <h2 className='text-center h2 mb-10'>Our Other <span className="text-brand">Twitch</span> Services: </h2>
        <div className='container max-w-[1300px] px-14'>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
            <div className="btn-group ">
              <Link to="/buy-twitch-followers" className="btn flex bg-brand text-white    after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={twitchIcon} className='mr-3' />  Buy Twitch Followers
              </Link>

            </div>
            <div className="btn-group ">
              <Link to="/buy-twitch-video-views" className="btn flex bg-blue text-white    after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={twitchIcon} className='mr-3' />  Buy Twitch Video Views
              </Link>

            </div>
            <div className="btn-group ">
              <Link to="/buy-twitch-live" className="btn flex bg-brand text-white    after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={twitchIcon} className='mr-3' />  Buy Twitch Live Views
              </Link>

            </div>
          </div>
          <h2 className=" text-center text-3xl tracking-wide font-semibold text-454545 sm:text-3xl leading-[1.2] mt-32 mb-16">Amazing Benefits Included in All UseViral Services:
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3'>
            <div className='hover:shadow-xl duration-500 hover:-translate-y-1 flex flex-col items-center justify-center border !border-[#cbcbcb] rounded-lg p-3'>
              <div className='h-[100px] w-[100px] mb-3'>
                <img src={HQIcon} />
              </div>
              <p className='text-707070 text-center'>High Quality Service</p>
            </div>
            <div className='hover:shadow-xl duration-500 hover:-translate-y-1 flex flex-col items-center justify-center border !border-[#cbcbcb] rounded-lg p-3'>
              <div className='h-[100px] w-[100px] mb-3'>
                <img src={heartIcon} />
              </div>
              <p className='text-707070 text-center'>Real Reviews, Happy Customers</p>
            </div>
            <div className='hover:shadow-xl duration-500 hover:-translate-y-1 flex flex-col items-center justify-center border !border-[#cbcbcb] rounded-lg p-3'>
              <div className='h-[100px] w-[100px] mb-3'>
                <img src={servicesIcon} />
              </div>
              <p className='text-707070 text-center'>Targeted Services</p>
            </div>
            <div className='hover:shadow-xl duration-500 hover:-translate-y-1 flex flex-col items-center justify-center border !border-[#cbcbcb] rounded-lg p-3'>
              <div className='h-[100px] w-[100px] mb-3'>
                <img src={safeIcon} />
              </div>
              <p className='text-707070 text-center'>Privacy & Safety</p>
            </div>
            <div className='hover:shadow-xl duration-500 hover:-translate-y-1 flex flex-col items-center justify-center border !border-[#cbcbcb] rounded-lg p-3'>
              <div className='h-[100px] w-[100px] mb-3'>
                <img src={MBIcon} />
              </div>
              <p className='text-707070 text-center'>30 Day Money Back Guarantee</p>
            </div>
            <div className='hover:shadow-xl duration-500 hover:-translate-y-1 flex flex-col items-center justify-center border !border-[#cbcbcb] rounded-lg p-3'>
              <div className='h-[100px] w-[100px] mb-3'>
                <img src={customerIcon} />
              </div>
              <p className='text-707070 text-center'>Customer Satisfaction</p>
            </div>
          </div>

        </div>
        <h2 className=" text-center text-3xl tracking-wide font-semibold text-454545 sm:text-3xl leading-[1.2] mt-32 mb-16">How does UseViral Work?
        </h2>
        <div className='lg:flex justify-center items-center'>
          <div className='flex justify-center' >
            <img src={multipleSocial} width={"100%"} />
          </div>
          <div class="py-12 working_steps_wrap">
            <div class="working-steps-block bord max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
              <div class="working-steps">
                <h3 class="text-md tracking-wide  font-semibold text-454545 sm:text-lg leading-[1.2] m-0">Select the package that is right for you</h3>
                <div class="text-base paragraph-text text-707070">Choose from dozens of popular social networks using the links at the top of the page.</div>
              </div>
            </div>
            <div class="working-steps-block bord max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
              <div class="working-steps">
                <h3 class="text-md tracking-wide  font-semibold text-454545 sm:text-lg leading-[1.2] m-0">Provide necessary information</h3>
                <div class="text-base paragraph-text text-707070">Enter the URL of your content or your social media username when prompted.</div>
              </div>
            </div>
            <div class="working-steps-block max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
              <div class="working-steps">
                <h3 class="text-md tracking-wide  font-semibold text-454545 sm:text-lg leading-[1.2] m-0">Checkout securely</h3>
                <div class="text-base paragraph-text text-707070">Complete the secure online payment process, and we'll begin delivering your order.</div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id='FAQsection' className='max-sm:px-7  mt-5'>
        <div className='text-center'>
          <h2 className="text-3xl tracking-wide font-semibold text-[#454545] sm:text-3xl leading-1-2">
            Frequently Asked Questions
          </h2>
          <p className="!mt-4 mb-4 leading-6 text-[#707070] text-base paragraph_text">Have questions? Get the inside scoop on the most frequently asked</p>
        </div>
        <div className='container max-sm:mb-[50px] mb-[170px] max-w-[780px]'>
          <div className="box py-[50px]">
            <div className="accordion   gap-[20px] justify-between" id="accordionExample">
              <div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border bg-[white]   border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px] " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                      aria-controls="collapseOne">

                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why are Twitch Live Views Important?</h5>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr"><span >Twitch is one of the world's most popular streaming platforms. It is a place where craters can share content they produce on the spot, and as a result of its success, it is an excellent way for popular creators to make money.</span></p>
                        <p dir="ltr"><span >We understand that getting the recognition you deserve might not be that easy. If you don’t have enough viewers on your live streams, you won't be able to improve on the platform.</span></p>
                        <p dir="ltr"><span >So what should you do?</span></p>
                        <p dir="ltr"><span >You can buy Twitch live viewers by using UseViral services!</span></p>
                        <p dir="ltr"><span >As UseViral, we recognize the importance of Twitch Live Views in helping you become a better creator and elevate your presence on the platform.&nbsp;</span></p>
                        <p dir="ltr"><span >If you increase Twitch live views, it provides you with valuable feedback and insights. When more viewers tune into your streams, you receive a broader range of perspectives and opinions.</span></p>
                        <p dir="ltr"><span >This feedback can be precious in refining your content, identifying areas for improvement, and understanding what resonates with your audience.&nbsp;</span></p>
                        <p dir="ltr"><span >By actively listening to your viewers, you can adjust, deliver content that aligns with their interests, and continuously enhance your streaming skills.</span></p>
                        <p dir="ltr"><span >Furthermore, a higher viewership improves your visibility on the platform. Twitch's algorithm considers the number of viewers when determining stream rankings and recommendations.&nbsp;</span></p>
                        <p dir="ltr"><span >With more live views, your stream is more likely to be featured prominently in the Twitch directory, attracting additional organic viewers.&nbsp;</span></p>
                        <p dir="ltr"><span >This increased visibility expands your reach and introduces you to new potential followers and collaborators, fostering growth and networking opportunities within the Twitch community.</span></p>
                        <p dir="ltr"><span >Moreover, having a substantial live viewership establishes credibility and authority. When viewers see many people engaging with your stream, it creates a perception that your content is valuable and worth watching.&nbsp;</span></p>
                        <p dir="ltr"></p>
                        <p dir="ltr"><span >Twitch Live Views play a pivotal role in your journey as a creator. They offer valuable feedback, improve your visibility on the platform, and contribute to the growth and development of your Twitch channel.</span></p></div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                      aria-controls="collapseThree">
                      <img src="./assets/child_logos/stctr.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why Should You Buy Twitch Live Viewers?</h5>
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse show show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr"><span >There are several reasons to purchase Twitch live viewers that can contribute to the growth and success of your Twitch channel. Here are some of the key benefits:</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Increased Engagement and Chat Activity</span></h3>
                        <p dir="ltr"><span >Increased engagement and chat activity are significant advantages of havin an increase Twitch live viewers. When your stream has more viewers, it creates a sense of popularity and excitement, attracting more viewers to join the conversation.&nbsp;</span></p>
                        <p dir="ltr"><span >With more viewers actively engaging in the chat, more opportunities for lively discussions, interactions, and community building exist. This increased engagement enhances the overall viewing experience for both you as a streamer and your audience.&nbsp;</span></p>
                        <p dir="ltr"><span >It allows you to have real-time interactions, answer questions, and create a more interactive and dynamic stream environment. The active chat activity can also help foster a sense of community among your viewers, making them feel more connected and invested in your content.&nbsp;</span></p>
                        <p dir="ltr"><span >As a result, the increased engagement and chat activity contributes to your Twitch channel's overall success and growth.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Networking and Partnership Opportunities</span></h3>
                        <p dir="ltr"><span >If you buy real Twitch live viewers, the networking and partnership opportunities you get can be a valuable advantage. As you gain more viewers, your stream becomes more visible to brands, sponsors, and fellow content creators actively seeking collaborations and partnerships.&nbsp;</span></p>
                        <p dir="ltr"><span >With a substantial viewership, you demonstrate your influence and potential reach, making you an attractive candidate for brand sponsorships and other promotional opportunities. These partnerships can provide financial support, access to exclusive content, and exposure to a broader audience.&nbsp;</span></p>
                        <p dir="ltr"><span >By leveraging your increased viewership, you can forge valuable connections, build a professional network, and establish yourself as a reputable and influential presence in the Twitch community.&nbsp;</span></p>
                        <p dir="ltr"><span >These networking and partnership opportunities enhance your channel's growth and open doors to exciting and rewarding collaborations that can take your Twitch journey to new heights.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Instant Boost in Viewership</span></h3>
                        <p dir="ltr"><span >One of the significant advantages of buying Twitch live viewers through UseViral is the instant boost in viewership it provides. Building an audience from scratch can be challenging and time-consuming for a streamer.&nbsp;</span></p>
                        <p dir="ltr"><span >However, by purchasing Twitch live viewers, you can quickly increase the number of viewers in your stream and create a sense of popularity right from the start.</span></p>
                        <p dir="ltr"><span >When potential viewers come across your stream and see more viewers, they are more likely to be intrigued and curious about your offer.&nbsp;</span></p>
                        <p dir="ltr"><span >This increased viewership can create a positive first impression and make your stream more appealing to new viewers. It creates a perception of credibility and success, significantly impacting viewers' decision to join and engage with your stream.</span></p>
                        <p dir="ltr"><span >Furthermore, the instant boost in viewership can also attract more organic viewers. When new viewers see that your stream already has many viewers, they are more likely to join and participate in the conversation.&nbsp;</span></p>
                        <p dir="ltr"><span >This can lead to a snowball effect, where the increased engagement from organic viewers further enhances the appeal of your stream and attracts even more viewers.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Improved Stream Ranking</span></h3>
                        <p dir="ltr"><span >If you active Twitch live viewers from UseViral, you can improve your stream's ranking on the platform and increase its overall visibility. When your stream ranks higher in search results and recommendations, it becomes more accessible to a larger audience, increasing the chances of attracting organic viewership.&nbsp;</span></p>
                        <p dir="ltr"><span >This improved visibility can have a domino effect as more viewers discover and engage with your stream, leading to greater exposure and growth.</span></p>
                        <p dir="ltr"><span >You can reach a broader audience and expand your Twitch community with an enhanced stream ranking. As more viewers tune in to your stream, you can cultivate a dedicated following, foster a sense of community, and build meaningful connections with your audience.&nbsp;</span></p>
                        <p dir="ltr"><span >These connections can increase engagement, more frequent interactions, and a lively chat environment during your streams.</span></p>
                        <p dir="ltr"><span >Furthermore, a higher viewership can attract the attention of potential sponsors, advertisers, and partners interested in collaborating with you.&nbsp;</span></p>
                        
                        <p dir="ltr"><span >As your stream gains traction and attention, you may receive inquiries for sponsorships, brand deals, or even invitations to join Twitch partner programs. These partnerships can provide additional monetization opportunities and further support the growth of your Twitch channel.</span></p></div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                      aria-controls="collapseFive">
                      <img src="./assets/child_logos/user-plus-bottom.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Is it Safe to Buy Twitch Live Viewers?</h5>
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr"><span >Yes, it is safe to buy Twitch live viewers from UseViral. We prioritize the safety and security of our users. Here are a few reasons why purchasing Twitch live viewers with our services is safe.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >High-Quality Viewers</span></h3>
                        <p dir="ltr"><span >With UseViral, you buy real active Twitch viewers. We ensure that the live viewers you purchase are real and active Twitch users. We have a network of genuine Twitch users who engage with various channels, including yours.&nbsp;</span></p>
                        <p dir="ltr"><span >The quality of our viewers extends beyond their source. If you buy real Twitch live viewers, you get an audience here to stay. Unlike other services that give bots to their clients, consequently putting their profiles in danger, we employ trustworthy tactics that ensure the growth and security of your account.</span></p>
                        <p dir="ltr"><span >The quantity of viewers you buy isn’t the only important thing. Choosing a service that guarantees the integrity and longevity of your new audience is crucial.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Compliance with Twitch Guidelines</span></h3>
                        <p dir="ltr"><span >At UseViral, we understand the importance of maintaining compliance with Twitch's guidelines. When you buy Twitch live viewers cheap from us, you can be confident that our methods are safe and in line with Twitch's terms of service.&nbsp;</span></p>
                        <p dir="ltr"><span >We do not engage in any activities that could jeopardize the integrity of your Twitch account.</span></p>
                        <p dir="ltr"><span >Our team works diligently to ensure that the delivery of live viewers is done according to Twitch's guidelines.&nbsp;</span></p>
                        <p dir="ltr"><span >UseViral focuses on providing real and active viewers who authentically engage with your content. This helps create a positive and organic viewer experience.</span></p>
                        <p dir="ltr"><span >By complying with Twitch's guidelines, we safeguard your account and prioritize your Twitch channel's long-term success.&nbsp;</span></p>
                        <p dir="ltr"><span >Maintaining a strong and reputable presence on Twitch is essential for building your audience and fostering a loyal community.</span></p>
                        <p dir="ltr"><span >Rest assured that when you choose UseViral, you partner with a trusted provider prioritizing your account's compliance and safety.&nbsp;</span></p>
                        <p dir="ltr"><span >Our platform is committed to helping you achieve your streaming goals while ensuring your Twitch channel remains in good standing within the Twitch community.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Account Security</span></h3>
                        <p dir="ltr"><span >At UseViral, we prioritize the security and privacy of your Twitch account. When you purchase Twitch live viewers from us, you can rest assured that we do not require access to your account credentials.&nbsp;</span></p>
                        <p dir="ltr"><span >We understand the importance of safeguarding your login information and have implemented measures to ensure it remains confidential.</span></p>
                        <p dir="ltr"><span >Our services are designed to focus solely on providing you with live viewers to enhance your streaming experience. We do not engage in any activities that compromise the security or integrity of your Twitch account.&nbsp;</span></p>
                        <p dir="ltr"><span >You can trust that your account will remain secure while you enjoy the benefits of increased viewership.</span></p>
                        <p dir="ltr"><span >We have established a reputation as a trusted and reliable provider in the industry. Our team of professionals adheres to strict security protocols and follows Twitch's guidelines to ensure compliance and maintain the safety of your account.&nbsp;</span></p>
                        
                        <p dir="ltr"><span >We take pride in delivering high-quality services while maintaining the utmost respect for your privacy and account security.</span></p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                      aria-controls="collapseTwo">
                      <img src="./assets/child_logos//brain.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why Should I Choose UseViral to Buy Twitch Live Viewers?</h5>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr"><span >As UseViral, we understand the importance of choosing the right service provider when you buy targeted Twitch live viewers. Here's why you should choose UseViral for your Twitch growth.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >10 Years Experience</span></h3>
                        <p dir="ltr"><span >Our ten years of experience in the industry sets UseViral apart as a trusted provider of Twitch Services. Over the years, we have honed our skills and developed a deep understanding of the Twitch platform.&nbsp;</span></p>
                        <p dir="ltr"><span >We have worked with numerous Twitch streamers, gaining valuable insights into their needs and challenges.</span></p>
                        
                        <p dir="ltr"><span >With this extensive experience, we have refined our strategies and techniques to deliver high-quality Twitch services that yield exceptional results.&nbsp;</span></p>
                        <p dir="ltr"><span >We understand the best practices for growing a Twitch channel, including optimizing stream visibility, increasing engagement, and attracting genuine viewers.</span></p>
                        <p dir="ltr"><span >Our expertise allows us to tailor our services to meet each client's unique requirements, ensuring their Twitch channels thrive and reach new heights.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Dedicated Customer Support</span></h3>
                        <p dir="ltr"><span >At UseViral, we take great pride in our dedicated customer support. Our client's satisfaction is paramount, and we strive to provide exceptional service and support throughout your journey with us.</span></p>
                        <p dir="ltr"><span >Our customer support team consists of experienced professionals passionate about assisting you. They are available to address any queries, concerns, or issues, and they will guide you every step of the way. Whether you need clarification on our services, assistance with placing an order, or help with troubleshooting, our team is just a message away.</span></p>
                        <p dir="ltr"><span >We prioritize responsiveness and aim to provide prompt solutions to ensure a seamless experience for our clients. Our support team is well-versed in our services and has in-depth industry knowledge, allowing them to provide accurate and practical guidance tailored to your needs.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Understanding of The Platform</span></h3>
                        <p dir="ltr"><span >At UseViral, our deep understanding of the Twitch platform sets us apart from other service providers. We have invested time and resources into studying Twitch's guidelines, best practices, and algorithmic changes to ensure that our services align with Twitch's policies.&nbsp;</span></p>
                        <p dir="ltr"><span >We are well-versed in the unique dynamics of Twitch, including the importance of engagement, viewer interaction, and discoverability.</span></p>
                        <p dir="ltr"><span >By leveraging our understanding of the platform, we deliver Twitch live viewers safely and organically.&nbsp;</span></p>
                        <p>&nbsp;</p>
                        <p dir="ltr"><span >Our platform prioritizes the long-term success of your Twitch channel and focuses on maximizing the visibility and engagement of your streams. Our services are designed to attract real, active Twitch viewers genuinely interested in your content, providing you with an authentic and engaging streaming experience.</span></p></div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                      aria-controls="collapseFour">
                      <img src="./assets/child_logos/creative.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">How to Buy Twitch Live Viewers with UseViral</h5>
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><h3 dir="ltr" className="h3 font-bold"  ><span >Step 1: Visit the UseViral Website</span></h3>
                        <p dir="ltr"><span >Go to the official UseViral website to access our range of Twitch services.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Step 2: Select "Twitch Live Viewers"</span></h3>
                        <p dir="ltr"><span >Browse through our services and select the "Twitch Live Viewers" option. This will take you to the Twitch live viewers service page.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Step 3: Choose the Package</span></h3>
                        <p dir="ltr"><span >Choose the package that suits your needs. UseViral offers various packages with different quantities of live viewers. Consider your budget and streaming goals when making your selection.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Step 4: Provide Your Twitch Channel Details</span></h3>
                        <p dir="ltr"><span >Enter your Twitch channel URL or username to specify where live viewers are delivered. Make sure to double-check the information for accuracy.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Step 5: Customize Your Order (Optional)</span></h3>
                        <p dir="ltr"><span >UseViral provides additional customization options to tailor your order. You can choose the delivery speed, geographical location, and other specifications to align with your preferences. These options allow you to optimize the experience for your Twitch channel.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Step 6: Add to Cart and Proceed to Checkout</span></h3>
                        <p dir="ltr"><span >Add the package to your cart once satisfied with your selection and customization. Proceed to the checkout page to review your order and make the payment.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Step 7: Complete the Payment</span></h3>
                        
                        <p dir="ltr"><span >Choose from the available payment options UseViral provides and provide the necessary details to complete the payment securely. UseViral prioritizes the safety and confidentiality of your information.</span></p></div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                      aria-controls="collapseSix">

                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Can I customize the delivery speed of the Twitch live viewers?</h5>
                    </button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr"><span >Absolutely! At UseViral, we understand the importance of maintaining an organic and natural growth pattern for your Twitch channel.&nbsp;</span></p>
                        <p dir="ltr"><span >That's why we offer the option to customize the delivery speed of Twitch live viewers according to your preferences.</span></p>
                        <p dir="ltr"><span >During ordering, you can select the desired speed at which you want the Twitch live viewers for sale on our to be delivered to your channel.&nbsp;</span></p>
                        
                        <p dir="ltr"><span >We offer different delivery speeds to cater to various needs and goals. Whether you prefer a gradual and steady increase in viewership or a more accelerated growth, you can choose the delivery speed that suits your streaming strategy.</span></p></div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false"
                      aria-controls="collapseSeven">

                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Can I specify the geographical location of the Twitch live viewers?</h5>
                    </button>
                  </h2>
                  <div id="collapseSeven" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr"><span >Absolutely! At UseViral, we understand the importance of targeting specific geographical locations for your Twitch live viewers. We offer the flexibility to specify the desired location or region when purchasing Twitch live viewers.&nbsp;</span></p>
                        <p dir="ltr"><span >This means you can tailor your viewership to align with your target audience or focus on attracting viewers from specific geographical areas.</span></p>
                        <p dir="ltr"><span >Targeting specific locations can be beneficial for several reasons. It allows you to connect with viewers who are more likely to resonate with your content, as they are from the same region or have shared interests.&nbsp;</span></p>
                        
                        <p dir="ltr"><span >This can increase engagement and more meaningful interactions and potentially help you build a dedicated community of viewers.</span></p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TwitchBuyLive
