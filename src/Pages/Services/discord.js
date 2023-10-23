import React from 'react'
import followersIcon from '../../images/socialIcons/followers.webp'
import { Link } from 'react-router-dom'
import discordIcon from '../../images/socialIcons/discord.webp'
const Discord = () => {
  return (
    <div id='dc' className='servicePage'>
      <div className='bg-[#f7f7fb] pb-32'>
        <div className="py-20 m-auto main_top_section_inner_container text-center mx-4">
          <h2 className="text-4xl tracking-tight font-extrabold text-black sm:text-5xl md:text-[3.75rem] leading-[1.2]">
            Discord Promotion Service </h2>
          <h1 className="mt-5 max-w-md mx-auto text-black md:mt-5 text-[1.625rem] md:max-w-3xl text-source-sans-pro leading-1-3">
            Buy Real Discord Promotions with quick delivery, click the dropdowns below: </h1>
        </div>

        <div className='container max-w-[1300px] px-14'>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
            <div className="btn-group ">
              <Link className="flex btn bg-brand text-white    after:ms-3  py-3 font-bold text-left ps-5 ">
                <img src={discordIcon} className='mr-3' /> Buy Discord Members
              </Link>

            </div>
            <div className="btn-group ">
              <Link className="flex btn bg-blue text-white    after:ms-3  py-3 font-bold text-left ps-5 " >
                <img src={discordIcon} className='mr-3' /> Buy Discord Friendship Requests
              </Link>

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
                      <img src="./assets/child_logos/Thinking.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">How do we guarantee that our reviews are genuine?</h5>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div className="panel show">
                        <p className='text-center'>A problem that a lot of people face in this industry is whether the reviews are authentic or not. These days, it is all too easy for companies to produce fake reviews, that they can then feature on their website, and claim are genuine. This is obviously going to make them look good in the short term, but in the long term, it is going to be their downfall, because eventually, their clients will discover the sham, and they will lose their reputation, along with their existing clients. We guarantee that our client reviews are genuine, because we only accept reviews from real clients, and we never ask our clients to say good things about our features. We simply work on producing premium quality features from our end so that our clients are naturally inclined to want to send us positive feedback, which can then help you determine whether you want to work with us or not. We go to great lengths to avoid anything that appears to be less than completely authentic, because we don't want to share disingenuous reviews on our website, that could lead you astray.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                      aria-controls="collapseThree">
                      <img src="./assets/child_logos/stctr.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">Do we accept all different types of feedback?</h5>
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse show show" >
                    <div className="accordion-body border border-[#eee]">
                      <div className="panel show">
                        <p className='text-center'>We are more than happy to accept all kinds of different feedback, given our existing reputation and history. We don't want to just receive positive feedback, because this isn't prudent to our progress as a company. Our mission is to not only provide the best quality features for our clients, but we also want to be able to listen to our client’sneeds andmake adjustments where necessary. This is why we are more than happy to accept both positive and negative reviews, so that we can be moving forward as a company and providing our clients with the best experience possible. We might not necessarily feature all of our negative feedback on our website, especially if we have taken constructive criticism on board, and then applied it directly to our features in order to improve them. You are more than welcome to get in touch with us to if you have any further questions about the type of feedback that you can send through to us.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                      aria-controls="collapseFive">
                      <img src="./assets/child_logos/user-plus-bottom.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">How do we vet our reviews?</h5>
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div className="panel show">
                        <p className='text-center'>As well as having a team of experts that work on developing our features for us consistently, we also make sure to have members of our team that are vetting all of the reviews that we receive, so that we can make sure that we are only featuring genuine reviews on our website about our features. Our team ensures that the reviews that we receive are not only genuine, but are relevant to our features, and aren't generic in any way. There is the risk in this industry that a bot, or automated software has come up with a generic review, that has nothing to do with the validity, or the reputation of our features. This is why it is really important for us to provide our clients with the guarantee that we vet all of our reviews, so that you can feel confident that the reviews you read above have a high level of relevance to our features, andreflect what you can expect when it comes to working with us.</p>
                      </div>
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
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">How do we determine the validity of our reviews?</h5>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div className="panel">
                        <p className='text-center'>The validity of our reviews is really important to us, which is why we make sure that every review we receive is the real deal. We achieve this by looking into the people that leave the reviews; this includes looking into the profile of the person who has left the review, and ensuring that they are who they claim to be. We don't accept reviews from fake profiles, just like we don't accept reviews from automated software, that is producing a generic review. We want to make sure that you are reading valid reviews, that accurately reflect the experience our existing clients have had with our features.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                      aria-controls="collapseFour">
                      <img src="./assets/child_logos/creative.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm ">What can I expect from your customer support?</h5>
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div className="panel show">
                        <p className='text-center'>You're probably wondering what you can expect when it comes to our customer support when working with us. Here at UseViral, we are determined to provide our clients with the best experience possible when it comes to our customer support, which is why we have a dedicated team of professionals behind the scenes that are working constantly not only on our features, but on being able to provide you with some of the best customer support you'll experience in the industry. This way, you're going to be able to talk to us directly about any issues you might be having with our features and you won't have to wait in a long line to be seen. You'll be able to have a personal experience with us, and you will feel like you are really taken care of.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                      aria-controls="collapseSix">
                      <img src="./assets/child_logos/solve.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Do you just accept customer reviews?</h5>
                    </button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div className="panel show">
                        <p className='text-center'>Anybody can leave a review about our features on our website, but as far as what we prefer, it is better for us to accept reviews that have been left by existing clients. This way, you can get an accurate representation of the experience you might have if you were to sign up for our features. We want you to be able to read first-hand how other people have experienced our features and our reputation in the industry, so that we are able to have a good working relationship with you going forward.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                  <h2 className="accordion-header">
                    <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false"
                      aria-controls="collapseSeven">
                      <img src="./assets/child_logos/solve.png" className="mr-[10px]" alt="" />
                      <h5 className=" mb-0   font-bold text-[20px] text-[#444] max-sm:text-sm">Do you edit the content of the reviews?</h5>
                    </button>
                  </h2>
                  <div id="collapseSeven" className="accordion-collapse collapse show" >
                    <div className="accordion-body border border-[#eee]">
                      <div className="panel show">
                        <p className='text-center'>We want to be as upfront and honest with our clients as possible, especially from the beginning. This way, you can feel confident that you're going to be able to have a good working relationship with us in the future going forward. One of the ways that we achieve this is by accepting all the reviews that we receive and avoiding editing any of the content of the reviews. As we've already talked about, if we receive a negative review, we apply this directly to our features, so that they can be approved upon, so while you might not necessarily see all of the negative reviews that we receive, we strive to maintain as much transparency and honesty with our clients as possible. We want our existing clients to be able to communicate exactly how they feel about our features, which is why we don't edit the content of the reviews that you see above.</p>
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

export default Discord