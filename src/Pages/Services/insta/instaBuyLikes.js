import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiCheckMark } from 'react-icons/gi'
import instaIcon from '../../../images/socialIcons/instagram.webp'
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
const InstaBuyLikes = () => {

  const [priceSelected, setPriceSelected] = useState(0)
  console.log("priceSelected", priceSelected);
  return (
    <div id='insta' className='servicePage'>
      <div className='mb-16'>
        <div className="text-center pt-24">
          <h1 className="px-4 py-2  bg-gray-200 inline rounded-full text-sm font-bold mb-6">BUY INSTAGRAM LIKES</h1>
          <h2 className="text-2xl tracking-tight leading-10 font-semibold  sm:text-4xl md:text-3xl mt-4 pt-2 text-[#4c4c4c] px-3"> Buy Instagram likes with <br className="xl:hidden" />
            <span className="text-brand">Fast Delivery</span>
          </h2>
          <p className="mt-4 mx-auto text-sm text-gray-800 sm:text-md md:mt-5 md:text-[1.4rem] px-3  "> UseViral offers only the highest quality services. Buy safely and securely below:</p>
        </div>
        <div className='flex justify-center my-10 px-3'>
          <div className='flex-col flex items-center sm:px-3'>
            <div className='pricesSelect'>
              <select className="border !border-[#ed1c25] outline-none p-2 rounded-md youtube_channel" name="selectedPackageId" id="packageSelectBox" onChange={(e) => setPriceSelected(e.target.value)}>
                <option value="2.99€">1000 Likes - 2.99&euro;</option>
                <option value="6.99€">5000 Likes - 6.99&euro;</option>
                <option value="11.99€">10000 Likes -  11.99&euro;</option>
                <option value="19.99€">25000 Likes -  19.99&euro;</option>
                <option value="34.99€">50000 Likes -  34.99&euro;</option>
                <option value="64.99€">100000 Likes -  64.99&euro;</option>
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

        <h2 className='text-center h2 mb-10'>Our Other <span className="text-brand">Instagram</span> Services: </h2>
        <div className='container max-w-[1300px] px-14'>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
            <div className="btn-group ">
              <Link to={"/buy-insta-followers"} className="flex btn bg-brand text-white    after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={instaIcon} className='mr-3' /> Buy Instagram Followers
              </Link>

            </div>
            <div className="btn-group ">
              <Link to={"/buy-insta-likes"} className="flex btn bg-blue text-white    after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={instaIcon} className='mr-3' /> Buy Instagram Likes
              </Link>

            </div>
            <div className="btn-group ">
              <Link to="/buy-insta-reels-views" className="flex btn bg-brand text-white    after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={instaIcon} className='mr-3' /> Buy Instagram Reels Views
              </Link>
            </div>
            <div className="btn-group ">
              <Link to="/buy-insta-story-views" className="flex btn bg-blue text-white    after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={instaIcon} className='mr-3' /> Buy Instagram Story Views
              </Link>

            </div>
            <div className="btn-group ">
              <Link to="/buy-insta-comments" className="flex btn bg-brand text-white    after:ms-3  py-3 font-bold text-left ps-5 " >
                Buy Instagram Comments
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
                      
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why Are Instagram Likes Important?</h5>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show">
                        <p>In the captivating realm of Instagram, where visual stories come to life, the significance of Likes cannot be underestimated.&nbsp;</p>
                        <p>As a platform boasting an astonishing 1.3 billion active users, Instagram has evolved into a global stage where individuals, businesses, and creators showcase their talent, products, and ideas.&nbsp;</p>
                        <p>Within this thriving ecosystem, Likes are pivotal in shaping reputations, fueling growth, and paving the way to success.</p>
                        <p>Instagram Likes serve as a digital currency, a form of validation that resonates deeply with creators and audiences alike.&nbsp;</p>
                        <p>When someone taps that iconic heart-shaped button beneath your post, it signifies more than just appreciation; it represents a genuine connection, a recognition of the effort and artistry invested in your content.&nbsp;</p>
                        <p>In a world flooded with endless scrolling possibilities, Likes act as beacons, drawing attention to the extraordinary amidst the ordinary.</p>
                        <p>The power of Likes extends far beyond a simple number, and they act as social proof, a testament to your credibility and popularity within the Instagram community.&nbsp;</p>
                        <p>Consider this: when a user stumbles upon your profile, their eyes are naturally drawn to the number of Likes adorning your posts.&nbsp;</p>
                        <p>This instant visual cue instantly conveys whether you are a worthy creator, a source of inspiration, or a brand worth exploring.&nbsp;</p>
                        <p>The more Likes you accumulate, the higher the likelihood of captivating new followers and expanding your reach.</p>
                        <p>Why settle for being a mere spectator when you can take center stage? Each like your Instagram posts receives carries an influential message, serving as a seal of approval from your audience.&nbsp;</p>
                        <p>It signifies that you have something valuable to offer, captivating others and enticing them to explore your content further.&nbsp;</p>
                        <p>By increasing your Likes, you amplify your reach and create a lasting impression on potential followers.</p>
                        <p>At UseViral, we offer a safe and reliable solution to enhance your Instagram journey. Our comprehensive guide on buying Instagram Likes will equip you with the knowledge and tools to make informed decisions.&nbsp;</p>
                        <p>We prioritize your safety and adhere to ethical practices, ensuring your account remains secure.&nbsp;</p>
                        <p>With our expert guidance, you can confidently take a significant leap toward establishing yourself as a prominent influencer or business entity.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                      aria-controls="collapseTwo">
                      <img src="./assets/child_logos/stctr.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Is it Safe to Buy Instagram Likes?</h5>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse show show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show">
                        <p>It's essential to clarify that buying Instagram Likes is not illegal. However, the safety of engaging in this practice heavily depends on the company you choose to collaborate with.&nbsp;</p>
                        <p>Many fly-by-night entities prioritize their interests over the success of their clients, leaving them high and dry once the transaction is complete.</p>
                        <p>At its core, safety lies in partnering with a reputable company that values authenticity and legitimate growth.&nbsp;</p>
                        <p>It's crucial to align yourself with an organization that demonstrates a genuine commitment to helping you achieve your Instagram goals.&nbsp;</p>
                        <p>By choosing wisely, you can mitigate the risks of buying Instagram Likes and ensure a safe and secure experience.</p>
                        <p>The key to safety lies in distinguishing between companies driven solely by profit and those caused by a genuine desire to support your aspirations.&nbsp;</p>
                        <p>Beware of organizations prioritizing selling engagement at the highest possible rate while neglecting your long-term success.&nbsp;</p>
                        <p>Instead, seek out companies that prioritize your well-being, understand your unique objectives, and work tirelessly to foster genuine engagement on your behalf.</p>
                        <p>At UseViral, your safety and success are at the forefront of our mission. We take pride in our stellar reputation and unwavering dedication to authentic growth strategies.&nbsp;</p>
                        <p>With us, you can rest assured that your Instagram journey is in safe hands.</p></div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                      aria-controls="collapseThree">
                      <img src="./assets/child_logos/user-plus-bottom.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Key Benefits of Buying Instagram Likes</h5>
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show">
                        <p>Let's explore the key benefits of this approach and how it can help you achieve your goals.</p>
                        <h3>Enhanced Social Proof and Credibility</h3>
                        <p>Instagram Likes serve as social proof, indicating that your content is valuable and worth consuming.&nbsp;</p>
                        <p>Users encountering a post with many Likes creates a positive impression and fosters trust.&nbsp;</p>
                        <p>This, in turn, enhances your credibility and makes others more likely to engage with your content.</p>
                        <h3>Increased Engagement and Interactions</h3>
                        <p>The more Likes your posts receive, the higher the chances of attracting organic engagement and interactions.&nbsp;</p>
                        <p>Buying Likes can jumpstart the engagement on your posts and encourage others to join the conversation.&nbsp;</p>
                        <p>As a result, your content becomes more visible, leading to a snowball effect of increased engagement and interaction with your audience.</p>
                        <h3>Amplified Visibility and Reach</h3>
                        <p>Likes play a crucial role in expanding the visibility of your Instagram content. When your posts accumulate more Likes, they are more likely to appear on the Explore page, hashtags, and users' feeds.&nbsp;</p>
                        <p>This increased visibility exposes your content to a broader audience, helping you gain new followers and expand your reach.</p>
                        <h3>Competitive Advantage</h3>
                        <p>In a competitive Instagram landscape, standing out from the crowd is essential. Buying Likes can give you an edge over your competitors.&nbsp;</p>
                        <p>When your posts have more Likes compared to similar content from competitors, it signals to users that your brand is more popular and worth paying attention to.&nbsp;</p>
                        <p>The competitive advantage can increase followers, customers, and market share.</p>
                        <h3>Efficient Growth Kickstart</h3>
                        <p>Starting from scratch on Instagram can be daunting, and buying Likes can help jumpstart your growth on the platform.&nbsp;</p>
                        <p>Investing in purchased Likes creates an initial foundation of engagement that encourages others to take notice.&nbsp;</p>
                        <p>As your profile gains momentum, the likelihood of attracting organic Likes and followers increases, setting the stage for sustainable growth.</p>
                        <h3>Targeted Audience Reach</h3>
                        <p>Many service providers offer targeted Likes, allowing you to customize your audience based on location, interests, or demographics.&nbsp;</p>
                        <p>This targeting capability enables you to connect with the individuals who are most likely to be interested in your content or brand, increasing the chances of meaningful engagement and conversions.</p>
                        <h3>Time and Effort Savings</h3>
                        <p>Building a substantial Instagram following organically takes time and effort.&nbsp;</p>
                        <p>Buying Likes can save you valuable time and streamline the process of gaining traction.&nbsp;</p>
                        <p>Instead of waiting for Likes to accumulate naturally, you can leverage purchased Likes to create an immediate impact.&nbsp;</p>
                        <p>This time-saving approach allows you to focus on creating high-quality content and engaging with your audience while enjoying increased Likes benefits.</p></div>
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
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm "><h3 class="accordion text-source-sans-pro active">How to Buy Instagram Likes With UseViral</h3></h5>
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p>Discover the seamless path to heightened social media recognition with these simple steps:</p><h3>1.&nbsp; &nbsp; Choose Your Desired Like Type</h3><p>At UseViral, we understand that your needs are unique. That's why we offer a diverse array of options for Instagram Likes.</p><p>Whether you're seeking broad worldwide Likes or targeted Likes based on specific locations of your preference, we have the perfect solution to match your goals and aspirations.</p><h3>2.&nbsp; &nbsp; Select an Ideal Package</h3><p>Explore our extensive range of packages, each designed to cater to varying levels of engagement. Choose the package that suits your desired number of Likes, with clear pricing information provided for your convenience.</p><p>Consider your budget and the magnitude of growth you aim to achieve as you make your selection.</p><h3>3.&nbsp; &nbsp; Provide Essential Information</h3><p>We'll require some vital details from you to ensure a seamless delivery of Likes. Provide the URL of your Instagram post, ensuring your profile is set to public for optimal results.</p><p>Additionally, we'll ask for your email address, enabling us to keep you informed about the progress of your order.&nbsp;</p><p>Rest assured, we prioritize your privacy and will never ask for sensitive information like passwords.</p><h3>4.&nbsp; &nbsp; Secure Checkout Process</h3><p>With your essential details in place, proceed to our secure checkout process.&nbsp;</p><p>UseViral prioritizes the security of your online transactions, employing robust measures to protect your payment information.</p><p>Choose your preferred payment method, be it credit cards or PayPal, and complete the payment process with confidence.</p><h3>5.&nbsp; &nbsp; Swift Order Delivery</h3><p>Once your payment is processed, UseViral will promptly deliver the purchased Likes to your Instagram account.</p><p>Make the most of our tracking feature to monitor the progress of your order in real-time. Witness the number of Likes increasing on your Instagram posts, validating the effectiveness of UseViral's services.</p><p>Please note that the delivery time may vary depending on the specifics of your chosen package and the number of Likes purchased.</p><p>Rest assured that UseViral is committed to delivering timely and reliable service that surpasses your expectations.&nbsp;</p></div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                      aria-controls="collapseFive">
                      <img src="./assets/child_logos/creative.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why should I buy Instagram Likes?</h5>
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p>&nbsp;Buying Instagram can help boost your social media presence and credibility.&nbsp;</p><p>It can make your posts appear more popular, attract organic engagement, and increase your visibility among your target audience.</p></div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                      aria-controls="collapseSix">
                      
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Can buying Instagram Likes help increase my followers?</h5>
                    </button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p>Yes, buying Instagram Likes can indirectly help increase your followers.&nbsp;</p><p>When your posts receive more Likes, they become more appealing to other users, leading to higher chances of them following your account.</p></div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false"
                      aria-controls="collapseSeven">
                      
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Are the Likes from real Instagram users?</h5>
                    </button>
                  </h2>
                  <div id="collapseSeven" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p>Yes, the Likes we provide are sourced from a vast network of real and active Instagram users. These users engage with posts through our platform, ensuring genuine and high-quality engagement for your content.</p></div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false"
                      aria-controls="collapseEight">
                      
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">How long does it take to deliver bought Instagram Likes?</h5>
                    </button>
                  </h2>
                  <div id="collapseEight" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p>Delivery time for your purchased Instagram Likes varies depending on the size of your order, and we strive to deliver them as quickly as possible.&nbsp;</p><p>You can expect the Likes to appear within a few minutes to a few hours for smaller orders. Larger orders may take slightly longer, but we work diligently to ensure timely delivery.</p></div>
                    </div>
                  </div>
                  <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                    <h2 className="accordion-header">
                      <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false"
                        aria-controls="collapseNine">
                        
                        <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Can I contact customer support if I have any questions or issues?</h5>
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse show" >
                      <div className="accordion-body border border-[#eee]">
                        <div class="panel show"><p>Absolutely! Our dedicated customer support team can always answer any questions or issues.&nbsp;</p><p>Whether you need help navigating our website or have specific inquiries, you can contact us through our website or email.&nbsp;</p><p>We are committed to providing excellent customer service and will be more than happy to help.</p></div>
                      </div>
                    </div>
                    <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                      <h2 className="accordion-header">
                        <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                          data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false"
                          aria-controls="collapseTen">
                          
                          <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Are there any discounts or special offers available for bulk purchases?</h5>
                        </button>
                      </h2>
                      <div id="collapseTen" className="accordion-collapse collapse show" >
                        <div className="accordion-body border border-[#eee]">
                          <div class="panel show"><p>Yes, we offer discounts and special offers for bulk purchases of Instagram Likes. The same discounts may vary depending on the quantity of Likes you wish to purchase.&nbsp;</p><p>To inquire about bulk pricing options, feel free to contact our customer support team. We will gladly provide the information you need to maximize your bulk order.</p></div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false"
                            aria-controls="collapseEleven">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Can buying Instagram Likes get my account banned?</h5>
                          </button>
                        </h2>
                        <div id="collapseEleven" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p>Buying Instagram Likes from UseViral will not result in your account being banned. We prioritize the safety and security of our client's accounts and strictly follow Instagram's guidelines.&nbsp;</p><p>Our methods are safe and have been extensively tested to ensure compliance. You can confidently use our service without worrying about any negative consequences for your account.</p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false"
                            aria-controls="collapseTwelve">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Will buying Instagram Likes increase my engagement rate?</h5>
                          </button>
                        </h2>
                        <div id="collapseTwelve" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p>Yes, buying Instagram Likes can have a significant impact on your engagement rate.&nbsp;</p><p>When your posts receive more Likes, it attracts more attention from other users, thereby increasing the likelihood of further engagement, such as comments and follows.&nbsp;</p><p>It creates a positive impression of your content and can help enhance your overall Instagram presence.</p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false"
                            aria-controls="collapseThirteen">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Can I target specific demographics or locations for the Instagram Likes?</h5>
                          </button>
                        </h2>
                        <div id="collapseThirteen" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p>Currently, we do not offer targeting options for Instagram Likes. The Likes you receive will come from our network of users, who are generally diverse and spread across various demographics and locations.&nbsp;</p><p>While we cannot provide specific targeting, our Likes can help increase your posts' engagement and visibility.</p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false"
                            aria-controls="collapseFourteen">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Can I choose the specific posts on which the Likes will be delivered?</h5>
                          </button>
                        </h2>
                        <div id="collapseFourteen" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p>Yes, you have the freedom to select the specific posts on which you want the purchased Likes to be delivered.&nbsp;</p><p>During the ordering process, simply provide us with the URLs of the posts you wish to receive Likes on, and we will distribute the Likes accordingly.&nbsp;</p><p>This allows you to prioritize certain posts and tailor the engagement to your preferences.</p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false"
                            aria-controls="collapseFifteen">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Are Instagram Likes high-quality and genuine?</h5>
                          </button>
                        </h2>
                        <div id="collapseFifteen" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p>The Likes we provide are high quality and come from real Instagram users. We understand the importance of authenticity and genuine engagement, and we prioritize these factors to ensure the best possible results for our clients.&nbsp;</p><p>With our service, you can expect top-notch Likes that contribute to the credibility and success of your Instagram posts.</p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false"
                            aria-controls="collapseSixteen">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Is it possible to split the purchased Likes on numerous posts?</h5>
                          </button>
                        </h2>
                        <div id="collapseSixteen" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p>Yes, you can split the purchased Likes on more posts. During ordering, you can specify the number of Likes you want to allocate to each post, and we will distribute them accordingly.&nbsp;</p><p>This flexibility allows you to evenly distribute engagement or focus on specific posts that require a boost.</p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false"
                            aria-controls="collapseSeventeen">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Can I buy Instagram Likes for a private account?</h5>
                          </button>
                        </h2>
                        <div id="collapseSeventeen" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p>Currently, we do not support purchasing Likes for private Instagram accounts.&nbsp;</p><p>To receive the Likes, your account must be set to public, and this ensures that the engagement is visible to all users and helps maximize the impact of the Likes you receive.</p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false"
                            aria-controls="collapseEighteen">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Do you require my Instagram account password?</h5>
                          </button>
                        </h2>
                        <div id="collapseEighteen" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p>No, we do not require your Instagram account password to deliver the purchased Likes. We prioritize your account's security and privacy.&nbsp;</p><p>All we need is the URL(s) of the post(s) on which you want the Likes to be delivered. You can trust that your personal information is safe and will not be compromised.</p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseNineteen" aria-expanded="false"
                            aria-controls="collapseNineteen">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Can I get a refund if I'm unsatisfied with the purchased Instagram Likes?</h5>
                          </button>
                        </h2>
                        <div id="collapseNineteen" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p>Yes, we offer a satisfaction guarantee for our clients. If you are not satisfied with the quality or delivery of the purchased Likes, we will take the necessary steps to ensure your satisfaction.&nbsp;</p><p>We will either refill the Likes or provide a refund, depending on the situation. Your happiness and confidence in our service are essential to us.</p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseTweenty" aria-expanded="false"
                            aria-controls="collapseTweenty">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">How do I place an order for Instagram Likes on UseViral?</h5>
                          </button>
                        </h2>
                        <div id="collapseTweenty" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p>Placing an order for Instagram Likes on UseViral is a simple process. To get started, visit our website and navigate the Instagram Likes section.&nbsp;</p><p>There, you will find a variety of packages to choose from. Select the desired package that suits your needs, provide the necessary details, such as the URLs of the posts you want the Likes on, and proceed to checkout.&nbsp;</p><p>We have designed the ordering process to be user-friendly and hassle-free.</p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseTweentyOne" aria-expanded="false"
                            aria-controls="collapseTweentyOne">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Does purchasing Instagram likes come with any risks?</h5>
                          </button>
                        </h2>
                        <div id="collapseTweentyOne" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p>When you buy Instagram Likes from UseViral, the risks are minimal.&nbsp;</p><p>We prioritize the safety and security of our clients' accounts and utilize safe and proven methods to deliver Likes.&nbsp;</p><p>However, it's important to note that there are low-quality service providers in the market who engage in unethical practices.&nbsp;</p><p>We recommend avoiding such providers and choosing a reliable service like ours to ensure your safety and satisfaction.</p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseTweentyTwo" aria-expanded="false"
                            aria-controls="collapseTweentyTwo">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">What happens if the purchased Instagram Likes disappear?</h5>
                          </button>
                        </h2>
                        <div id="collapseTweentyTwo" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p>At UseViral, we offer a 30-day refill guarantee for any Likes that may drop from your posts.&nbsp;</p><p>We understand that maintaining engagement is crucial and stand by our service.&nbsp;</p><p>If you experience a decrease in Likes within 30 days of the purchase, simply contact our customer support, and we will refill them for you. Your satisfaction is our priority.</p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseTweentyThree" aria-expanded="false"
                            aria-controls="collapseTweentyThree">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">What other Instagram services does UseViral offer?</h5>
                          </button>
                        </h2>
                        <div id="collapseTweentyThree" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p>In addition to buying Instagram Likes, UseViral provides a wide range of other Instagram services to help boost your presence on the platform.&nbsp;</p><p>Our services include buying Instagram followers, Instagram views, Instagram engagements, targeted Instagram followers, and Instagram comments.&nbsp;</p><p>Whether you're looking to enhance your follower count, increase video views, or encourage more interactions, we have you covered with our comprehensive range of Instagram services.</p></div>
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

export default InstaBuyLikes