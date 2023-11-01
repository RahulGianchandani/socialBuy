import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiCheckMark } from 'react-icons/gi'
import fbIcon from '../../../images/socialIcons/facebook.webp'
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
const FbBuyPostLikes = () => {

  const [priceSelected, setPriceSelected] = useState("3.99€")
  console.log("priceSelected", priceSelected);
  return (
    <div id='insta' className='servicePage'>
      <div className='mb-16'>
        <div className="text-center pt-24">
          <h1 className="px-4 py-2  bg-gray-200 inline rounded-full text-sm font-bold mb-6">BUY FACEBOOK POST LIKES</h1>
          <h2 className="text-2xl tracking-tight leading-10 font-semibold  sm:text-4xl md:text-3xl mt-4 pt-2 text-[#4c4c4c] px-3"> Buy Facebook Post Likes with <br className="xl:hidden" />
            <span className="text-brand">Fast Delivery</span>
          </h2>
          <p className="mt-4 mx-auto text-sm text-gray-800 sm:text-md md:mt-5 md:text-[1.4rem] px-3  "> FameDaddy offers only the highest quality services. Buy safely and securely below:</p>
        </div>
        <div className='flex justify-center my-10 px-3'>
          <div className='flex-col flex items-center sm:px-3'>
            <div className='pricesSelect'>
              <select value={priceSelected} className="border !border-[#ed1c25] outline-none p-2 rounded-md youtube_channel" name="selectedPackageId" id="packageSelectBox" onChange={(e) => setPriceSelected(e.target.value)}>
                <option value="3.99€">100 Post Likes - 3.99€</option>
                <option value="6.5€">250 Post Likes - 6.5€</option>
                <option value="9.99€">500 Post Likes -  9.99€</option>
                <option value="14.99€">1000 Post Likes -  14.99€</option>
                <option value="29.99€">2500 Post Likes -  29.99€</option>
                <option value="56.99€">5000 Post Likes -  56.99€</option>
                <option value="105.99€">10000 Post Likes - 105.99€</option>
                <option value="179.99€">20000 Post Likes -  179.99€</option>
                <option value="249.99€">50000 Post Likes -  249.99€</option>
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
                  <span>High Quality Post Likes</span>
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
              Post Likes
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

        <h2 className='text-center h2 mb-10'>Our Other <span className="text-brand">Facebook</span> Services: </h2>
        <div className='container max-w-[1300px] px-14'>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
            <div className="btn-group ">
              <Link to="/buy-fb-followers" className="btn bg-brand text-white flex    after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={fbIcon} className='mr-3' /> Buy Facebook Followers
              </Link>

            </div>
            <div className="btn-group ">
              <Link to="/buy-fb-post-likes" className="btn bg-blue text-white  flex   after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={fbIcon} className='mr-3' />Buy Facebook Post Likes
              </Link>

            </div>
            <div className="btn-group ">
              <Link to="/buy-fb-comments" className="btn bg-brand text-white  flex   after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={fbIcon} className='mr-3' /> Buy Facebook Comments
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
                      
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why are Facebook Post Likes Important?</h5>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >Facebook is the world's most popular social media network, with around 3 billion people using it daily.</span></p>
                        <p dir="ltr" ><span >Many people see this as an opportunity to profit from those people by using Facebook as an influencer platform where they can build their network while also profiting.</span></p>
                        <p dir="ltr" ><span >Despite having a sizeable monthly user base and a well-known platform, it is not the most popular among influencers. FameDaddy's mission is to change that.</span></p>
                        <p dir="ltr" ></p>
                        <p dir="ltr" ><span >When you buy Facebook post likes, you have access to a thus far uncharted domain. Because of the tiny scale of the influencer community, you can set your own rules and try out new ideas. That is, no one can evaluate you when you do new things.</span></p>
                        <p dir="ltr" ><span >We recognize Facebook's potential and believe it would be an excellent opportunity for new and upcoming influencers to join the success train. We aim to show that becoming a Facebook influencer is much easier than you might think.</span></p>
                        <p dir="ltr" ><span >It's no accident that we're talking about our service to buy Facebook likes. They are your primary focus when using Facebook as an influential platform. A large number of likes on your posts suggests that you produce high-quality content that people want to see.</span></p>
                        <p dir="ltr" ><span >That is why everyone on Facebook competes for users' attention and interactions, particularly post likes. They are a stepping stone to numerous monetizing possibilities influencers are eager to get their hands on and begin making their first profit.</span></p>
                        <p dir="ltr" ><span >Creating films with advertisements, charging for page subscriptions, and collaborating with brands are just a few examples. When you reach a particular stage, you can choose what you want to accomplish and how to earn money.</span></p>

                        <p dir="ltr" ><span >Getting to that stage, though, can be the most difficult challenge for many people. We at FameDaddy provide packages for purchasing Facebook post likes to assist you in reaching that point and beginning to enjoy your life as a successful Facebook influencer.</span></p></div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                      aria-controls="collapseTwo">
                      <img src="./assets/child_logos/stctr.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Advantages of Buying Facebook Post Likes</h5>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse show show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ></p>
                        <p dir="ltr" ><span >There are several advantages to purchasing Facebook post likes, so here are a couple that will be beneficial:</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Competitive Edge Over Competition</span></h3>
                        <p dir="ltr" ><span >More likes on your Facebook posts can help people remember your profile, putting you ahead of other influencers.</span></p>
                        <p dir="ltr" ><span >When you begin to publish material, this is critical because if people remember you and your profile, we can begin to discuss establishing a brand image and taking your platform to the next level.</span></p>
                        <p dir="ltr" ><span >People must begin to perceive you as a brand since this opens the door to a plethora of exciting opportunities to spice up your influence career.</span></p>
                        <p dir="ltr" ><span >When you develop a brand for yourself, you give people someone to look up to and idolize, allowing you to profit from it by producing goods that people will purchase.</span></p>
                        <p dir="ltr" ><span >Purchasing Facebook post likes gives you everything you need to develop a brand around your name and profile. To begin your influencer adventure with us, you must first visit FameDaddy and buy Facebook post likes.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Increase Reach</span></h3>
                        <p dir="ltr" ><span >Naturally, having more likes on posts you make can increase the reach of your content.</span></p>
                        <p dir="ltr" ><span >Getting your content recommended to new people is the most effective way to increase new engagement with your content. The Facebook algorithm analyzes likes, shares, views, and comments to assess whether a post should be featured in users' news feeds.&nbsp;</span></p>
                        <p dir="ltr" ><span >When you buy Facebook post likes, you help your content meet the criteria for appearing in people's newsfeeds.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Ways to Make Money</span></h3>
                        <p dir="ltr" ><span >As a Facebook influencer, you may monetize your posts and enhance engagement. We briefly addressed some of these previously, but now we'll go through how buying Facebook post likes can help you start making money.</span></p>
                        <p dir="ltr" ><span >Adding a paid subscription to a budding influencer's page is typical. It's a fantastic way to generate some quick cash to help you improve your content and potentially buy a better camera to shoot your movies with. However, it is not a long-term approach that always gives a good income.</span></p>
                        <p dir="ltr" ><span >On the other hand, collaboration with businesses gives constant revenue and considerable sums of money in exchange for a brief and straightforward post ad about a product that the company wishes to market.&nbsp;</span></p>
                        <p dir="ltr" ><span >To acquire some of those beautiful bargains, you have to get the brands to recognize you and the posts you produce. The simplest way to accomplish this is to buy Facebook post likes from FameDaddy and get your content in front of the businesses' eyes.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Collaborations With Other Creators</span></h3>
                        <p dir="ltr" ><span >Facebook has a large number of devoted content creators who routinely post engaging content on the platform.</span></p>
                        <p dir="ltr" ><span >As a beginner, you may find it challenging to win widespread acceptance from followers and viewers. If you buy Facebook post likes, you'll get the attention you deserve, enhancing your chances of working with other influencers.</span></p>

                        <p dir="ltr" ><span >Collaborations are a great way to grow your business or public image. The goal of the collaboration is to bring two existing audiences together and, as a result, exponentially grow both of your profiles.</span></p></div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                      aria-controls="collapseThree">
                      <img src="./assets/child_logos/user-plus-bottom.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Is it Safe to Buy Facebook Post Likes?</h5>
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ></p>
                        <p dir="ltr" ><span >We understand that this is our clients' primary worry when they use our services.</span></p>
                        <p dir="ltr" ><span >That is why FameDaddy has the most outstanding and devoted legal team in the industry, continually reviewing Facebook's Terms and Conditions and rules to guarantee that our product stays within the confines of what is permissible on Facebook.</span></p>
                        <p dir="ltr" ><span >We are aware that the packages we offer raise safety concerns. Nonetheless, we can assure you that our competitors created those issues and do not protect their customers' private information and profiles.</span></p>
                        <p dir="ltr" ><span >We show our devotion to our clients immediately by not requiring personal information when purchasing Facebook post likes. While most competitors want your real name, date of birth, and account password to offer you likes, FameDaddy only requires your Facebook username.</span></p>
                        <p dir="ltr" ><span >The sale of likes from users who use their accounts daily is the second and most important security measure we employ to protect our clients.</span></p>
                        <p dir="ltr" ><span >Based on our considerable experience, we feel that using bot accounts to give people Facebook likes is the most prevalent error companies in our industry make. We’re one of the only organizations on the market that offers genuine likes, and they have shown to be safe for our customers.</span></p>
                        <p dir="ltr" ><span >The results back this up because we haven't had a single account banned or suspended. We've used existing Facebook accounts to assist our clients in buying Facebook post likes, which is especially impressive given how stringent Facebook's standards are.</span></p>
                        <p dir="ltr" ><span >The delivery of likes is an essential aspect of the procedure that has gone unnoticed. Something that businesses overlook, but we can assure you that it is the single most crucial aspect of the entire process of purchasing Facebook post likes.</span></p>

                        <p dir="ltr" ><span >Most of Facebook's limits on buying Facebook post likes to include this step, which many of our competitors are unaware of due to a lack of legal staff. We've split down the delivery process to be as efficient as possible while avoiding any suspicion from Facebook authorities.</span></p></div>
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
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why Should You Choose FameDaddy to Buy Facebook Post Likes?</h5>
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >We are a well-established corporation with millions of clients. They've given us a list of reasons why you should choose us to buy targeted Facebook post likes:</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Guaranteed Safety</span></h3>
                        <p dir="ltr" ><span >As previously stated, we place an emphasis on security!</span></p>
                        <p dir="ltr" ><span >Our goal is to serve our clients with safe and exceptional services. By reviewing Facebook's standards, we promise that your account will not violate any rules or laws.</span></p>
                        <p dir="ltr" ><span >Your personal information will not be utilized in marketing techniques at any time. They will only be used to complete your Facebook post likes purchase.</span></p>
                        <p dir="ltr" ><span >If you have any additional concerns, please visit our website's "Support" area and ask about any other security-related issues.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Authentic Services</span></h3>
                        <p dir="ltr" ><span >We are rather pleased with the quality of our likes. Our likes are generated by authentic and trustworthy accounts, which stimulate organic engagement on your content.</span></p>
                        <p dir="ltr" ><span >As a content creator, you should seek out more natural interactions to improve the quality of your content.&nbsp;</span></p>
                        <p dir="ltr" ><span >Other companies providing equivalent services commonly utilize fake profiles and bots to engage with your material. These result in brief engagements that largely affect your reputation.</span></p>
                        <p dir="ltr" ><span >When you purchase Facebook post likes from FameDaddy, you can be confident that you will obtain high-quality likes that will benefit you in the long run.&nbsp;</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Various Customization Options</span></h3>
                        <p dir="ltr" ><span >FameDaddy, as a company, is quite proud of its services. We can assist you in expanding your social media presence by providing various services.</span></p>
                        <p dir="ltr" ><span >We attempt to cater to each client individually by offering options to buy actual Facebook post likes as well as other metrics such as views, shares, comments, and follows. Each service offers a variety of alternatives that can be adjusted to your individual requirements.</span></p>
                        <p dir="ltr" ><span >Look no further if you want high-quality services at a reasonable price. It all depends on the number of likes and your delivery time.&nbsp;</span></p>

                        <p dir="ltr" ><span >We do not confine our services to a particular social media site. Our services are used on various platforms, including Instagram, TikTok, and Twitter.</span></p></div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                      aria-controls="collapseFive">
                      <img src="./assets/child_logos/creative.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">How to Buy Facebook Post Likes with FameDaddy?</h5>
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >If you are having difficulties using our service to buy Facebook post likes cheap, please refer to the following carefully crafted step-by-step guide:</span></p>

                        <ol >
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >Navigate to the Buy Facebook Post Likes area of FameDaddy's official website.</span></p>
                          </li>
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >Examine your choices and select the greatest one for your requirements and budget. Consider how many post likes you want and the specific requirements of your Facebook post.</span></p>
                          </li>
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >Enter the URL of your Facebook post after you've chosen a package. Check the URL again.</span></p>
                          </li>
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >Select additional options to customize your order. FameDaddy may offer features such as targeting a specific audience or gradually spreading likes over time. These options can help you customize the service to your specific needs.</span></p>
                          </li>
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >Consider order details such as packaging, customization options, and cost. Make any necessary modifications before proceeding.</span></p>
                          </li>
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >Proceed to the secure checkout page. Complete the required billing and contact information. FameDaddy accepts credit and debit cards as secure and dependable payment methods.</span></p>
                          </li>
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >When you finish your purchase, we will send you a confirmation email with the relevant transaction information.</span></p>
                          </li>
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >FameDaddy will immediately begin delivering purchased Facebook post likes to your post. You may track the progress of your order using the FameDaddy dashboard, which provides real-time delivery updates.</span></p>
                          </li>
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >After the post likes are delivered, you will notice an increase in the number of likes on your Facebook post. These likes can help you gain your target audience's social proof and organic engagements.</span></p>
                          </li>
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >Understand that when you increase Facebook post likes should be part of a more important social media strategy. Combine it with high-quality content, regular involvement with your audience, and genuine relationships to maximize the benefits and establish a robust online presence.</span></p>
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
                      
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Can I monitor the status of my Facebook post likes orders?</h5>
                    </button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >You indeed can! We recognize how important it is to keep track of the post likes you've purchased or any other service you've utilized from us.</span></p>
                        <p dir="ltr" ><span >Look at the "Check Order" section of our website. You will be taken to a page where you can confirm and track the status of your order. Enter your email address and order ID, and the status of your order will be displayed.</span></p>

                        <p dir="ltr" ><span >If you have any additional questions regarding buying Facebook post likes, please contact our customer support staff.</span></p></div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false"
                      aria-controls="collapseSeven">
                      
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Are the Facebook likes delivered gradually or all at once?</h5>
                    </button>
                  </h2>
                  <div id="collapseSeven" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >That entirely depends on the plan you choose when you buy active Facebook post likes.</span></p>
                        <p dir="ltr" ><span >If you need all of the likes on your post at once, you can choose to provide them all at once. The same is true for the gradual method; if you wish to receive likes on the post gradually, we will do so.</span></p>

                        <p dir="ltr" ><span >We take pride in giving our clients as many options and customizations as possible to ensure they get the desired outcomes!</span></p></div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false"
                      aria-controls="collapseEight">
                      
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Does FameDaddy offer discounts or promotions for bulk purchases of Facebook post likes?</h5>
                    </button>
                  </h2>
                  <div id="collapseEight" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >We do! When you visit our website, you will be shown the price of the selected package and whether there is a discount.</span></p>
                        <p dir="ltr" ><span >All of our services and packages are discounted by 25%. We want to provide our clients with the best service possible at a price that most people can afford.&nbsp;</span></p>

                        <p dir="ltr" ><span >Check out all of our packages, and if you have any additional questions regarding our service to buy real active Facebook post likes, please contact our customer service team!</span></p></div>
                    </div>
                  </div>
                  <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                    <h2 className="accordion-header">
                      <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false"
                        aria-controls="collapseNine">
                        
                        <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Are the Facebook likes delivered from accounts located from a worldwide audience?</h5>
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse show" >
                      <div className="accordion-body border border-[#eee]">
                        <div class="panel show"><p dir="ltr" ><span >At FameDaddy, we provide many options for targeting our audiences and supporting them in accomplishing their goals.&nbsp;</span></p>
                          <p dir="ltr" ><span >When you purchase Facebook post likes, you may choose from various bundles based on your desired service. Using our global Facebook products, we use several accounts from around the world to like your shared post URL.&nbsp;</span></p>

                          <p dir="ltr" ><span >If you prefer an utterly local package, we have offers that utilize user accounts from the selected region or nation. It is critical to understand that whether your account is based in the relevant region or you live outside of it, you will still receive likes from your selected location!</span></p></div>
                      </div>
                    </div>
                    <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                      <h2 className="accordion-header">
                        <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                          data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false"
                          aria-controls="collapseTen">
                          
                          <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">What payment options does FameDaddy offer for purchasing Facebook post likes?</h5>
                        </button>
                      </h2>
                      <div id="collapseTen" className="accordion-collapse collapse show" >
                        <div className="accordion-body border border-[#eee]">
                          <div class="panel show"><p dir="ltr" ><span >To buy Facebook post likes as safely as possible, FameDaddy provides a variety of simple and secure payment alternatives.</span></p>
                            <p dir="ltr" ><span >Credit cards accepted include Visa, Mastercard, American Express, and Discover. We also accept payments through well-known digital payment services such as PayPal.</span></p>
                            <p dir="ltr" ><span >To keep up with current payment methods, we accept Bitcoin and Ethereum.</span></p>

                            <p dir="ltr" ><span >Select the most convenient payment method for you, and you can rest assured that your transaction will be handled securely and professionally. We value your trust in FameDaddy and look forward to assisting you in achieving your Facebook goals.</span></p></div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false"
                            aria-controls="collapseEleven">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Do we accept all different types of feedback?</h5>
                          </button>
                        </h2>
                        <div id="collapseEleven" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p dir="ltr" ><span >We do! We value your feedback, whether positive or negative.&nbsp;</span></p>
                              <p dir="ltr" ><span >We value both good and bad feedback equally. Our goal is to give our clients unique tools to buy Facebook post likes and listen to our community and make necessary improvements.</span></p>
                              <p dir="ltr" ><span >&nbsp;Consequently, we are glad to embrace both good and negative comments to grow as a company and deliver the best possible experience for our clients.&nbsp;</span></p>

                              <p dir="ltr" ><span >If you have any comments or suggestions, please share them with us. Go to our website's "Support" section and let us know what you think of our services!</span></p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false"
                            aria-controls="collapseTwelve">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Does FameDaddy offer additional support or guidance on optimizing my Facebook content for maximum engagement?</h5>
                          </button>
                        </h2>
                        <div id="collapseTwelve" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p dir="ltr" ><span >Following the purchase of Facebook post likes, there are a few things you can do to maximize your newly acquired likes:</span></p>
                              <p dir="ltr" ><span >You may keep your newly attracted audience interested with high-quality posts. We want to assist you in reaching out to more potential followers, but the content your viewers watch is entirely up to you. You demonstrate to your users that you care about the material you provide them by offering high-quality and entertaining postings.</span></p>

                              <p dir="ltr" ><span >Maintaining contact is essential for keeping the audience you gained through likes. To be most effective, go to the comment section, engage with your followers, and respond to most of them to show that you care about and are interested in their opinions and remarks.</span></p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false"
                            aria-controls="collapseThirteen">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Can I buy Facebook shares for several posts?</h5>
                          </button>
                        </h2>
                        <div id="collapseThirteen" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p dir="ltr" ><span >Yes, you can use FameDaddy to purchase shares for several Facebook posts.&nbsp;</span></p>
                              <p dir="ltr" ><span >We recognize that you may have several posts you want to promote and expand your reach.&nbsp;</span></p>
                              <p dir="ltr" ><span >Choose the appropriate bundle for each post and enter the relevant URLs during checkout.&nbsp;</span></p>
                              <p dir="ltr" ><span >FameDaddy allows you to spread shares across several posts, allowing you to maximize the visibility and engagement of multiple Facebook posts at the same time.&nbsp;</span></p>

                              <p dir="ltr" ><span >This tool allows you to promote different content and increase the overall effect of your Facebook profile.</span></p></div>
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

export default FbBuyPostLikes