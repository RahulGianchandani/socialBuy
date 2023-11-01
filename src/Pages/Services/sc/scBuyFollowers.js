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
const ScBuyFollowers = () => {

  const [priceSelected, setPriceSelected] = useState("9.99€")
  console.log("priceSelected", priceSelected);
  return (
    <div id='insta' className='servicePage'>
      <div className='mb-16'>
        <div className="text-center pt-24">
          <h1 className="px-4 py-2  bg-gray-200 inline rounded-full text-sm font-bold mb-6">BUY SNAPCHAT FOLLOWERS</h1>
          <h2 className="text-2xl tracking-tight leading-10 font-semibold  sm:text-4xl md:text-3xl mt-4 pt-2 text-[#4c4c4c] px-3"> Buy Snapchat Followers with <br className="xl:hidden" />
            <span className="text-brand">Fast Delivery</span>
          </h2>
          <p className="mt-4 mx-auto text-sm text-gray-800 sm:text-md md:mt-5 md:text-[1.4rem] px-3  "> FameDaddy offers only the highest quality services. Buy safely and securely below:</p>
        </div>
        <div className='flex justify-center my-10 px-3'>
          <div className='flex-col flex items-center sm:px-3'>
            <div className='pricesSelect'>
              <select value={priceSelected} className="border !border-[#ed1c25] outline-none p-2 rounded-md youtube_channel" name="selectedPackageId" id="packageSelectBox" onChange={(e) => setPriceSelected(e.target.value)}>
                <option value="9.99€">50 Followers - 9.99€</option>
                <option value="18.99€">100 Followers - 18.99€</option>
                <option value="37.99€">250 Followers -  37.99€</option>
                <option value="99.99€">500 Followers -  99.99€</option>
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

                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why are Snapchat Followers Important?</h5>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >Snapchat is a popular social networking platform recognized for its disappearing content. The software was developed in 2011 and soon gained popularity.</span></p>
                        <p dir="ltr" ><span >Because of its large user base and attractive user interface has grown into a popular tool for sharing pictures and videos with others who follow you.</span></p>
                        <p dir="ltr" ><span >In today's fast-paced digital world, the significance of Snapchat followers can't be overstated.</span></p>
                        <p dir="ltr" ><span >We at FameDaddy want to assist you on your social media adventure, so we provide the option to buy Snapchat followers!</span></p>
                        <p dir="ltr" ><span >An extensive Snapchat following provides numerous benefits for individual content creators and organizations.&nbsp;&nbsp;</span></p>
                        <p dir="ltr" ><span >Among the most significant benefits is the possibility of reaching a broader audience. Each follower is a potential viewer interested in your shared content.&nbsp;</span></p>
                        <p dir="ltr" ><span >A more significant following increases the chances of contacting more people, increasing the content's impact, whether an individual account or a corporate advertisement.</span></p>
                        <p dir="ltr" ><span >Our service to buy Snapchat followers can help you to expand your audience and reach new viewers.</span></p>
                        <p dir="ltr" ><span >Any social media site's success, including Snapchat, depends on engagement.&nbsp;</span></p>
                        <p dir="ltr" ><span >Individuals and businesses with a vast following can generate valuable interactions such as likes, comments, and shares. These interactions not only boost visibility but also aid in the establishment of credibility and influence.&nbsp;</span></p>
                        <p dir="ltr" ><span >When followers actively engage with content, a chain reaction occurs, attracting more attention and possibly obtaining new followers interested in the uploaded content.</span></p>
                        <p dir="ltr" ><span >Furthermore, the number of Snapchat followers is essential for determining one's reach and influence. While the number of followers does not define the quality of content or the effect of a user or business, it's an integral part of the social media landscape.&nbsp;</span></p>
                        <p dir="ltr" ><span >Content creators and businesses with a large Snapchat following can dramatically impact their success by allowing them to amplify their messages, build relationships, and cultivate a loyal audience that actively participates in their journey.</span></p>
                        
                        <p dir="ltr" ><span >If your goal is to succeed on Snapchat, buying Snapchat followers can ensure you get the necessary boost to increase your social media presence!</span></p></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                    aria-controls="collapseTwo">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why Should You Buy Snapchat Followers</h5>
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse show show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >There’re many reasons why you should consider our services to purchase Snapchat followers, so here’s a list of the most beneficial reasons:</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Initial Boost</span></h3>
                      <p dir="ltr" ><span >An initial boost is a brief spike in exposure, engagement, and follower development that can occur when you strategically broaden your reach through various methods such as collaborations, promotional initiatives, or targeted advertising.&nbsp;</span></p>
                      <p dir="ltr" ><span >When you buy real Snapchat followers, you get the boost you need to begin your career and grow your following.</span></p>
                      <p dir="ltr" ><span >An early boost can help you expand your internet presence, draw attention from a larger audience, and build the groundwork for long-term growth by generating a spike of interest and exposure. This burst of momentum can snowball, as the increased visibility and engagement can attract organic followers interested in your content, eventually leading to a more robust and engaged community.&nbsp;</span></p>
                      <p dir="ltr" ><span >However, while an initial boost can be beneficial, long-term success ultimately rests on constantly offering high-quality content, making genuine relationships, and cultivating your audience's trust and engagement.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Collaboration Opportunities</span></h3>
                      <p dir="ltr" ><span >Collaboration opportunities on Snapchat give a fantastic opportunity for growth and visibility. You can broaden your reach to new followers by collaborating with like-minded people, companies, or influencers in your area.</span></p>
                      <p dir="ltr" ><span >These collaborations enable you to use your distinct abilities, creativity, and resources to generate exciting content that appeals to your existing followers and collaborators.&nbsp;</span></p>
                      <p dir="ltr" ><span >Using each other's platforms, you may cross-promote, exchange audiences, and present your content to a more extensive network.&nbsp;</span></p>
                      <p dir="ltr" ><span >Purchasing Snapchat followers can lead to lucrative networking opportunities, credibility, and opening doors for future collaborations and partnerships.&nbsp;</span></p>
                      <p dir="ltr" ><span >Collaborating on Snapchat allows you to reach out to a varied and engaged audience, broaden your influence, and build mutually beneficial partnerships to fuel your growth and success on the platform.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Perceived Authority</span></h3>
                      <p dir="ltr" ><span >Having a perceived authority on Snapchat can significantly impact how others view and interact with your content.&nbsp;</span></p>
                      <p dir="ltr" ><span >Our service to buy active Snapchat followers may significantly impact how people perceive your content.</span></p>
                      <p dir="ltr" ><span >When users come upon an account that radiates authority through many followers, excellent content, or consistent engagement, they are more likely to regard the account as a reputable and reliable source of information or entertainment.&nbsp;</span></p>
                      <p dir="ltr" ><span >This authority perception can boost the level of interest, engagement, and respect. However, it's vital to remember that perceived authority must be aligned with actual competence and value.&nbsp;</span></p>
                      <p dir="ltr" ><span >You may establish yourself as a respectable and vital figure on Snapchat by combining perceived authority and actual competence.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Competitive Advantage</span></h3>
                      <p dir="ltr" ><span >FameDaddy understands the importance of gaining a competitive advantage in the ever-changing world of Snapchat.</span></p>
                      <p dir="ltr" ><span >Buying Snapchat followers gives you a significant advantage over your rivals.</span></p>
                      <p dir="ltr" ><span >One of the primary advantages of buying Snapchat followers is that it boosts social credibility and popular perception.&nbsp;</span></p>
                      <p dir="ltr" ><span >A considerable number of followers on your page immediately portrays power and reliability. This competitive advantage can significantly impact current and potential users' perceptions of your profile.</span></p>
                      
                      <p dir="ltr" ><span >Because more people will see your piece, this has the potential to start a chain reaction. As a result, your profile becomes more apparent, leading to more significant organic growth.</span></p></div>
                  </div>
                </div>
              </div>
              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                    aria-controls="collapseThree">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Is it Safe to Buy Snapchat Followers?</h5>
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >We can firmly react to this severe worry by stating that our services are secure and will not jeopardize your account.</span></p>
                      <p dir="ltr" ><span >Here at FameDaddy, we are genuinely concerned about security and strive to provide a safe and secure experience.</span></p>
                      <p dir="ltr" ><span >We can provide you with risk-free services by strictly following Snapchat's Terms and Conditions. Your account will not break any rules. As a result, it will not be prohibited or suspended.</span></p>
                      <p dir="ltr" ><span >Please be aware that the Snapchat board of directors can change the rules anytime and that we will be prepared to change our services as needed.</span></p>
                      <p dir="ltr" ><span >Our service to buy real active Snapchat followers is performed privately between clients, and no one will ever view their personal information!</span></p>
                      <p dir="ltr" ><span >When you purchase Snapchat followers, you won't be asked for any personal information, which is not required to complete the transaction. We will keep your information secure so that you can rest easy!</span></p>
                      <p dir="ltr" ><span >Another essential piece of information that will not be compromised is the security of your banking information, which we recognize. We guarantee that all transactions through our website will be secure and that no personal or financial information will be compromised because we take security extremely seriously.</span></p>
                      <p dir="ltr" ><span >We would betray our essential beliefs if we broke our promise to make your experience as secure as possible.</span></p>
                      
                      <p dir="ltr" ><span >Please contact our customer service if you have additional questions about your Snapchat profile's security or data protection. They are happy to answer every question you may have.</span></p></div>
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

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why Should You Choose FameDaddy to Buy Snapchat Followers?</h5>
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >Several considerations indicate that FameDaddy is the best option for purchasing Snapchat followers.&nbsp;</span></p>
                      <p dir="ltr" ><span >We believe that each client deserves the best chance to succeed. Here at FameDaddy, we created a list of significant elements that demonstrate our superiority:</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Other Services with Fair Prices</span></h3>
                      <p dir="ltr" ><span >We offer our customers the option to buy Snapchat followers cheap, but we also provide much more.</span></p>
                      <p dir="ltr" ><span >To begin, followers are not the primary focus of our services. We provide services to increase post-related metrics such as likes, shares, views, and comments.&nbsp;</span></p>
                      <p dir="ltr" ><span >Along with purchasing everything listed, you may also select the demography that best meets your needs.</span></p>
                      <p dir="ltr" ><span >Snapchat, Twitter, Instagram, TikTok, and other sites where we provide similar services are among our most popular social media platforms.</span></p>
                      <p dir="ltr" ><span >FameDaddy provides a range of bundles for each of our services. We want our consumers to be able to choose their demography, delivery schedule, and number of followers.</span></p>
                      <p dir="ltr" ><span >All of these customization options will impact pricing but don't worry. Our top services are reasonably priced.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Authentic Followers</span></h3>
                      <p dir="ltr" ><span >FameDaddy is the most outstanding company to buy Snapchat followers from because of its high-quality followers. We guarantee you that the followers you receive are genuine and organic, imitating the behavior of genuine Snapchat users.&nbsp;</span></p>
                      <p dir="ltr" ><span >This emphasis on providing excellent engagement is essential for maintaining the integrity of your Snapchat account and building trust with your audience.&nbsp;</span></p>
                      <p dir="ltr" ><span >FameDaddy helps you establish yourself as a credible and trustworthy content source by delivering authentic viewpoints on your content.</span></p>
                      <p dir="ltr" ><span >High-quality followers improve your credibility and pique the interest of potential users. When people learn that your account has a massive number of followers, it gives them a sense of popularity and credibility, encouraging them to look into your content further.&nbsp;</span></p>
                      <p dir="ltr" ><span >You can be sure that using FameDaddy will acquire high-quality followers to increase your Snapchat social media presence!</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Reputable Company</span></h3>
                      <p dir="ltr" ><span >FameDaddy has been on the market for quite some time and has earned quite a name.&nbsp;</span></p>
                      <p dir="ltr" ><span >We try to provide our clients with exceptional online visibility services. Our company takes pride in offering this experience and has no plans to breach our promise.</span></p>
                      <p dir="ltr" ><span >Customer satisfaction is crucial to the growth of our firm, and your feedback inspires us to make better changes in the future. What matters to us is hearing your thoughts and opinions!</span></p>
                      <p dir="ltr" ><span >We offer an unequaled customer support team to assure our clients' satisfaction. They have undergone rigorous training to respond to questions.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Overall Safety</span></h3>
                      <p dir="ltr" ><span >As previously said, one of our primary concerns is the safety of our clients. We don't want you to be afraid of using our services.</span></p>
                      <p dir="ltr" ><span >We strictly adhere to Snapchat's guidelines to prevent infringing any laws or regulations that could result in your account being banned. Our services are entirely legal, and we meticulously follow all the restrictions that regulate the buying of Snapchat followers.</span></p>
                      <p dir="ltr" ><span >We want our consumers to feel secure, and we prioritize customer satisfaction.&nbsp;</span></p>
                      
                      <p dir="ltr" ><span >We can improve the company by encouraging our clients to provide feedback on our services. Our customer service representatives are delighted to hear your feedback and will gladly answer any questions you may have!</span></p></div>
                  </div>
                </div>
              </div>
              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                    aria-controls="collapseFive">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">How to Buy Snapchat Followers with FameDaddy?</h5>
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >Do you find it difficult to understand how to utilize our service to buy Snapchat followers? Here's a step-by-step guide on how you can buy targeted Snapchat followers:</span></p>
                      
                      <ol >
                        <li dir="ltr"  aria-level="1">
                          <p dir="ltr"  role="presentation"><span >Begin by going to the official FameDaddy website on your choice web browser.</span></p>
                        </li>
                        <li dir="ltr"  aria-level="1">
                          <p dir="ltr"  role="presentation"><span >Navigate to the FameDaddy website's services section or particularly look for Snapchat followers. Select the number of views you want to purchase. FameDaddy frequently provides multiple packages with varying numbers of views.</span></p>
                        </li>
                        <li dir="ltr"  aria-level="1">
                          <p dir="ltr"  role="presentation"><span >Give the URL of your desired Snapchat profile where you want followers. Verify that the link is correct and leads to the desired content.</span></p>
                        </li>
                        <li dir="ltr"  aria-level="1">
                          <p dir="ltr"  role="presentation"><span >Our services offer customization choices, including followers from specified countries or demographics. If your options are available, select them.</span></p>
                        </li>
                        <li dir="ltr"  aria-level="1">
                          <p dir="ltr"  role="presentation"><span >After determining your requirements and personalizing your order, click the "Add to Cart" or "Buy Now" button. After viewing your order summary, proceed to the checkout page.</span></p>
                        </li>
                        <li dir="ltr"  aria-level="1">
                          <p dir="ltr"  role="presentation"><span >Complete the payment process by supplying the necessary payment information. FameDaddy accepts credit/debit cards and PayPal as payment methods. Follow the payment gateway's instructions to complete your purchase.</span></p>
                        </li>
                        <li dir="ltr"  aria-level="1">
                          <p dir="ltr"  role="presentation"><span >Once your payment has been confirmed, FameDaddy will begin processing your order. The delivery time depends on the package you select. You may check the status of your order using your FameDaddy dashboard or by contacting their customer support team.</span></p>
                        </li>
                        <li dir="ltr"  aria-level="1">
                          <p dir="ltr"  role="presentation"><span >When the followers are sent to your Snapchat profile, you should see an increase in followers. Examine engagement and the effect of purchased followers on your Snapchat account.</span></p>
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

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Why should I use FameDaddy to buy Snapchat followers?</h5>
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >FameDaddy is the way to go if you want a cheap, quick, and reliable solution to increase Snapchat followers.&nbsp;</span></p>
                      <p dir="ltr" ><span >We differ from our competitors in that we do not use bot accounts that are canceled after a few weeks. We offer you with genuine Snapchat followers for sale who have demonstrated an interest in content comparable to yours and will be around indefinitely.</span></p>
                      <p dir="ltr" ><span >These accounts will give a more organic development pattern to help you accomplish your goals.</span></p>
                      
                      <p dir="ltr" ><span >Our service is 100% safe, does not break Snapchat policies, and will not result in your account being suspended. </span></p></div>
                  </div>
                </div>
              </div>
              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false"
                    aria-controls="collapseSeven">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">How long does it take to receive Snapchat followers after placing an order?</h5>
                  </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >You certainly can. We offer various services at FameDaddy, but we believe followers are the most important to our clients.</span></p>
                      <p dir="ltr" ><span >We also provide packages for likes, comments, and shares, but determining which is ideal for you is essential. We have you covered even if you believe you require more than one service!</span></p>
                      <p dir="ltr" ><span >Our services include Instagram, Twitter, YouTube, and other social media apps.&nbsp;</span></p>
                      
                      <p dir="ltr" ><span >So, what are you holding out for? Visit our website, review all our services, and select the best fit for your requirements.</span></p></div>
                  </div>
                </div>
              </div>
              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false"
                    aria-controls="collapseEight">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Is there a discount or promotion FameDaddy offers for bulk purchases of Snapchat followers?</h5>
                  </button>
                </h2>
                <div id="collapseEight" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >We at FameDaddy understand the importance of on-time delivery and make an effort to provide our clients with a straightforward service.&nbsp;</span></p>
                      <p dir="ltr" ><span >The time it takes to receive Snapchat followers is determined by the package and the number of followers received. Our delivery process usually begins when your order has been verified.</span></p>
                      <p dir="ltr" ><span >We employ a systematic and organic approach to reach the highest level of quality and authenticity. This means followers will gradually be added to your Snapchat profile, resulting in a more organic growth pattern. We will try to deliver the followers within the purchase time specified.</span></p>
                      
                      <p dir="ltr" ><span >External factors such as order quantity and current demand for our services may also impact delivery time. However, we strive to achieve deadlines while maintaining our client's trust.</span></p></div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false"
                      aria-controls="collapseNine">

                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">What payment options does FameDaddy offer for purchasing Snapchat followers?</h5>
                    </button>
                  </h2>
                  <div id="collapseNine" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >We sure do! When you visit our website, you will see the pricing of the selected package and any discounts.</span></p>
                        <p dir="ltr" ><span >The beauty of our services is that they are entirely customizable to your tastes, and the pricing is determined by the number of followers you wish to purchase.</span></p>
                        <p dir="ltr" ><span >All of our services and packages now have a 25% discount. We endeavor to deliver the best service possible to our clients at reasonable prices that most people can afford.&nbsp;</span></p>
                        
                        <p dir="ltr" ><span >Check out all of our packages, and if you have any questions about buying Snapchat followers, please contact our customer support staff!</span></p></div>
                    </div>
                  </div>
                  <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                    <h2 className="accordion-header">
                      <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false"
                        aria-controls="collapseTen">

                        <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Can I monitor the status of my Snapchat followers orders?</h5>
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse show" >
                      <div className="accordion-body border border-[#eee]">
                        <div class="panel show"><p dir="ltr" ><span >FameDaddy offers a variety of simple and secure payment options for purchasing Snapchat followers as safely as possible.</span></p>
                          <ol >
                            <li dir="ltr"  aria-level="1">
                              <p dir="ltr"  role="presentation"><span >We accept credit and debit cards from Visa, Mastercard, American Express, and Discover.</span></p>
                            </li>
                            <li dir="ltr"  aria-level="1">
                              <p dir="ltr"  role="presentation"><span >If you prefer not to use your credit/debit card, we accept payments through popular digital payment providers such as PayPal.</span></p>
                            </li>
                            <li dir="ltr"  aria-level="1">
                              <p dir="ltr"  role="presentation"><span >To keep up with the times, we accept a variety of cryptocurrencies as payment options, including Bitcoin (BTC) and Ethereum (ETH).</span></p>
                            </li>
                          </ol>
                          
                          <p dir="ltr" ><span >Choose the most convenient payment method, and you can be confident that your payment will be processed securely and adequately. We value your confidence in FameDaddy and look forward to aiding you in increasing your Snapchat followers.</span></p></div>
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

export default ScBuyFollowers