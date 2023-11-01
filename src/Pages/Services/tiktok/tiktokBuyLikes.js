import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiCheckMark } from 'react-icons/gi'
import tiktokIcon from '../../../images/socialIcons/tiktok.webp'
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
const TiktokBuyLikes = () => {

  const [priceSelected, setPriceSelected] = useState("0.99€")
  console.log("priceSelected", priceSelected);
  return (
    <div id='insta' className='servicePage'>
      <div className='mb-16'>
        <div className="text-center pt-24">
          <h1 className="px-4 py-2  bg-gray-200 inline rounded-full text-sm font-bold mb-6">BUY TIKTOK LIKES</h1>
          <h2 className="text-2xl tracking-tight leading-10 font-semibold  sm:text-4xl md:text-3xl mt-4 pt-2 text-[#4c4c4c] px-3"> Buy Tiktok Likes with <br className="xl:hidden" />
            <span className="text-brand">Fast Delivery</span>
          </h2>
          <p className="mt-4 mx-auto text-sm text-gray-800 sm:text-md md:mt-5 md:text-[1.4rem] px-3  "> FameDaddy offers only the highest quality services. Buy safely and securely below:</p>
        </div>
        <div className='flex justify-center my-10 px-3'>
          <div className='flex-col flex items-center sm:px-3'>
            <div className='pricesSelect'>
              <select value={priceSelected} className="border !border-[#ed1c25] outline-none p-2 rounded-md youtube_channel" name="selectedPackageId" id="packageSelectBox" onChange={(e) => setPriceSelected(e.target.value)}>
                <option value="0.99€">100 Likes - 0.99€</option>
                <option value="1.99€">250 Likes - 1.99€</option>
                <option value="4.99€">500 Likes - 4.99€</option>
                <option value="8.99€">1000 Likes - 8.99€</option>
                <option value="17.99€">2500 Likes - 17.99€</option>
                <option value="38.99€">5000 Likes - 38.99€</option>
                <option value="69.99€">10000 Likes - 69.99€</option>
                <option value="109.99€">25000 Likes - 109.99€</option>
                <option value="149.99€">50000 Likes - 149.99€</option>
                <option value="199.99€">100000 Likes - 199.99€</option>
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

        <h2 className='text-center h2 mb-10'>Our Other <span className="text-brand">Tiktok</span> Services: </h2>
        <div className='container max-w-[1300px] px-14'>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
            <div className="btn-group ">
              <Link to="/buy-tiktok-followers" className="btn flex bg-brand text-white    after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={tiktokIcon} className='mr-3' /> Buy Tiktok Followers
              </Link>

            </div>
            <div className="btn-group ">
              <Link to="/buy-tiktok-live-views" className="btn flex bg-blue text-white    after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={tiktokIcon} className='mr-3' /> Buy Tiktok Live Views
              </Link>

            </div>
            <div className="btn-group ">
              <Link to="/buy-tiktok-likes" className="btn flex bg-brand text-white    after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={tiktokIcon} className='mr-3' /> Buy Tiktok Likes
              </Link>

            </div>
            <div className="btn-group ">
              <Link to="/buy-tiktok-comments" className="btn flex bg-blue text-white    after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={tiktokIcon} className='mr-3' /> Buy Tiktok Comments
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

                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Importance of TikTok Likes?</h5>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >Social media platforms have become essential to modern communication because they allow users to express their ideas, share information, and participate in public debate on a global scale.&nbsp;</span></p>
                        <p dir="ltr" ><span >TikTok stands out among many social media sites because it connects millions worldwide.&nbsp;</span></p>



                        <p dir="ltr" ><span >It's a very competitive site where you'll need a lot of popularity to get noticed. But we've seen that it's more important than ever to have a group of people who love your videos.</span></p>
                        <p dir="ltr" ><span >Because it's hard to reach the peak of success by yourself, many influential people have used this. Even though it has problems, they all agree that the pros are worth the hassle and hard work.</span></p>
                        <p dir="ltr" ><span >Having a lot of likes on your posts is crucial if you want to be known and seen, show that you know how to socialize, be a star, or make money.&nbsp;</span></p>

                        <p dir="ltr" ><span >Buying TikTok likes is a good idea, no matter how popular or how many people follow you.</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                    aria-controls="collapseTwo">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Advantages Of Buying TikTok Likes</h5>
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse show show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >The benefits of purchasing TikTok followers are numerous, from expanding your platform to getting seen by larger audiences, boosting your influence, and expanding your prospects to make money from your work. If you're considering buying TikTok followers, examine all your options before making a decision.</span></p>

                      <p dir="ltr" ><span >Monetization Prospects</span></p>
                      <p dir="ltr" ><span >This is everyone's goal when they become an influencer, and it's most likely yours as well. This is where buying TikTok followers comes in to make your life easier.</span></p>
                      <p dir="ltr" ><span >Increasing the number of followers on your TikTok channel may attract the attention of many companies looking to sell their products. They provide enormous monetary incentives you can benefit from with just one easy video shout-out.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Rise in Popularity</span></h3>
                      <p dir="ltr" ><span >More profile followers indicate that your videos are worth watching and sharing. This will undoubtedly contribute to the organic expansion of your profile's recognition and popularity.</span></p>

                      <h3 dir="ltr" className="h3 font-bold"  ><span >Boosters of Motivation</span></h3>
                      <p dir="ltr" ><span >Everyone wants their content to get the attention it deserves. Every influencer aspires to have a more extensive follower base since it provides the impression that he is doing something right and producing quality material for his audience.&nbsp;</span></p>
                      <p dir="ltr" ><span >Some people see success as an added motivator to go the extra mile and be their best version. That is why gaining followers through FameDaddy can give you the confidence to continue providing your audience with the required content.</span></p>
                      <p dir="ltr" ><span >Buying TikTok followers and experiencing success can inspire influencers to experiment with their material and branch out in new ways because who knows when it will go viral!</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Access to Data</span></h3>
                      <p dir="ltr" ><span >Data power the modern world we live in. It is one of the tools businesses employ to maximize earnings and identify areas for improvement. It introduces an entirely new way of looking at things, in which you may learn about the quality of your material by looking at data and graphs.&nbsp;</span></p>

                      <p dir="ltr" ><span >More followers = more data, and by purchasing TikTok followers, you can obtain a lot of data depending on the size of the package you choose. Not only can you collect information on the quality of your content, but you can also get statistics about the demographic features of your most prominent followers and modify your content to make it unique to them.</span></p></div>
                  </div>
                </div>
              </div>
              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                    aria-controls="collapseThree">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Is it safe to buy TikTok likes?</h5>
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show">

                      <h3 dir="ltr" className="h3 font-bold"  ><span >Time-Saving</span></h3>
                      <p dir="ltr" ><span >Building a significant following traditionally can take a long time. You can accelerate your success by purchasing TikTok likes.&nbsp;</span></p>
                      <p dir="ltr" ><span >It frees up your time to focus on creating high-quality content and interacting with your target audience.</span></p>
                      <p dir="ltr" ><span >Most of the concentration in the incorrect location can negatively influence your energy. Getting a boost from the start can save you time and effort later.</span></p>
                      <p dir="ltr" ><span >You can eliminate the pain of wondering if your videos will go viral, even if you have spent days working on them.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >In a Market That's Packed, You Have the Upper Hand</span></h3>
                      <p dir="ltr" ><span >TikTok has millions of users, all competing for attention. You may get ahead of the competition in your industry by purchasing TikTok likes. If your involvement figures are high, you may stand out from the crowd and garner greater attention for your material.</span></p>
                      <p dir="ltr" ><span >TikTok's algorithm considers engagement criteria such as likes when determining which videos appear to users. If you want your TikToks to show first, you can increase your chances of being featured on the For You page by purchasing likes.</span></p>
                      <p dir="ltr" ><span >If your TikTok videos earn a lot of likes, you'll appear more reliable as a content source. Other internet users are more likely to trust and connect with content that has received a lot of likes. It's an excellent method to establish credibility and make your content more appealing to readers.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Increased Organic Participation</span></h3>
                      <p dir="ltr" ><span >Having a lot of likes on your TikTok videos communicates to other viewers that your content is popular and worth seeing. If you do this, a more significant number of people will view your videos and opt to follow your account.</span></p>
                      <p dir="ltr" ><span >More likes on your TikTok videos offer more opportunities for users to interact with them naturally. Videos with many likes draw more viewers and generate more comments.&nbsp;</span></p>
                      <p dir="ltr" ><span >Creating an environment for your audience where you appear more spontaneous can allow you to develop even further. When you buy TikTok likes, you set a cycle of escalating natural interest and activity in action.</span></p>
                      <h2 dir="ltr" ><span >Comparing TikTok Likes, Views, and Shares</span></h2>
                      <p dir="ltr" ><span >To see how many people have enjoyed a video on TikTok, just look at the number of hearts next to the video. The number of "Likes" a video has, shows how well-received it is and how popular it is among its audience.&nbsp;</span></p>
                      <p dir="ltr" ><span >Likes are significant because they serve as social proof that people find the information interesting, helpful, or relevant. A video's chances of being featured in TikTok's algorithm-driven recommendations improve when it receives many likes.</span></p>
                      <p dir="ltr" ><span >The number of times a video has been seen on TikTok is called its "Views." Views are useful for evaluating exposure and audience size but don't always reflect how effective or meaningful a piece of content is.&nbsp;</span></p>
                      <p dir="ltr" ><span >While many views may indicate popularity, this does not indicate how many people actually watched the video or how much they liked it. Reach, and potential audience size can be compared mainly by looking at the number of views.</span></p>
                      <p dir="ltr" ><span >The number of times a user's video has been shared on TikTok and other platforms is represented by the share count.&nbsp;</span></p>
                      <p dir="ltr" ><span >If someone shares your content, it must have impacted them. Sharing is a strong endorsement that can improve visibility and spread an idea virally. A video's reach and ability to engage new audiences can be significantly increased if its content is widely shared.</span></p>
                      <p dir="ltr" ><span >The most valuable measure out of these is the number of likes a video receives because it serves as both social proof and an indication of user enthusiasm. They add trustworthiness, which brings in more viewers and raises one's chances of being suggested.&nbsp;</span></p>
                      <p dir="ltr" ><span >TikTok's algorithm heavily considers the number of likes a video has when determining how widely it will be shared. High like counts reflect audience involvement and interest, which is vital in establishing collaborations and business partnerships.&nbsp;</span></p>

                      <p dir="ltr" ><span >In addition, clicking the "like" button is a quick and easy way for users to express their approval without having to write long positive feedback.</span></p></div>
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

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why should you choose FameDaddy to buy TikTok likes?</h5>
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr"></p>
                      <p dir="ltr" ><span >FameDaddy understands that buying TikTok likes is surrounded by skepticism. Our mission is to dispel this falsehood. The dilemma arises because many corporations have engaged in criminal practices.</span></p>
                      <p dir="ltr" ><span >However, the quick response is yes. Buying likes on TikTok is entirely secure.&nbsp;</span></p>
                      <p dir="ltr" ><span >To give you a thorough response, we'll have to provide some data we've accumulated throughout many years in business.</span></p>
                      <p dir="ltr" ><span >FameDaddy's legal team has ensured that our operations follow TikTok's policies and local regulations. Buying likes on TikTok is not illegal in any of these jurisdictions.&nbsp;</span></p>
                      <p dir="ltr" ><span >We have continued sending likes for a long time. The whole buying process can be completed in two weeks. You should not worry; those who liked your video will see it soon. This is a safety precaution.</span></p>

                      <p dir="ltr" ><span >We promise safety, and there has never been a case of a banned user using FameDaddy likes, but ultimately the decision to buy and put doubts aside is yours to make.</span></p></div>
                  </div>
                </div>
              </div>
              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                    aria-controls="collapseFive">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">How to buy TikTok likes with FameDaddy?</h5>
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >FameDaddy continuously encourages clients to be their best to get renowned online.</span></p>
                      <p dir="ltr" ><span >Our highly qualified and seasoned industry professionals undertake many tests and experiments to guide our work practices. We never make assumptions since they can hurt our clients.</span></p>
                      <p dir="ltr" ><span >FameDaddy is the safest place to buy TikTok likes, but other sites may suspend your account. Remember that leaking or selling your personal information is risky.</span></p>
                      <p dir="ltr" ><span >To protect your anonymity during the buying and delivery procedure, FameDaddy only needs your public TikTok name handle.</span></p>
                      <p dir="ltr" ><span >We can also feed your account with likes from popular daily-use accounts.</span></p>
                      <p dir="ltr" ><span >Your account will not be canceled or banned for "fake likes." Bot account users are banned.</span></p>
                      <p dir="ltr" ><span >Real likes keep your account from being blocked and boost your rank on TikTok's advanced content algorithm. When you buy TikTok likes from FameDaddy, your videos appear on other people's For You Pages. If your material is good, they may become new fans and admirers.</span></p>
                      <p dir="ltr" ><span >Businesses often overlook delivery. None have simplified distribution like FameDaddy.</span></p>
                      <p dir="ltr" ><span >We found a legitimate way to get more likes on TikTok postings without getting banned.</span></p>

                      <p dir="ltr" ><span >We encourage buyers to expand naturally and know our product can help anyone's online career. However, gaining likes and followers is a different matter.</span></p></div>
                  </div>
                </div>
              </div>

              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                    aria-controls="collapseSix">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Why Should I Purchase TikTok Likes?</h5>
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >Buying likes on TikTok is as easy as following these steps:</span></p>

                      <ol >
                        <li dir="ltr"  aria-level="1">
                          <p dir="ltr" role="presentation"><span >Visit FameDaddy's official website: Visit the official FameDaddy page using the browser of your choice.</span></p>
                        </li>
                        <li dir="ltr"  aria-level="1">
                          <p dir="ltr" role="presentation"><span >TikTok Likes is the service you should use: To find the TikTok Likes option, visit FameDaddy and navigate to the Services page. To proceed, just click the link.</span></p>
                        </li>
                        <li dir="ltr"  aria-level="1">
                          <p dir="ltr" role="presentation"><span >Pick Your Bundle: FameDaddy provides a variety of packages for purchasing TikTok likes. Pick the plan that best suits your needs and finances. You should consider the available pricing and the desired quantity of likes.</span></p>
                        </li>
                        <li dir="ltr"  aria-level="1">
                          <p dir="ltr" role="presentation"><span >Type in your TikTok video's specifics: After selecting a plan, you'll be prompted to provide information about the TikTok video for which you wish to purchase views. The clip's link or URL is typically included. Ensure your likes go to the proper video by entering the correct details.</span></p>
                        </li>
                        <li dir="ltr"  aria-level="1">
                          <p dir="ltr" role="presentation"><span >Put Down Your Money: FameDaddy provides secure payment options for your convenience and security. Pick your preferred payment method and follow the on-screen instructions to complete the purchase. Make sure you've entered everything correctly and read over the order details before submitting the payment.</span></p>
                        </li>
                        <li dir="ltr"  aria-level="1">
                          <p dir="ltr" role="presentation"><span >Sit back and relax: FameDaddy will transfer the purchased likes to your TikTok video when we have processed your money, so all you have to do is sit back and enjoy the increasing popularity of your video. The delivery time may vary depending on the bundle and the number of likes you order. Don't give up, and keep an eye on your TikTok's like count.</span></p>
                        </li>
                      </ol></div>
                  </div>
                </div>
              </div>
              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false"
                    aria-controls="collapseSeven">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Can I buy TikTok likes many times?</h5>
                  </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >This is one of our client's most frequently asked questions; the answer is always the same.</span></p>
                      <p dir="ltr" ><span >When you buy TikTok likes, you gain a couple of things:</span></p>

                      <ol >
                        <li dir="ltr"  aria-level="1">
                          <p dir="ltr"  role="presentation"><span >You increase the likelihood of your material appearing on the For You Page, boosting the likelihood of your videos going viral.</span></p>
                        </li>
                        <li dir="ltr"  aria-level="1">
                          <p dir="ltr"  role="presentation"><span >If you want to expand your network, consider purchasing TikTok likes as a kickstart; it puts you on the algorithm, and more and more people will start finding your profile.</span></p>
                        </li>
                        <li dir="ltr"  aria-level="1">
                          <p dir="ltr" role="presentation"><span >Start making money. Most of our client's ultimate goals may be monetizing their viral content, gaining sponsorships, and enjoying the influencer life.</span></p>
                        </li>
                      </ol></div>
                  </div>
                </div>
              </div>
              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false"
                    aria-controls="collapseEight">

                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">If I buy TikTok likes, will that change how often people talk to me on TikTok?</h5>
                  </button>
                </h2>
                <div id="collapseEight" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >Without a shadow of a doubt! You can buy TikTok likes an unlimited number of times.</span></p>
                      <p dir="ltr" ><span >We let our consumers select how many likes they want, but they can always return for more.&nbsp;</span></p>

                      <p dir="ltr" ><span >Remember that merely buying TikTok likes does not indicate that you can sit back and let the likes do all the work for you. You must balance acquiring TikTok likes and developing unique content, considerably boosting your more significant natural growth.</span></p></div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false"
                      aria-controls="collapseNine">

                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Are the TikTok likes from active and legitimate accounts?</h5>
                    </button>
                  </h2>
                  <div id="collapseNine" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >There's no question about it! When you buy TikTok likes through our system, the likes you get will come from real people.</span></p>
                        <p dir="ltr" ><span >We get them by using an algorithm to find people with our interests. This makes sure that they will connect with your content.</span></p>

                        <p dir="ltr" ><span >Your TikTok videos will rise in the TikTok algorithm because of these interactions, and people will start connecting with them, making them go viral.</span></p></div>
                    </div>
                  </div>
                  <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                    <h2 className="accordion-header">
                      <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false"
                        aria-controls="collapseTen">

                        <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Can I Buy More Than One Service?</h5>
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse show" >
                      <div className="accordion-body border border-[#eee]">
                        <div class="panel show"><p dir="ltr" ><span >We take great delight in offering genuine TikTok active users who interact with our customers' content.</span></p>
                          <p dir="ltr" ><span >Our team understands the importance of building a genuine community of fans that can actively participate in your content. As a result, we use cutting-edge targeting algorithms to connect you with true TikTok fans who have previously indicated a genuine interest in similar content.</span></p>

                          <p dir="ltr" ><span >When you purchase Tiktok likes, you can be confident that you are expanding your TikTok presence by acquiring genuine likes who will enhance your content.</span></p></div>
                      </div>
                    </div>
                    <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                      <h2 className="accordion-header">
                        <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                          data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false"
                          aria-controls="collapseEleven">

                          <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">What is the customer service like when purchasing TikTok likes?</h5>
                        </button>
                      </h2>
                      <div id="collapseEleven" className="accordion-collapse collapse show" >
                        <div className="accordion-body border border-[#eee]">
                          <div class="panel show"><p dir="ltr" ><span >Yes, you certainly can. We offer various services at FameDaddy, but we believe the likes are the most important to our clients.</span></p>

                            <p dir="ltr" ><span >We also provide packages for followers, comments, and shares, but determining which is ideal for you is critical. We have you covered even if you believe you require more than one service!</span></p></div>
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

export default TiktokBuyLikes
