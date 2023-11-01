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
const FbBuyFollowers = () => {

  const [priceSelected, setPriceSelected] = useState(0)
  console.log("priceSelected", priceSelected);
  return (
    <div id='insta' className='servicePage'>
      <div className='mb-16'>
        <div className="text-center pt-24">
          <h1 className="px-4 py-2  bg-gray-200 inline rounded-full text-sm font-bold mb-6">BUY FACEBOOK FOLLOWERS</h1>
          <h2 className="text-2xl tracking-tight leading-10 font-semibold  sm:text-4xl md:text-3xl mt-4 pt-2 text-[#4c4c4c] px-3"> Buy Facebook followers with <br className="xl:hidden" />
            <span className="text-brand">Fast Delivery</span>
          </h2>
          <p className="mt-4 mx-auto text-sm text-gray-800 sm:text-md md:mt-5 md:text-[1.4rem] px-3  "> UseViral offers only the highest quality services. Buy safely and securely below:</p>
        </div>
        <div className='flex justify-center my-10 px-3'>
          <div className='flex-col flex items-center sm:px-3'>
            <div className='pricesSelect'>
              <select className="border !border-[#ed1c25] outline-none p-2 rounded-md youtube_channel" name="selectedPackageId" id="packageSelectBox" onChange={(e) => setPriceSelected(e.target.value)}>
                <option value="4.99€">100 Followers - 4.99€</option>
                <option value="11.99€">250 Followers - 11.99€</option>
                <option value="13.99€">500 Followers -  13.99€</option>
                <option value="18.99€">1000 Followers -  18.99€</option>
                <option value="34.99€">2500 Followers -  34.99€</option>
                <option value="66.99€">5000 Followers -  66.99€</option>
                <option value="129.99€">10000 Followers -  129.99€</option>
                <option value="159.99€">20000 Followers -  159.99€</option>
                <option value="229.99€">25000 Followers -  229.99€</option>
                <option value="379.99€">50000 Followers -  379.99€</option>
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
                      
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why are Facebook Followers Important?</h5>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >Facebook is a popular social networking site that has become one of the world's largest and most influential social media networks.</span></p>
                        <p dir="ltr" ><span >If you want to be successful on Facebook, you must understand the value of having many followers.&nbsp;</span></p>
                        <p dir="ltr" ><span >However, gaining the necessary followers is difficult. So, what are your options?</span></p>

                        <p dir="ltr" ><span >On Facebook, users can build personal profiles, interact with friends and relatives, and post things they find interesting, such as photos, videos, and status updates.&nbsp;</span></p>
                        <p dir="ltr" ><span >Users can interact with content by liking, commenting, and sharing, creating connections and discussions.</span></p>

                        <p dir="ltr" ><span >Facebook Followers are an important part of developing a solid online presence and boosting the reach of your Facebook profile or page.&nbsp;</span></p>

                        <p dir="ltr" ><span >Facebook followers are crucial because they extend your audience reach, raise your visibility, provide evidence of value, promote connection and conversation, and create marketing opportunities.</span></p>
                        <p dir="ltr" ><span >The number of Facebook followers determines the value of your product. Seeing many followers on your page provides a positive impression and can encourage them to follow your page or even become customers.</span></p>
                        <p dir="ltr" ><span >To promote products, brands often work with influencers or partner with pages with a large following. With many followers, you can become a tempting partner for such partnerships, improving your possibilities of advertising your Facebook presence.</span></p>
                        <p dir="ltr" ><span >Many individuals and businesses finding it hard to promote their products can benefit from our service because buying Facebook followers fools Facebook into recommending your content to the audience.&nbsp;</span></p>
                        <p dir="ltr" ><span >If you buy real active Facebook followers, you can focus more on making your content more exciting so that the new followers can have a lasting effect on your profile.</span></p>

                        <p dir="ltr" ><span >With Facebook's vast user base, the results are outstanding. Using our service will help you get those wanted results.</span></p></div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                      aria-controls="collapseTwo">
                      <img src="./assets/child_logos/stctr.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Advantages of Buying Facebook Followers</h5>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse show show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show">
                        <p dir="ltr" ><span >The positive aspects of using our service to buy targeted Facebook followers can undoubtedly aid you in achieving your goals. Therefore, here are a few of the most important advantages.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  className="h3 font-bold"><span >Enhanced Social Proof</span></h3>
                        <p dir="ltr" ><span >One of the key benefits of purchasing Facebook followers is the quick increase in social proof. Social proof is a psychological process in which people make decisions based on the actions and opinions of others.&nbsp;</span></p>
                        <p dir="ltr" ><span >When you increase Facebook followers, you rapidly enhance your follower count, giving you the appearance of popularity, quality, and reliability of your company or page.</span></p>
                        <p dir="ltr" ><span >This increased social proof can help you gain many new followers who are more likely to interact with your content, share it with others, and make a difference in your success.&nbsp;</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  className="h3 font-bold"><span >Saving Time and Effort</span></h3>
                        <p dir="ltr" ><span >Building an effective Facebook following is a long-term process that takes a lot of effort and constant connection with the audience.&nbsp;</span></p>
                        <p dir="ltr" ><span >By purchasing Facebook followers, you skip the early stage and immediately develop a follower base. This may be viewed as a quick way to increase your following count without investing much money.&nbsp;</span></p>
                        <p dir="ltr" ><span >Doing this allows individuals or businesses to give more attention to other parts of their online activity, such as content. Having more time and energy to create engaging content can result in a more exciting social media presence.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  className="h3 font-bold"><span >Increased Business Opportunities&nbsp;</span></h3>
                        <p dir="ltr" ><span >Businesses need every advantage to stand out and attract potential clients. Every business wants to use Facebook to promote their product to larger audiences.</span></p>
                        <p dir="ltr" ><span >Companies often seek partnerships with Facebook pages with a higher follower base, so purchasing Facebook followers makes you more likely to be chosen by a big company for a partnership.</span></p>
                        <p dir="ltr" ><span >Facebook's algorithms can analyze your followers' features and interests, allowing businesses to customize their advertising tactics and improve their earnings.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  className="h3 font-bold"><span >Expanding Your Contents Reach and Visibility</span></h3>
                        <p dir="ltr" ><span >You may significantly boost your reach and visibility by purchasing Facebook followers. A higher follower count raises the chances of your work being noticed by a larger audience.</span></p>
                        <p dir="ltr" ><span >With more followers, your content is more likely to show up in their newsfeed, improving the chances of engagement, shares, likes, and reach. You have the opportunity to gain genuine clients who are genuinely interested in your work as your content spreads through the social media network.</span></p>

                        <p dir="ltr" ><span >Purchasing Facebook followers ensures that your video will get more views, but it's your job to create valuable content for the viewers.</span></p></div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                      aria-controls="collapseThree">
                      <img src="./assets/child_logos/user-plus-bottom.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Comparing Facebook Followers, Likes, and Shares</h5>
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >Facebook offers many tools for measuring interaction and popularity. Followers, likes, and shares are all crucial metrics to consider when determining the success of your Facebook presence.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  className="h3 font-bold"><span >How vital are likes?</span></h3>
                        <p dir="ltr" ><span >Likes are the number of people who have expressed their support for your work by clicking the like button. When a user likes your content, it may appear in their friends' newsfeeds, exposing your brand to a larger audience.</span></p>
                        <p dir="ltr" ><span >A large number of likes creates a positive view of your content. It shows popularity, and it relates to the idea of social proof.</span></p>
                        <p dir="ltr" ><span >They can serve as a starting point for further interaction. Users who like your content will likely leave feedback, share, or explore your page, resulting in deeper connections and higher engagement.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  className="h3 font-bold"><span >The Impact of Shares</span></h3>
                        <p dir="ltr" ><span >Shares on Facebook represent that your content is useful enough for someone to share it with their own network.&nbsp;</span></p>
                        <p dir="ltr" ><span >When a person shares your content, it displays it on their timeline, potentially reaching an entirely new audience.</span></p>
                        <p dir="ltr" ><span >They also provide a sense of approval and trust. When somebody shares your content, it shows they appreciate it and want others to benefit. Gaining respect and influence is the result of this recommendation.</span></p>
                        <p dir="ltr" ><span >Shares can aid in developing an awareness of the community around your work. Users that interact with your postings may share them with their own networks, forming a network of others interested in your business or ideas.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  className="h3 font-bold"><span >The Power of Followers</span></h3>
                        <p dir="ltr" ><span >The most valuable measure is followers, which reflect a loyal and engaged audience that supports long-term engagement, improves your influence, and becomes an effective tool for brand promotion.</span></p>
                        <p dir="ltr" ><span >A large number of followers increases your impact and reliability. Your postings will reach a larger audience as your follower base increases, and your brand will earn a reputation and respect in your field of business.</span></p>

                        <p dir="ltr" ><span >Followers often become supporters of the company, promoting your content to their network. Their loyalty and interest might result in massive growth as they recommend your page to others, expanding your reach further.</span></p></div>
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
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Is it Safe to Buy Facebook Followers?</h5>
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show">
                        <p dir="ltr" ><span >In response to this essential question, we are confident that our services pose no risk to your account.</span></p>
                        <p dir="ltr" ><span >We consider privacy seriously and aim to deliver our clients a safe and secure experience.</span></p>
                        <p dir="ltr" ><span >We can offer you our services without any danger since we respect Facebook's Terms and Conditions. Your Facebook account will not be blocked or terminated because it does not violate any rules.&nbsp;</span></p>
                        <p dir="ltr" ><span >Please keep in mind that Facebook's regulations are easily changed if the board of directors decides to do so, and we'll be ready to change our services as needed.</span></p>
                        <p dir="ltr" ><span >Please remember that we do not use bots. We use real active Facebook followers!</span></p>
                        <p dir="ltr" ><span >Your information will not be shared with anyone when you buy active Facebook followers, as we do it strictly from client to client and use safe and secure payment.</span></p>
                        <p dir="ltr" ><span >When buying real active Facebook followers, you will not be encouraged to provide any personal information not needed to complete the purchase. Every purchase will be made through the website, and we ensure no financial information is compromised.</span></p>
                        <p dir="ltr" ><span >You can be confident that your information is in good hands with us. We take your information extremely seriously and ensure no one knows you bought followers.</span></p>
                        <p dir="ltr" ><span >We will go against what our company stands for if we break our promise to make your experience as safe as possible.</span></p>

                        <p dir="ltr" ><span >If you have additional questions about the safety or security of your Facebook profile, please reach out to our customer service. They are more than willing to answer any questions you may have.</span></p></div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                      aria-controls="collapseFive">
                      <img src="./assets/child_logos/creative.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why Should You Choose UseViral to Buy Facebook Followers?</h5>
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >UseViral has developed a virtual platform that provides a reliable and effective solution for purchasing Facebook followers.&nbsp;</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  className="h3 font-bold"><span >Exceptional Customer Service</span></h3>
                        <p dir="ltr" ><span >Buying Facebook followers from a site like UseViral should be a simple process. UseViral provides excellent customer service to ensure a smooth procedure from start to finish.</span></p>
                        <p dir="ltr" ><span >Our team of skilled professionals is ready to answer all your questions, provide advice, and address any concerns you may have.&nbsp;</span></p>
                        <p dir="ltr" ><span >With our help, you can finish the entire process with trust and ease.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  className="h3 font-bold"><span >Secure and Confidential</span></h3>
                        <p dir="ltr" ><span >You must point out the secrecy and security of your account when purchasing Facebook followers.&nbsp;&nbsp;</span></p>
                        <p dir="ltr" ><span >We recognize your concern and take strict steps to secure your privacy. We use standard security and ethical standards to protect your personal information.</span></p>
                        <p dir="ltr" ><span >You can safely build your Facebook following with UseViral while maintaining the security of your account.&nbsp;</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  className="h3 font-bold"><span >Years of Experience in the Industry</span></h3>
                        <p dir="ltr" ><span >One of the key reasons to choose UseViral is its significant industry experience, ten years in this business. With this experience, UseViras has gained a solid awareness of social media trends and customer needs.</span></p>

                        <p dir="ltr" ><span >Our work allows us to deliver a high degree of knowledge, guaranteeing that our services are reliable, efficient, and adapted to the unique needs of purchasing Facebook followers.</span></p></div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                      aria-controls="collapseSix">
                      
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">How to Buy Facebook Followers with UseViral</h5>
                    </button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >If you have difficulties using our website, you can purchase Facebook followers by following this carefully designed and detailed tutorial.</span></p>

                        <ol >
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >Begin by using your favorite web browser to access the official UseViral website. </span></p>
                          </li>
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >Navigate to the services part of the UseViral website or explicitly search for TikTok followers. Look for a plan that meets your needs for TikTok followers.&nbsp;</span></p>
                          </li>
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >Choose the option that best meets your demands regarding the number of followers you want to buy. Consider your budget, objectives, and desired level of growth.</span></p>
                          </li>
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >Some service providers include customization options, such as selecting the delivery speed or other unique requirements. Make changes to the parameters to suit your needs.&nbsp;</span></p>
                          </li>
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >Add the desired package to your cart once you've decided on it. To complete your purchase, proceed to the checkout page.&nbsp;</span></p>
                          </li>
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >Enter your TikTok profile information, such as your username or profile link. Ensure that your order is processed smoothly and that the information is correct.&nbsp;</span></p>
                          </li>
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >Fill in the blanks with your name, email address, and payment information. To avoid problems with order processing, make sure the information is correct.&nbsp;</span></p>
                          </li>
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >Check the order information and the total amount to be paid again. Use the payment methods given by UseViral to complete the payment process.&nbsp;</span></p>
                          </li>
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >UseViral will begin processing your order once your money has been properly processed. The delivery time may vary depending on the shipment and the service provider. Be patient, as the followers may take some time to appear on your TikTok page.&nbsp;</span></p>
                          </li>
                          <li dir="ltr" aria-level="1">
                            <p dir="ltr" role="presentation"><span >Once the followers are sent, keep an eye on the development and engagement of your TikTok profile. Examine the impact of the acquired followers and determine whether they align with your aims and expectations.</span></p>
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
                      
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">How does UseViral function?</h5>
                    </button>
                  </h2>
                  <div id="collapseSeven" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >Our staff comprises highly skilled specialists with different tactics for increasing followers based on the information you provide.</span></p>
                        <p dir="ltr" ><span >We sell Facebook followers that are authentic accounts that will never leave your profile.</span></p>

                        <p dir="ltr" ><span >We'll discover the followers for you, and they'll appear on your account in hours or weeks, depending on how quickly or slowly you want them.</span></p></div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false"
                      aria-controls="collapseEight">
                      
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Can I Buy Facebook followers from UseViral for someone else?</h5>
                    </button>
                  </h2>
                  <div id="collapseEight" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >Yes, you can! You can also use UseViral to grow your and your friends' Facebook followers!</span></p>
                        <p dir="ltr" ><span >Because we do not require your login information, you may purchase Facebook followers easily for an account if you only know their username.&nbsp;</span></p>

                        <p dir="ltr" ><span >Many of our customers wish to expand many Facebook profiles simultaneously. That's why we gave you this choice. Our primary focus is on the goals of our clients!</span></p></div>
                    </div>
                  </div>
                  <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                    <h2 className="accordion-header">
                      <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false"
                        aria-controls="collapseNine">
                        
                        <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Can I track the progress of my Facebook follow orders?</h5>
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse show" >
                      <div className="accordion-body border border-[#eee]">
                        <div class="panel show"><p dir="ltr" ><span >You definitely can! We recognize how important it is to keep track of the followers you've purchased or any other service you've utilized from us.</span></p>
                          <p dir="ltr" ><span >Look at the "Check Order" section of our website. You will be taken to a page where you can confirm and track the status of your order. The status of your order will be disclosed after providing your email address and order ID.</span></p>

                          <p dir="ltr" ><span >Please contact our customer support staff for any further queries regarding purchasing Facebook followers!</span></p></div>
                      </div>
                    </div>
                    <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                      <h2 className="accordion-header">
                        <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                          data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false"
                          aria-controls="collapseTen">
                          
                          <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Does UseViral offer discounts or promotions for bulk purchases of Facebook followers?</h5>
                        </button>
                      </h2>
                      <div id="collapseTen" className="accordion-collapse collapse show" >
                        <div className="accordion-body border border-[#eee]">
                          <div class="panel show"><p dir="ltr" ><span >We most certainly do! When you visit our website, you will be shown the price of the chosen package and whether there is a discount.</span></p>
                            <p dir="ltr" ><span >Our services and packages now have a 25% discount. We aim to provide the best service possible to our clients at fair pricing that most people can afford.&nbsp;</span></p>

                            <p dir="ltr" ><span >Check out all of our packages, and if you have any further questions about purchasing Facebook followers, please contact our customer service team!</span></p></div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false"
                            aria-controls="collapseEleven">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">What payment methods does UseViral accept?</h5>
                          </button>
                        </h2>
                        <div id="collapseEleven" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p dir="ltr" ><span >Of course, when it comes to personal and banking information, privacy and security are vital components of our operation.</span></p>
                              <p dir="ltr" ><span >We understand the value of data privacy in today's environment. As a result, when working with your data, we use modern encryption technology.</span></p>
                              <p dir="ltr" ><span >Suppose you're concerned about the safety of your personal and financial information. In that situation, you should contact the provider's customer service representatives for additional reassurance and to solve specific questions or problems you may be experiencing.</span></p>

                              <p dir="ltr" ><span >When our customers buy Facebook followers cheap from UseViral, we want them to feel safe. As a result, your personal information is always kept private and secure.</span></p></div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                        <h2 className="accordion-header">
                          <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false"
                            aria-controls="collapseTwelve">
                            
                            <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">How long will it take to receive the purchased followers?</h5>
                          </button>
                        </h2>
                        <div id="collapseTwelve" className="accordion-collapse collapse show" >
                          <div className="accordion-body border border-[#eee]">
                            <div class="panel show"><p dir="ltr" ><span >By providing a variety of ways to pay, UseViral aims to provide a fast and comfortable experience for our clients.&nbsp;</span></p>
                              <p dir="ltr" ><span >We understand that everyone has a favored payment option. As a result, we provide secure and reliable payment alternatives.&nbsp;</span></p>
                              <p dir="ltr" ><span >If you wish to purchase our services, you can do so easily by using any of the payment methods listed below:</span></p>

                              <ol >
                                <li dir="ltr" aria-level="1">
                                  <p dir="ltr" role="presentation"><span >UseViral accepts major credit and debit cards such as Visa, American Express, Mastercard, and Discover. During checkout, we only need your credit card information, and our secure payment system will handle the rest.</span></p>
                                </li>
                                <li dir="ltr" aria-level="1">
                                  <p dir="ltr" role="presentation"><span >A popular and reliable online payment service, PayPal provides a secure payment process. If you already have a PayPal account, link it to your UseViral purchase and finish the transaction.</span></p>
                                </li>
                                <li dir="ltr" aria-level="1">
                                  <p dir="ltr" role="presentation"><span >Cryptocurrencies: In an effort to stay up-to-date with new payment methods, we also accept notable Cryptocurrencies, such as Bitcoin (BTC), and Ethereum (ETH).&nbsp;</span></p>
                                </li>
                              </ol></div>
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
                            <div class="panel show"><p dir="ltr" ><span >That depends entirely on your strategy for purchasing Facebook followers.&nbsp;</span></p>
                              <p dir="ltr" ><span >Our services are perfect since you may personalize the distribution of your followers!</span></p>
                              <p dir="ltr" ><span >If you need all of your followers at once, you could provide them all at once. The same is true for the progressive strategy; we will do it if you like to gain followers gradually.</span></p>

                              <p dir="ltr" ><span >Please remember that the more detailed your package and the number of followers you buy, the longer it will take for them to appear on your profile!</span></p></div>
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

export default FbBuyFollowers
