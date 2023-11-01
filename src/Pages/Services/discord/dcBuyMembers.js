import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiCheckMark } from 'react-icons/gi'
import discordIcon from '../../../images/socialIcons/discord.webp'
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
const DcBuyMembers = () => {

  const [priceSelected, setPriceSelected] = useState("22.99€")
  console.log("priceSelected", priceSelected);
  return (
    <div id='insta' className='servicePage'>
      <div className='mb-16'>
        <div className="text-center pt-24">
          <h1 className="px-4 py-2  bg-gray-200 inline rounded-full text-sm font-bold mb-6">BUY DISCORD MEMBERS</h1>
          <h2 className="text-2xl tracking-tight leading-10 font-semibold  sm:text-4xl md:text-3xl mt-4 pt-2 text-[#4c4c4c] px-3"> Buy Discord Members with <br className="xl:hidden" />
            <span className="text-brand">Fast Delivery</span>
          </h2>
          <p className="mt-4 mx-auto text-sm text-gray-800 sm:text-md md:mt-5 md:text-[1.4rem] px-3  "> UseViral offers only the highest quality services. Buy safely and securely below:</p>
        </div>
        <div className='flex justify-center my-10 px-3'>
          <div className='flex-col flex items-center sm:px-3'>
            <div className='pricesSelect'>
              <select value={priceSelected} className="border !border-[#ed1c25] outline-none p-2 rounded-md youtube_channel" name="selectedPackageId" id="packageSelectBox" onChange={(e) => setPriceSelected(e.target.value)}>
                <option value="22.99€">100 Members - 22.99€</option>
                <option value="39.99€">250 Members - 39.99€</option>
                <option value="69.99€">500 Members -  69.99€</option>
                <option value="146.99€">1000 Members -  146.99€</option>
                <option value="269.99€">2000 Members -  269.99€</option>
                <option value="399.99€">5000 Members -  399.99€</option>
                <option value="719.99€">10000 Members -  719.99€</option>
                <option value="1099.99€">15000 Members -  1099.99€</option>
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
                  <span>High Quality Members</span>
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
              Members
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

        <h2 className='text-center h2 mb-10'>Our Other <span className="text-brand">Discord</span> Services: </h2>
        <div className='container max-w-[1300px] px-14'>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
            <div className="btn-group ">
              <Link to='/buy-dc-members' className="flex btn bg-brand text-white    after:ms-3  py-3 font-bold text-left ps-5 ">
                <img src={discordIcon} className='mr-3' /> Buy Discord Members
              </Link>
            </div>
            <div className="btn-group ">
              <Link to='/buy-dc-friendship-reqs' className="flex btn bg-blue text-white    after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={discordIcon} className='mr-3' /> Buy Discord Friendship Requests
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

                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why is Discord Members Important?</h5>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >As one of the biggest communication platforms on the internet, Discord has secured its place as one of the best applications.</span></p>
                        <p dir="ltr" ><span >With so many active users, it is more than an e-communication platform. Companies are starting to utilize technology to better connect with their audience. MidJurney AI, the image generation AI, is exclusively accessible to Discord.</span></p>
                        <p dir="ltr" ><span >Brands and content creators have to make use of this platform. However, the initial startup of a server is not an easy bump to overcome.</span></p>
                        <p dir="ltr" ><span >So what can you do?</span></p>
                        <p dir="ltr" ><span >You can buy Discord members using UseViral services!</span></p>
                        <p dir="ltr" ><span >As UseViral, we understand the significance of Discord members, including offline members, in cultivating a thriving and engaged community.&nbsp;</span></p>
                        <p dir="ltr" ><span >Offline members play a crucial role for several reasons. Firstly, they contribute to the growth and activity of your community by indicating its overall size and expansion.&nbsp;</span></p>
                        <p dir="ltr" ><span >A substantial number of online or offline members signifies a lively and thriving community that can attract new participants and encourage existing members to engage actively.</span></p>
                        <p dir="ltr" ><span >Moreover, offline members offer social proof and enhance the credibility of your Discord community.&nbsp;</span></p>
                        <p dir="ltr" ><span >When potential members join your server, they perceive a large and diverse member count as a testament to your community's popularity and trustworthiness. This perception can significantly influence their decision to join and actively participate.</span></p>
                        <p dir="ltr" ><span >Offline members also present opportunities for engagement within your Discord server.&nbsp;</span></p>
                        <p dir="ltr" ><span >Even though they may not be actively involved in real-time conversations, they can browse channels, read discussions, access resources, and engage with content conveniently.&nbsp;</span></p>
                        <p dir="ltr" ><span >This fosters a sense of community and provides avenues for interaction, even when members are offline.</span></p>
                        <p dir="ltr" ><span >Furthermore, offline members possess the potential to return and re-engage with your Discord server in the future.&nbsp;</span></p>
                        <p dir="ltr" ><span >They may have other commitments or reside in different time zones, making it challenging to be consistently online. However, by maintaining them as members, you can notify them of updates, events, and special promotions, increasing the likelihood of their active participation in the future.</span></p>
                        <p dir="ltr" ><span >At UseViral, we recognize the value of both online and offline Discord members. We offer services to help you grow your Discord community, including increasing your member count.&nbsp;</span></p>
                        <p><span id="docs-internal-guid-6156508f-7fff-5ca7-4827-5081bd85188f"></span></p>
                        <p dir="ltr" ><span >Expanding your member base can foster a vibrant and thriving community with active participation and ongoing engagement.</span></p></div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                      aria-controls="collapseThree">
                      <img src="./assets/child_logos/stctr.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why Should You Buy Discord Members?</h5>
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse show show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >As UseViral, there are several advantages you get when you buy targeted Discord members for your server. Here are a few key benefits:</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Boost Server Reputation</span></h3>
                        <p dir="ltr" ><span >As UseViral, we understand the importance of boosting your Discord server's reputation. If you buy Discord members for sale on our website, it can significantly enhance your server's perception of popularity and credibility.&nbsp;</span></p>
                        <p dir="ltr" ><span >Users seeing a server with a large member count creates a sense of trust and legitimacy, making them more likely to join and actively engage in discussions.&nbsp;</span></p>
                        <p dir="ltr" ><span >The increased activity and participation within your server can lead to a vibrant and thriving community, further enhancing its reputation.&nbsp;</span></p>
                        <p dir="ltr" ><span >By purchasing Discord members through UseViral, you can effectively establish a positive reputation for your server, making it more appealing to potential members and attracting a larger audience to your community.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Increase Engagement</span></h3>
                        <p dir="ltr" ><span >At UseViral, we recognize the significance of engagement in a thriving Discord community. If you increase Discord members through our services, you can significantly increase engagement within your server.&nbsp;</span></p>
                        <p dir="ltr" ><span >With a larger member base, more individuals are available for discussions, collaborations, and shared interests.&nbsp;</span></p>
                        <p dir="ltr" ><span >Additional members' diverse perspectives and expertise can foster a lively and dynamic environment where ideas are exchanged, conversations flourish, and connections are made.&nbsp;</span></p>
                        <p dir="ltr" ><span >Increased engagement not only enhances the overall experience for existing members but also attracts new members drawn to your server's active and vibrant nature.&nbsp;</span></p>
                        <p dir="ltr" ><span >This surge in engagement can create a positive feedback loop, as more participation leads to more stimulating discussions and a more profound sense of community.&nbsp;</span></p>
                        <p dir="ltr" ><span >By buying Discord members through UseViral, you can effectively stimulate activity within your server and cultivate a thriving and engaging environment for your community.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Enhance Server Growth</span></h3>
                        <p dir="ltr" ><span >At UseViral, we recognize the significance of growing a vibrant and thriving community on Discord.&nbsp;</span></p>
                        <p dir="ltr" ><span >That's why one of the advantages of buying offline members for your Discord server through our services is the ability to enhance server growth.&nbsp;</span></p>
                        <p dir="ltr" ><span >By increasing your member count, you create an immediate impact that catches the attention of potential new members.&nbsp;</span></p>
                        <p dir="ltr" ><span >When users see that your server is already active and well-populated, they are more inclined to join and engage in the discussions and activities happening within your community.</span></p>
                        <p dir="ltr" ><span >With a larger member base, your server becomes more appealing and enticing to users searching for active and dynamic communities.&nbsp;</span></p>
                        <p dir="ltr" ><span >As word spreads about your server's popularity and the value it provides to its members, the organic growth of your server can further accelerate.&nbsp;</span></p>
                        <p dir="ltr" ><span >New members are more likely to join and contribute to the ongoing conversations, leading to increased engagement and an enriched community experience.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Establish Niche Authority</span></h3>
                        <p dir="ltr" ><span >As UseViral, we understand the importance of establishing niche authority for your Discord server. You can position your server as a leading destination within your niche or community by acquiring many offline members.&nbsp;</span></p>
                        <p dir="ltr" ><span >The presence of numerous members demonstrates that your server is a go-to hub for discussions, knowledge-sharing, and networking related to the particular topics or interests you focus on.</span></p>
                        <p dir="ltr" ><span >When potential members see your server's authority and expertise in a specific niche, they are more likely to join and actively engage in discussions.&nbsp;</span></p>
                        <p dir="ltr" ><span >The perceived authority of your server can attract like-minded individuals who are passionate about the same topics or interests, creating a vibrant and engaged community.</span></p>
                        <p dir="ltr" ><span >Establishing niche authority opens doors to collaborations and partnerships with other individuals, groups, or organizations within your niche.&nbsp;</span></p>
                        <p dir="ltr" ><span >As your server becomes recognized as an authoritative source, you may have opportunities to collaborate on projects, share resources, or even organize events or initiatives together.&nbsp;</span></p>
                        <p><span id="docs-internal-guid-25e02a09-7fff-c3d5-1d46-266e8290d573"></span></p>
                        <p dir="ltr" ><span >These partnerships can further enhance your server's reputation and attract more eager members to be part of a thriving community.</span></p></div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                      aria-controls="collapseFive">
                      <img src="./assets/child_logos/user-plus-bottom.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Is It Safe To Buy Discord Members?</h5>
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >At UseViral, we prioritize the safety and security of our clients' Discord communities. We understand the importance of maintaining the integrity and authenticity of your server while boosting its growth and engagement. With that in mind, let us address the question: Is buying Discord members, specifically offline members safe?</span></p>
                        <p dir="ltr" ><span >If you buy real Discord members, including offline members, from unreliable sources can pose risks to your server and its community. However, when you choose UseViral, you can rest assured that our services are designed to ensure a safe and seamless experience.</span></p>
                        <p dir="ltr" ><span >Here's why it is safe to buy active Discord members, including offline members, with UseViral:</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Compliance with Discord Guidelines</span></h3>
                        <p dir="ltr" ><span >Compliance with Discord guidelines is of utmost importance to us at UseViral. We understand that maintaining the integrity and reputation of your server is crucial for its long-term success.&nbsp;</span></p>
                        <p dir="ltr" ><span >Our methods and strategies are carefully crafted to align with Discord's guidelines and terms of service, ensuring that your server remains in good standing.</span></p>
                        <p dir="ltr" ><span >When you buy Discord members from UseViral, you can trust that our practices fully comply with Discord's rules.&nbsp;</span></p>
                        <p dir="ltr" ><span >We do not use any tactics or techniques that could jeopardize your server or put it at risk of being flagged or penalized.&nbsp;</span></p>
                        <p dir="ltr" ><span >Our focus is on delivering real and active members to enhance your community's engagement and growth while always adhering to the platform's guidelines.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Privacy and Confidentiality</span></h3>
                        <p dir="ltr" ><span >At UseViral, we value your privacy and prioritize the confidentiality of your information when you purchase Discord members from us.&nbsp;</span></p>
                        <p dir="ltr" ><span >We understand that privacy is a significant concern for our clients, and we take extensive measures to ensure the security of your data.</span></p>
                        <p dir="ltr" ><span >When you buy&nbsp; Discord members from UseViral, rest assured that we do not share sensitive data or disclose client details to third parties.&nbsp;</span></p>
                        <p dir="ltr" ><span >We have implemented robust security protocols to safeguard your information and maintain confidentiality.</span></p>
                        <p dir="ltr" ><span >Our team of professionals strictly adheres to industry best practices to protect your privacy.&nbsp;</span></p>
                        <p dir="ltr" ><span >We use secure and encrypted platforms for all transactions and communications, ensuring your personal and payment information remains confidential.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Real and Active Members</span></h3>
                        <p dir="ltr" ><span >At UseViral, we deliver real and active Discord members to help enhance your community.&nbsp;</span></p>
                        <p dir="ltr" ><span >We understand the importance of having members who are genuinely interested in your community's niche or topic.&nbsp;</span></p>
                        <p dir="ltr" ><span >That's why we employ organic methods to source members who can contribute meaningfully to discussions, participate in events, and engage with other members.</span></p>
                        <p dir="ltr" ><span >When you buy real active Discord members from UseViral, you can expect a vibrant and active community that fosters valuable interactions and discussions.&nbsp;</span></p>
                        <p><span id="docs-internal-guid-4097b8b6-7fff-47c5-8487-67dde736a79c"></span></p>
                        <p dir="ltr" ><span >These real and active members bring diverse perspectives, expertise, and interests, adding depth and richness to your server. They can share insights, provide feedback, and contribute to the growth and engagement of your community.</span></p></div>
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
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Why Should You Choose UseViral To Buy Discord Members?</h5>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >At UseViral, we understand the importance of building a thriving and engaged community on Discord. That's why we offer a reliable and efficient solution for buying Discord members. Here's why you should choose UseViral for your Discord growth:</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >10 Years Experience</span></h3>
                        <p dir="ltr" ><span >At UseViral, our ten years of experience in the social media marketing have provided us with invaluable knowledge and expertise in social media growth services.&nbsp;</span></p>
                        <p dir="ltr" ><span >We have made a name for our brand as a trusted name in the field, delivering high-quakity results for our clients. Our extensive experience has given us a deep understanding of the dynamics of online communities, including Discord.</span></p>
                        <p dir="ltr" ><span >We have worked with numerous clients, helping them build and maintain active and engaged Discord communities.&nbsp;</span></p>
                        <p dir="ltr" ><span >We understand the intricacies of fostering a thriving online community, from cultivating meaningful interactions to promoting a positive and inclusive environment.&nbsp;</span></p>
                        <p dir="ltr" ><span >Our experience allows us to provide tailored solutions that address the unique challenges and opportunities that arise in Discord communities.</span></p>
                        <p dir="ltr" ><span >Through our years of working with diverse clients, we have developed strategies and insights that enable us to drive growth and engagement on Discord.&nbsp;</span></p>
                        <p dir="ltr" ><span >We are well-versed in the platform's features, functionalities, and best practices. This knowledge allows us to develop effective growth strategies that align with your community's goals and maximize its potential.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Affordable Price</span></h3>
                        <p dir="ltr" ><span >At UseViral, we strive to make our services accessible to community owners of all sizes and budgets.&nbsp;</span></p>
                        <p dir="ltr" ><span >We understand that affordability is a crucial consideration for growing your Discord community. That's why we offer competitive pricing options, to allow anyone to buy Discord members cheap.</span></p>
                        <p dir="ltr" ><span >Our goal is to provide high-quality services at a price that delivers exceptional value for your investment.&nbsp;</span></p>
                        <p dir="ltr" ><span >We believe cost-effectiveness shouldn't compromise the quality of the service you receive. With UseViral, you can rest assured that you're getting the best possible service at an affordable price.</span></p>
                        <p dir="ltr" ><span >We have carefully designed our pricing options to cater to the diverse needs of community owners. Whether you're just starting or looking to expand an existing community, we have flexible pricing plans to suit your requirements.&nbsp;</span></p>
                        <p dir="ltr" ><span >Our pricing structure reflects our commitment to delivering value and helping you maximize your return on investment.</span></p>
                        <h3 dir="ltr" className="h3 font-bold"  ><span >Dedicated and Knowledgeable Customer Service</span></h3>
                        <p dir="ltr" ><span >At UseViral, we understand the importance of providing exceptional customer service to our clients.&nbsp;</span></p>
                        <p dir="ltr" ><span >Our dedicated support team is here to assist you every step of the way in your Discord growth journey. We believe clear communication and prompt assistance ensure a smooth experience.</span></p>
                        <p dir="ltr" ><span >Our support team consists of knowledgeable professionals well-versed in Discord and its intricacies. We understand community owners' challenges when growing and managing their Discord communities.&nbsp;</span></p>
                        <p><span id="docs-internal-guid-78572340-7fff-24f2-3509-09472f7405f3"></span></p>
                        <p dir="ltr" ><span >Whether you have questions about our services, need guidance on choosing the right package, or require assistance, our team is ready to help.</span></p></div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                      aria-controls="collapseFour">
                      <img src="./assets/child_logos/creative.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">How do I Buy Discord Members with UseViral?</h5>
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p><span id="docs-internal-guid-94312575-7fff-eb52-7698-3c677c133547"></span></p>
                        <ol >
                          <li dir="ltr"  aria-level="1">
                            <p dir="ltr" role="presentation"><span >Visit the UseViral website: Start by visiting our official website at www.useviral.com. Our platform is user-friendly and designed to provide a seamless experience.</span></p>
                          </li>
                          <li dir="ltr"  aria-level="1">
                            <p dir="ltr" role="presentation"><span >Select Discord Members service: Browse our services and select the "Discord Members" option. This will take you to the dedicated page for where you can buy Discord members.</span></p>
                          </li>
                          <li dir="ltr"  aria-level="1">
                            <p dir="ltr" role="presentation"><span >Choose the package: We offer various packages to suit your needs and goals. Select the package that aligns with the number of offline members you wish to add to your Discord community. We provide transparent information about the number of members included in each package.</span></p>
                          </li>
                          <li dir="ltr"  aria-level="1">
                            <p dir="ltr" role="presentation"><span >Customize your order: If you have specific preferences or requirements, you can customize your order accordingly. For example, you may want to target specific regions or specify additional instructions for the members you want to add.</span></p>
                          </li>
                          <li dir="ltr"  aria-level="1">
                            <p dir="ltr" role="presentation"><span >Add to cart and proceed to checkout: Once you have finalized your package and any customizations, add the desired number of offline members. Then, proceed to the checkout page.</span></p>
                          </li>
                          <li dir="ltr"  aria-level="1">
                            <p dir="ltr" role="presentation"><span >Provide necessary information: On the checkout page, you will be prompted to provide the necessary information, such as your Discord server details. Enter accurate and up-to-date information to ensure a smooth delivery process.</span></p>
                          </li>
                          <li dir="ltr"  aria-level="1">
                            <p dir="ltr" role="presentation"><span >Make the payment: Choose your preferred payment method from the available options and proceed with the payment. UseViral ensures a secure and reliable payment process.</span></p>
                          </li>
                          <li dir="ltr"  aria-level="1">
                            <p dir="ltr" role="presentation"><span >Sit back and relax: Our team will begin processing your order after completing the payment. We work efficiently to add the requested number of offline members to your Discord community. You can expect the members to be added gradually within the estimated delivery time.</span></p>
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

                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Can I choose specific regions or demographics for the added Discord members?</h5>
                    </button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >Absolutely! At UseViral, we understand the importance of reaching the right audience for your Discord community.&nbsp;</span></p>
                        <p dir="ltr" ><span >That's why we offer the option to choose specific regions or demographics when adding Discord members to your community.</span></p>
                        <p dir="ltr" ><span >By selecting specific regions, you can focus on building a local community or targeting users from a particular geographical area.&nbsp;</span></p>
                        <p dir="ltr" ><span >This can be beneficial if you want to connect with users who share common interests or are located in a specific region.</span></p>
                        <p dir="ltr" ><span >Moreover, our demographic targeting options allow you to specify the characteristics of the members you want to add to your Discord community. You can target based on age, gender, language, and interests.&nbsp;</span></p>
                        <p><span id="docs-internal-guid-1304fd47-7fff-77a9-8c63-fa8de31a60cd"></span></p>
                        <p dir="ltr" ><span >This level of customization ensures that the added members align with your target audience, increasing the chances of meaningful engagement and interactions within your community.</span></p></div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false"
                      aria-controls="collapseSeven">

                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Are the Discord members real users?</h5>
                    </button>
                  </h2>
                  <div id="collapseSeven" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >At UseViral, we prioritize authenticity and genuine engagement. When you purchase Discord members from us, you can rest assured that the members added to your community are real users.&nbsp;</span></p>
                        <p dir="ltr" ><span >Our services don’t rely on bots or fake accounts; we focus on building a thriving and interactive community for you.</span></p>
                        <p dir="ltr" ><span >We understand the importance of having active and engaged members in your Discord community.&nbsp;</span></p>
                        <p dir="ltr" ><span >That's why we take extra care to ensure that the members we add are genuine users who can contribute meaningfully to discussions, share insights, and participate in community activities.</span></p>
                        <p><span id="docs-internal-guid-a2d42f8f-7fff-e1b4-69a3-a80ea73662b4"></span></p>
                        <p dir="ltr" ><span >Adding real users to your Discord community can foster a vibrant and dynamic environment where members actively interact, exchange ideas, and build relationships. These genuine members can bring valuable perspectives and enhance the overall engagement within your community.</span></p></div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false"
                      aria-controls="collapseEight">

                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">What information do I need to provide to purchase Discord members?</h5>
                    </button>
                  </h2>
                  <div id="collapseEight" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div class="panel show"><p dir="ltr" ><span >Certainly! When purchasing Discord members with UseViral, it is important to provide the necessary information to ensure a smooth and accurate delivery process.&nbsp;</span></p>
                        <p dir="ltr" ><span >The information required includes your Discord server details, specifically the server ID or invite link.</span></p>
                        <p dir="ltr" ><span >The server ID is a unique identifier assigned to each Discord server and can be found in the server settings.&nbsp;</span></p>
                        <p dir="ltr" ><span >It helps us identify and locate the community where we want the members to be added. Alternatively, you can provide the invite link, which allows our team to join your server directly.</span></p>
                        <p dir="ltr" ><span >By providing the server ID or invite link, you enable us to target and add the members to your Discord community precisely.&nbsp;</span></p>
                        <p dir="ltr" ><span >This ensures that the members are added to the correct server, providing a seamless experience and accurate delivery of the purchased members.</span></p>
                        <p dir="ltr" ><span >Rest assured that the information you provide is handled with the utmost confidentiality and is only used to deliver Discord members to your community.&nbsp;</span></p>
                        <p><span id="docs-internal-guid-20fef48e-7fff-6af9-e5e0-85922d71535a"></span></p>
                        <p dir="ltr" ><span >We prioritize the security and privacy of our customer's data, and our commitment is to maintain the highest data protection standards.</span></p></div>
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

export default DcBuyMembers
