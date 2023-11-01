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
const TwitchBuyFollowers = () => {

  const [priceSelected, setPriceSelected] = useState("3.99€")
  console.log("priceSelected", priceSelected);
  return (
    <div id='insta' className='servicePage'>
      <div className='mb-16'>
        <div className="text-center pt-24">
          <h1 className="px-4 py-2  bg-gray-200 inline rounded-full text-sm font-bold mb-6">BUY TWITCH FOLLOWERS</h1>
          <h2 className="text-2xl tracking-tight leading-10 font-semibold  sm:text-4xl md:text-3xl mt-4 pt-2 text-[#4c4c4c] px-3"> Buy Twitch Followers with <br className="xl:hidden" />
            <span className="text-brand">Fast Delivery</span>
          </h2>
          <p className="mt-4 mx-auto text-sm text-gray-800 sm:text-md md:mt-5 md:text-[1.4rem] px-3  "> FameDaddy offers only the highest quality services. Buy safely and securely below:</p>
        </div>
        <div className='flex justify-center my-10 px-3'>
          <div className='flex-col flex items-center sm:px-3'>
            <div className='pricesSelect'>
              <select value={priceSelected} className="border !border-[#ed1c25] outline-none p-2 rounded-md youtube_channel" name="selectedPackageId" id="packageSelectBox" onChange={(e) => setPriceSelected(e.target.value)}>
                <option value="3.99€">100 Followers -  3.99€</option>
                <option value="5.99€">250 Followers -  5.99€</option>
                <option value="7.99€">500 Followers -  7.99€</option>
                <option value="14.99€">1000 Followers -  14.99€</option>
                <option value="27.99€">2500 Followers -  27.99€</option>
                <option value="44.99€">5000 Followers -  44.99€</option>
                <option value="64.99€">7500 Followers -  64.99€</option>
                <option value="84.99€">10000 Followers -  84.99€</option>
                <option value="119.99€">15000 Followers -  119.99€</option>
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
                  <span>High Quality Followers</span>
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
              Followers
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
          <h2 className=" text-center text-3xl tracking-wide font-semibold text-454545 sm:text-3xl leading-[1.2] mt-32 mb-16">Amazing Benefits Included in All FameDaddy Services:
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
        <h2 className=" text-center text-3xl tracking-wide font-semibold text-454545 sm:text-3xl leading-[1.2] mt-32 mb-16">How does FameDaddy Work?
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

                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why are Twitch Followers Important?</h5>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr"><span >Growing a Twitch community can be a very demanding task. The first thing you should do when trying to expand your platform should be to get a large following.&nbsp;</span></p>
                        <p dir="ltr"><span >Having trouble building that audience?</span></p>
                        <p dir="ltr"><span >You can buy Twitch followers here at FameDaddy. Our goal is to assist you in attracting a substantial audience so you may concentrate on producing your greatest content.</span></p>
                        <p dir="ltr"><span >The followers on Twitch are very important to you, the streamers. They help you succeed and develop on the platform. Buying Twitch followers covers more than just the immediate benefits. It provides an understanding of community, connection, and recognition mechanics.</span></p>
                        <p dir="ltr"><span >As the cornerstone of a streamer's community, Twitch followers are crucial. When viewers subscribe to a streamer, they demonstrate an interest in the content and show that they want to keep up with the streamer's persona.&nbsp;</span></p>
                        <p dir="ltr"><span >When you buy Twitch followers, you can contribute to the sense of validation and recognition streamers seek. Seeing that the number of Twitch followers has grown, it reinforces the streamer's enthusiasm and commitment by providing support and encouragement.</span></p>
                        <p dir="ltr"><span >Furthermore, Twitch viewers support the streamer's goals and ambitions. Many streamers aim to turn their passion into a profession, and followers become crucial.</span></p>
                        <p dir="ltr"><span >With more exposure, you become a crater with the chance to work with others, earn money, and attract brand sponsorship. In essence, followers form the base upon which a streamer's success is constructed.</span></p>
                        <p dir="ltr"><span >Purchasing followers helps a streamer gain credibility, draws in more viewers, and creates monetization options. Beyond the numbers, followers are vital to a streamer's support network since they offer motivation and interpersonal relationships.&nbsp;</span></p>
                        
                        <p dir="ltr"><span >Beyond their advantages, acknowledging Twitch followers emphasizes the value of community, connection, and the shared experience of streaming.</span></p></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                    aria-controls="collapseTwo">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why Should You Buy Instagram Followers</h5>
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse show show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr"><span >Are you having trouble growing your Twitch followers count?</span></p>
                      <p dir="ltr"><span >You have come to the right place. Let us show you some of the advantages of buying Twitch followers.</span></p>
                      <h3 dir="ltr" className="h3 font-bold" ><span >Kickstarting Visibility</span></h3>
                      <p dir="ltr"><span >Purchasing Twitch followers can temporarily boost follower count, potentially attracting initial attention and curiosity from viewers.&nbsp;</span></p>
                      <p dir="ltr"><span >This increased visibility may encourage organic viewers to check out the streamer's content, allowing them to showcase their skills and personality.</span></p>
                      <p dir="ltr"><span >Visitors to the streamer's channel may become curious if there is a rapid surge in followers.&nbsp;</span></p>
                      <p dir="ltr"><span >They can become curious about the streamer's content after seeing a streamer with more followers and wonder what draws in such a big audience. This piqued interest may result in more viewers and the chance to highlight the streamer's abilities and personality.</span></p>
                      <p dir="ltr"><span >Kickstarting&nbsp;</span></p>
                      <h3 dir="ltr" className="h3 font-bold" ><span >Enhanced Popularity</span></h3>
                      <p dir="ltr"><span >A higher follower count can create a perception of popularity and credibility. When new viewers stumble upon a stream with a large follower base, they may be more inclined to give it a chance, assuming that the streamer's content is valuable.&nbsp;</span></p>
                      <p dir="ltr"><span >This initial perception might lead to increased viewership and potential growth.</span></p>
                      <p dir="ltr"><span >The number of followers is linked to social proof in the competitive Twitch scene. A streamer with more followers may have more intriguing content, attracting more unpaid viewers drawn by their popularity.</span></p>
                      <p dir="ltr"><span >A huge following can help establish social proof and increase the streamer's legitimacy, which may open up more chances for partnerships, sponsorships, and collaborations.</span></p>
                      <h3 dir="ltr" className="h3 font-bold" ><span >Increased Social Proof</span></h3>
                      <p dir="ltr"><span >Followers are frequently used to determine a streamer's credibility and social proof.&nbsp;</span></p>
                      <p dir="ltr"><span >A higher follower count may attract sponsors, brands, or other streamers who see the streamer as influential in their field. This could lead to prospects for collaboration or sponsorship.</span></p>
                      <p dir="ltr"><span >Because of networking opportunities and potential alliances, the streamer may acquire more exposure and experience growth.&nbsp;</span></p>
                      <p dir="ltr"><span >Increasing Twitch followers and number solidifies your social status.</span></p>
                      <h3 dir="ltr" className="h3 font-bold" ><span >Boosting Confidence</span></h3>
                      <p dir="ltr"><span >Some streamers may feel more confident and motivated when they see more followers. This perceived validation may provide a psychological boost, encouraging streamers to continue creating content and engaging with their audience.</span></p>
                      <p dir="ltr"><span >A streamer may feel more motivated after seeing an increase in followers.&nbsp;</span></p>
                      <p dir="ltr"><span >It is a concrete sign that their work is appreciated and that people are interested in what they say.&nbsp;</span></p>
                      
                      <p dir="ltr"><span >This boost in self-assurance can motivate streamers to keep putting in the effort, developing their abilities, and providing their audience with top-notch content.</span></p></div>
                  </div>
                </div>
              </div>
              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                    aria-controls="collapseThree">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Is it Safe to Buy Instagram Followers?</h5>
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr"><span >Consider buying Twitch followers if you're a company or individual trying to increase your social media presence on Twitch.&nbsp;</span></p>
                      <p dir="ltr"><span >It is understandable to doubt the legitimacy and safety of such activities. Let’s show you why purchasing Twitch followers is safe.</span></p>
                      <p dir="ltr"><span >We are renowned for offering followers with a high level of quality who are authentic accounts and actively participate in your stream.&nbsp;</span></p>
                      <p dir="ltr"><span >To guarantee that you buy real Twitch followers interested in your content or products, we apply ethical practices and place a high value on authenticity.&nbsp;</span></p>
                      <p dir="ltr"><span >We abide entirely by Twitch's rules and procedures. Our services increase followers using safe and legal techniques, reducing the likelihood that Twitch may flag or suspend your account.</span></p>
                      <p dir="ltr"><span >Our platform places a high priority on confidentiality and privacy. We prioritize protecting the privacy of our client's information and make sure that all data transfers and transactions are done safely.&nbsp;</span></p>
                      <p dir="ltr"><span >FameDaddy protects your personal information when you purchase Twitch followers from our site, giving you peace of mind.</span></p>
                      <p dir="ltr"><span >We are famous for being trustworthy and honest. Our platform is open and honest about our offerings, costs, and turnaround times. Our easy-to-use platform and prompt customer assistance simplify the Twitch purchase procedure. Customer satisfaction is our priority at FameDaddy, and we work hard to live up to or surpass your expectations.</span></p>
                      <p dir="ltr"><span >FameDaddy is a trustworthy and safe option for you to buy Twitch followers. With our dedication to high-quality followers, adherence to Twitch's rules, emphasis on privacy, availability of customization options, and open service, we can help you increase your Twitch presence securely.&nbsp;</span></p>
                      
                      <p dir="ltr"><span >By using FameDaddy's dependable services right away, you can raise your online authority and audience.</span></p></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                    aria-controls="collapseFour">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why Should You Choose FameDaddy to Buy Twitch Followers?</h5>
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr"><span >We know the advantages and disadvantages of building a significant following on Twitch.&nbsp;</span></p>
                      <p dir="ltr"><span >As the top website for you to buyTwitch followers, we have made a name for ourselves as the go-to option for individuals and companies looking to increase their influence and reach.&nbsp;</span></p>
                      <p dir="ltr"><span >But what distinguishes FameDaddy from its rivals?&nbsp;</span></p>
                      <p dir="ltr"><span >Let us demonstrate the qualities that set us apart from other service providers.</span></p>
                      <p dir="ltr"><span >Our standing as a dependable and trustworthy business already exists. We take great pride in delivering excellent results to our customers, ensuring you get engaged followers of the highest caliber.&nbsp;</span></p>
                      <p dir="ltr"><span >We strongly emphasize authenticity because active participation is crucial to Twitch's long-term success.</span></p>
                      <p dir="ltr"><span >Our platform upholds high moral standards and is dedicated to your success. Unlike other websites that employ dubious tactics, we abide by Twitch's guidelines. Our rules are clear, legitimate, and created to protect the integrity of your Twitch account.&nbsp;</span></p>
                      <p dir="ltr"><span >You can be sure that your account and reputation are secure when you choose FameDaddy to buy targeted Twitch followers.</span></p>
                      <p dir="ltr"><span >Additionally, long-term growth and success are priorities for us. Our strategies are designed to help you create a group of enthusiastic followers who actively contribute to your Twitch following and engage with your Twitch experience.&nbsp;</span></p>
                      <p dir="ltr"><span >Our services can help you build a loyal fan base to support you as you navigate the ever-changing Twitch environment by encouraging genuine dialogues and providing high-quality content.</span></p>
                      <p dir="ltr"><span >We also recognize the value of flexibility and customization. To fit your needs and budget, we provide several services for our services.&nbsp;</span></p>
                      <p dir="ltr"><span >Whether you're just starting or want to step up your Twitch presence, our services are designed to get you there quickly and effectively.</span></p>
                      <p dir="ltr"><span >Our dedication to providing top-notch customer service ensures that your complete satisfaction is our first concern, and we are always available to address issues. Our knowledgeable staff is committed to supporting you throughout the procedure and providing a satisfying experience from start to finish.</span></p>
                      <p dir="ltr"><span >Come along as we help Twitch streamers realize their full potential. Let's expand your circle of influence and leave a positive impact together.</span></p>
                      
                      <p dir="ltr"><span >In conclusion, the best method for purchasing Twitch followers is FameDaddy. We are your dependable partner on your Twitch journey due to our unwavering attention to honesty and focus on your achievement.</span></p></div>
                  </div>
                </div>
              </div>
              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                    aria-controls="collapseFive">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">How to Buy Twitch Followers with FameDaddy?</h5>
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr"><span >You can easily advertise your Twitch profile and expand your online visibility when you buy Twitch followers. Use these quick strategies to purchase followers and raise the visibility of your platform:</span></p>
                      <h3 dir="ltr" className="h3 font-bold" ><span >Determine your Desired Amount of Followers</span></h3>
                      <p dir="ltr"><span >Before purchasing, consider how many followers you'll need to achieve your advertising objectives. Think about your distinct goals and your Twitch presence right now.&nbsp;</span></p>
                      <p dir="ltr"><span >Make sure your budget matches the plan you've chosen.</span></p>
                      <h3 dir="ltr" className="h3 font-bold" ><span >Visit the Purchase Twitch Followers Page of FameDaddy</span></h3>
                      <p dir="ltr"><span >Go to the page built for users worldwide, FameDaddy Twitch Followers. Examine the many packages offered, each offering a different number of followers for a charge.</span></p>
                      <p dir="ltr"><span >Check the details of the available options after selecting the package that most closely matches your promotional goals and spending limit.</span></p>
                      <h3 dir="ltr" className="h3 font-bold" ><span >Click "Buy Now" to View Order Details</span></h3>
                      <p dir="ltr"><span >Select the desired amount of followers, then click "Buy Now" to get the order details. You will find a simple form to fill out here.</span></p>
                      <h3 dir="ltr" className="h3 font-bold" ><span >Provide the Required Information</span></h3>
                      <p dir="ltr"><span >In the order details form, provide the URL of your Twitch profile or the profile you want to promote. Include a valid email address to which all pertinent information about your order will be sent.</span></p>
                      <h3 dir="ltr" className="h3 font-bold" ><span >Continue to the Checkout</span></h3>
                      <p dir="ltr"><span >Double-check your order information to ensure accuracy before the checkout stage. If everything appears in order, move on to the payment stage.&nbsp;</span></p>
                      <p dir="ltr"><span >PayPal and other payment options and credit/debit cards are all accepted by FameDaddy. To complete the secure transaction, choose your preferred payment method and follow the on-screen instructions.&nbsp;</span></p>
                      <p dir="ltr"><span >Verify the accuracy of all of your payment information.</span></p>
                      <h3 dir="ltr" className="h3 font-bold" ><span >Distribution and Confirmation</span></h3>
                      <p dir="ltr"><span >An email confirming your order will be sent to you once the payment has been completed. Details about your transaction, including the amount of followers you gained and any additional instructions, will be included in this email.</span></p>
                      
                      <p dir="ltr"><span >Utilize our convenient services to quickly and effectively promote your Twitch profile by buying Twitch followers, maximizing the impact of your Twitch activities, boosting your online presence, and engaging with a wider audience.</span></p></div>
                  </div>
                </div>
              </div>

              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                    aria-controls="collapseSix">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Does FameDaddy offer Twitch follower services?</h5>
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr"><span >Yes, we at FameDaddy provide various reputable marketing options to assist streamers in naturally expanding their Twitch channels.&nbsp;</span></p>
                      <p dir="ltr"><span >To boost your visibility, buy targeted followers, and draw a sincere audience.&nbsp;</span></p>
                      
                      <p dir="ltr"><span >We offer you customized tactics and services. With the help of our services, you can efficiently market your Twitch streams, increase your audience, and create a genuine audience community. To improve your Twitch channel and realize its full potential for success, go with FameDaddy.</span></p></div>
                  </div>
                </div>
              </div>
              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false"
                    aria-controls="collapseSeven">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">How long does it take to see the results after I buy Twitch followers from FameDaddy?</h5>
                  </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr"><span >It's crucial to remember that we at FameDaddy, have a platform that encourages organic growth and interaction when discussing the time frame for seeing benefits after purchasing Twitch followers from them.&nbsp;</span></p>
                      <p dir="ltr"><span >FameDaddy provides a service where you can buy active Twitch followers, so the results might not come immediately, but you won’t have to wait too long.</span></p>
                      <p dir="ltr"><span >We focus on offering reliable marketing options that can assist streamers in naturally expanding their Twitch channels.&nbsp;</span></p>
                      <p dir="ltr"><span >When you buy real followers from us, you may boost your visibility and reach a larger audience.</span></p>
                      <p dir="ltr"><span >You may increase your chances of long-term success on Twitch by using FameDaddy's services. But it's crucial to remember that developing a loyal and interested audience takes time and regular work.&nbsp;</span></p>
                      <p dir="ltr"><span >Achieving sustainable development requires perseverance, high-quality content, and genuine involvement with your audience.</span></p>
                      
                      <p dir="ltr"><span >In the end, seeing the growth of your platform will be worth the short wait.</span></p></div>
                  </div>
                </div>
              </div>
              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false"
                    aria-controls="collapseEight">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">How much does it cost to increase Twitch followers from FameDaddy?</h5>
                  </button>
                </h2>
                <div id="collapseEight" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr"><span >The price varies depending on the precise package and amounts you select when purchasing Twitch followers from FameDaddy.&nbsp;</span></p>
                      <p dir="ltr"><span >We provide a variety of choices to accommodate various financial needs and objectives. Our pricing is affordable and geared toward giving value to streamers who want to expand their Twitch channel.</span></p>
                      <p dir="ltr"><span >At FameDaddy, you can buy real active Twitch followers cheaply.</span></p>
                      
                      <p dir="ltr"><span >We advise visiting FameDaddy.com, our official website, to learn more about the pricing and various packages for purchasing Twitch followers from FameDaddy. There, you may review our selection, evaluate the features and costs of several packages, and choose the one that best suits your requirements and price range.</span></p></div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false"
                      aria-controls="collapseNine">

                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Does FameDaddy offer customer support in case I have any questions or concerns?</h5>
                    </button>
                  </h2>
                  <div id="collapseNine" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr"><span >Our customer care team is available to assist you with any inquiries or issues. Customer satisfaction is essential to us, and we have a dedicated support staff on hand to provide timely and helpful assistance.</span></p>
                        <p dir="ltr"><span >If you have inquiries about our services, want more information about our packages, or need help placing an order, contact FameDaddy's customer service.</span></p>
                        <p dir="ltr"><span >We offer Twitch followers for sale. Therefore, we also offer support by buying them.&nbsp;</span></p>
                        <p dir="ltr"><span >We promise to respond to your concerns immediately and make dealing with them a positive experience. We want to ensure you have all the knowledge and direction you need to make wise choices about expanding your Twitch audience.</span></p>
                        
                        <p dir="ltr"><span >Our commitment to offering top-notch customer service is only one element that contributes to our reputation as a dependable platform for social media growth. </span></p></div>
                    </div>
                  </div>
                  <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                    <h2 className="accordion-header">
                      <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false"
                        aria-controls="collapseTen">

                        <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Are any discounts or promotions available when I buy Twitch followers from FameDaddy?</h5>
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse show" >
                      <div className="accordion-body border border-[#eee]">
                        <div class="panel show"><p dir="ltr"><span >Yes, we often provide discounts and promotions when buying Twitch followers. We value our customers and frequently offer special deals on our services to make them more accessible to streamers.</span></p>
                          <p dir="ltr"><span >You can visit our official website or contact our customer support team to learn about the current discounts or promotions available.&nbsp;</span></p>
                          
                          <p dir="ltr"><span >These offers can significantly boost your Twitch channel's growth while saving on costs.</span></p></div>
                      </div>
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

export default TwitchBuyFollowers
