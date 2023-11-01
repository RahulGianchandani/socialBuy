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
const FbBuyComments = () => {

  const [priceSelected, setPriceSelected] = useState("4.99€")
  console.log("priceSelected", priceSelected);
  return (
    <div id='insta' className='servicePage'>
      <div className='mb-16'>
        <div className="text-center pt-24">
          <h1 className="px-4 py-2  bg-gray-200 inline rounded-full text-sm font-bold mb-6">BUY FACEBOOK COMMENTS</h1>
          <h2 className="text-2xl tracking-tight leading-10 font-semibold  sm:text-4xl md:text-3xl mt-4 pt-2 text-[#4c4c4c] px-3"> Buy Facebook Comments with <br className="xl:hidden" />
            <span className="text-brand">Fast Delivery</span>
          </h2>
          <p className="mt-4 mx-auto text-sm text-gray-800 sm:text-md md:mt-5 md:text-[1.4rem] px-3  "> UseViral offers only the highest quality services. Buy safely and securely below:</p>
        </div>
        <div className='flex justify-center my-10 px-3'>
          <div className='flex-col flex items-center sm:px-3'>
            <div className='pricesSelect'>
              <select value={priceSelected} className="border !border-[#ed1c25] outline-none p-2 rounded-md youtube_channel" name="selectedPackageId" id="packageSelectBox" onChange={(e) => setPriceSelected(e.target.value)}>
                <option value="4.99€">10 Comments - 4.99€</option>
                <option value="5.99€">15 Comments - 5.99€</option>
                <option value="8.99€">25 Comments - 8.99€</option>
                <option value="13.99€">50 Comments -  13.99€</option>
                <option value="17.99€">75 Comments -  17.99€</option>
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
                  <span>High Quality Comments</span>
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
              Comments
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
                      
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why Are Facebook Comments Important?</h5>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" >
                    <div class="panel show"><p dir="ltr" ><span >While there are several new trendy social media platforms accessible, and Facebook has been dubbed "out of date," it continues to be a dominant force nearly two decades after its birth. It continues to influence the landscape of social media marketing, making it essential for both large and small business brands.</span></p>

                      <p dir="ltr" ><span >While Facebook followers are significant, we should not underestimate the importance of Facebook comments.&nbsp;</span></p>
                      <p dir="ltr" ><span >You should buy Facebook comments to increase interaction and build a thriving community around your brand.</span></p>
                      <p dir="ltr" ><span >You will get a jump start on developing an active community around your brand if you increase Facebook comments. Each comment acts as a springboard for more connection and conversation, creating a lively and interesting environment.&nbsp;</span></p>
                      <p dir="ltr" ><span >Furthermore, greater comment activity can lead to more organic engagement, increasing visibility and potentially broadening your reach to new prospective consumers.</span></p>
                      <p dir="ltr" ><span >We at UseViral recognize the importance of encouraging meaningful conversations on Facebook. With our specialized services, you may buy high-quality Facebook comments suited to your brand's demands.&nbsp;</span></p>
                      <p dir="ltr" ><span >These comments are submitted by genuine individuals, adding authenticity to your posts and increasing their credibility.</span></p>
                      <p dir="ltr" ><span >When you buy Facebook comments through UseViral, you unlock a world of possibilities for your brand. Our secure and efficient system ensures the seamless delivery of comments, providing you with the tools to cultivate a vibrant online community.&nbsp;</span></p>
                      <p dir="ltr" ><span >While you focus on creating compelling content, we take care of enhancing engagement, ultimately propelling your brand toward success.</span></p></div>
                  </div>
                </div>
              </div>

              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                    aria-controls="collapseTwo">
                    <img src="./assets/child_logos/stctr.png" className="mr-[10px]" alt="" />
                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why Should You Buy Facebook Comments?</h5>
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse show show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show">
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Save Money And Time</span></h3>
                      <p dir="ltr" ><span >One reason is to save time and streamline engagement strategy. If users have been striving to grow their brand on Facebook, they may have a business page and links set up to redirect users to their website.</span></p>
                      <p dir="ltr" ><span >However, they may not have figured out the intricacies of their engagement strategy or what constitutes an effective one. Developing a successful Facebook engagement strategy can be complex, especially given the constantly changing algorithm.</span></p>
                      <p dir="ltr" ><span >What worked last week may be ineffective, which is beyond people’s control. Thus, a major reason to buy real Facebook comments is to reclaim time. By entrusting professionals in social media marketing to handle your engagement strategy, you can focus on creating quality content.</span></p>
                      <p dir="ltr" ><span >In a world where time is valuable, this saves time and boosts profits. Spending excessive time perfecting an engagement strategy can waste days, weeks, or even months that could be utilized for profit-making and connecting with the right audience.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Improve Visibility</span></h3>
                      <p dir="ltr" ><span >When you buy Facebook comments for your posts, you enhance your visibility and increase your chances of ranking higher within Facebook's algorithm.&nbsp;</span></p>
                      <p dir="ltr" ><span >By meeting the algorithm's requirements, such as active engagement and user interaction, your page gains prominence and attracts the attention of potential followers. This heightened visibility opens the door to expanding your customer base and increasing brand exposure.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Build Trust and Authority</span></h3>
                      <p dir="ltr" ><span >Buying Facebook comments can have a transformative effect on your Facebook credibility. A surge in engagement rates lends legitimacy to your posts, instilling a sense of trustworthiness in your target audience.&nbsp;</span></p>
                      <p dir="ltr" ><span >As users perceive you as an industry authority, they are more likely to trust your recommendations, engage with your content, and view your brand as a reliable source of information. This increased credibility paves the way for building lasting customer relationships and driving conversions.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Drive Sales and Conversions</span></h3>
                      <p dir="ltr" ><span >As your Facebook engagement and credibility soar, your ability to convert users into customers strengthens. When your target audience trusts your brand and recognizes your authority, the barriers to conversion diminish.&nbsp;</span></p>

                      <p dir="ltr" ><span >By nurturing these relationships through meaningful interactions, you can easily guide potential customers along their journey, increasing sales and conversions. This translates into measurable business growth and a higher return on investment.</span></p></div>
                  </div>
                </div>
              </div>
              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                    aria-controls="collapseThree">
                    <img src="./assets/child_logos/user-plus-bottom.png" className="mr-[10px]" alt="" />
                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Is Purchasing Facebook Comments Safe?</h5>
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show">
                      <p dir="ltr" ><span >As we discussed, purchasing Facebook comments is a strategic move to bolster your social media presence, and it has many benefits. However, you have to prioritize safety throughout the process.&nbsp;</span></p>
                      <p dir="ltr" ><span >Choosing a respectable and trustworthy service provider is the key to a safe experience.</span></p>
                      <p dir="ltr" ><span >When you decide to buy Facebook comments, you must select an entirely legitimate service provider. This protects a variety of factors, including your personal information, such as payment card information, the integrity of your Facebook account, and the reputation of your brand. You may reliably secure these critical factors by selecting a trusted platform like UseViral.</span></p>
                      <p dir="ltr" ><span >We at UseViral realize the importance of safety and emphasize our clients' privacy and security. Our platform provides a safe space where you may buy genuine and exciting comments from real individuals.&nbsp;</span></p>
                      <p dir="ltr" ><span >Each comment is meticulously constructed to correspond with your content and objectives, resulting in an organic and seamless interaction with your target audience.</span></p>
                      <p dir="ltr" ><span >You can reduce the risks of using unverified and untrustworthy websites by using UseViral's services. We have a proven track record of delivering high-quality comments from genuine individuals while protecting your personal and account information and keeping your brand's reputation.</span></p>

                      <p dir="ltr" ><span >Our platform follows Facebook's restrictions, protecting your account from potential penalties or inspection. We promote ethical and organic growth techniques, emphasizing the value of genuine involvement above artificial or automated methods that can jeopardize your safety and trustworthiness.</span></p></div>
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
                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why Should You Choose UseViral to Purchase Facebook Comments?</h5>
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >Not all comments are created equal, and irrelevant or subpar comments can damage your brand's reputation and decrease target audience trust.&nbsp;</span></p>
                      <p dir="ltr" ><span >UseViral is the ideal social media marketplace since it enables you to purchase Facebook comments which will help you gain popularity and success on any social networking site, particularly Facebook.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Superior Quality Comments</span></h3>
                      <p dir="ltr" ><span >We place a great priority on providing Facebook comments for sale that are engaging and authentic. You can be confident that the comments you receive will improve your brand's image, stimulate meaningful conversations, and build trust among your Facebook network.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Guaranteed Confidentiality and Safety</span></h3>
                      <p dir="ltr" ><span >We value your privacy and the confidentiality of your information. When you choose UseViral, you can be confident that no information you supply to us will be shared with any third-party websites.&nbsp;</span></p>
                      <p dir="ltr" ><span >UseViral employs strong customer authentication procedures to protect your information, from your Facebook account information to your billing information. You can confidently buy Facebook comments knowing that your information is secure with UseViral.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Customer satisfaction and transparency</span></h3>
                      <p dir="ltr" ><span >We believe in transparency and putting our clients' needs first. We not only provide the greatest quality comments on the market, but we also provide a 100% satisfaction guarantee.&nbsp;</span></p>
                      <p dir="ltr" ><span >If you are dissatisfied with the comments you receive, our platform offers a complete refund and a free refill within 30 days of purchase. This emphasis on openness and customer satisfaction displays our commitment to providing you with the best possible experience.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Increasing Genuine Engagement</span></h3>
                      <p dir="ltr" ><span >By purchasing comments from UseViral, you are increasing your business's visibility and fostering meaningful conversations with your audience.&nbsp;</span></p>
                      <p dir="ltr" ><span >Here you can buy targeted Facebook comments that initiate conversations, solicit feedback, and foster a community around your content. Experience the power of true engagement and see how it may improve your Facebook presence.</span></p>

                      <p dir="ltr" ><span >You can put your trust in our experience and allow us to assist you in achieving success through meaningful and honest connections.</span></p></div>
                  </div>
                </div>
              </div>
              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                    aria-controls="collapseFive">
                    <img src="./assets/child_logos/creative.png" className="mr-[10px]" alt="" />
                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">How to Buy Facebook Comments from UseViral</h5>
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >Another advantage to working with us is the simplicity of our purchasing process; just follow these steps:</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Determine Your Order Quantity&nbsp;</span></h3>
                      <p dir="ltr" ><span >The first step is to select a preferred package that suits your needs. UseViral offers a diverse range of comment quantities, each with its displayed price.&nbsp;</span></p>
                      <p dir="ltr" ><span >This gives you complete control and flexibility over the level of engagement you desire for your Facebook post. By choosing a package that aligns with your objectives, you can ensure that your desired level of engagement is achieved effortlessly.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Proceed to Purchase</span></h3>
                      <p dir="ltr" ><span >Now that you have determined your desired comment quantity, proceed to the next phase by clicking the "Buy Now" button. This will take you to the next page, where you will need to provide the necessary details to complete your purchase.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Provide Essential Information&nbsp;</span></h3>
                      <p dir="ltr" ><span >On the following page, provide your email address and the URL of the Facebook post you wish to promote. This ensures that the comments are directed to the correct post. Additionally, you will have the opportunity to provide custom comments.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Craft Custom Comments&nbsp;</span></h3>
                      <p dir="ltr" ><span >Crafting your own comments adds a personal touch to your Facebook post. It ensures that each comment is relevant to your brand, making them more authentic and engaging. This customization sets you apart from generic and spam comments, building trust and credibility with your audience.</span></p>
                      <h3 dir="ltr" className="h3 font-bold"  ><span >Secure Checkout&nbsp;</span></h3>
                      <p dir="ltr" ><span >Once you have provided all the necessary information, proceed to the secure checkout process. UseViral offers a variety of convenient payment methods, allowing you to choose the one that suits you best. Complete the transaction with confidence, knowing that your financial information is protected.</span></p>

                      <p dir="ltr" ><span >When your payment is processed, UseViral springs into action, swiftly delivering genuine Facebook comments to your chosen post. Our services enable you to enhance social proof, build credibility, and establish a strong online presence.&nbsp; Watch your engagement numbers rise, which solidifies your brand's credibility.</span></p></div>
                  </div>
                </div>
              </div>

              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                    aria-controls="collapseSix">
                    
                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">When can I contact customer care if I have any questions or concerns?</h5>
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >Our customer care team is available round-the-clock, 24/7, to assist you with any inquiries, concerns, or guidance. We understand that questions or issues can arise anytime, and we want to ensure you receive the support you deserve.&nbsp;</span></p>
                      <p dir="ltr" ><span >Whether you have a query about our services, need assistance with an order, or require guidance on the best strategy for your Facebook engagement, our dedicated customer care representatives are just a message or call away.&nbsp;</span></p>

                      <p dir="ltr" ><span >You can contact us whenever it is convenient, knowing that we are devoted to delivering timely and helpful assistance to ensure your satisfaction with our services.</span></p></div>
                  </div>
                </div>
              </div>
              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false"
                    aria-controls="collapseSeven">
                    
                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Do UseViral provides refunds if I am dissatisfied with my purchased Facebook comments?</h5>
                  </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show"><p dir="ltr" ><span >Yes, we cherish your satisfaction as a customer, and we have a refund policy for those dissatisfied with the Facebook comments they purchased. We recognize that there may be times when the comments do not satisfy your expectations or special criteria.&nbsp;</span></p>

                      <p dir="ltr" ><span >In such circumstances, we invite you to contact our customer service staff within a specific deadline, and we will evaluate your request as soon as possible. Our goal is to find a solution that meets your needs, which may include offering a refund for the purchased Facebook comments. We are committed to collaborating with you to address any problems and develop a solution that fulfills your requirements.</span></p></div>
                  </div>
                </div>
              </div>
              <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                <h2 className="accordion-header">
                  <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false"
                    aria-controls="collapseEight">
                    
                    <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Aside from Facebook comments, what other social media services do you offer?</h5>
                  </button>
                </h2>
                <div id="collapseEight" className="accordion-collapse collapse show" >
                  <div className="accordion-body border border-[#eee]">
                    <div class="panel show">
                      <p dir="ltr" ><span >In addition to Facebook comments, we provide various services for other social media networks. Instagram likes, YouTube views, Twitter followers, TikTok engagement, and more services are available through us. We work hard to provide complete solutions to help you improve your social media presence.</span></p></div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false"
                      aria-controls="collapseNine">
                      
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">What types of payment do you accept for purchasing Facebook comments?</h5>
                    </button>
                  </h2>
                  <div id="collapseNine" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >Regarding payment methods for buyingFacebook comments, we prioritize convenience and security. We accept major credit cards, debit cards, and reputable online payment platforms, as well as other secure payment methods.&nbsp;</span></p>

                        <p dir="ltr" ><span >During the checkout process, you can choose the most convenient and secure payment method. To protect your financial information, we ensure that all transactions are conducted using the greatest degree of encryption and security methods.</span></p></div>
                    </div>
                  </div>
                  <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                    <h2 className="accordion-header">
                      <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false"
                        aria-controls="collapseTen">
                        
                        <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Do you provide services for other well-known social media platforms?</h5>
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse show" >
                      <div className="accordion-body border border-[#eee]">
                        <div class="panel show"><p dir="ltr" ><span >Yes, we cater to the needs of numerous social media platforms to assist you in improving your online presence. We provide services for several other prominent social media networks besides Facebook.&nbsp;</span></p>

                          <p dir="ltr" ><span >We offer specialized solutions accessible if you need likes, views, followers, or interaction on platforms such as Instagram, YouTube, Twitter, TikTok, and others. Our complete set of services enables you to establish a strong presence and enhance engagement across different social media platforms.</span></p></div>
                      </div>
                    </div>
                    <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                      <h2 className="accordion-header">
                        <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                          data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false"
                          aria-controls="collapseEleven">
                          
                          <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">How long does it take for the paid Facebook comments to be delivered?</h5>
                        </button>
                      </h2>
                      <div id="collapseEleven" className="accordion-collapse collapse show" >
                        <div className="accordion-body border border-[#eee]">
                          <div class="panel show"><p dir="ltr" ><span >The time it takes to get purchased Facebook comments is determined by various factors, including the magnitude of your order. We strive for rapid delivery, with comments often arriving within a few hours to a few days.&nbsp;</span></p>

                            <p dir="ltr" ><span >Larger orders or bespoke requests, on the other hand, may necessitate more time to ensure the best quality and authenticity of the comments. You can be confident that we will make every attempt to deliver the feedback on time while protecting the integrity and efficacy of our services.</span></p></div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                      <h2 className="accordion-header">
                        <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                          data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false"
                          aria-controls="collapseTwelve">
                          
                          <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Are the Facebook comments made by genuine people or bots?</h5>
                        </button>
                      </h2>
                      <div id="collapseTwelve" className="accordion-collapse collapse show" >
                        <div className="accordion-body border border-[#eee]">
                          <div class="panel show"><p dir="ltr" ><span >We take pride in providing genuine engagement, and all of our Facebook comments are from real people. To generate comments, we do not use bots or automated systems.&nbsp;</span></p>

                            <p dir="ltr" ><span >Our network comprises genuine people who actively engage with the platform's content. When you buy Facebook comments cheap from us, you can be sure they are from real people with their thoughts and perspectives.</span></p></div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                      <h2 className="accordion-header">
                        <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                          data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false"
                          aria-controls="collapseThirteen">
                          
                          <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Can I change the content of the Facebook comments I buy?</h5>
                        </button>
                      </h2>
                      <div id="collapseThirteen" className="accordion-collapse collapse show" >
                        <div className="accordion-body border border-[#eee]">
                          <div class="panel show">
                            <p dir="ltr" ><span >Yes, we do provide personalization choices for the Facebook comments you buy. You can provide precise instructions or propose the type of comments you want during the ordering process. We strive to meet your needs to the best of our abilities, giving comments corresponding to your choices.</span></p></div>
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

export default FbBuyComments