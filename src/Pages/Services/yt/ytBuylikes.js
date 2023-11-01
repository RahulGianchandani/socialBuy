import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiCheckMark } from 'react-icons/gi'
import utubeIcon from '../../../images/socialIcons/youtube.webp'
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
const YTBuyLikes = () => {

  const [priceSelected, setPriceSelected] = useState("3.99€")
  console.log("priceSelected", priceSelected);
  return (
    <div id='yt' className='servicePage'>
      <div className='mb-16'>
        <div className="text-center pt-24">
          <h1 className="px-4 py-2  bg-gray-200 inline rounded-full text-sm font-bold mb-6">BUY YOUTUBE LIKES</h1>
          <h2 className="text-2xl tracking-tight leading-10 font-semibold  sm:text-4xl md:text-3xl mt-4 pt-2 text-[#4c4c4c] px-3"> Buy Youtube Likes with <br className="xl:hidden" />
            <span className="text-brand">Fast Delivery</span>
          </h2>
          <p className="mt-4 mx-auto text-sm text-gray-800 sm:text-md md:mt-5 md:text-[1.4rem] px-3  "> UseViral offers only the highest quality services. Buy safely and securely below:</p>
        </div>
        <div className='flex justify-center my-10 px-3'>
          <div className='flex-col flex items-center sm:px-3'>
            <div className='pricesSelect'>
              <select value={priceSelected} className="border !border-[#ed1c25] outline-none p-2 rounded-md youtube_channel" name="selectedPackageId" id="packageSelectBox" onChange={(e) => setPriceSelected(e.target.value)}>
                <option value="3.99€">100 Likes - 3.99€</option>
                <option value="7.99€">250 Likes - 7.99€</option>
                <option value="13.99€">500 Likes - 13.99€</option>
                <option value="24.99€">1000 Likes - 24.99€</option>
                <option value="44.99€">2000 Likes - 44.99€</option>
                <option value="109.99€">5000 Likes - 109.99€</option>
                <option value="239.99€">10000 Likes - 239.99€</option>
                <option value="319.99€">15000 Likes - 319.99€</option>
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
                  <span>High Quality Likes</span>
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
              Likes
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

        <h2 className='text-center h2 mb-10'>Our Other <span className="text-brand">Youtube</span> Services: </h2>
        <div className='container max-w-[1300px] px-14'>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
            <div className="btn-group ">
              <Link to="/buy-yt-subs" className="btn flex bg-brand text-white    after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={utubeIcon} className='mr-3' /> Buy Youtube Subscribers
              </Link>

            </div>
            <div className="btn-group ">
              <Link to="/buy-yt-watch-time-hours" className="btn flex bg-blue text-white    after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={utubeIcon} className='mr-3' /> Buy Youtube Watch Time Hours
              </Link>

            </div>
            <div className="btn-group ">
              <Link to="/buy-yt-views" className="btn flex bg-brand text-white    after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={utubeIcon} className='mr-3' /> Buy Youtube Views
              </Link>

            </div>
            <div className="btn-group ">
              <Link to="/buy-yt-likes" className="btn flex bg-blue text-white    after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={utubeIcon} className='mr-3' /> Buy Youtube Likes
              </Link>

            </div>
            <div className="btn-group ">
              <Link to="/buy-yt-dislikes " className="btn flex bg-brand text-white    after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={utubeIcon} className='mr-3' /> Buy Youtube Dislikes
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
                      
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why Are YouTube Likes Significant?</h5>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span>As the premier platform for video sharing across the globe, YouTube has profoundly transformed our way of viewing and distributing videos.&nbsp;</span></p>
                        <p dir="ltr" ><span>The enormity of its user base and Google's backing have led to YouTube becoming a vital instrument for businesses to connect with their targeted demographics effectively.</span></p>
                        <p dir="ltr" ><span>Since its emergence in 2005, YouTube has undergone staggering growth, making it an indispensable platform for content producers and marketers.&nbsp;</span></p>
                        <p dir="ltr" ><span>If you're a content creator with dreams of carving a successful path for yourself, you should be among the millions of YouTubers utilizing the influence of genuine likes to amplify their presence.</span></p>
                        <p dir="ltr" ><span>Though high-quality videos are imperative, amassing likes can be quite an uphill task. The competition is cut-throat, with innumerable creators battling for global viewer attention.&nbsp;</span></p>
                        <p dir="ltr" ><span>Despite concerted promotion efforts, realizing your desired outcomes within a sensible period is often tricky.</span></p>
                        <p dir="ltr" ><span>This is where purchasing YouTube likes for your videos can potentially turn the tide in your favor.</span></p>
                   
                        <p dir="ltr" ><span>By purchasing likes, you can accelerate the growth of your YouTube account while still having ample time to focus on content creation.&nbsp;</span></p>
                        <p dir="ltr" ><span>It allows you to establish social proof, boost engagement, and increase your chances of attracting new viewers. You don’t leave it to be a coincidence or luck.</span></p>
                        <p dir="ltr" ><span>When you buy YouTube likes, you have total control over your numbers instead of begging people to like your videos and getting disappointed with the low numbers.&nbsp;</span></p>
                        <p dir="ltr" ><span>The process is simple yet effective. By choosing a reputable service provider like UseViral, you can access high-quality likes from real users who genuinely appreciate your content.&nbsp;</span></p>
                        <p dir="ltr" ><span>These likes not only showcase the popularity of your videos but also help improve their visibility in search results and recommendations.</span></p>
                        <p dir="ltr" ><span>With our reliable and secure services, you can confidently enhance your YouTube presence and unlock new opportunities for success.</span></p>
                        <p dir="ltr" ><span>If you're ready to take your YouTube journey to the next level and gain a competitive edge, buying likes from UseViral is the perfect solution.&nbsp;</span></p>
                        <p><span id="docs-internal-guid-922468ae-7fff-17cc-539f-a70a4961af3f"></span></p>
                        <p dir="ltr" ><span>Embrace this effective strategy to rapidly grow your YouTube account while remaining free to focus on what you do best - creating engaging and compelling videos.</span></p></div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                      aria-controls="collapseTwo">
                      <img src="./assets/child_logos/stctr.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Is it Safe to Buy YouTube Likes?</h5>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse show show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show">
                        <p dir="ltr" ><span>The security of your YouTube videos should be your first concern when acquiring likes. If you go with a reputable company, you can rest assured that your protection is their priority.</span></p>
                        <p dir="ltr" ><span>A reputable social media marketing company fully comprehends the significance of safeguarding your privacy.&nbsp;</span></p>
                        <p dir="ltr" ><span>They carelessly keep your personal information confidential, never sharing it with any third parties. This ensures that your data remains secure throughout the entire process of placing an order.</span></p>
                        <p dir="ltr" ><span>Moreover, a dependable social media marketing website prioritizes customer safety by implementing stringent authentication measures.&nbsp;</span></p>
                        <p dir="ltr" ><span>They will never ask for your login credentials, so your YouTube account is protected from potential risks.</span></p>
                        <p dir="ltr" ><span>Now, let's delve into the legality of purchasing likes. It is completely legal to buy likes for your YouTube videos, as there are presently no legal restrictions or regulations that prohibit this marketing strategy.&nbsp;</span></p>
                        <p dir="ltr" ><span>Hence, you can confidently explore enhancing your YouTube presence without legal concerns.&nbsp;</span></p>
                        <p dir="ltr" ><span>Nonetheless, it is essential to familiarize yourself with and adhere to YouTube's terms and conditions.&nbsp;</span></p>
                        <p dir="ltr" ><span>Violating these policies can result in penalties or even suspending your YouTube account. Therefore, ensuring that the service provider you choose respects and complies with YouTube's guidelines is crucial.&nbsp;</span></p>
                        <p dir="ltr" ><span>By doing so, you can avoid acquiring bots-generated likes or engaging in any activity contravening YouTube's policies.</span></p>
                        <p dir="ltr" ><span>By selecting a reputable service provider to buy YouTube likes, such as UseViral, you can access a secure and legitimate means of increasing them on your videos.&nbsp;</span></p>
                        <p dir="ltr" ><span>UseViral is dedicated to providing genuine likes from real users who genuinely appreciate your content.&nbsp;</span></p>
                        <p dir="ltr" ><span>Our adherence to YouTube's guidelines and commitment to customer satisfaction for purchasing likes is second to none.</span></p>
                        <p><span id="docs-internal-guid-a6a9a414-7fff-4670-d799-d5165b69caab"></span></p>
                        <p dir="ltr" ><span>If you aspire to enhance your YouTube presence, acquiring likes from UseViral is a safe and effective strategy.</span></p></div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                      aria-controls="collapseThree">
                      <img src="./assets/child_logos/user-plus-bottom.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Benefits of Purchasing Likes on Your YouTube Videos</h5>
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show">
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Enhanced Visibility</span></h3>
                        <p dir="ltr" ><span>One of the key advantages of buying YouTube likes is the subsequent increase in visibility for your videos.&nbsp;</span></p>
                        <p dir="ltr" ><span>Further, YouTube's algorithm considers your videos' popularity and engagement when deciding their rank in search outcomes and recommendations.&nbsp;</span></p>
                        <p dir="ltr" ><span>By buying likes, you're hinting to the algorithm that your content holds value and resonates with the audience.</span></p>
                        <p dir="ltr" ><span>Consequently, your videos stand a higher chance of being suggested to other users, thereby gaining organic views and widening your reach.&nbsp;</span></p>
                        <p dir="ltr" ><span>The amplified visibility leads to a larger demographic stumbling upon your content, ultimately boosting the traffic to your channel.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >The Importance of Social Proof and Credibility&nbsp;</span></h3>
                        <p dir="ltr" ><span>The likes on your videos act as a form of social proof, signifying the popularity and merit of your content.&nbsp;</span></p>
                        <p dir="ltr" ><span>When viewers observe a considerable number of likes, they are more prone to trust and interact with your videos.&nbsp;</span></p>
                        <p dir="ltr" ><span>This bolstered credibility reels in more views and engagement, which encourages viewers to subscribe to your channel.&nbsp;</span></p>
                        <p dir="ltr" ><span>As your subscribers increase, your authority within your domain fortifies, marking you as a reliable and respected creator.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >The Potential for Monetization&nbsp;</span></h3>
                        <p dir="ltr" ><span>Yet another benefit of purchasing likes is the opportunity to meet YouTube's prerequisites for channel monetization.&nbsp;</span></p>
                        <p dir="ltr" ><span>When ascertaining if your channel is eligible for monetization benefits such as ads, YouTube evaluates various elements, including your rate of engagement.&nbsp;</span></p>
                        <p dir="ltr" ><span>By accumulating likes on your videos, you improve your engagement metrics, making your channel more appealing to YouTube's monetization program.&nbsp;</span></p>
                        <p dir="ltr" ><span>The higher your engagement rate, the better your chances of generating revenue from YouTube ads and sponsorships.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Outshining Your Competitors</span></h3>
                        <p dir="ltr" ><span>In a highly competitive YouTube landscape, buying likes can give you a competitive edge over other creators in your niche.&nbsp;</span></p>
                        <p dir="ltr" ><span>If your competitors have fewer likes on their videos, purchasing likes can help you surpass them and establish yourself as a leader in your field.&nbsp;</span></p>
                        <p dir="ltr" ><span>A higher number of likes not only attracts more viewers but also demonstrates the popularity and value of your content.&nbsp;</span></p>
                        <p><span id="docs-internal-guid-9a7f0962-7fff-23b4-7203-f0d0042b7507"></span></p>
                        <p dir="ltr" ><span>This, in turn, can lead to increased brand recognition, collaboration opportunities, and a loyal community of subscribers.</span></p></div>
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
                      <img src="./assets/child_logos//brain.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">How to Buy YouTube Likes Using UseViral</h5>
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span>Buying Youtube Likes is safe, easy, and convenient to enhance your YouTube channel's reputation and reach a wider audience. The process on UseViral is really straightforward; just follow these steps:</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Choosing the Number of Likes</span></h3>
                        <p dir="ltr" ><span>When buying YouTube likes on UseViral, you have the freedom to select the number of likes that best aligns with your budget and marketing objectives. Consider your current subscriber count, video engagement rate, and overall goals for your channel.&nbsp;</span></p>
                        <p dir="ltr" ><span>Whether you're looking for a slight boost or a significant surge in likes, UseViral allows you to customize your order to meet your specific requirements.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Initiating the Purchase</span></h3>
                        <p dir="ltr" ><span>After determining the number of likes you wish to buy, proceed to the next phase by clicking the "Buy Now" button. This action will direct you to the order page, where you will provide essential details to ensure a smooth transaction and prompt delivery of your YouTube likes.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Provide Information</span></h3>
                        <p dir="ltr" ><span>UseViral will request specific information on the order page to fulfill your order efficiently. You'll need to provide the URL of the video you want to buy Youtube likes.&nbsp;</span></p>
                        <p dir="ltr" ><span>This step is necessary to accurately apply the likes to the correct video on your channel. Additionally, you will need to provide a valid email address that you can easily access.</span></p>
                        <p dir="ltr" ><span>It is crucial to provide a valid email address since UseViral will use it to communicate important updates and share your order tracking number with you.&nbsp;</span></p>
                        <p dir="ltr" ><span>Keeping an eye on your email will ensure you receive all relevant information regarding your purchase.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Completing the Order</span></h3>
                        <p dir="ltr" ><span>Once you have provided the necessary information, you are almost ready to boost your YouTube channel with purchased likes.&nbsp;</span></p>
                        <p dir="ltr" ><span>The final step is to complete the order process by making your payment. UseViral offers a range of payment methods to accommodate users from various locations.&nbsp;</span></p>
                        <p><span id="docs-internal-guid-c7c724a0-7fff-131f-ba9c-da90afe00f41"></span></p>
                        <p dir="ltr" ><span>Choose the payment method that is most convenient for you, ensuring a seamless and secure transaction.</span></p></div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                      aria-controls="collapseFive">
                      <img src="./assets/child_logos/creative.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Does UseViral offer packages suitable for different budget ranges?</h5>
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span>UseViral understands the importance of catering to a wide range of budgets. We have carefully designed diverse packages accessible to anyone looking to enhance their YouTube likes.&nbsp;</span></p>
                        <p><span id="docs-internal-guid-726b569d-7fff-99ac-8347-b541670f9f2a"></span></p>
                        <p dir="ltr" ><span>Our goal is to make our services affordable and inclusive for all.</span></p></div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                      aria-controls="collapseSix">
                      
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">How does attaining likes from UseViral amplify my YouTube SEO?</h5>
                    </button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span>Securing likes from UseViral can positively affect your YouTube SEO. YouTube's algorithm shows preference towards videos with substantial engagement, and the likes you secure from our service can help augment that.&nbsp;</span></p>
                        <p><span id="docs-internal-guid-0bbf4e28-7fff-0be7-53e5-7021f6fa9888"></span></p>
                        <p dir="ltr" ><span>Enhancing engagement on your videos, including likes, increases the likelihood of your content featuring in search outcomes and recommendations, elevating your visibility.</span></p></div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false"
                      aria-controls="collapseSeven">
                      
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">What are the acceptable payment methods at UseViral?</h5>
                    </button>
                  </h2>
                  <div id="collapseSeven" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span>At UseViral, our objective is to make transactions as easy as possible for you. Hence, we offer multiple payment alternatives, including credit cards and PayPal.&nbsp;</span></p>
                        <p><span id="docs-internal-guid-335e79f0-7fff-819d-243e-e025e48d0ecb"></span></p>
                        <p dir="ltr" ><span>We're committed to delivering a smooth and straightforward experience for our customers.</span></p></div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false"
                      aria-controls="collapseEight">
                      
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">What is the primary rationale behind purchasing YouTube likes?</h5>
                    </button>
                  </h2>
                  <div id="collapseEight" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span>Procuring likes is a robust tactic to boost your content's visibility remarkably. Be it a creator or a business; buying likes can elevate your social proof, credibility, and overall digital presence.&nbsp;</span></p>
                        <p><span id="docs-internal-guid-7d91f290-7fff-e777-9373-fb87b8c29985"></span></p>
                        <p dir="ltr" ><span>It aids you in building a stronger base in the YouTube ecosystem and drawing more attention to your videos.</span></p></div>
                    </div>
                  </div>
                  <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                    <h2 className="accordion-header">
                      <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false"
                        aria-controls="collapseNine">
                        
                        <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">How does the procurement of likes impact the YouTube algorithm?</h5>
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse show" >
                      <div className="accordion-body border border-[#eee]">
                        <div class="panel show"><p dir="ltr" ><span>The YouTube algorithm puts substantial weight on videos with significant engagement.</span></p>
                          <p dir="ltr" ><span>When you purchase likes, it enhances the perceived popularity of your content. This, in turn, signals to YouTube that your videos are valuable and deserving of more exposure.&nbsp;</span></p>
                          <p><span id="docs-internal-guid-7f69f703-7fff-531d-a41f-93b13daa242b"></span></p>
                          <p dir="ltr" ><span>As a result, the algorithm is more likely to recommend your content to a broader audience.</span></p></div>
                      </div>
                    </div>
                    <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                      <h2 className="accordion-header">
                        <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                          data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false"
                          aria-controls="collapseTen">
                          
                          <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Can purchasing likes assist in channel growth?</h5>
                        </button>
                      </h2>
                      <div id="collapseTen" className="accordion-collapse collapse show" >
                        <div className="accordion-body border border-[#eee]">
                          <div class="panel show"><p dir="ltr" ><span>Buying YouTube likes can be a powerful strategy to accelerate your channel's growth. In an oversaturated market, it can be challenging to stand out.&nbsp;</span></p>
                            <p><span id="docs-internal-guid-25400880-7fff-afc1-9609-6ef060d15fc6"></span></p>
                            <p dir="ltr" ><span>Nonetheless, when you buy likes, it assists your channel in drawing in more organic viewers and subscribers. By augmenting your visibility, you cultivate opportunities for your channel to thrive.</span></p></div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false"
                            aria-controls="collapseEleven">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Why should you opt for UseViral to buy YouTube likes?</h5>
                          </button>
                        </h2>
                        <div id="collapseEleven" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p dir="ltr" ><span>UseViral distinguishes itself for various reasons. First and foremost, we pride ourselves on our broad network of authentic social media users.&nbsp;</span></p>
                              <p dir="ltr" ><span>When you buy likes from us, you can be confident that they originate from genuine accounts, thereby preserving the authenticity of your channel.&nbsp;</span></p>
                              <p dir="ltr" ><span>Plus, we strictly adhere to YouTube's terms of service, safeguarding the safety and integrity of your account.&nbsp;</span></p>
                              <p><span id="docs-internal-guid-13814eba-7fff-143e-d54e-4594a7d1b1d7"></span></p>
                              <p dir="ltr" ><span>Our dedication to offering high-quality likes and our commitment to customer satisfaction make us unique compared to other service providers.</span></p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false"
                            aria-controls="collapseTwelve">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Is it safe to buy YouTube likes from UseViral?</h5>
                          </button>
                        </h2>
                        <div id="collapseTwelve" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p dir="ltr" ><span>We always place the security of your account at the forefront. We work within the boundaries of YouTube's guidelines and use real accounts to generate likes.&nbsp;</span></p>
                              <p><span id="docs-internal-guid-9c6a2fb4-7fff-87a2-1a67-783b22b89b3e"></span></p>
                              <p dir="ltr" ><span>This approach guarantees that buying likes from us is secure and will not risk the integrity of your channel.</span></p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false"
                            aria-controls="collapseThirteen">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">How swiftly can you anticipate delivery when buying YouTube likes from UseViral?</h5>
                          </button>
                        </h2>
                        <div id="collapseThirteen" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p dir="ltr" ><span>We pride ourselves on our fast and efficient delivery mechanism.</span></p>
                              <p><span id="docs-internal-guid-2e1bb3d7-7fff-d985-f82b-9b669deae5ab"></span></p>
                              <p dir="ltr" ><span>While the delivery speed may vary depending on the package you choose, you can generally expect an increase in your likes count within hours of your purchase. We strive to provide quick results to help you maximize our services.</span></p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false"
                            aria-controls="collapseFourteen">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Are the likes sourced from UseViral permanent?</h5>
                          </button>
                        </h2>
                        <div id="collapseFourteen" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p><span id="docs-internal-guid-937a46bb-7fff-519e-e5b7-4e561ad46d3d"></span></p>
                              <p dir="ltr" ><span>Yes, the likes you obtain from UseViral are permanent. We source them from authentic accounts, meaning that unless the user decides to remove their like, which is highly unlikely, the likes will remain on your videos. This ensures a lasting impact on your content's engagement.</span></p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false"
                            aria-controls="collapseFifteen">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Can buying YouTube likes lead to an increase in organic engagement?</h5>
                          </button>
                        </h2>
                        <div id="collapseFifteen" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p dir="ltr" ><span>Purchasing likes can have a ripple effect on your channel's organic engagement. When your videos have a high number of likes, it piques the interest of viewers and encourages them to engage with your content.&nbsp;</span></p>
                              <p><span id="docs-internal-guid-99072852-7fff-ab32-bb48-c85676579454"></span></p>
                              <p dir="ltr" ><span>The popularity conveyed by the likes can draw more viewers to your videos, increasing the likelihood of organic engagement.</span></p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false"
                            aria-controls="collapseSixteen">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Can purchasing likes boost my online reputation?</h5>
                          </button>
                        </h2>
                        <div id="collapseSixteen" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p dir="ltr" ><span>Indeed, high numbers of likes are often associated with high-quality content and respected creators.&nbsp;</span></p>
                              <p dir="ltr" ><span>When you purchase likes, you showcase your content as valuable and worthwhile, which enhances your online reputation.&nbsp;</span></p>
                              <p><span id="docs-internal-guid-bcdda069-7fff-0467-1ac2-12320d1086a8"></span></p>
                              <p dir="ltr" ><span>Establishing a robust online presence can attract more viewers, followers, and opportunities within your niche.</span></p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false"
                            aria-controls="collapseSeventeen">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">What sets UseViral apart from other similar service providers?</h5>
                          </button>
                        </h2>
                        <div id="collapseSeventeen" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p dir="ltr" ><span>Because of our consistent focus on delivering high-quality, authentic likes, UseViral stands out in the market.&nbsp;</span></p>
                              <p dir="ltr" ><span>To preserve your channel's integrity, we prioritize using authentic accounts and genuine engagement. Furthermore, our emphasis on exceptional customer service distinguishes us.&nbsp;</span></p>
                              <p><span id="docs-internal-guid-597997d4-7fff-63cc-f51c-3a1df5003dec"></span></p>
                              <p dir="ltr" ><span>We endeavor to provide our clients with a professional, supportive experience that meets their needs.</span></p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false"
                            aria-controls="collapseEighteen">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Why should you contemplate buying YouTube likes?</h5>
                          </button>
                        </h2>
                        <div id="collapseEighteen" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p dir="ltr" ><span>Investing in YouTube likes can significantly impact your video's credibility and visibility. It attracts organic engagement and encourages others to view your content.&nbsp;</span></p>
                              <p><span id="docs-internal-guid-5c1502f2-7fff-c427-379d-b1ff58f309f3"></span></p>
                              <p dir="ltr" ><span>As a result, the likelihood of your videos appearing in search results and recommendations increases. Buying likes can give your content the initial boost it needs to gain traction and reach a wider audience.</span></p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseNineteen" aria-expanded="false"
                            aria-controls="collapseNineteen">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Is buying YouTube likes lawful?</h5>
                          </button>
                        </h2>
                        <div id="collapseNineteen" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p dir="ltr" ><span>Of course, purchasing YouTube likes is entirely legal. There are no explicit rules or policies against buying likes for your videos.&nbsp;</span></p>
                              <p dir="ltr" ><span>However, choosing a trustworthy service provider like UseViral is crucial to ensure that you receive high-quality and authentic likes.&nbsp;</span></p>
                              <p><span id="docs-internal-guid-89f21029-7fff-2059-c310-6591f4e0732b"></span></p>
                              <p dir="ltr" ><span>We operate within the boundaries set by YouTube, providing an honest and compliant approach.</span></p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseTweenty" aria-expanded="false"
                            aria-controls="collapseTweenty">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Are the YouTube likes I purchase from actual users or bots?</h5>
                          </button>
                        </h2>
                        <div id="collapseTweenty" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p dir="ltr" ><span>We guarantee that YouTube likes you buy are from real, active users. Our extensive network consists of genuine users interacting with your videos, providing authentic likes.&nbsp;</span></p>
                              <p><span id="docs-internal-guid-73bd40a6-7fff-852d-e2c5-655fa4be779c"></span></p>
                              <p dir="ltr" ><span>We emphasize quality and genuineness to safeguard your channel's integrity. </span></p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseTweentyOne" aria-expanded="false"
                            aria-controls="collapseTweentyOne">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Does UseViral offer guarantees on the likes I procure?</h5>
                          </button>
                        </h2>
                        <div id="collapseTweentyOne" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p dir="ltr" ><span>Indeed, we provide a satisfaction guarantee on the likes you acquire from UseViral.&nbsp;</span></p>
                              <p dir="ltr" ><span>If you run into any challenges or concerns, our committed customer support team is on hand to aid you and ensure your contentment.&nbsp;</span></p>
                              <p><span id="docs-internal-guid-cd33b549-7fff-eee0-1300-1cc24e6f654b"></span></p>
                              <p dir="ltr" ><span>We aim to deliver a favorable experience for our clients and resolve any queries or issues without delay.</span></p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseTweentyTwo" aria-expanded="false"
                            aria-controls="collapseTweentyTwo">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Does UseViral present any discounts or deals for substantial purchases?</h5>
                          </button>
                        </h2>
                        <div id="collapseTweentyTwo" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p dir="ltr" ><span>Yes, at UseViral, we do offer markdowns and special offers for large-scale purchases.&nbsp;</span></p>
                              <p dir="ltr" ><span>We recognize that some clients might need a substantial quantity of likes, and for such requirements, we have exclusive pricing options for such requirements.&nbsp;</span></p>
                              <p><span id="docs-internal-guid-bcef58ac-7fff-6b5e-5a15-d57f42cb7841"></span></p>
                              <p dir="ltr" ><span>For more details about our pricing structure and current promotions, feel free to reach out to our customer support team.</span></p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseTweentyThree" aria-expanded="false"
                            aria-controls="collapseTweentyThree">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Is it possible to buy YouTube likes if my channel is fairly new?</h5>
                          </button>
                        </h2>
                        <div id="collapseTweentyThree" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p dir="ltr" ><span>Absolutely! Securing likes can be exceptionally beneficial for novice channels. It aids in building trust and attracting natural engagement from viewers.&nbsp;</span></p>
                              <p dir="ltr" ><span>By displaying a significant number of likes, you foster a positive image and enhance the probability of grabbing the attention of prospective subscribers.&nbsp;</span></p>
                              <p><span id="docs-internal-guid-1ee4105f-7fff-d5b0-8aeb-61d6e2e7c59c"></span></p>
                              <p dir="ltr" ><span>It's a practical strategy to jumpstart your channel's expansion and establish a presence in the YouTube ecosystem.</span></p></div>
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
      </div>
    </div>
  )
}

export default YTBuyLikes