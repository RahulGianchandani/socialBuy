import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiCheckMark } from 'react-icons/gi'
import scIcon from '../../../images/socialIcons/snapchat.webp'
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
const ScBuyViews = () => {

  const [priceSelected, setPriceSelected] = useState("19.99€")
  console.log("priceSelected", priceSelected);
  return (
    <div id='insta' className='servicePage'>
      <div className='mb-16'>
        <div className="text-center pt-24">
          <h1 className="px-4 py-2  bg-gray-200 inline rounded-full text-sm font-bold mb-6">BUY SNAPCHAT VIEWS</h1>
          <h2 className="text-2xl tracking-tight leading-10 font-semibold  sm:text-4xl md:text-3xl mt-4 pt-2 text-[#4c4c4c] px-3"> Buy Snapchat Views with <br className="xl:hidden" />
            <span className="text-brand">Fast Delivery</span>
          </h2>
          <p className="mt-4 mx-auto text-sm text-gray-800 sm:text-md md:mt-5 md:text-[1.4rem] px-3  "> UseViral offers only the highest quality services. Buy safely and securely below:</p>
        </div>
        <div className='flex justify-center my-10 px-3'>
          <div className='flex-col flex items-center sm:px-3'>
            <div className='pricesSelect'>
              <select value={priceSelected} className="border !border-[#ed1c25] outline-none p-2 rounded-md youtube_channel" name="selectedPackageId" id="packageSelectBox" onChange={(e) => setPriceSelected(e.target.value)}>
                <option value="19.99€">100 Views - 19.99€</option>
                <option value="37.99€">250 Views -  37.99€</option>
                <option value="69.99€">500 Views -  69.99€</option>
                <option value="119.99€">1000 Views -  119.99€</option>
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
                  <span>High Quality Views</span>
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
              Views
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

        <h2 className='text-center h2 mb-10'>Our Other <span className="text-brand">Snapchat</span> Services: </h2>
        <div className='container max-w-[1300px] px-14'>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
            <div className="btn-group ">
              <Link to={"/buy-sc-followers"} className="btn flex bg-brand text-white   after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={scIcon} className='mr-3' /> Buy Snapchat Followers
              </Link>

            </div>
            <div className="btn-group ">
              <Link to={"/buy-sc-views"} className="btn flex bg-blue text-white   after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={scIcon} className='mr-3' /> Buy Snapchat Views
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

                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why are Snapchat Views Important?</h5>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >Snapchat is one of the most popular social media platforms recognized for its disappearing content features. The app was released in 2011 and quickly became a hit.</span></p>
                        <p dir="ltr" ><span >Thanks to its large user base and appealing UI, Snapchat has become a popular tool for sharing photographs and videos with friends and followers.</span></p>
                        <p dir="ltr" ><span >The significance of Snapchat views stems from the platform's emphasis on real-time engagement and temporary content, which creates a sense of urgency and uniqueness in the user experience.</span></p>
                        <p dir="ltr" ><span >That’s why here at UseViral offer you the service to buy Snapchat views so that you can boost your social media presence!</span></p>
                        <p dir="ltr" ><span >On Snapchat, each view signifies a user who has actively decided to watch your video, displaying their interest and attention.&nbsp;</span></p>
                        <p dir="ltr" ><span >Unlike other social media sites, where content may remain for an extended amount of time, Snapchat's transitory nature increases the value of each view. It indicates that someone has consumed your content before it is removed, demonstrating a level of involvement and investment in what you have shared.</span></p>
                        <p dir="ltr" ><span >Snapchat views are quite important in assessing the impact of your content. Users can receive vital insights about the performance of their content by counting the number of views.&nbsp;</span></p>
                        <p dir="ltr" ><span >Views provide a metric for measuring reach and audience interaction, whether it's a snap, story, or Discover content. So our service to buy Snapchat views may significantly benefit your profile's performance.</span></p>
                        <p dir="ltr" ><span >Snapchat views are a concrete indicator of popularity and influence among the platform's active community. Higher view counts might indicate a more significant and active following, increasing a person's trustworthiness and reach.&nbsp;</span></p>
                        <p dir="ltr" ><span >Influencers and content creators frequently use views to assess their impact and value regarding prospective brand collaborations or sponsorship opportunities. Brands, on the other hand, use Snapchat views to measure the success of their marketing initiatives and determine their profits.</span></p>

                        <p dir="ltr" ><span >Using our service to buy real Snapchat views opens the door to many possibilities regarding growing your account. </span></p></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                    aria-controls="collapseTwo">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why Should You Buy Snapchat Views</h5>
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse show show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >There are several benefits of why you should purchase Snapchat views. Here are some that have proven to be the most beneficial</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Increase in Content Reach</span></h3>
                      <p dir="ltr" ><span >It comes as no surprise that buying Snapchat views can help your content reach broader audiences.</span></p>
                      <p dir="ltr" ><span >To appeal to Snapchat’s algorithm, your content has to have a certain amount of views to be suggested to other potential viewers. When your posts receive more views, they are more likely to appear in the platform's "Popular" or "Trending" sections, exposing your content to a bigger audience beyond your existing followers.&nbsp;</span></p>
                      <p dir="ltr" ><span >Those extra views will guarantee your content has enhanced visibility and also the ability to increase organic engagement and attract new followers.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Kickstarting Engagements</span></h3>
                      <p dir="ltr" ><span >If you’re a new and up-and-coming Snapchat content creator, chances are you’re struggling to reach your desired goals on the platform.</span></p>
                      <p dir="ltr" ><span >Those first few months of your career will be difficult, but you can speed things up with our service to purchase Snapchat views!</span></p>
                      <p dir="ltr" ><span >Purchasing Snapchat views can help you increase interaction with your content. People may be more likely to watch, like, comment on, or share your content if they see that it has many views.&nbsp;</span></p>
                      <p dir="ltr" ><span >Higher engagement signals to the platform's algorithms that your material is worthwhile, potentially leading to more organic exposure.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Gaining a Positive Social Proof</span></h3>
                      <p dir="ltr" ><span >The popularity and trustworthiness associated with a large number of views can have a significant impact on how people perceive your content.&nbsp;</span></p>
                      <p dir="ltr" ><span >When users come across content with many views, it activates a psychological mechanism that stimulates curiosity and the desire to learn more. The logic behind this is that if a large number of people have considered your work fascinating or worthwhile enough to watch, it must have attributes worth experiencing.&nbsp;</span></p>
                      <p dir="ltr" ><span >As a result, people are more likely to view and interact with your material by liking, commenting, or sharing it.</span></p>

                      <h3 dir="ltr" className="h3 font-bold"  ><span >Advantage over Rivals</span></h3>
                      <p dir="ltr" ><span >We at UseViral understand how important it is to obtain a competitive advantage in the ever-changing world of Snapchat.</span></p>
                      <p dir="ltr" ><span >Buying Snapchat views gives you a substantial advantage over the competition.</span></p>
                      <p dir="ltr" ><span >One of the key benefits of purchasing Snapchat views is that it increases social credibility and popular perception.&nbsp;</span></p>
                      <p dir="ltr" ><span >When your page has a large number of views, it immediately conveys authority and credibility. This competitive advantage can significantly impact how current and potential users perceive your profile.</span></p>
                      <p>&nbsp;</p>
                      <p dir="ltr" ><span >Having this advantage has the potential to start a chain reaction since more people will see your article. As a result, your profile gets more visible, resulting in more significant organic development.</span></p></div>
                  </div>
                </div>
              </div>
              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                    aria-controls="collapseThree">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Is it Safe to Buy Snapchat Views?</h5>
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >Yes, UseViral recognizes customers' concerns about our service to buy Snapchat views cheap. We understand the business we operate and are here to help remove the stigma associated with it.</span></p>
                      <p dir="ltr" ><span >When you buy Snapchat views, the entire process is broken into several steps.</span></p>
                      <p dir="ltr" ><span >To begin, while getting your account details, we merely demand the bare minimum of information. We will never request your personal information, such as your real name or account password.</span></p>
                      <p dir="ltr" ><span >The transaction information is handled with the highest care and security. We keep the information in secure databases that satisfy modern security standards.&nbsp;</span></p>
                      <p dir="ltr" ><span >UseViral hires cybersecurity professionals whose primary responsibility is to ensure that the entire procedure and our website are as secure as possible. We now have a clean record, as no data has ever been compromised in our many years of continuous operation.</span></p>
                      <p dir="ltr" ><span >Many businesses use our payment methods, and we also provide cryptocurrency as an anonymous payment option. Your entire data set is heavily secured.</span></p>
                      <p dir="ltr" ><span >Finally, we exclusively use genuine and active Snapchat users while delivering your views. Our legal experts established that this is an ethical and lawful technique to increase the number of views on an account. We regularly monitor Snapchat's Terms and Conditions to ensure our systems function correctly.</span></p>

                      <p dir="ltr" ><span >When you purchase Snapchat views from UseViral, you get nothing less than the greatest and highest-quality views on the market, all while using a safe and trusted service.</span></p></div>
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

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why Should You Choose UseViral to Buy Snapchat Views?</h5>
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >Several factors point to UseViral as the best option for buying Snapchat views. As a company, we pioneered social media marketing.&nbsp;</span></p>
                      <p dir="ltr" ><span >We think that each client deserves the best chance of success possible. We compiled a list of significant elements that indicate our superiority:</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Outstanding Customer Support Team</span></h3>
                      <p dir="ltr" ><span >UseViral takes pride in having an excellent customer support team committed to providing excellent customer service.&nbsp;</span></p>
                      <p dir="ltr" ><span >The UseViral support team's strong dedication to customer satisfaction guarantees that every client receives the assistance they require quickly and efficiently.&nbsp;</span></p>
                      <p dir="ltr" ><span >Whether you have concerns about their services, need assistance with an order, or want to optimize your Snapchat views, their experienced and courteous support specialists are here to help.</span></p>
                      <p dir="ltr" ><span >The customer support team attempts to exceed expectations by taking a customer-centric approach. They are devoted to quickly and effectively resolving issues, allowing you to maximize your Snapchat views.&nbsp;</span></p>
                      <p dir="ltr" ><span >Their commitment to exceptional customer service distinguishes UseViral, making them an excellent choice for your social media marketing needs.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Views From Real Accounts</span></h3>
                      <p dir="ltr" ><span >Regarding the service to buy Snapchat views, UseViral is the best company due to its high-quality views. UseViral assures that the views you obtain are genuine and organic, mimicking the behavior of genuine Snapchat users.&nbsp;</span></p>
                      <p dir="ltr" ><span >This emphasis on offering great engagement is critical for maintaining the integrity of your Snapchat account and creating trust with your audience.&nbsp;</span></p>
                      <p dir="ltr" ><span >UseViral helps establish you as a reliable and trustworthy content provider by providing your material with genuine perspectives.</span></p>
                      <p dir="ltr" ><span >High-quality views increase your trustworthiness and pique the interest of future viewers. When people discover that your posts have a large number of views, it generates a sense of popularity and credibility, motivating them to investigate your content further.&nbsp;</span></p>
                      <p dir="ltr" ><span >With UseViral, you can be confident that you will receive high-quality views that will boost your Snapchat profile!</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Customizable Packages</span></h3>
                      <p dir="ltr" ><span >UseViral provides customizable packages allowing you to customize your Snapchat views to your needs. Thanks to our numerous options, you can select the bundle that best fits your needs and budget.&nbsp;</span></p>
                      <p dir="ltr" ><span >We offer you a targeted audience from specified countries or demographics and a specific number of views.&nbsp;</span></p>
                      <p dir="ltr" ><span >This personalization ensures that you can reach your target demographic effectively, maximize engagement, and maximize the impact of your Snapchat views. UseViral gives you more control over your social media marketing plan by offering customizable packages, allowing you to fine-tune your approach and get the required outcomes.&nbsp;</span></p>
                      <p dir="ltr" ><span >UseViral allows you to select the package that best meets your demands, offering a personalized and effective solution for increasing your Snapchat presence.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >An Emphasis on Safety</span></h3>
                      <p dir="ltr" ><span >As previously stated, UseViral prioritizes security, ensuring consumers a safe and trustworthy experience. We place a premium on the security of your personal information and maintain strict secrecy.&nbsp;</span></p>
                      <p dir="ltr" ><span >With UseViral, you can rest assured that your data is managed with the highest care and integrity.&nbsp;</span></p>
                      <p dir="ltr" ><span >UseViral uses secure payment channels to protect your financial transactions, creating a secure atmosphere for buying Snapchat views. Our company promotes trust and reliability by prioritizing safety measures, allowing you to confidently participate in their services without worrying about protecting your information.&nbsp;</span></p>

                      <p dir="ltr" ><span >We prioritize your safety and privacy so that we’re a reliable option for your Snapchat views requirements.</span></p></div>
                  </div>
                </div>
              </div>
              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                    aria-controls="collapseFive">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">How to Buy Snapchat Views with UseViral?</h5>
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >Find it a bit confusing to use our service to purchase Snapchat views? Here’s a step-by-step guide on how to buy real active Snapchat views:</span></p>

                      <ol >
                        <li dir="ltr" aria-level="1">
                          <p dir="ltr" role="presentation"><span >Begin by using your preferred web browser to navigate to the official UseViral website.</span></p>
                        </li>
                        <li dir="ltr" aria-level="1">
                          <p dir="ltr" role="presentation"><span >Navigate to the services section of the UseViral website or specifically look for Snapchat views. Choose the number of views you want to buy. UseViral often offers multiple packages with varied numbers of views.</span></p>
                        </li>
                        <li dir="ltr" aria-level="1">
                          <p dir="ltr" role="presentation"><span >Provide the URL or link to the Snapchat post for which you desire views. Check that the link is correct and points to the requested content.</span></p>
                        </li>
                        <li dir="ltr" aria-level="1">
                          <p dir="ltr" role="presentation"><span >Additional customization options, such as views from specific nations or demographics, may be available through our services. Choose your choices if they are available.</span></p>
                        </li>
                        <li dir="ltr" aria-level="1">
                          <p dir="ltr" role="presentation"><span >After establishing your needs and personalizing your order, click the "Add to Cart" or "Buy Now" option. Proceed to the checkout page after seeing your order summary.</span></p>
                        </li>
                        <li dir="ltr" aria-level="1">
                          <p dir="ltr" role="presentation"><span >Complete the payment procedure by providing the essential payment details. UseViral accepts various payment methods, including credit/debit cards and PayPal. To complete your purchase, follow the payment gateway's instructions.</span></p>
                        </li>
                        <li dir="ltr" aria-level="1">
                          <p dir="ltr" role="presentation"><span >UseViral will begin processing your purchase once payment has been confirmed. The delivery time will depend on the package you choose. You can track the status of your order via your UseViral dashboard or by calling their customer service staff.</span></p>
                        </li>
                        <li dir="ltr" aria-level="1">
                          <p dir="ltr" role="presentation"><span >You should notice a spike in view count when the views have been sent to your Snapchat post. Monitor engagement and evaluate the impact of paid views on your Snapchat profile.</span></p>
                        </li>
                      </ol></div>
                  </div>
                </div>
              </div>

              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                    aria-controls="collapseSix">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">What is UseViral?</h5>
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >UseViral is a well-known company that focuses on social media expansion. We have an established track record of supplying authentic Snapchat views and other social media tools to our consumers, which has helped us establish our market position.</span></p>
                      <p dir="ltr" ><span >We have a competent team committed to every customer who comes to us to purchase Snapchat views. Our services are solely for promoting and growing the reach of your content.</span></p>

                      <p dir="ltr" ><span >We differ from our competitors in providing genuine Snapchat views that will interact with your content while not violating Snapchat's Terms and Conditions.</span></p></div>
                  </div>
                </div>
              </div>
              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false"
                    aria-controls="collapseSeven">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Can I track the progress of my Snapchat views orders?</h5>
                  </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >You certainly can! We understand the importance of keeping track of the views you've purchased or any other service you've used from us.</span></p>
                      <p dir="ltr" ><span >Look at our website's "Check Order" section. You will be directed to a page where you can confirm your order and track its progress. After giving your email address and order ID, the status of your order will be revealed.</span></p>

                      <p dir="ltr" ><span >If you have any further questions about acquiring Snapchat views, please contact our customer service staff!</span></p></div>
                  </div>
                </div>
              </div>
              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false"
                    aria-controls="collapseEight">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">How does UseViral function?</h5>
                  </button>
                </h2>
                <div id="collapseEight" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >Based on the information you offer, our team comprises highly qualified experts who employ several strategies to gain views.</span></p>
                      <p dir="ltr" ><span >We offer genuine Snapchat views from users who will never leave your profile.</span></p>

                      <p dir="ltr" ><span >We will discover your views, which will be available on your account within hours or weeks, depending on how fast or slowly you want them to appear.</span></p></div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false"
                      aria-controls="collapseNine">

                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">How will more views help me if I’m a Snapchat influencer?</h5>
                    </button>
                  </h2>
                  <div id="collapseNine" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >One of the most important aspects of becoming an influencer or public personality is having a significant number of views. You can increase Snapchat views for a multitude of reasons:</span></p>

                        <ol >
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >More views equals to more followers, likes, and comments, generating revenue, expanding your network, and moving you up the Snapchat algorithm.</span></p>
                          </li>
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >Having a lot of views can lead to partnerships with other influencers, which can help young and emerging influencers develop their platforms.</span></p>
                          </li>
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >With more views, brands begin to notice your work, which leads to sponsorships and endorsement contracts, which are one of the primary ways influencers profit.</span></p>
                          </li>
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >As the number of views increases, your visitors will think positively of and perceive the content more favorably.</span></p>
                          </li>
                        </ol></div>
                    </div>
                  </div>
                  <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                    <h2 className="accordion-header">
                      <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false"
                        aria-controls="collapseTen">

                        <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Are the Snapchat views delivered gradually or all at once?</h5>
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse show" >
                      <div className="accordion-body border border-[#eee]">
                        <div class="panel show"><p dir="ltr" ><span >This is entirely dependent on the plan you select when purchasing Snapchat views.</span></p>
                          <p dir="ltr" ><span >Our services are perfect since you may personalize the distribution of your followers!</span></p>
                          <p dir="ltr" ><span >If you need all your points of view at once, you might supply them all at once. The progressive way is the same; if you like to obtain opinions gradually, we will do so.</span></p>

                          <p dir="ltr" ><span >Please keep in mind that the more comprehensive your package and the number of views you buy, the longer it will take for them to display on your profile!</span></p></div>
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

export default ScBuyViews