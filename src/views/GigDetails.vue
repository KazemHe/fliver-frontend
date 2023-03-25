<template>
    <section class="gig-nav">
        <ul class="nav-info" ref="nav-info">
            <li class="green" @click.prevent="scrollToElement('overview')">Overview</li>
            <li @click.prevent="scrollToElement('aboutSeller')">About the seller</li>
            <li @click.prevent="scrollToElement('reviews')">Reviews</li>
        </ul>
    </section>

    <section class="gig-info flex" ref="overview">
        <section class="main-gig">
            <div class="gig-overview">
                <h1>{{ gig.title }}</h1>
                <section class="user-preview">
                    <section class="seller-preview-short flex align-center">
                        <div class="img-container"><img :src=gig.owner.imgUrl></div>
                        <div class="text-container">
                            <div class="text">
                                <a aria-current="page" href="#aboutSeller"
                                    class="router-link-active router-link-exact-active"
                                    @click.prevent="scrollToElement('aboutSeller')">
                                    <p class="seller-username">{{ gig.owner.fullname }}</p>
                                </a>
                                <p class="seller-level">Level {{ gig.owner.level }} Seller </p>
                                <div class="line"> |
                                </div>
                            </div>
                            <div class="rate">
                                <my-star-rating :gig="gig"></my-star-rating>
                            </div>
                        </div>
                    </section>
                </section>
                <div class=""><img :src=gig.imgUrl class="carosel-img"></div>
                <div class="seller-overview">
                    <div class="flex">

                    </div>
                </div>
            </div>

            <header class="What-people-loved flex">
                <h2 class="section-title">What people loved about this seller</h2>
                <button  @click.prevent="scrollToElement('reviews')"
                    class="sPdE5j4 zUvc8Si co-white text-button reviews-button bg-co-green-700">See all reviews</button>
            </header>
            <section v-if="gig.reviews?.length" class="review-list-container">
                <section class="review-list">
                    <section>
                        <section class="review-preview">
                            <section class="review-preview-snippet">
                                <section class="review-snippet-temporary grid">
                                    <img class="reviewer-img" src={{gig.reviews[0].name}} alt="user-img">
                                    <section class="reviewer-details flex">
                                        <p class="username">{{ gig.reviews[0].name }}</p>
                                        <section class="country-wrapper flex">
                                            <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png"
                                                alt="reviewer-flag">
                                            <p class="country">{{ gig.reviews[0].country }}</p>
                                            <ul class="stars clean-list flex">
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                            </ul>
                                            <p class="rating-score">5</p>
                                        </section>
                                    </section>
                                    <section class="review-content">
                                        <p class="review-description">{{ gig.reviews[0].review }}</p>
                                        <p class="reviewed-at">{{ gig.reviews[0].reviewedAt }}</p>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </section>

            <section v-else class="review-list-container">
                No review yet
            </section>

            <div class="about-the-gig">
                <h2>About the gig</h2>
                <p>{{ gig.description }}</p>
            </div>
            <section ref="aboutSeller" id="aboutSeller" class="seller-preview">
                <h2>About The Seller</h2>
                <section class="user-preview">
                    <section class="seller-preview-long flex">
                        <div class="img-container">
                            <img :src=gig.owner.imgUrl alt="seller-img">
                        </div>
                        <section class="seller-details flex column">
                            <section class="name-line flex">
                                <p class="seller-username">{{ gig.owner.fullname }}</p>
                                <div class="online-indicator">
                                    <span><svg width="4px" height="4px" viewBox="0 0 16 16"
                                            xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                            <path
                                                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z">
                                            </path>
                                        </svg></span>
                                    <p>Online</p>
                                </div>
                            </section>
                            <p class="seller-level">{{ gig.owner.level }} </p>
                            <section class="seller-reviews-stat flex align-center">
                                <my-star-rating :gig="gig"></my-star-rating>
                            </section>
                            <button class="contact-me-btn">Contact Me</button>
                        </section>
                    </section>
                </section>
                <section class="seller-details-container">
                    <section class="seller-stat">
                        <ul class="grid clean-list user-info">
                            <li class="flex column"><span class="key">From</span>
                                <span class="value">Bangladesh</span>
                            </li>
                            <li class="flex column"><span class="key">Member since</span>
                                <span class="value">Jan 2023</span>
                            </li>
                            <li class="flex column"><span class="key">Avg. response time</span>
                                <span class="value">1 hour</span>
                            </li>
                            <li class="flex column"><span class="key">Last delivery</span>
                                <span class="value">about 12 hours</span>
                            </li>
                        </ul>
                    </section>
                    <section class="seller-desc">
                        <p>{{gig.about}}</p>
                    </section>
                </section>
            </section>

            <section ref="reviews" id="reviews" class="reviews-container">
                <section class="reviews-stat flex column">
                    <section class="stat-header flex align-center">
                        <h2>344 Reviews </h2>
                        <section class="reviews-rate flex">
                            <ul class="stars clean-list flex">
                                <li><span class="svg flex justify-center align-center" v-html="getSvg('goldStar')"></span>
                                </li>
                                <li><span class="svg flex justify-center align-center" v-html="getSvg('goldStar')"></span>
                                </li>
                                <li><span class="svg flex justify-center align-center" v-html="getSvg('goldStar')"></span>
                                </li>
                                <li><span class="svg flex justify-center align-center" v-html="getSvg('goldStar')"></span>
                                </li>
                                <li><span class="svg flex justify-center align-center" v-html="getSvg('goldStar')"></span>
                                </li>
                            </ul>
                            <p class="rating-score">5</p>
                        </section>
                    </section>
                    <section class="stat-main flex">
                        <section class="stars-counters">
                            <ul class="clean-list flex column">
                                <li class="flex align-center"><span class="key">5 Stars</span>
                                    <section class="progress progress-container flex align-center"><progress max="344"
                                            value="310"></progress><span class="star-num">(310)</span></section>
                                </li>
                                <li class="flex align-center"><span class="key">4 Stars</span>
                                    <section class="progress-container flex align-center"><progress max="344"
                                            value="28"></progress><span class="star-num">(28)</span></section>
                                </li>
                                <li class="flex align-center"><span class="key">3 Stars</span>
                                    <section class="progress-container flex align-center"><progress max="344"
                                            value="6"></progress><span class="star-num">(6)</span></section>
                                </li>
                                <li class="flex align-center"><span class="key">2 Stars</span>
                                    <section class="progress-container flex align-center"><progress max="344"
                                            value="2"></progress><span class="star-num">(2)</span></section>
                                </li>
                                <li class="flex align-center"><span class="key">1 Star</span>
                                    <section class="progress-container flex align-center"><progress class="progress" max="344"
                                            value="1"></progress><span class="star-num">(1)</span></section>
                                </li>
                            </ul>
                        </section>
                        <section class="ranking flex column">
                            <h6>Rating Breakdown</h6>
                            <ul class="clean-list flex column">
                                <li class="flex align-center space-between"><span class="key">Seller communication
                                        level</span>
                                    <section class="star-container flex align-center"><span
                                            class="svg flex justify-center align-center"
                                            v-html="getSvg('goldStar')"></span><span class="value">5</span></section>
                                </li>
                                <li class="flex align-center space-between"><span class="key">Recommend to a friend</span>
                                    <section class="star-container flex align-center"><span
                                            class="svg flex justify-center align-center"
                                            v-html="getSvg('goldStar')"></span><span class="value">5</span></section>
                                </li>
                                <li class="flex align-center space-between"><span class="key">Service as described</span>
                                    <section class="star-container flex align-center"><span
                                            class="svg flex justify-center align-center"
                                            v-html="getSvg('goldStar')"></span><span class="value">5</span></section>
                                </li>
                            </ul>
                        </section>
                    </section>
                </section>
                <section class="review-list">
                    <section>
                        
                        <ul class="clean-list">
                            <section class="review-preview">
                                <section class="review-preview-long grid"><img class="reviewer-img"
                                        src="https://randomuser.me/api/portraits/men/17.jpg" alt="user-img">
                                    <section class="reviewer-details flex column">
                                        <p class="username">{{ gig.reviews[0].name }}</p>
                                        <section class="country-wrapper flex"><img :src=gig.reviews[0].flag
                                                alt="reviewer-flag">
                                            <p class="country">{{ gig.reviews[0].country }}</p>
                                        </section>
                                    </section>
                                    <section class="review-content">
                                        <section class="review-rate flex align-center">
                                            <ul class="stars clean-list flex">
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                            </ul>
                                            <p class="rating-score">4</p>
                                            <p class="reviewed-at">{{ gig.reviews[0].reviewedAt }}</p>
                                        </section>
                                        <p class="review-description">{{ gig.reviews[0].review }}</p>
                                    </section>
                                </section>
                            </section>
                            <section class="review-preview">
                                <section class="review-preview-long grid"><img class="reviewer-img"
                                        src="https://randomuser.me/api/portraits/men/9.jpg" alt="user-img">
                                    <section class="reviewer-details flex column">
                                        <p class="username">{{ gig.reviews[1].name }}</p>
                                        <section class="country-wrapper flex"><img :src=gig.reviews[1].flag
                                                alt="reviewer-flag">
                                            <p class="country">{{ gig.reviews[1].country }}</p>
                                        </section>
                                    </section>
                                    <section class="review-content">
                                        <section class="review-rate flex align-center">
                                            <ul class="stars clean-list flex">
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                            </ul>
                                            <p class="rating-score">5</p>
                                            <p class="reviewed-at"> {{ gig.reviews[1].reviewedAt }}</p>
                                        </section>
                                        <p class="review-description">{{ gig.reviews[1].review }}</p>
                                    </section>
                                </section>
                            </section>
                            <section class="review-preview">
                                <section class="review-preview-long grid"><img class="reviewer-img"
                                        src="https://randomuser.me/api/portraits/women/10.jpg" alt="user-img">
                                    <section class="reviewer-details flex column">
                                        <p class="username">{{ gig.reviews[2].name }}</p>
                                        <section class="country-wrapper flex"><img :src=gig.reviews[2].flag
                                                alt="reviewer-flag">
                                            <p class="country">{{ gig.reviews[2].country }}</p>
                                        </section>
                                    </section>
                                    <section class="review-content">
                                        <section class="review-rate flex align-center">
                                            <ul class="stars clean-list flex">
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                            </ul>
                                            <p class="rating-score">5</p>
                                            <p class="reviewed-at">{{ gig.reviews[2].reviewedAt }}</p>
                                        </section>
                                        <p class="review-description">{{ gig.reviews[2].review }}</p>
                                    </section>
                                </section>
                            </section>
                            <section class="review-preview">
                                <section class="review-preview-long grid"><img class="reviewer-img"
                                        src="https://randomuser.me/api/portraits/women/72.jpg" alt="user-img">
                                    <section class="reviewer-details flex column">
                                        <p class="username">{{ gig.reviews[3].name }}</p>
                                        <section class="country-wrapper flex"><img :src=gig.reviews[3].flag
                                                alt="reviewer-flag">
                                            <p class="country">{{ gig.reviews[3].country }}</p>
                                        </section>
                                    </section>
                                    <section class="review-content">
                                        <section class="review-rate flex align-center">
                                            <ul class="stars clean-list flex">
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                            </ul>
                                            <p class="rating-score">4</p>
                                            <p class="reviewed-at">{{ gig.reviews[3].reviewedAt }}</p>
                                        </section>
                                        <p class="review-description">{{ gig.reviews[3].review }}</p>
                                    </section>
                                </section>
                            </section>
                            <section class="review-preview"><!---->
                                <section class="review-preview-long grid"><img class="reviewer-img"
                                        src="https://randomuser.me/api/portraits/women/10.jpg" alt="user-img">
                                    <section class="reviewer-details flex column">
                                        <p class="username">jai_s22</p>
                                        <section class="country-wrapper flex"><img :src=gig.reviews[4].flag
                                                alt="reviewer-flag">
                                            <p class="country">{{ gig.reviews[4].country }}</p>
                                        </section>
                                    </section>
                                    <section class="review-content">
                                        <section class="review-rate flex align-center">
                                            <ul class="stars clean-list flex">
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                            </ul>
                                            <p class="rating-score">4</p>
                                            <p class="reviewed-at">{{ gig.reviews[4].reviewedAt }}</p>
                                        </section>
                                        <p class="review-description">{{ gig.reviews[4].review }}</p>
                                    </section>
                                </section>
                            </section>
                        </ul>
                    </section>
                </section>
            </section>
        </section>

        <div class="TEpHpiF"><div class="package-content zxTHQ6r"><header class="header-recurring"><h3><div class="price-wrapper"><span class="price">US$250</span><div class="flex flex-items-center text-normal tbody-5 cg6Rikw"><span>Save up to 20% with <span class="XBRgVA8">Subscribe to Save</span></span><div class="jEW3B9z Y_05slf jNqFgwG"><span class="HsyURQF"><span class="glAQDp5 Y_05slf jNqFgwG" aria-hidden="true" style="width: 12px; height: 12px;"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.66669 6.2222C6.66669 5.99407 6.74244 5.63209 6.94361 5.35269C7.11215 5.11861 7.40085 4.88886 8.00003 4.88886C8.73426 4.88886 9.11567 5.27671 9.24475 5.66556C9.38071 6.07511 9.26479 6.53293 8.84029 6.81593C8.13871 7.28365 7.62193 7.73677 7.34968 8.37204C7.10944 8.93259 7.11027 9.54684 7.11105 10.1244L7.11114 10.2222H8.88892C8.88892 9.49449 8.90421 9.25784 8.98371 9.07235C9.04479 8.92984 9.19468 8.71629 9.82643 8.29513C10.9709 7.53217 11.2994 6.21221 10.932 5.10547C10.5577 3.97803 9.48801 3.11108 8.00003 3.11108C6.82143 3.11108 5.99902 3.62208 5.50089 4.31392C5.03539 4.96045 4.88892 5.70958 4.88892 6.2222H6.66669ZM8.88886 12.8889V11.1111H7.11108V12.8889H8.88886Z"></path></svg></span></span></div></div></div></h3><p class="OjAbcOU"><b>1 to 2 pages Website </b> It will be a decent responsive website and the content will be suitable .</p></header><article><div class="additional-info"><div class="delivery-wrapper"><span class="glAQDp5 delivery-icon" aria-hidden="true" style="width: 16px; height: 16px;"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg></span><b class="delivery">4 Days Delivery</b></div><div class="revisions-wrapper"><span class="glAQDp5 revisions-icon" aria-hidden="true" style="width: 16px; height: 16px;"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path><path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path></svg></span><b class="revisions">1 Revision</b></div></div><ul class="features"><li class="qSePHwK flex flex-items-center"><span class="glAQDp5 bvg2_O1 ZbQv8bb" aria-hidden="true" style="width: 16px; height: 16px;"><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg></span>2 pages/screens</li><li class="qSePHwK flex flex-items-center"><span class="glAQDp5 bvg2_O1 ZbQv8bb" aria-hidden="true" style="width: 16px; height: 16px;"><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg></span>Responsive design</li><li class="qSePHwK flex flex-items-center"><span class="glAQDp5 bvg2_O1" aria-hidden="true" style="width: 16px; height: 16px;"><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg></span>Content upload</li></ul></article></div><footer class="tab-footer drawer-payment-footer"><button class="sPdE5j4 zUvc8Si co-white bg-co-green-700" type="button">Continue<span class="glAQDp5 rf" aria-hidden="true" style="width: 16px; height: 16px; fill: white;"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path></svg></span></button><button class="btn-compare-packages tbody-6">Compare Packages</button></footer></div>



        <section class="package-container">
            <section class="gig-package">
                <section class="package-content">
                    <section class="header flex space-between">
                        <h3 class="price regular">US$50</h3>
                    </section>
                    <p>1 custom logo+high resolution file+3d mockup+logo transparency+ 300dpi</p>
                    <section class="additional-info flex">
                        <div class="delivery-wrapper flex">
                            <span><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                                    fill="#62646a">
                                    <path
                                        d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z">
                                    </path>
                                    <path d="M9 4H7v5h5V7H9V4z"></path>
                                </svg>
                            </span>
                            <p>1 Days Delivery</p>
                        </div>
                        <div class="revisions-wrapper flex"><span><svg width="16" height="16" viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg" fill="#62646a">
                                    <path
                                        d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z">
                                    </path>
                                    <path
                                        d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z">
                                    </path>
                                </svg></span>
                            <p> Unlimited Revisions </p>
                        </div>
                    </section>
                    <ul class="features clean-list">
                        <li class="regular"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                    </path>
                                </svg></span> 1 concept included</li>
                        <li class="regular"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                    </path>
                                </svg></span> Logo transparency</li>
                        <li class="regular"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                    </path>
                                </svg></span> Vector file</li>
                        <li class="regular"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                    </path>
                                </svg></span> Printable file</li>
                        <li class="regular"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                    </path>
                                </svg></span> Include 3D mockup</li>
                        <li class="regular"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                    </path>
                                </svg></span> Include source file</li>
                        <li class="regular"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                    </path>
                                </svg></span> Include social media kit</li>
                    </ul>
                    <a href="/" class="">
                        <button class="continue-btn"> Continue <span><span class="svg flex justify-center align-center"
                                    v-html="getSvg('continueBtn')"></span></span>
                        </button>
                    </a>
                </section>
                <section class="contact-seller">
                    <button>Contact Seller</button>
                </section>
            </section>
        </section>

    </section>
</template>
  
<script>

import MyStarRating from '../cmps/MyStarRating.vue'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { gigService } from '../services/gig.service.local'
import { getActionRemoveGig, getActionUpdateGig, getActionAddGigMsg } from '../store/gig.store'
import { svgServive } from '../services/svg.service.js'

export default {
    props: ['gig'],

    data() {
        return {
            gig: null,

        }
    },

    watch: {
        '$route.params': {
            async handler() {
                this.loadGig()
            },
            immediate: true,
        },
    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedinUser
        },
        gigs() {
            return this.$store.getters.gigs
        }
    },

    // async created() {
    //     const { gigId } = this.$route.params
    //     console.log(gigId);
    //     const gig = await gigService.getById(gigId)
    //     this.gig = gig
    // },


    methods: {
        scrollToElement(element) {
            this.$refs[element].scrollIntoView({ behavior: 'smooth' });
        },

        getSvg(iconName) {
            return (this.icon = svgServive.getGigSvg(iconName))
        },
        async loadGig() {
            try {
                const { gigId } = this.$route.params
                const gig = await gigService.getById(gigId)
                this.gig = gig
            } catch {
                console.log('Could Not load gig')
            }
        }
    },

    async addGigMsg(gigId) {
        try {
            await this.$store.dispatch(getActionAddGigMsg(gigId))
            showSuccessMsg('Gig msg added')
        } catch (err) {
            console.log(err)
            showErrorMsg('Cannot add gig msg')
        }
    },
    printGigToConsole(gig) {
        console.log('Gig msgs:', gig.msgs)
    },

    components: {
        MyStarRating
    },
}

</script>



<style>
progress[value] {
  width: 250px;
  height: 20px;
  border-radius: 50%;
   appearance: none;
   
 
}

progress[value]::-webkit-progress-value {

    background-color:#ffbe5b;
}
</style>