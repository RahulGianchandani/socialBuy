import React from 'react'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CustomerReviews = () => {
    var settings = {
        infinite: true,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 12000,
        autoplaySpeed: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    var settings2 = {
        infinite: true,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        rtl: true,
        autoplay: true,
        speed: 12000,
        autoplaySpeed: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <div id='customerReview'>



            <div id='reviewSection' className='max-sm:px-7 mb-20'>
                <h1 className="text-center text-[2.25rem] tracking-tight font-extrabold text-black sm:text-[2.5rem] leading-1-2 mt-20">Curious what others are saying<br />about FameDaddy?
                </h1>
                <p className="text-center mt-4 max-w-md mx-auto mb-14 text-black md:mt-5 text-[1.625rem] md:max-w-3xl text-source-sans-pro leading-1-3">Read some of our customer reviews below.
                </p>
                <Slider slickPlay {...settings}>
                    <div class="review_item" >
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-2/3 text-left px-4 table">
                                <div class="profile_img_div display_table_cell align-middle">
                                    <img src="https://source.unsplash.com/shallow-focus-photography-of-woman-outdoor-during-day-rDEOVtE7vOs" />
                                </div>
                                <div class="profile_text_div border-0 display_table_cell align-middle">
                                    <div class="text-454545 reviews_username">Sebastian Clark</div>
                                    <div class="reviews_followers">31.3k Friend Requests</div>
                                </div>
                            </div>
                            <div class="md:w-1/3 text-center pt-4 px-4">
                                <div class="reviews_verified">
                                    <span class="verify_text">VERIFIED</span>
                                </div>
                            </div>
                        </div>
                        <div class="!pt-2">
                            <div class="paragraph_text text-left text-707070">Was so easy to get started, signed up and got setup within a few hours now I’m watching my traffic grow.</div>
                        </div>
                    </div>
                    <div class="review_item" >
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-2/3 text-left px-4 table">
                                <div class="profile_img_div display_table_cell align-middle">
                                    <img src="https://source.unsplash.com/man-wearing-henley-top-portrait-7YVZYZeITc8" />
                                </div>
                                <div class="profile_text_div border-0 display_table_cell align-middle">
                                    <div class="text-454545 reviews_username">Joshua Macdonald</div>
                                    <div class="reviews_followers">13.9k Friend Requests</div>
                                </div>
                            </div>
                            <div class="md:w-1/3 text-center pt-4 px-4">
                                <div class="reviews_verified">
                                    <span class="verify_text">VERIFIED</span>
                                </div>
                            </div>
                        </div>
                        <div class="pt-2">
                            <div class="paragraph_text text-center text-707070">5 stars! More fans and more fun! I love TikTok! #fyp #foryoupage</div>
                        </div>
                    </div>
                    <div class="review_item" >
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-2/3 text-left px-4 table">
                                <div class="profile_img_div display_table_cell align-middle">
                                    <img src="https://source.unsplash.com/woman-wearing-black-crew-neck-shirt-3TLl_97HNJo" />
                                </div>
                                <div class="profile_text_div border-0 display_table_cell align-middle">
                                    <div class="text-454545 reviews_username">Oscar Ward</div>
                                    <div class="reviews_followers">16.8k Friend Requests</div>
                                </div>
                            </div>
                            <div class="md:w-1/3 text-center pt-4 px-4">
                                <div class="reviews_verified">
                                    <span class="verify_text">VERIFIED</span>
                                </div>
                            </div>
                        </div>
                        <div class="pt-2">
                            <div class="paragraph_text text-center text-707070">Was skeptical at first but decided to give it ago, I’ll be using this for a long time now. Love it!</div>
                        </div>
                    </div>
                    <div class="review_item" >
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-2/3 text-left px-4 table">
                                <div class="profile_img_div display_table_cell align-middle">
                                    <img src="https://source.unsplash.com/man-standing-beside-wall-pAtA8xe_iVM" />
                                </div>
                                <div class="profile_text_div border-0 display_table_cell align-middle">
                                    <div class="text-454545 reviews_username">Nathan Wood</div>
                                    <div class="reviews_followers">18k Friend Requests</div>
                                </div>
                            </div>
                            <div class="md:w-1/3 text-center pt-4 px-4">
                                <div class="reviews_verified">
                                    <span class="verify_text">VERIFIED</span>
                                </div>
                            </div>
                        </div>
                        <div class="pt-2">
                            <div class="paragraph_text text-center text-707070">Getting real Friend Requests on autopilot has never been easier, this is such a great tool to get famous.</div>
                        </div>
                    </div>
                    <div class="review_item" >
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-2/3 text-left px-4 table">
                                <div class="profile_img_div display_table_cell align-middle">
                                    <img src="https://source.unsplash.com/man-wearing-white-v-neck-shirt-iFgRcqHznqg" />
                                </div>
                                <div class="profile_text_div border-0 display_table_cell align-middle">
                                    <div class="text-454545 reviews_username">Ewan Ross</div>
                                    <div class="reviews_followers">25k Friend Requests</div>
                                </div>
                            </div>
                            <div class="md:w-1/3 text-center pt-4 px-4">
                                <div class="reviews_verified">
                                    <span class="verify_text">VERIFIED</span>
                                </div>
                            </div>
                        </div>
                        <div class="pt-2">
                            <div class="paragraph_text text-center text-707070">This has been amazing for my company account it’s helped us attract more customers.</div>
                        </div>
                    </div><div class="review_item" >
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-2/3 text-left px-4 table">
                                <div class="profile_img_div display_table_cell align-middle">
                                    <img src="https://source.unsplash.com/smiling-woman-in-shallow-focus-photography-_H6wpor9mjs" />
                                </div>
                                <div class="profile_text_div border-0 display_table_cell align-middle">
                                    <div class="text-454545 reviews_username">Vihaan Singleton</div>
                                    <div class="reviews_followers">29.6k Friend Requests</div>
                                </div>
                            </div>
                            <div class="md:w-1/3 text-center pt-4 px-4">
                                <div class="reviews_verified">
                                    <span class="verify_text">VERIFIED</span>
                                </div>
                            </div>
                        </div>
                        <div class="pt-2">
                            <div class="paragraph_text text-center text-707070">Highly recommend, friendly staff who want to see you grow.</div>
                        </div>
                    </div>
                    <div class="review_item" >
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-2/3 text-left px-4 table">
                                <div class="profile_img_div display_table_cell align-middle">
                                    <img src="https://source.unsplash.com/mans-grey-and-black-shirt-ILip77SbmOE" />
                                </div>
                                <div class="profile_text_div border-0 display_table_cell align-middle">
                                    <div class="text-454545 reviews_username">Wayne Powell</div>
                                    <div class="reviews_followers">16.5k Friend Requests</div>
                                </div>
                            </div>
                            <div class="md:w-1/3 text-center pt-4 px-4">
                                <div class="reviews_verified">
                                    <span class="verify_text">VERIFIED</span>
                                </div>
                            </div>
                        </div>
                        <div class="pt-2">
                            <div class="paragraph_text text-center text-707070">I’ve been growing over 1,000 fans a week I’m so excited and happy I found this.</div>
                        </div>
                    </div>
                    <div class="review_item" >
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-2/3 text-left px-4 table">
                                <div class="profile_img_div display_table_cell align-middle">
                                    <img src="https://source.unsplash.com/woman-wearing-blue-coat-7uoMmzPd2JA" />
                                </div>
                                <div class="profile_text_div border-0 display_table_cell align-middle">
                                    <div class="text-454545 reviews_username">Matthew Shepherd</div>
                                    <div class="reviews_followers">26k Friend Requests</div>
                                </div>
                            </div>
                            <div class="md:w-1/3 text-center pt-4 px-4">
                                <div class="reviews_verified">
                                    <span class="verify_text">VERIFIED</span>
                                </div>
                            </div>
                        </div>
                        <div class="pt-2">
                            <div class="paragraph_text text-center text-707070">FameDaddy really works, its helped me reach more users and grow on tiktok! I’ve had alot more duet requests!! Yay!</div>
                        </div>
                    </div>
                    <div class="review_item" >
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-2/3 text-left px-4 table">
                                <div class="profile_img_div display_table_cell align-middle">
                                    <img src="https://source.unsplash.com/smiling-woman-wearing-blue-necklace-6qf1uljGpU4" />
                                </div>
                                <div class="profile_text_div border-0 display_table_cell align-middle">
                                    <div class="text-454545 reviews_username">Emory Goodwin</div>
                                    <div class="reviews_followers">22.7k Friend Requests</div>
                                </div>
                            </div>
                            <div class="md:w-1/3 text-center pt-4 px-4">
                                <div class="reviews_verified">
                                    <span class="verify_text">VERIFIED</span>
                                </div>
                            </div>
                        </div>
                        <div class="pt-2">
                            <div class="paragraph_text text-center text-707070">Was so easy to get started, signed up and got set up within a few hours now I’m watching my Friend Requests grow!</div>
                        </div>
                    </div>
                </Slider>
                <Slider className='mt-4' slickPlay {...settings2}>
                    <div class="review_item">
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-2/3 text-left px-4 table">
                                <div class="profile_img_div display_table_cell align-middle">
                                    <img src="https://source.unsplash.com/closeup-photography-of-woman-smiling-mEZ3PoFGs_k" />
                                </div>
                                <div class="profile_text_div border-0 display_table_cell align-middle">
                                    <div class="text-454545 reviews_username">Kian Fisher</div>
                                    <div class="reviews_followers">31.1k Friend Requests</div>
                                </div>
                            </div>
                            <div class="md:w-1/3 text-center pt-4 px-4">
                                <div class="reviews_verified">
                                    <span class="verify_text">VERIFIED</span>
                                </div>
                            </div>
                        </div>
                        <div class="!pt-2">
                            <div class="paragraph_text text-center text-707070">It’s been seamless from beginning to end! I’ve worked with other similar services and have never encountered a better system than at Growthoid. 5 stars from me.</div>
                        </div>
                    </div>
                    <div class="review_item">
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-2/3 text-left px-4 table">
                                <div class="profile_img_div display_table_cell align-middle">
                                    <img src="https://source.unsplash.com/man-in-black-jacket-smiling-a19OVaa2rzA" />
                                </div>
                                <div class="profile_text_div border-0 display_table_cell align-middle">
                                    <div class="text-454545 reviews_username">Lily Hawkins</div>
                                    <div class="reviews_followers">48.1k Friend Requests</div>
                                </div>
                            </div>
                            <div class="md:w-1/3 text-center pt-4 px-4">
                                <div class="reviews_verified">
                                    <span class="verify_text">VERIFIED</span>
                                </div>
                            </div>
                        </div>
                        <div class="!pt-2">
                            <div class="paragraph_text text-center text-707070">I’ve had nothing but a great experience with FameDaddy! I've got only real Friend Requests who care about my content and profile. Awesome.</div>
                        </div>
                    </div>
                    <div class="review_item">
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-2/3 text-left px-4 table">
                                <div class="profile_img_div display_table_cell align-middle">
                                    <img src="https://source.unsplash.com/man-wearing-gray-dress-shirt-yA2NU-Z00aY" />
                                </div>
                                <div class="profile_text_div border-0 display_table_cell align-middle">
                                    <div class="text-454545 reviews_username">Ava King</div>
                                    <div class="reviews_followers">23.2k Friend Requests</div>
                                </div>
                            </div>
                            <div class="md:w-1/3 text-center pt-4 px-4">
                                <div class="reviews_verified">
                                    <span class="verify_text">VERIFIED</span>
                                </div>
                            </div>
                        </div>
                        <div class="!pt-2">
                            <div class="paragraph_text text-center text-707070">FameDaddy is responsible for most of my Friend Requests. Don't think it's just a free ride because you have to put in time and effort on your end for it to work.</div>
                        </div>
                    </div>
                    <div class="review_item">
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-2/3 text-left px-4 table">
                                <div class="profile_img_div display_table_cell align-middle">
                                    <img src="https://source.unsplash.com/man-wearing-black-and-white-top-7omHUGhhmZ0" />
                                </div>
                                <div class="profile_text_div border-0 display_table_cell align-middle">
                                    <div class="text-454545 reviews_username">Rosie Chapman</div>
                                    <div class="reviews_followers">28.2k Friend Requests</div>
                                </div>
                            </div>
                            <div class="md:w-1/3 text-center pt-4 px-4">
                                <div class="reviews_verified">
                                    <span class="verify_text">VERIFIED</span>
                                </div>
                            </div>
                        </div>
                        <div class="!pt-2">
                            <div class="paragraph_text text-center text-707070">We quickly discovered how great this was. In a matter of 24 hours we began to see a steady increase in Friend Requests AND engagement.</div>
                        </div>
                    </div>
                    <div class="review_item">
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-2/3 text-left px-4 table">
                                <div class="profile_img_div display_table_cell align-middle">
                                    <img src="https://source.unsplash.com/man-wearing-black-crew-neck-shirt-d2MSDujJl2g" />
                                </div>
                                <div class="profile_text_div border-0 display_table_cell align-middle">
                                    <div class="text-454545 reviews_username">Sarah Cook</div>
                                    <div class="reviews_followers">31k Friend Requests</div>
                                </div>
                            </div>
                            <div class="md:w-1/3 text-center pt-4 px-4">
                                <div class="reviews_verified">
                                    <span class="verify_text">VERIFIED</span>
                                </div>
                            </div>
                        </div>
                        <div class="!pt-2">
                            <div class="paragraph_text text-center text-707070">Had a bit of confusion when onboarding at the start and wasn't sure what was happening. But after I reached out to them they cleared up all confusion.</div>
                        </div>
                    </div>
                    <div class="review_item">
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-2/3 text-left px-4 table">
                                <div class="profile_img_div display_table_cell align-middle">
                                    <img src="https://source.unsplash.com/grayscale-photography-of-man-smiling-rriAI0nhcbc" />
                                </div>
                                <div class="profile_text_div border-0 display_table_cell align-middle">
                                    <div class="text-454545 reviews_username">Skye Butler</div>
                                    <div class="reviews_followers">33.5k Friend Requests</div>
                                </div>
                            </div>
                            <div class="md:w-1/3 text-center pt-4 px-4">
                                <div class="reviews_verified">
                                    <span class="verify_text">VERIFIED</span>
                                </div>
                            </div>
                        </div>
                        <div class="!pt-2">
                            <div class="paragraph_text text-center text-707070">Incredible experience so far, Tony my account manager has been a tremendous help and he's really made me want to go out of my way to thank him.</div>
                        </div>
                    </div>
                    <div class="review_item">
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-2/3 text-left px-4 table">
                                <div class="profile_img_div display_table_cell align-middle">
                                    <img src="https://source.unsplash.com/a-woman-in-a-white-tank-top-posing-for-a-picture-zfiAa8dhtBM" />
                                </div>
                                <div class="profile_text_div border-0 display_table_cell align-middle">
                                    <div class="text-454545 reviews_username">Makenna Pennington</div>
                                    <div class="reviews_followers">28k Friend Requests</div>
                                </div>
                            </div>
                            <div class="md:w-1/3 text-center pt-4 px-4">
                                <div class="reviews_verified">
                                    <span class="verify_text">VERIFIED</span>
                                </div>
                            </div>
                        </div>
                        <div class="!pt-2">
                            <div class="paragraph_text text-center text-707070">Well, honestly i wasn't expecting such a fast growth of organic Friend Requests. They're geo-targeted and the engagement levels are pretty good.</div>
                        </div>
                    </div>
                    <div class="review_item">
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-2/3 text-left px-4 table">
                                <div class="profile_img_div display_table_cell align-middle">
                                    <img src="https://source.unsplash.com/a-man-wearing-glasses-and-a-white-t-shirt-tvPnys_kY88" />
                                </div>
                                <div class="profile_text_div border-0 display_table_cell align-middle">
                                    <div class="text-454545 reviews_username">Carolyn Myers</div>
                                    <div class="reviews_followers">39.2k Friend Requests</div>
                                </div>
                            </div>
                            <div class="md:w-1/3 text-center pt-4 px-4">
                                <div class="reviews_verified">
                                    <span class="verify_text">VERIFIED</span>
                                </div>
                            </div>
                        </div>
                        <div class="!pt-2">
                            <div class="paragraph_text text-center text-707070">Exceeded my expectations, these guys are really honest and results have been great!</div>
                        </div>
                    </div>
                    <div class="review_item">
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-2/3 text-left px-4 table">
                                <div class="profile_img_div display_table_cell align-middle">
                                    <img src="https://source.unsplash.com/mature-confident-businesswoman-in-smart-red-blouse-and-beige-pants-holding-notebook-and-pencil-while-standing-in-office-environment-z1ag2m3KXP" />
                                </div>
                                <div class="profile_text_div border-0 display_table_cell align-middle">
                                    <div class="text-454545 reviews_username">Sariah Fry</div>
                                    <div class="reviews_followers">32k Friend Requests</div>
                                </div>
                            </div>
                            <div class="md:w-1/3 text-center pt-4 px-4">
                                <div class="reviews_verified">
                                    <span class="verify_text">VERIFIED</span>
                                </div>
                            </div>
                        </div>
                        <div class="!pt-2">
                            <div class="paragraph_text text-center text-707070">I'm a social media manager and have been struggling to grow two of my clients account, so we've been looking for something extra.</div>
                        </div>
                    </div>
                    <div class="review_item">
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-2/3 text-left px-4 table">
                                <div class="profile_img_div display_table_cell align-middle">
                                    <img src="https://source.unsplash.com/a-woman-in-a-white-shirt-posing-for-a-picture-l_DSYdrfLHw" />
                                </div>
                                <div class="profile_text_div border-0 display_table_cell align-middle">
                                    <div class="text-454545 reviews_username">Kaylin Vincent</div>
                                    <div class="reviews_followers">28.5k Friend Requests</div>
                                </div>
                            </div>
                            <div class="md:w-1/3 text-center pt-4 px-4">
                                <div class="reviews_verified">
                                    <span class="verify_text">VERIFIED</span>
                                </div>
                            </div>
                        </div>
                        <div class="!pt-2">
                            <div class="paragraph_text text-center text-707070">These guys know exactly what they are doing and deliver the best results for their clients. With their assistance. Thank you guys, it's really working for me.</div>
                        </div>
                    </div>
                    <div class="review_item">
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-2/3 text-left px-4 table">
                                <div class="profile_img_div display_table_cell align-middle">
                                    <img src="https://source.unsplash.com/man-in-black-and-yellow-jacket-wearing-black-helmet-dGThZmgtbiQ" />
                                </div>
                                <div class="profile_text_div border-0 display_table_cell align-middle">
                                    <div class="text-454545 reviews_username">Gracie Burch</div>
                                    <div class="reviews_followers">16k Friend Requests</div>
                                </div>
                            </div>
                            <div class="md:w-1/3 text-center pt-4 px-4">
                                <div class="reviews_verified">
                                    <span class="verify_text">VERIFIED</span>
                                </div>
                            </div>
                        </div>
                        <div class="!pt-2">
                            <div class="paragraph_text text-center text-707070">I've been using FameDaddy for well over 6 months now and safe to say, they know what they're doing. Way to go people!</div>
                        </div>
                    </div>
                </Slider>


            </div>
            <div id='FAQsection' className='max-sm:px-7 '>
                <div className='text-center'>
                    <h2 className="text-3xl tracking-wide font-semibold text-[#454545] sm:text-3xl leading-1-2">
                        Our <span className="text-brand">Reviews Promotion Service</span> FAQ
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
                                                <p className='text-center'>You're probably wondering what you can expect when it comes to our customer support when working with us. Here at FameDaddy, we are determined to provide our clients with the best experience possible when it comes to our customer support, which is why we have a dedicated team of professionals behind the scenes that are working constantly not only on our features, but on being able to provide you with some of the best customer support you'll experience in the industry. This way, you're going to be able to talk to us directly about any issues you might be having with our features and you won't have to wait in a long line to be seen. You'll be able to have a personal experience with us, and you will feel like you are really taken care of.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item   duration-500 border-0 mb-[20px] ">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button border  bg-[white]  border-[#eee] hover:bg-[#444] !px-[30px] !py-[20px]  " type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                                            aria-controls="collapseSix">
                                            
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
            <div id='getStartedSec' className='max-sm:px-3'>
                <div className="container bg-brand get-started-container max-w-[] px-[30px] py-[60px]">
                    <div className="md:w-1/1 text-center">
                        <h2 className="text-white font-extrabold">Get Started</h2>
                        <p className="text-white mb-0">Choose your package and start growing your social media</p>
                        <a href="#services" className="white-bordered-btn mx-auto" role="button" id="hp-cta">
                            <span className="button-text">Choose a service</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerReviews